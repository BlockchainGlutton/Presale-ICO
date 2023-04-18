import React, { useState } from "react"
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Nav,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap"
import classnames from "classnames"

//Import Components
import Accordian from "./accordian"

const FAQs = () => {
  const [activeTab, setactiveTab] = useState("1")

  return (
    <React.Fragment>
      <section className="section" id="faqs">
        <Container>
          <Row>
            <Col lg="12">
              <div className="text-center mb-5">
                <div className="small-title">FAQs</div>
                <h4>Frequently asked questions</h4>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg="12">
              <div className="vertical-nav">
                <Row>
                  <Col lg="2" sm="4">
                    <Nav pills className="flex-column">
                      <NavLink
                        className={classnames({ active: activeTab === "1" })}
                        onClick={() => {
                          setactiveTab("1")
                        }}
                      >
                        <i className="bx bx-help-circle nav-icon d-block mb-2"/>
                        <p className="font-weight-bold mb-0">
                          General Questions
                        </p>
                      </NavLink>

                      <NavLink
                        className={classnames({ active: activeTab === "2" })}
                        onClick={() => {
                          setactiveTab("2")
                        }}
                      >
                        <i className="bx bx-receipt nav-icon d-block mb-2"/>
                        <p className="font-weight-bold mb-0">Token sale</p>
                      </NavLink>

                      <NavLink
                        className={classnames({ active: activeTab === "3" })}
                        onClick={() => {
                          setactiveTab("3")
                        }}
                      >
                        <i className="bx bx-timer d-block nav-icon mb-2"/>
                        <p className="font-weight-bold mb-0">Roadmap</p>
                      </NavLink>
                    </Nav>
                  </Col>
                  <Col lg="10" sm="8">
                    <Card>
                      <CardBody>
                        <TabContent activeTab={activeTab}>
                          <TabPane tabId="1" id="buy">
                            <h4 className="card-title mb-4">
                              General Questions
                            </h4>

                            {/* accoridan */}
                            <Accordian
                              question1="What is Nexum ?"
                              answer1="Nexum is a new generation of crypto currency on the basis of binance blockchain. Nexum is the future in the crypto world, creating our own financial decentralized system which controls investments in energy from renewable sources."
                              question2="What is the Tokenomics ?"
                              answer2='The Nexum Protocol is a community focused, fair launched DeFi Token.
                              LP Acquisition : 5% is added to liquidity.
                              Reflection : 3% is Redistributed to all existing holders.
                              Marketing Tax : 2% of tokens are sent to Marketing address.'
                              question3="What is the purpose of Nexum ?"
                              answer3="Nexum intends to change the crypto world and create the biggest decentralized investment company in the world where all holders to actively take part in the decision making."
                              question4="Why the goal is energy from renewable sources?"
                              answer4="Without electricity, the world will be in a stand still. In the energy from renewable sources, there is no delay in research. After the initial investment and development, the parks go straight to exploitation."
                            />
                          </TabPane>

                          <TabPane tabId="2">
                            <h4 className="card-title mb-4">Token sale</h4>

                            <Accordian
                              question1="Why do we use it ?"
                              answer1="Nexum has developed unique software that calculates the time of holding, and the amount of the Nexum tokens, and on that basis yearly share dividends to the holders based on the investments made. Every holder will be part of the decision-making and practically will be a shareholder with the right to vote. Our team is in the process of creating the most innovative blockchain and wallet of its own kind."
                              question2="What is Token Presale ?"
                              answer2="Pre-selling is a practice performed by some crypto projects ahead of an initial coin offering, in which tokens are sold to interested parties at a certain price. This could be considered beneficial for both investors and the development team, if all was to go well and the digital currency was to be a success. While the project’s creators would receive much-needed funds to finalize the project, investors have the potential to acquire an altcoin that could be worth a lot more in the future."
                              question3="What is Initial Coin Offering(ICO) ?"
                              answer3="Short for Initial Coin Offering, an ICO is a type of crowdfunding, or crowdsale, using cryptocurrencies as a means of raising capital for early-stage companies. Any cryptocurrency or blockchain company looking to raise funds to create an app, service or new coin can use an ICO to raise funds."
                              question4="What is the features of Presale ICO ?"
                              answer4="Token Name, Token Symbol, Sale Supply, Token Address, Soft Cap, Hard Cap, Minimum purchase threshold, Maximum purchase threshold, Presale Start, Presale End"
                            />
                          </TabPane>

                          <TabPane tabId="3">
                            <h4 className="card-title mb-4">Roadmap</h4>

                            <Accordian
                              question1="01.03.2022 - 15.03.2022"
                              answer1="Pre-sale - Don't miss out!"
                              question2="Q1 2022"
                              answer2="Launch of Nexum Token"
                              question3="Q2 2022"
                              answer3="Introducing our Staking Mechanism on our very own De-Fi platform."
                              question4="Q3 2022"
                              answer4="Launching Our Own Wallet"
                              question5="Q4 2022"
                              answer5="Working on our own individual and unique blockchain."
                              question6="Q4 2022"
                              answer6="Solar plan introduction"
                              question7="Q1 2023"
                              answer7="Building Our First Solar Park"
                              question8="Q2 2023"
                              answer8="Research and Development of our own Solar Panels"
                            />
                          </TabPane>
                        </TabContent>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default FAQs
