import React from "react"
import { ethers } from "ethers"
import axios from "axios"

export const connectWallet = async () => {
  const chainId = process.env.REACT_APP_CHAINID

  if (window.ethereum) {
    try {
      const chain = await window.ethereum.request({ method: "eth_chainId" })
      if (parseInt(chain, 16) == chainId) {
        const addressArray = await window.ethereum.request({
          method: "eth_requestAccounts",
        })
        if (addressArray.length > 0) {
          return {
            address: addressArray[0],
            status: "👆🏽 Your wallet is connected to the site.",
          }
        } else {
          return {
            address: "",
            status: "😥 Connect your wallet account to the site.",
          }
        }
      } else {
        window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: chainId }],
        })
        return {
          address: "",
          status: "😥 Connect your wallet account to the site.",
        }
      }
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      }
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            {/* <a target="_blank" href={`https://metamask.io/download.html`}> */}
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.(https://metamask.io/download.html)
            {/* </a> */}
          </p>
        </span>
      ),
    }
  }
}

export const getCurrentWalletConnected = async () => {
  const chainId = process.env.REACT_APP_CHAINID

  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      })
      const chain = await window.ethereum.request({
        method: "eth_chainId",
      })
      if (addressArray.length > 0 && chain === chainId) {
        return {
          address: addressArray[0],
          status: "👆🏽 You can mint new pack now.",
        }
      } else {
        return {
          address: "",
          status:
            "🦊 Connect to Metamask and choose the correct chain using the top right button.",
        }
      }
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      }
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            {/* <a target="_blank" href={`https://metamask.io/download.html`}> */}
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.(https://metamask.io/download.html)
            {/* </a> */}
          </p>
        </span>
      ),
    }
  }
}
