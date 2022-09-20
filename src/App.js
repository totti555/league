
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutChamp from "./pages/AboutChamp";
import List from "./pages/List";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Layout from "./Layout/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    document.title = 'List of Legends'
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about_champ/:champName" element={<AboutChamp />} />
            <Route path="list" element={<List />} exact />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
