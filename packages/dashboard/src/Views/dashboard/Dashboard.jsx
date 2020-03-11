import React from "react";
import { Row, Col, Button } from "reactstrap";
import cn from "classnames";
import * as align from "Constants/alignments";
import Menu from "Components/TopMenu";
// import Search from "./MainSearch";
import Overview from "./overview";
import Activity from "./activity";
// import ReqData from "./modals/requestData";

import Data from "./data/Data";
import Facts from "./facts/Facts";
import Feeds from "./feeds/Feeds";
import DashContainer from "Components/Container/DashboardContainer";

export default class Dashboard extends React.Component {
  render() {
    const { loading } = this.props;

    return (
      <div className={cn("dashboard-container", align.topCenter, align.full)}>
        <Row className={cn(align.full, align.noMarginPad)}>
          <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
            <Menu withLogo title="Dashboard" />
          </Col>
          <Col xs="12" className={cn(align.topCenter, align.noMarginPad)}>
            <Row className={cn(align.full, align.noMarginPad, align.topCenter)}>
              <Col xs="10" className={cn(align.noMarginPad, "my-2")}>
                <Row className={cn(align.full, align.noMarginPad)}>
                  <Col xs="4" className={cn(align.noMarginPad)}>
                    <Row
                      className={cn(
                        align.full,
                        align.noMarginPad,
                        align.allCenter
                      )}
                    >
                      <DashContainer containerTitle="Key Facts">
                        <Facts />
                      </DashContainer>
                      <DashContainer containerTitle="Available Data">
                        <Data />
                      </DashContainer>
                    </Row>
                  </Col>
                  <Col xs="8" className={cn(align.noMarginPad)}>
                    <DashContainer containerTitle="Price Feeds">
                      <Feeds />
                    </DashContainer>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>

          <Overview />

          <Activity />
        </Row>
      </div>
    );
  }
}

//
// REMOVED:

// 1)
// this component was placed after the container declaration
// <ReqData />

// 2)
// this component came after Menu
// <Search loading={loading} />;

// 3)
// data request was removed
//  <Row className={cn(align.allCenter, align.full, "mb-4", "mt-4")}>
//    <Col md="5" className={cn("request-button-wrapper", align.allCenter, "p-2")}>
//      <Button
//        size="lg"
//        disabled={loading}
//        className={cn("request-button")}
//        onClick={() => this.props.requestData()}
//      >
//        Request Data
//      </Button>
//    </Col>
//  </Row>;
