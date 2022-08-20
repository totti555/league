import { Outlet, Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import "./Layout.scss"
import Menu from "../assets/Home/menu.svg"

function Layout({ children }) {
    return (
        <div>


            <header className="d-flex align-items-center justify-content-between">

                <div className="logo ms-3 text-white"><h1 className="champ-title"><span className="title">LIST OF LEGENDS</span></h1></div>
                <div>
                    <button className="nav-button"><Link to="/">HOME</Link></button>
                    <button className="nav-button"><Link to="/about_us">ABOUT US</Link></button>
                    <button className="nav-button"><Link to='/look'>LOOK</Link></button>
                </div>
                <div className="me-5 text-white welcome"> Welcome, Thomas !</div>
                <img src={Menu} className="phone-icon-menu"></img>

                {/* TODO : location state dont work */}
                {/* <input type="text" placeholder="Search your champ" onChange={handleChangeSearch}></input> */}


            </header>

            <Outlet />
            <footer>
                <Footer />
            </footer>
        </div>
    )
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

export default Layout