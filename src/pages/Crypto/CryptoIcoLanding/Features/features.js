import React from "react"
import { Container, Row, Col } from "reactstrap"

//Import Components
import FeatureBox from "./feature-box"

//Import images
import house from "../../../../assets/images/crypto/features-img/house.png"
import phone from "../../../../assets/images/crypto/features-img/phone.png"
import bus from "../../../../assets/images/crypto/features-img/bus.png"
import application from "../../../../assets/images/crypto/features-img/application.png"
import solar from "../../../../assets/images/crypto/features-img/solar.png"
import nexum from "../../../../assets/images/nexum.png"

const Features = () => {

  return (
    <React.Fragment>
      <section className="section" id="features">
        <Container>
          <Row className="align-items-center pt-4">
            <Col md="8" className="ms-auto">
              {/* featurebox */}
              <h1>Don’t Just <span className="basic-color">HODL</span>.</h1>
              <h1>Earn <span className="basic-color">Dividends</span> On It</h1>
            </Col>
            <Col md="4" sm="8">
              <div>
                <img
                  src={nexum}
                  alt="House"
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </Col>
            <Row>
            <Col lg="12">
              <div className="text-center mt-5 mb-2">
                <h1 className="basic-color">Nexum will forever change entire markets</h1>
              </div>
              <div className="text-center mb-5">
                <h3>Don’t miss your chance to become part of the future!</h3>
              </div>
              <Row>
                <Col md={3} sm={6}>
                  <img
                  src={bus}
                  alt="Bus"
                  className="img-fluid mx-auto d-block"
                />
                </Col>
                <Col md={3} sm={6}>
                  <img
                  src={application}
                  alt="Application"
                  className="img-fluid mx-auto d-block"
                />
                </Col>
                <Col md={3} sm={6}>
                  <img
                  src={phone}
                  alt="Phone"
                  className="img-fluid mx-auto d-block"
                />
                </Col>
                <Col md={3} sm={6}>
                  <img
                  src={solar}
                  alt="Solar"
                  className="img-fluid mx-auto d-block"
                />
                </Col>

              </Row>
            </Col>
          </Row>
          </Row>
          
        </Container>
      </section>
    </React.Fragment>
  )
}

export default Features
