import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./routes/Home";
import Signin from "./routes/Signin";
import Signup from "./routes/Signup";
import Account from "./routes/Account";
import axios from "axios";
import { useEffect, useState } from "react";
import CoinPage from "./routes/CoinPage";
import Footer from "./component/Footer";


function App() {
  const[getCoins, setGetCoins] = useState([])
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&locale=en'

  useEffect(()=>{
    axios.get(url).then((response)=> {
      setGetCoins(response.data)
      // console.log(response.data)
    })
  }, [url])


  return (
    <ThemeProvider>
     
      <Navbar />
      <Routes>
        <Route path="/" element={<Home getCoins={getCoins} />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
        <Route path="/coin/:coinId" element={<CoinPage />}>
          <Route path=":coinID" />
        </Route>
      </Routes>
      <Footer />
    
    </ThemeProvider>
  );
}

export default App;
