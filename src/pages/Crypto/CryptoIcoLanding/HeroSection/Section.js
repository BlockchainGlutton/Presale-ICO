import React, { useEffect, useState } from "react"
import PropTypes from 'prop-types'
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Button,
  Input,
  Modal
} from "reactstrap"
import { Link } from "react-router-dom"
import Countdown from "react-countdown"

const Section = (props) => {
  const {
          status,
          balance,
          walletAddress,
          onClickGetToken,
          min,
          max,
          softcap,
          hardcap,
          presaleStart,
          presaleEnd,
          raisedAmount,
          base,
          sale,
          tokenRate,
          userWithdrawBaseTokens,
          userWithdrawTokens} = props
  const [value, setValue] = useState(0)
  const [flag, setFlag] = useState(false)

  let progress = 0
  let softcapPos = 0
  let presale_start = new Date()
  let presale_end = new Date()

  if(hardcap){
    progress = Math.round(parseFloat(raisedAmount)/parseFloat(hardcap)*100)
    softcapPos = Math.round(parseFloat(softcap)/parseFloat(hardcap)*100)
  }else{
    progress = 0
    softcapPos = 0
  }
  presale_start = new Date(parseInt(presaleStart)*1000)
  presale_end = new Date(parseInt(presaleEnd)*1000)
  const toggleModal = () => {
    setFlag(!flag)
    removeBodyCss()
  }

  const removeBodyCss = () => {
    document.body.classList.add("no_padding")
  }

  const clickModal = () => {
    toggleModal()
  }

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
        return <>
          </>      
    } else {
      // Render a countdown
      return (
        <>
          <div className="coming-box">
            {days}
            <span>Days</span>
          </div>
          <div className="coming-box">
            {hours}
            <span>Hours</span>
          </div>
          <div className="coming-box">
            {minutes}
            <span>Minutes</span>
          </div>
          <div className="coming-box">
            {seconds}
            <span>Seconds</span>
          </div>
        </>
      )
    }
  }

  const onChangeValue = (e)=>{
    setValue(e.target.value)
  }
  
  const renderSwitchCounter = () =>{
    switch(status){
      case 0:     // QUED - Awaiting start block
        return(
          <Card className="overflow-hidden mb-0 mt-5 mt-lg-0" id="countdown-panel">
                <CardHeader className="text-center">
                  <h5 className="mb-0">ICO Presale Countdown</h5>
                </CardHeader>
                <CardBody>
                  <div className="text-center">
                    <h5>Time left to Ico Presale Start:</h5>
                    <div className="mt-4">
                      <div className="counter-number ico-countdown">
                        <Countdown date={process.env.REACT_APP_START_DATE} renderer={renderer} />
                      </div>
                    </div>

                    <div className="mt-4">
                      <Button type="button" color="success" className="w-md" disabled>
                        Get Token
                      </Button>
                    </div>

                    <div className="mt-5">
                      <h4 className="font-weight-semibold">1 BNB = {tokenRate} NXM</h4>
                      <div className="clearfix mt-4">
                        <h5 className="float-end font-size-14 hardcap">{softcap} BNB/{hardcap} BNB</h5>
                      </div>
                      <div className="progress p-1 progress-xl softcap-progress">
                        <div
                          className="progress-bar progress-bar-striped progress-bar-animated"
                          role="progressbar"
                          style={{ width: `${progress}%`}}
                          aria-valuenow={progress}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-label">{`${raisedAmount} BNB(${progress} %)`}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
        )
        break;
      case 1:     // ACTIVE - Deposits enabled, now in Presale
          return(
            <Card className="overflow-hidden mb-0 mt-5 mt-lg-0" id="countdown-panel">
              <CardHeader className="text-center">
                <h5 className="mb-0">ICO Presale Countdown</h5>
              </CardHeader>
              <CardBody>
                <div className="text-center">
                  <h5>Time left to Ico Presale End:</h5>
                  <div className="mt-4">
                    <div className="counter-number ico-countdown">
                      <Countdown date={process.env.REACT_APP_END_DATE} renderer={renderer} />
                    </div>
                  </div>

                  <div className="mt-4">
                    <form onSubmit={(e)=>{onClickGetToken(e,value)}}>
                      <Row>
                        <Col md={{size:4, offset:2}}>
                        {walletAddress && (base!=max) ? 
                          <Input
                            type="number"
                            md={4}
                            min={parseFloat(min)}
                            max={parseFloat(max)}
                            placeholder={balance}
                            step="any"
                            required
                            onChange={(e)=>{onChangeValue(e)}}
                          /> : 
                          <Input
                            type="number"
                            md={4}
                            placeholder={balance}
                            disabled
                          />
                        }
                          
                        </Col>
                        <Col md={{size:4, offset:0}}>
                        {walletAddress && (base!=max) ? 
                          <Button type="submit" color="success" className="w-md">
                            Get Token
                          </Button> :
                          <Button type="submit" color="success" className="w-md" disabled>
                            Get Token
                          </Button>
                        }
                        </Col>
                      </Row>
                    </form>
                  </div>

                  <div className="mt-5">
                    <h4 className="font-weight-semibold">1 BNB = {tokenRate} NXM</h4>
                    <div className="clearfix mt-4">
                      <h5 className="float-end font-size-14 hardcap">{softcap} BNB/{hardcap} BNB</h5>
                    </div>
                    <div className="progress p-1 progress-xl softcap-progress">
                      <div
                        className="progress-bar progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        style={{ width: `${progress}%`}}
                        aria-valuenow={progress}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-label">{`${raisedAmount} BNB(${progress} %)`}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          )
        break;
      case 2:     // SUCCESS - Presale ended with reaching Softcap  ||  Wonderful - reached to Hardcap
            return(
              <Card className="overflow-hidden mb-0 mt-5 mt-lg-0" id="countdown-panel">
                <CardHeader className="text-center">
                  <h5 className="mb-0">ICO Presale Countdown</h5>
                </CardHeader>
                <CardBody>
                  <div className="text-center">
                    {hardcap == raisedAmount?
                      <h5>Congratulations! ICO Presale succeed the Hardcap.</h5>
                    :
                      <h5>Congratulations! ICO Presale succeed the Softcap.</h5>                  
                    }

                    <div className="mt-4">
                      {
                        walletAddress?
                          <Button type="button" color="success" className="w-md" onClick={userWithdrawTokens}>
                            Withdraw Token
                          </Button>
                        :
                        <Button type="button" color="success" className="w-md" disabled>
                            Withdraw Token
                        </Button>
                      }
                    </div>

                    <div className="mt-5">
                      <h4 className="font-weight-semibold">1 BNB = {tokenRate} NXM</h4>
                      <div className="clearfix mt-4">
                        <h5 className="float-end font-size-14 hardcap">{softcap} BNB/{hardcap} BNB</h5>
                      </div>
                      <div className="progress p-1 progress-xl softcap-progress">
                        <div
                          className="progress-bar progress-bar-striped progress-bar-animated"
                          role="progressbar"
                          style={{ width: `${progress}%`}}
                          aria-valuenow={progress}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-label">{`${raisedAmount} BNB(${progress} %)`}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            )
        break;
      case 3:     // Failure
          return(
            <Card className="overflow-hidden mb-0 mt-5 mt-lg-0" id="countdown-panel">
                <CardHeader className="text-center">
                  <h5 className="mb-0">ICO Presale Countdown</h5>
                </CardHeader>
                <CardBody>
                  <div className="text-center">
                    <h5>ICO Presale ended with the Failure:</h5>
                    
                    <div className="mt-4">
                    {
                      walletAddress && parseFloat(base) ?
                        <Button type="button" color="danger" className="w-md" onClick={userWithdrawBaseTokens}>
                          Withdraw BNB
                        </Button>
                      :
                        <Button type="button" color="danger" className="w-md" disabled>
                            Withdraw BNB
                        </Button>
                    }
                    </div>

                    <div className="mt-5">
                      <h4 className="font-weight-semibold">1 BNB = {tokenRate} NXM</h4>
                      <div className="clearfix mt-4">
                        <h5 className="float-end font-size-14 hardcap">{softcap} BNB/{hardcap} BNB</h5>
                      </div>
                      <div className="progr41
                      ess p-1 progress-xl softcap-progress">
                        <div
                          className="progress-bar progress-bar-striped progress-bar-animated"
                          role="progressbar"
                          style={{ width: `${progress}%`}}
                          aria-valuenow={progress}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-label">{`${raisedAmount} BNB(${progress} %)`}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
          )
        break;            
    }
  }

  return (
    <React.Fragment>
      <section className="section hero-section bg-ico-hero" id="home">
        <div className="bg-overlay bg-primary"/>
        <Container className="hero-container">
          <Row className="align-items-center">
            <Col lg="5">
              <div className="text-white-50">
                <h1 className="text-white font-weight-semibold mb-3 hero-title">
                  Nexum - Join the crypto revolution and don&apos;t miss your chance to become part of the future!
                </h1>
                <p className="font-size-14">
                  The Nexum Protocol is a community focused, fair launched DeFi Token.
                </p>

                <div className="button-items mt-4">
                  <Link to={{pathname:"https://nexumtoken.com/whitepaper/"}} target="_blank" className="btn btn-success me-1">
                    Get Whitepaper
                  </Link>
                  <Link to="#" className="btn btn-light" onClick={clickModal}>
                    How it works
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg="5" md="8" sm="10" className="ms-lg-auto">
                {renderSwitchCounter()}
            </Col>
          </Row>
          <Modal
            isOpen={flag}
            toggle={() => {
              toggleModal()
            }}
            centered={true}
          >
            <div className="modal-header">
              <h5 className="modal-title mt-0" id="myModalLabel">
                Presale Information
              </h5>
              <button
                type="button"
                onClick={() => {
                  setFlag(false)
                }}
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <ul style={{listStyleType: 'none'}}>
                <li>
                  <span>Token Name:</span>
                  <span>Nexum</span>
                </li>
                <li>
                  <span>Token Symbol:</span>
                  <span>NXM</span>
                </li>
                <li>
                  <span>Token Decimals:</span>
                  <span>9</span>
                </li>
                <li>
                  <span>Presale Supply:</span>
                  <span>300,000,000 NXM</span>
                </li>
                <li>
                  <span>Token Address:</span>
                  <span>{process.env.REACT_APP_TOKEN_ADDRESS}</span>
                </li>
                <li>
                  <span>Token Rate:</span>
                  <span>20000</span>
                </li>
                <li>
                  <span>Softcap:</span>
                  <span>150 BNB</span>
                </li>
                <li>
                  <span>Hardcap:</span>
                  <span>15,000 BNB</span>
                </li>
                <li>
                  <span>Buy min:</span>
                  <span>0.1 BNB</span>
                </li>
                <li>
                  <span>Buy max:</span>
                  <span>3000 BNB</span>
                </li>
                <li>
                  <span>Presale Start:</span>
                  <span>2022-03-01</span>
                </li>
                <li>
                  <span>Presale End:</span>
                  <span>2022-03-15</span>
                </li>
                <li>
                  <span>Raised Amount:</span>
                  <span>{`${raisedAmount} BNB`}</span>
                </li>
                <li>
                  <span>Sold Amount:</span>
                  <span>{`${parseFloat(raisedAmount)*2000} NXM`}</span>
                </li>
              </ul>
            </div>
            <div className="modal-footer">
              <button
                type="Close"
                onClick={() => {
                  toggleModal()
                }}
                className="btn btn-secondary "
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </Modal>
        </Container>
      </section>
    </React.Fragment>
  )
}

Section.propTypes = {
  status: PropTypes.number,
  balance: PropTypes.any,
  walletAddress: PropTypes.string,
  onClickGetToken: PropTypes.func,
  min: PropTypes.any,
  max: PropTypes.any,
  softcap: PropTypes.any,
  hardcap: PropTypes.any,
  raisedAmount: PropTypes.any,
  base: PropTypes.any,
  sale: PropTypes.any,
  tokenRate: PropTypes.any,
  presaleStart: PropTypes.any,
  presaleEnd: PropTypes.any,
  userWithdrawBaseTokens: PropTypes.any,
  userWithdrawTokens: PropTypes.any,
}

export default Section
