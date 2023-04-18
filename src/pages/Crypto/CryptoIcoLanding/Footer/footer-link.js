import React from "react"
import { Row, Col } from "reactstrap"

//Import Images
import logoWhite from "../../../../assets/images/nexum-white.png"

const FooterLink = () => {
  return (
    <React.Fragment>
      <Row>
        <Col lg="6">
          <div className="mb-4">
            <img src={logoWhite} alt="" height="20" className="logo"/>
            <span className="logo-title" style={{'fontSize': '16px','color': 'white'}}>Nexum</span>
          </div>

          <p className="mb-2">
            © {new Date().getFullYear()} Nexus. All rights reserved.
          </p>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default FooterLink
