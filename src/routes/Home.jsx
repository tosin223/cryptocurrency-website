import React from 'react'
import CoinSearch from '../component/CoinSearch'
import Trending from '../component/Trending'

const Home = ({getCoins}) => {
  // console.log(getCoins)
  return (
    <div>
      <CoinSearch getCoins={getCoins}/>
      <Trending />
    </div>
  )
}

export default Home