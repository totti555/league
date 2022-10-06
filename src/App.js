
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutChamp from "./pages/AboutChamp";
import List from "./pages/List";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Layout from "./Layout/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";


function App() {

  /**
    * *Main page of the website
    * Initialization
    * Components : Layout, Home, AboutChamp, List
  */

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    document.title = 'List of Legends'
  }, []);

  /**
    * *state to fetch the summoner by the summoner name
  */

  const [summonerName, setSummonerName] = useState('');
  const [summonerRank, setSummonerRank] = useState([]);

  /**
    * *state for the summoner 
    * Specific syntax to use the localStorage to keep the summoner account on F5
  */

  const [summoner, setSummoner] = useState(() => {
    const localData = localStorage.getItem('summoner');
    return localData ? JSON.parse(localData) : [];
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout summonerName={summonerName} setSummonerName={setSummonerName} setSummoner={setSummoner} summoner={summoner} setSummonerRank={setSummonerRank} />}>
            <Route index element={<Home />} />
            <Route path="about_champ/:champName" element={<AboutChamp summoner={summoner} summonerRank={summonerRank} />} />
            <Route path="list" element={<List summoner={summoner} />} exact />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
