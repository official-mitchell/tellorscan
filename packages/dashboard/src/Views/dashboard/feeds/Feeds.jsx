import React, { Fragment } from "react";
import { Row, Col } from "reactstrap";
import cn from "classnames";
import * as align from "Constants/alignments";
import Streaming from "./streaming";

const Feeds = () => {
  return (
    <Fragment>
      <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
        <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
          <Streaming />
        </Col>
      </Row>
    </Fragment>
  );
};

export default Feeds;
