import React, { Fragment } from "react";
import { Row, Col } from "reactstrap";
import cn from "classnames";
import * as align from "Constants/alignments";

const DashContainer = props => {
  return (
    <Row className={cn(align.full, align.noMarginPad)}>
      <Col
        xs="12"
        className={cn(align.alignLeft, align.justLeft, align.noMarginPad)}
      >
        <Row
          className={cn(
            align.full,
            align.noMarginPad,
            align.leftCenter,
            "ml-1"
          )}
        >
          <p className={cn("dash-container-title")}>{props.containerTitle}</p>
        </Row>
        <Row className={cn(align.full, align.noMarginPad, "dash-container")}>
          <div className={cn(align.full, align.noMarginPad)}>
            {props.children}
          </div>
        </Row>
      </Col>
    </Row>
  );
};

export default DashContainer;
