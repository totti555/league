import { Outlet, Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import "./Layout.css"


function Layout({ children }) {
    return (
        <div>


            <header>
                <button><Link to="/">HOME</Link></button>
                <button><Link to="/about_us">ABOUT US</Link></button>
                <button><Link to="/look">LOOK</Link></button>
                <hr />
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