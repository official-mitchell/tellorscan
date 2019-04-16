import React from 'react';
import {
  Row,
  Col
} from 'reactstrap';
import cn from 'classnames';
import * as align from 'Constants/alignments';
import Streaming from './streaming';
import APIinQ from './apiInQ';

export default class Activity extends React.Component {
  render() {
    return (
      <Row className={cn(align.allCenter, align.full, "mb-5", align.noMarginPad)}>
        <Col md="5" className={cn("activity-container",
                                  align.topCenter, "pr-3", align.noMarginPad)}>
            <Row className={cn(align.topCenter, align.full, align.noMarginPad)}>
              <Col md="12" className={cn(align.topCenter, "bg-white", align.noMarginPad)}>
                <div className={cn("activity-header", "bg-tellor-charcoal", "text-white", align.leftCenter, align.full)}>
                  <span className={cn("pl-4", "font-weight-bold", "text-sz-md", "text-light")}>
                    Recent Mining Events
                  </span>
                </div>
              </Col>
              <Col md="12" className={cn(align.topCenter, "bg-white", align.noMarginPad)}>
                <Streaming />
              </Col>
            </Row>
        </Col>

        <Col md="5" className={cn("activity-container",
                                  align.topCenter, "pl-3", align.noMarginPad)}>
            <Row className={cn(align.topCenter, align.full, align.noMarginPad)}>
              <Col md="12" className={cn(align.topCenter, "bg-white", align.noMarginPad)}>
                <div className={cn("activity-header", "bg-tellor-charcoal", "text-white", align.leftCenter, align.full)}>
                  <span className={cn("pl-4", "font-weight-bold", "text-sz-md", "text-light")}>
                    Recent Requests
                  </span>
                </div>
              </Col>
              <Col md="12" className={cn(align.topCenter, "bg-white",align.noMarginPad)}>
                <APIinQ />
              </Col>
            </Row>
        </Col>

      </Row>
    )
  }
}
