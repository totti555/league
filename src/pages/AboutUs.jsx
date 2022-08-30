import "../style/AboutUs.scss";
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { champList } from "../datas/lolChamp";



function AboutUs() {

    const location = useLocation();
    const [champion, setChampion] = useState([]);

    const champDetails = () => {
        const api_key = process.env.API_KEY;
        const axios = require('axios').default;

        const champKey = location.state.key ? location.state.key : 145;
        const data = champList.filter((champ) => champ.key == champKey);
        const champSelected = data[0];



        axios.get(`http://ddragon.leagueoflegends.com/cdn/12.16.1/data/en_US/champion/${champSelected.name}.json?api_key=${api_key}`)
            .then(function (response) {
                // handle success
                const obj = response.data.data
                const data = Object.values(obj);
                setChampion(data[0]);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    useEffect(() => {
        champDetails();
    }, []);

    return (

        <>
            <div className="home-content bg-black text-white">
                <h1 className="text-white">Coming soon</h1>
                <div>

                    {/* {location.state.key ? location.state.key : 145} */}
                    {champion.name}
                </div>
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

