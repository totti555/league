import { Outlet, Link, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import "./Layout.scss";
import Menu from "../assets/Home/menu.svg";
import { useState, useRef, useEffect } from "react";
import AboutChamp from "../pages/AboutChamp";
import { useLocation } from 'react-router-dom';
import Search from "../assets/Common/loupe.png";

function Layout(props) {

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
  const [searchBar, displaySearchBar] = useState(false);
  const summonerName = props.summonerName;
  const setSummoner = props.setSummoner;
  const setSummonerName = props.setSummonerName;
  const summoner = props.summoner;


  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          displaySearchBar(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const location = useLocation();
  function showMenu() {
    displayMenu(!menu);
  }

  function handleSummonerNameChange(e) {
    setSummonerName(e.target.value)
  }

  const fetchSummonerByName = () => {
    const axios = require('axios').default;
    axios.get(`http://localhost:8080/getSummoner/${summonerName}`, { mode: 'cors' })
      .then(function (response) {
        // handle success
        console.log('summoner', response);
        setSummoner(response.data);
        displaySearchBar(false);
        // setChampionDetails(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
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
            {
              !searchBar ?
                <span className="title">LIST OF LEGENDS</span>
                : <><span className="title title-low-res">LOL</span><span className="title title-high-res">LIST OF LEGENDS</span></>
            }
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


        {
          /**
            * *Navbar for low resolution (just for phone screens => responsive)
          */
        }
        {
          searchBar &&

          <div className="search-summoner" ref={wrapperRef}>
            <input type='text' onChange={handleSummonerNameChange}></input>
            <button onClick={fetchSummonerByName} disabled={!summonerName}>
              <img className="icon-menu" src={Search} title='Search champ' alt='search-icon-menu' width='24px'></img>
            </button>
          </div>

          /* <div className="position-relative">
            <form autoComplete='off'>
              <input type="input" onChange={handleSummonerNameChange} className="form__field" placeholder="Search summoner" name="name" id='name' />
              <label htmlFor="name" className="form__label">Search summoner</label>
            </form>
            <button onClick={fetchSummonerByName} disabled={!summonerName}>
              <img src={Search} alt="search-icon-menu" className="search-icon icon-menu " width='24px'></img>
            </button>
          </div> */
        }
        <div className="d-flex">
          {!searchBar &&
            <div className="mx-3 align-self-center d-flex">

              {!summoner.name &&
                <div className="text-white welcome me-3 align-self-center">Search summoner</div>
              }
              <img className="icon-menu" src={Search} onClick={() => displaySearchBar(true)} title='Search champ' alt='search-icon-menu' width='24px'></img>

            </div>
          }
          <div className="mx-3 align-self-center">
            <img
              src={Menu} className="phone-icon-menu" onClick={() => showMenu()}></img>
          </div>
          {summoner.name &&

            <div className="d-flex flex-column">
              <div className="d-flex justify-content-center position-relative">
                <img className="mt-1 " src={`http://ddragon.leagueoflegends.com/cdn/12.18.1/img/profileicon/${summoner.profileIconId}.png`} width='38px'></img>
                <span className="summoner-level text-white">{summoner.summonerLevel}</span>
              </div>
              <span className="summoner-name text-white">{summoner.name}</span>

            </div>}
        </div>
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
