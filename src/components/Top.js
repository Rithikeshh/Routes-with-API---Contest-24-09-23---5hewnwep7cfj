import React, { useState, useEffect } from 'react';
import axios from 'axios'
function Top() {
    const [cryptoArr, setCryptoArr] = useState([]);
    useEffect(()=>{
      axios.get('https://api.coinlore.net/api/tickers/').then((response)=>{
        setCryptoArr(response.data.data)
      })
    },[]) 

    return (
        <div className='top-container'>
            <h1>Top 10 Global Crypto Coins</h1>
            <div className='display-container'>

               {cryptoArr && cryptoArr.filter((item)=>{
                  return item.rank <= 10
               }).map((item,index)=>(
                  <div key={index} className='coin-container'>
                    <p className='rank-para'>Rank # {item.rank}</p>
                    <h3 className='coin-symbol'>{item.name} ({item.symbol})</h3>
                    <p className='price-para'>Price: {item.price_usd}</p>
                  </div>
               ))
                }

            </div>
        </div>
    )
}

export default Top
