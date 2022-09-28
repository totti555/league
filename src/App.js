
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
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    document.title = 'List of Legends'
  }, []);

  const [summonerName, setSummonerName] = useState('');
  const [summoner, setSummoner] = useState(() => {
    const localData = localStorage.getItem('summoner');
    return localData ? JSON.parse(localData) : [];
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout summonerName={summonerName} setSummonerName={setSummonerName} setSummoner={setSummoner} summoner={summoner} />}>
            <Route index element={<Home />} />
            <Route path="about_champ/:champName" element={<AboutChamp summoner={summoner} />} />
            <Route path="list" element={<List />} exact />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
