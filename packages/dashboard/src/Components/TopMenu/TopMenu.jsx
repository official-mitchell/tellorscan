import React from "react";
import {
  Navbar,
  // Collapse,
  // NavbarToggler,
  Row,
  Col
} from "reactstrap";
import cn from "classnames";
import * as align from "Constants/alignments";
import Logo from "./LogoBlock";
import DropdownNav from "./DropdownNav.jsx";

const TopMenu = ({
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
    <div
      className={cn(align.full, align.allCenter, align.noMarginPad, "top-nav")}
    >
      <Row className={cn(align.allCenter, align.full, align.noMarginPad)}>
        <Col md="10" className={cn(align.leftCenter, align.noMarginPad)}>
          <div className={cn(align.full, align.noMarginPad)}>
            <Row className={cn(align.allCenter, align.noMarginPad, align.full)}>
              <Col md="4" className={cn(align.leftCenter, align.noMarginPad)}>
                <Logo goHome={goHome} />
              </Col>

              <Col md="8" className={cn(align.rightCenter, align.noMarginPad)}>
                <Navbar color="faded" light>
                  <DropdownNav
                    tokenLoading={tokenLoading}
                    balance={balance}
                    getTokens={getTokens}
                    getBalance={getBalance}
                    realtimeRunning={realtimeRunning}
                    goHome={goHome}
                    toSettings={toSettings}
                    toDisputes={toDisputes}
                    toMining={toMining}
                    toggleRealtime={toggleRealtime}
                  />
                </Navbar>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TopMenu;

//
// TOGGLER
// const [collapsed, setCollapsed] = useState(true);
// const toggleNavbar = () => setCollapsed(!collapsed);

//
// DROPDOWN NAV

// <UncontrolledDropdown
//   nav
//   inNavbar
//   className={cn("list-style-none")}
// >
//   <DropdownToggle nav caret>
//     Wallet
//   </DropdownToggle>
//   <DropdownMenu>
//     <DropdownItem header>
//       <Loading loading={tokenLoading} />
//       Token Balance: {balance}
//     </DropdownItem>
//     <DropdownItem onClick={getTokens}>
//       Get Tokens
//     </DropdownItem>
//     <DropdownItem onClick={getBalance}>
//       Refresh Balance
//     </DropdownItem>
//   </DropdownMenu>
// </UncontrolledDropdown>

// <UncontrolledDropdown
//   right
//   nav
//   className={cn("list-style-none")}
// >
//   <DropdownToggle color>
//     <Button>+</Button>
//   </DropdownToggle>
//   <DropdownMenu
//     right
//     positionFixed
//     className={cn(
//       "dropdown-menu",
//       "justify-content-start",
//       "align-items-left",
//       "flex-cololumn"
//     )}
//   >
//     <DropdownItem className={cn("dropdown-item")}>
//       <div
//         className={cn(
//           align.full,
//           "text-left",
//           "text-sz-sm",
//           "font-weight-light"
//         )}
//       >
//         auto-refresh
//       </div>
//       <div
//         className={cn(
//           align.leftCenter,
//           align.full,
//           align.noMarginPad
//         )}
//       >
//         {realtimeRunning && (
//           <i
//             className={cn(
//               "fa fa-spinner fa-spin text-sz-md mr-1 text-dark"
//             )}
//           />
//         )}
//         <Toggle
//           icons={false}
//           checked={realtimeRunning}
//           onChange={() => {
//             toggleRealtime();
//           }}
//         />
//       </div>
//     </DropdownItem>
//     <DropdownItem divider className={cn("drop-divider")} />
//     <DropdownItem className={cn("drop-item")}>
//       <NavItem className={cn(align.allCenter, "nav-item")}>
//         Go to Tellor.io
//       </NavItem>
//     </DropdownItem>
//     <DropdownItem divider className={cn("drop-divider")} />
//     <DropdownItem className={cn("drop-item")}>
//       <NavItem className={cn(align.allCenter, "nav-item")}>
//         <NavLink onClick={toSettings}>Settings</NavLink>
//       </NavItem>
//     </DropdownItem>
//     <DropdownItem divider className={cn("drop-divider")} />
//     <DropdownItem className={cn("drop-item")}>
//       <NavItem className={cn(align.allCenter, "nav-item")}>
//         <NavLink onClick={toDisputes}>Disputes</NavLink>
//       </NavItem>
//     </DropdownItem>
//     <DropdownItem divider className={cn("drop-divider")} />
//     <DropdownItem className={cn("drop-item")}>
//       <NavItem className={cn(align.allCenter, "nav-item")}>
//         <NavLink onClick={toMining}>Mining</NavLink>
//       </NavItem>
//     </DropdownItem>
//     <DropdownItem divider className={cn("drop-divider")} />
//     <DropdownItem className={cn("drop-item")}>
//       <NavItem className={cn(align.allCenter, "nav-item")}>
//         About
//       </NavItem>
//     </DropdownItem>
//     <DropdownItem divider className={cn("drop-divider")} />
//     <DropdownItem className={cn("drop-item")}>
//       <NavItem className={cn(align.allCenter, "nav-item")}>
//         Contact
//       </NavItem>
//     </DropdownItem>
//   </DropdownMenu>
// </UncontrolledDropdown>

//
//

// <Nav
//   navbar
//   className={cn("ml-auto", "text-md", "font-weight-light", "p-0")}
// >

//
//  DISPUTES

// <NavItem className={cn(align.allCenter)}>
//   <NavLink
//     className={cn("text-dark")}
//     href="#"
//     onClick={toDisputes}
//   >
//     Disputes
//                       </NavLink>
// </NavItem>

//
// NAV TOGGLER

// {
//   /* <NavbarToggler
//                     className={cn(
//                       // 'd-none',
//                       "ml-xs-2",
//                       "ml-md-0",
//                       "mr-md-3"
//                     )}
//                     onClick={toggleNavbar}
//                   />
//                   <Collapse isOpen={!collapsed} navbar> */
// }
// {
//   /* <Nav> */
// }
// {
//   /* <div
//                       className={cn(align.topCenter, "pr-3", align.noMarginPad)}
//                     > */
// }
// {
//   /* <UncontrolledDropdown
//                       nav
//                       inNavbar
//                       className={cn("list-style-none")}
//                     > */
// }
// ....
// {
//   /* </UncontrolledDropdown> */
// }
// {
//   /* </div> */
// }
// {
//   /* </Nav> */
// }
// {
//   /* </Collapse> */
// }

// <Collapse isOpen={!collapsed} navbar>
//   {/* <Nav> */}
//   <div
//     className={cn(align.topCenter, "pr-3", align.noMarginPad)}
//   >

//     <div
//       className={cn(
//         align.full,
//         "text-right",
//         "text-sz-sm",
//         "font-weight-light",
//         "text-muted"
//       )}
//     >
//       auto-refresh
//                       </div>
//     <div
//       className={cn(
//         align.rightCenter,
//         align.full,
//         align.noMarginPad
//       )}
//     >
//       {realtimeRunning && (
//         <i
//           className={cn(
//             "fa fa-spinner fa-spin text-sz-md mr-1 text-dark"
//           )}
//         />
//       )}
//       <Toggle
//         icons={false}
//         checked={realtimeRunning}
//         onChange={() => {
//           this.props.toggleRealtime();
//         }}
//       />
//     </div>
//   </div>
//   <NavItem className={cn(align.allCenter, "mr-2")}>
//     <NavLink
//       className={cn("text-dark")}
//       href="#"
//       onClick={toSettings}
//     >
//       Settings
//                       </NavLink>
//   </NavItem>
//   <NavItem className={cn(align.allCenter)}>
//     <NavLink
//       className={cn("text-dark")}
//       href="#"
//       onClick={toDisputes}
//     >
//       Disputes
//                       </NavLink>
//   </NavItem>
//   <NavItem className={cn(align.allCenter)}>
//     <NavLink
//       className={cn("text-dark")}
//       href="#"
//       onClick={toMining}
//     >
//       Mining
//                       </NavLink>
//   </NavItem>
//   {/* </Nav> */}
// </Collapse>
