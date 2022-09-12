import { Outlet, Link, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import "./Layout.scss";
import Menu from "../assets/Home/menu.svg";
import { useState } from "react";
import AboutUs from "../pages/AboutUs";
import { useLocation } from 'react-router-dom';

function Layout({ children }) {

  /**
    * *Heart of the website : Header / Body / Footer
    * CSS file : Layout.scss
    * Components : Footer
    * !Depreciated
    * TODO: Create Header component
  */


  /**
    * * State + function to change the navbar according to the resolution
    * @param menu
  */

  const [menu, displayMenu] = useState(false);
  const location = useLocation();
  function showMenu() {
    displayMenu(!menu);
  }


  return (
    <div>
      {
        /**
            * *Header
        */
      }

      <header className="d-flex align-items-center justify-content-between">
        <div className="logo ms-3 text-white">
          <h1 className="champ-title">
            <span className="title">LIST OF LEGENDS</span>
          </h1>
        </div>

        {
          /**
            * *Navbar for big resolutions
          */
        }

        <div>
          <button className="nav-button">
            <Link to="/">HOME</Link>
          </button>
          <button className="nav-button">
            <Link to="/about_us/Kaisa">ABOUT US</Link>
          </button>
          <button className="nav-button">
            <Link to="/look">LOOK</Link>
          </button>
          <Routes>
            <Route path="about_us/:champName" element={<AboutUs />} />
          </Routes>
        </div>
        <div className="me-5 text-white welcome"> Welcome, Thomas !</div>

        {
          /**
            * *Navbar for low resolution (just for phone screens => responsive)
          */
        }

        <img
          src={Menu}
          className="phone-icon-menu"
          onClick={() => showMenu()}
        ></img>
        {menu && (
          <div className="dropdown-content d-flex flex-column">
            <hr className="mt-0" />
            <a href="/">HOME</a>
            <hr />
            <a href="/about_us">ABOUT US</a>
            <hr />
            <a href="/look">LOOK</a>
            <hr />
          </div>
        )}
      </header>

      {
        /**
            * *Body
        */
      }

      <Outlet />

      {
        /**
            * *Footer
        */
      }

      {!location.pathname.includes('about_us') &&
        <footer>
          <Footer />
        </footer>
      }
    </div>
  );
}

// const Header = () => {
//     return (
//         <>
//             <nav>
//                 <ul>
//                     <li>
//                         <Link to="/">Home</Link>
//                     </li>
//                     <li>
//                         <Link to="/about_us">AboutUs</Link>
//                     </li>
//                     <li>
//                         <Link to="/look">Look</Link>
//                     </li>
//                 </ul>
//             </nav>

//             <Outlet />
//         </>
//     )
// };

export default Layout;
