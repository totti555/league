import "../style/AboutUs.scss";
import React from 'react';
import { useLocation } from 'react-router-dom';



function AboutUs() {

    const location = useLocation();

    return (

        <>
            <div className="home-content bg-black text-white">
                <h1 className="text-white">Coming soon</h1>
                <div>{location.state.name}</div>
            </div>


        </>
    )
}

export default AboutUs;


// const AboutUs = () => {

//     /**
//         * *View to display
//         * TODO : Coming soon
//     */
//     return (
//         <div className="home-content bg-black text-white">
//             <h1 className="text-white">Coming soon</h1>
//         </div>
//     )
// };

