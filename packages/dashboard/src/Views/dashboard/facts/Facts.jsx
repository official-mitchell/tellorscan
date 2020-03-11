import React, { Fragment } from "react";
import { Row, Col } from "reactstrap";
import cn from "classnames";
import * as align from "Constants/alignments";
import Price from "./price";
import TopApi from "./top-api";
import CurrentApi from "./current-api";
import CurrentTip from "./current-tip";
import Section from "./Section";
// import Tips from "./costs";

const Facts = () => {
  return (
    <Fragment>
      <Row className={cn(align.allCenter, align.full, "m-0", "p-0")}>
        <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
          <Section className="border-bottom">
            <Price />
          </Section>
        </Col>
        <Col
          xs="12"
          className={cn(align.allCenter, align.noMarginPad, "border-bottom")}
        >
          <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
            <Col
              xs="7"
              className={cn(
                align.allCenter,
                align.noMarginPad,
                "border-bottom",
                "border-right"
              )}
            >
              <Section>
                <CurrentApi />
              </Section>
            </Col>
            <Col xs="5" className={cn(align.allCenter, align.noMarginPad)}>
              <Section>
                <p>Progress</p>
              </Section>
            </Col>
          </Row>
        </Col>
        <Col
          xs="12"
          className={cn(align.allCenter, align.noMarginPad, "border-bottom")}
        >
          <Section>
            <CurrentTip />
          </Section>
        </Col>
        <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
          <Section>
            <TopApi />
          </Section>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Facts;
