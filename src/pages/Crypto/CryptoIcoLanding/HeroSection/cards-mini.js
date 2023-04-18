import React, { useEffect, useState} from "react"
import { Container, Row } from "reactstrap"

//Import Components
import CardBox from "./card-box"

const CardsMini = () => {
  const [cryptoPrices, setCryptoPrices] = useState({bitcoin:{usd:0,usd_24h_change:0},binancecoin:{usd:0,usd_24h_change:0},ethereum:{usd:0,usd_24h_change:0}})
  const [coins, setCoins] = useState([])

  useEffect(() => {
    const currencies = `binancecoin,bitcoin,ethereum`
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.coingecko.com/api/v3/simple/price?ids=${encodeURIComponent(currencies)}&vs_currencies=usd&include_24hr_change=true&include_last_updated_at=true`);
    xhr.responseType = "json";
    xhr.send();
    xhr.onload = function(){
        if (xhr.status != 200){ 
          console.log("Erreur " + xhr.status + " : " + xhr.statusText);
        }else{ 
          setCryptoPrices(xhr.response)
        }
    };

    const interval = setInterval(()=>{
      xhr.open("GET", `https://api.coingecko.com/api/v3/simple/price?ids=${encodeURIComponent(currencies)}&vs_currencies=usd&include_24hr_change=true&include_last_updated_at=true`);
      xhr.responseType = "json";
      xhr.send();
      xhr.onload = function(){
          if (xhr.status != 200){ 
            console.log("Erreur " + xhr.status + " : " + xhr.statusText);
          }else{ 
            setCryptoPrices(xhr.response)
          }
      };
    }, 600000)
    return () => clearInterval(interval);
  },[])

  useEffect(() => {
    setCoins([
      {
        title: "Bitcoin",
        color: "success",
        icon: "cf cf-btc",
        value: `${cryptoPrices.bitcoin.usd}`,
        rate: `${Number.parseFloat(Math.abs(cryptoPrices.bitcoin.usd_24h_change)).toFixed(3)}`,
        isIncrease: cryptoPrices.bitcoin.usd_24h_change>0,
      },
      {
        title: "Binance Coin",
        color: "warning",
        icon: "cf cf-bnb",
        value: `${cryptoPrices.binancecoin.usd}`,
        rate: `${Number.parseFloat(Math.abs(cryptoPrices.binancecoin.usd_24h_change)).toFixed(3)}`,
        isIncrease: cryptoPrices.binancecoin.usd_24h_change>0,
      },
      {
        title: "Ethereum",
        color: "primary",
        icon: "cf cf-eth",
        value: `${cryptoPrices.ethereum.usd}`,
        rate: `${Number.parseFloat(Math.abs(cryptoPrices.ethereum.usd_24h_change)).toFixed(3)}`,
        isIncrease: cryptoPrices.ethereum.usd_24h_change>0,
      },
    ]
  )
  }, [cryptoPrices])

  return (
    <React.Fragment>
      <section className="section p-0">
        <Container>
          <div className="currency-price">
            <Row>
              {/* reder card boxes */}
              <CardBox coins={coins} />
            </Row>
          </div>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default CardsMini
