
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Look from "./pages/Look";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Layout from "./Layout/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about_us" element={<AboutUs />} />
            <Route path="look" element={<Look />} exact />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
