import PropTypes from 'prop-types'
import React, { useState, useEffect } from "react"
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Container,
  Collapse,
} from "reactstrap"
import { Link } from "react-router-dom"
import ScrollspyNav from "./scrollSpy"

//Import Images
import logoImg from "../../../../assets/images/nexum.png"
import logowhite from "../../../../assets/images/nexum-white.png"
import logoblack from "../../../../assets/images/nexum-black.png"

const navItems = [
  { id: 1, idnm: "home", navheading: "Home" },
  { id: 2, idnm: "about", navheading: "About" },
  { id: 3, idnm: "features", navheading: "Features" },
  { id: 4, idnm: "roadmap", navheading: "Roadmap" },
  // { id: 4, idnm: "team", navheading: "Team" },
  // { id: 5, idnm: "news", navheading: "News" },
  { id: 6, idnm: "faqs", navheading: "FAQs" },
]

const Navbar_Page = props => {
  const [isOpenMenu, setisOpenMenu] = useState(false)

  //Store all NavigationbaFr Id into TargetID variable(Used for Scrollspy)
  let TargetId = navItems.map(item => {
    return item.idnm
  })

  return (
    <React.Fragment>
      <Navbar
        expand="lg"
        fixed="top"
        className={"navigation sticky " + props.navClass}
      >
        <Container>
          <NavbarBrand className="navbar-logo" href="/">
            {props.imglight !== true ? (
              <>
                <img
                  src={logoblack}
                  alt=""
                  width="32"
                  className="logo logo-dark"
                />
                <span className="logo-title" style={{'fontSize': '24px', 'color': 'black'}}>Nexum</span>
              </>
            ) : (
              <>
                <img
                  src={logowhite}
                  alt=""
                  width="32"
                  className="logo logo-light"
                />
                <span className="logo-title" style={{'fontSize': '24px', 'color': 'white'}}>Nexum</span>
              </>
            )}
          </NavbarBrand>

          <NavbarToggler
            className="p-0"
            onClick={() => {
              setisOpenMenu(!isOpenMenu)
            }}
          >
            <i className="fa fa-fw fa-bars"/>
          </NavbarToggler>

          <Collapse id="topnav-menu-content" isOpen={isOpenMenu} navbar>
            <ScrollspyNav
              scrollTargetIds={TargetId}
              scrollDuration="800"
              headerBackground="true"
              activeNavClass="active"
              className="navbar-collapse"
            >
              <Nav className="ms-auto navbar-nav" id="topnav-menu">
                {navItems.map((item, key) => (
                  <NavItem
                    key={key}
                    className={item.navheading === "Home" ? "active" : ""}
                  >
                    <NavLink href={"#" + item.idnm}> {item.navheading}</NavLink>
                  </NavItem>
                ))}
              </Nav>
            </ScrollspyNav>
            <div className="ms-lg-2 wallet-connect-btn">
              {
                props.walletAddress?
                  <Link to="#" className="btn btn-outline-success w-xs" onClick={props.onClickDisconnectWallet}>
                    <span>{ props.walletAddress.slice(0, 11) }...</span>
                  </Link>
                :
                  <Link to="#" className="btn btn-outline-success w-xs" onClick={props.onClickConnectWallet}>
                    Connect Wallet
                  </Link>
              }
            </div>
          </Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  )
}

Navbar_Page.propTypes = {
  imglight: PropTypes.any,
  navClass: PropTypes.string,
  walletAddress: PropTypes.string,
  onClickConnectWallet: PropTypes.any,
  onClickDisconnectWallet: PropTypes.any
}

export default Navbar_Page
