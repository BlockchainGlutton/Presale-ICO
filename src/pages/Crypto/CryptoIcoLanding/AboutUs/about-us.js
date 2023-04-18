import React, { useState, useEffect } from "react"
import { Container, Row, Col, Card, CardBody } from "reactstrap"
import { Link } from "react-router-dom"

const AboutUs = () => {
  const [step1, setStep1] = useState(true)
  const [step2, setStep2] = useState(false)

  return (
    <React.Fragment>
      <section className="section pt-4" id="about">
        <Container>
          <Row>
            <Col lg="12">
              <div className="text-center mb-5">
                <h1 className="small-title">About us</h1>
                <p className="small-header">WHY <span className="colored-text">NEXUM</span> IS ONE OF THE MOST NOTABLE PROJECTS?</p>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col lg="12">
              <div className="text-muted">
                <p style={{lineHeight: '1.55', fontSize: '16px'}}>
                  <span className="colored-text">NEXUM</span> is a new generation of cryptocurrency based on a reflection mechanism that rewards ALL holders with constant rewards while they simply hold it in their wallets.
                </p>
                <p style={{lineHeight: '1.55', fontSize: '16px'}}>
                <span className="colored-text">NEXUM</span> is focused on the future, thus our vision is set on investment projects in the sphere of renewable sources of energy. Our ambition is to disrupt the fossil fuel market using innovative technology combined with a decentralised blockchain system.</p>
                <p style={{lineHeight: '1.55', fontSize: '16px'}}>
                <span className="colored-text">NEXUM</span> holders are granted dividends on a yearly basis – the more you hold the higher your return. The best part? This is stable, with a constant APY percentage.</p>
              </div>
            </Col>
          </Row>

          <hr className="my-5" />
        </Container>
      </section>
    </React.Fragment>
  )
}

export default AboutUs
