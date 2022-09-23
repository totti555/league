import { Outlet, Link, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import "./Layout.scss";
import Menu from "../assets/Home/menu.svg";
import { useState } from "react";
import AboutChamp from "../pages/AboutChamp";
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
            <Link to="/list">LIST</Link>
          </button>
          <button className="nav-button">
            <Link to="/about_champ/Kaisa">LEGEND</Link>
          </button>
          {/* <Routes>
            <Route path="about_champ/:champName" element={<AboutChamp />} />
          </Routes> */}
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
            <a href="/about_champ/Kaisa">ABOUT US</a>
            <hr />
            <a href="/list">LOOK</a>
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

      {/* {location.pathname.includes('list') &&
        <footer>
          <Footer className='footer-list' />
        </footer>
      } */}
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
//                         <Link to="/about_champ">AboutChamp</Link>
//                     </li>
//                     <li>
//                         <Link to="/list">List</Link>
//                     </li>
//                 </ul>
//             </nav>

//             <Outlet />
//         </>
//     )
// };

export default Layout;
