import React, { Fragment } from "react";
import {
  //   Navbar,
  NavLink,
  NavItem,
  //   Nav,
  //   Row,
  //   Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown
} from "reactstrap";
import cn from "classnames";
import * as align from "Constants/alignments";
// import Search from "Components/Search";
import Loading from "Components/Loading";
import Toggle from "react-toggle";
import Button from "../Buttons/ButtonNavbar/ButtonNavbar.jsx";

const DropdownNav = ({
  tokenLoading,
  balance,
  getTokens,
  getBalance,
  realtimeRunning,
  goHome,
  toSettings,
  toDisputes,
  toMining,
  toggleRealtime
}) => {
  return (
    <Fragment>
      <UncontrolledDropdown nav inNavbar className={cn("list-style-none")}>
        <DropdownToggle nav caret>
          Wallet
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>
            <Loading loading={tokenLoading} />
            Token Balance: {balance}
          </DropdownItem>
          <DropdownItem onClick={getTokens}>Get Tokens</DropdownItem>
          <DropdownItem onClick={getBalance}>Refresh Balance</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>

      <UncontrolledDropdown right nav className={cn("list-style-none")}>
        <DropdownToggle color>
          <Button>+</Button>
        </DropdownToggle>
        <DropdownMenu
          right
          positionFixed
          className={cn(
            "dropdown-menu",
            "justify-content-start",
            "align-items-left",
            "flex-cololumn"
          )}
        >
          <DropdownItem className={cn("drop-item")}>
            <div
              className={cn(
                align.full,
                "text-left",
                "text-sz-sm",
                "font-weight-light"
              )}
            >
              auto-refresh
            </div>
            <div
              className={cn(align.leftCenter, align.full, align.noMarginPad)}
            >
              {realtimeRunning && (
                <i
                  className={cn(
                    "fa fa-spinner fa-spin text-sz-md mr-1 text-dark"
                  )}
                />
              )}
              <Toggle
                icons={false}
                checked={realtimeRunning}
                onChange={() => {
                  toggleRealtime();
                }}
              />
            </div>
          </DropdownItem>
          <DropdownItem divider className={cn("drop-divider")} />
          <DropdownItem className={cn("drop-item")}>
            <NavItem className={cn(align.allCenter, "nav-item")}>
              Go to Tellor.io
            </NavItem>
          </DropdownItem>
          <DropdownItem divider className={cn("drop-divider")} />
          <DropdownItem className={cn("drop-item")}>
            <NavItem className={cn(align.allCenter, "nav-item")}>
              <NavLink onClick={toSettings}>Settings</NavLink>
            </NavItem>
          </DropdownItem>
          <DropdownItem divider className={cn("drop-divider")} />
          <DropdownItem className={cn("drop-item")}>
            <NavItem className={cn(align.allCenter, "nav-item")}>
              <NavLink onClick={toDisputes}>Disputes</NavLink>
            </NavItem>
          </DropdownItem>
          <DropdownItem divider className={cn("drop-divider")} />
          <DropdownItem className={cn("drop-item")}>
            <NavItem className={cn(align.allCenter, "nav-item")}>
              <NavLink onClick={toMining}>Mining</NavLink>
            </NavItem>
          </DropdownItem>
          <DropdownItem divider className={cn("drop-divider")} />
          <DropdownItem className={cn("drop-item")}>
            <NavItem className={cn(align.allCenter, "nav-item")}>About</NavItem>
          </DropdownItem>
          <DropdownItem divider className={cn("drop-divider")} />
          <DropdownItem className={cn("drop-item")}>
            <NavItem className={cn(align.allCenter, "nav-item")}>
              Contact
            </NavItem>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Fragment>
  );
};

export default DropdownNav;
