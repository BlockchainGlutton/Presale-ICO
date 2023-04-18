import React, { useState } from "react"
import { Container, Row, Col } from "reactstrap"

const RoadMap = () => {
  const [step1, setStep1] = useState(true)
  const [step2, setStep2] = useState(false)

  return (
    <React.Fragment>
      <section className="section" id="roadmap">
        <Container>
          <Row>
            <Col lg="12">
              <div className="text-center mb-5">
                <div className="small-title">Timeline</div>
                <h4>Our Roadmap</h4>
              </div>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col lg="12">
              <div className="hori-timeline">
                <div
                  className="owl-carousel owl-theme  navs-carousel events"
                  id="timeline-carousel"
                >
                  {step1 ? (
                    <>
                      <Row>
                        <Col md={3}>
                          <div
                            className="item event-list active"
                            style={{ display: "inline-table" }}
                          >
                            <div>
                              <div className="event-date">
                                <div className="text-primary mb-1">
                                  01.03.2022 - 15.03.2022
                                </div>
                                <h5 className="mb-4">Pre-sale</h5>
                              </div>
                              <div className="event-down-icon">
                                <i className="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"/>
                              </div>

                              <div className="mt-3 px-3">
                                <p className="text-muted">
                                  {"- Don't miss out!"}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col md={3}>
                          <div
                            className="item event-list"
                            style={{ display: "inline-table" }}
                          >
                            <div>
                              <div className="event-date">
                                <div className="text-primary mb-1">
                                  Q1 2022
                                </div>
                                <h5 className="mb-4">Launch of Nexum Token</h5>
                              </div>
                              <div className="event-down-icon">
                                <i className="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"/>
                              </div>

                              <div className="mt-3 px-3">
                                <p className="text-muted">
                                  The Solar Revolution is here
                                </p>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col md={3}>
                          <div
                            className="item event-list"
                            style={{ display: "inline-table" }}
                          >
                            <div>
                              <div className="event-date">
                                <div className="text-primary mb-1">
                                  Q2 2022
                                </div>
                                <h5 className="mb-4">Introducing our Staking Mechanism on our very own De-Fi platform.</h5>
                              </div>
                              <div className="event-down-icon">
                                <i className="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"/>
                              </div>

                              <div className="mt-3 px-3">
                                <p className="text-muted">

                                </p>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col md={3}>
                          <div
                            className="item event-list"
                            style={{ display: "inline-table" }}
                          >
                            <div>
                              <div className="event-date">
                                <div className="text-primary mb-1">
                                  Q3 2022
                                </div>
                                <h5 className="mb-4">Launching Our Own Wallet</h5>
                              </div>
                              <div className="event-down-icon">
                                <i className="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"/>
                              </div>

                              <div className="mt-3 px-3">
                                <p className="text-muted">
                                  Launching Our Own Wallet -revolutionary wallet equipped with a military-grade 256-bit encryption guaranteeing the safety of your funds and transactions
                                </p>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </>
                  ) : null}

                  {step2 ? (
                    <>
                      <Row>
                        <Col md={3}>
                          <div
                            className="item event-list"
                            style={{ display: "inline-table" }}
                          >
                            <div>
                              <div className="event-date">
                                <div className="text-primary mb-1">
                                  Q4 2022
                                </div>
                                <h5 className="mb-4">Working on our own individual and unique blockchain.</h5>
                              </div>
                              <div className="event-down-icon">
                                <i className="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"/>
                              </div>

                              <div className="mt-3 px-3">
                                <p className="text-muted">
                                </p>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col md={3}>
                          <div
                            className="item event-list"
                            style={{ display: "inline-table" }}
                          >
                            <div>
                              <div className="event-date">
                                <div className="text-primary mb-1">
                                  Q4 2022
                                </div>
                                <h5 className="mb-4">Solar plan introduction</h5>
                              </div>
                              <div className="event-down-icon">
                                <i className="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"/>
                              </div>

                              <div className="mt-3 px-3">
                                <p className="text-muted">
                                  Geolocation, Architecture, Equipment
                                </p>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col md={3}>
                          <div
                            className="item event-list"
                            style={{ display: "inline-table" }}
                          >
                            <div>
                              <div className="event-date">
                                <div className="text-primary mb-1">
                                  Q1 2023
                                </div>
                                <h5 className="mb-4">Building Our First Solar Park</h5>
                              </div>
                              <div className="event-down-icon">
                                <i className="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"/>
                              </div>

                              <div className="mt-3 px-3">
                                <p className="text-muted">
                                </p>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col md={3}>
                          <div
                            className="item event-list"
                            style={{ display: "inline-table" }}
                          >
                            <div>
                              <div className="event-date">
                                <div className="text-primary mb-1">
                                  Q2 2023
                                </div>
                                <h5 className="mb-4">Research and Development of our own Solar Panels</h5>
                              </div>
                              <div className="event-down-icon">
                                <i className="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"/>
                              </div>

                              <div className="mt-3 px-3">
                                <p className="text-muted">
                                </p>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </>
                  ) : null}

                  <div className="owl-nav" style={{ textAlign: "center" }}>
                    <button
                      type="button"
                      onClick={() => {
                        setStep1(true)
                        setStep2(false)
                      }}
                      className="border-0"
                      disabled={step1}
                    >
                      <i className="mdi mdi-chevron-left"/>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setStep1(false)
                        setStep2(true)
                      }}
                      className="border-0"
                      disabled={step2}
                    >
                      <i className="mdi mdi-chevron-right"/>
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default RoadMap
