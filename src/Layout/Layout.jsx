import { Outlet, Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import "./Layout.scss"

function Layout({ children }) {
    return (
        <div>


            <header className="d-flex align-items-center justify-content-between">

                <div className="logo ms-5 text-white">List of legends</div>
                <div>
                    <button className="nav-button"><Link to="/">HOME</Link></button>
                    <button className="nav-button"><Link to="/about_us">ABOUT US</Link></button>
                    <button className="nav-button"><Link to='/look'>LOOK</Link></button>
                </div>
                <div className="me-5 text-white"> Welcome, Thomas !</div>

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