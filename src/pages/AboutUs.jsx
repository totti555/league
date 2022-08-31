import "../style/AboutUs.scss";
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { champList } from "../datas/lolChamp";



const AboutUs = () => {

    const location = useLocation();
    const [champion, setChampion] = useState([]);

    const champDetails = async () => {
        const api_key = process.env.REACT_APP_API_KEY;
        let champKey;
        let name;
        const axios = require('axios').default;
        champKey = location.state ? location.state.key : 145;
        const data = champList.filter((champ) => champ.key == champKey);
        const champSelected = data[0];

        const exceptionalName = ['BelVeth', 'KaiSa', 'KogMaw', 'ChoGath', 'RekSai'];
        if (exceptionalName.includes(champSelected.name)) {
            const minName = champSelected.name.toLowerCase();
            name = minName.charAt(0).toUpperCase() + minName.slice(1);
        }
        else name = champSelected.name;


        // const champSelectedName = champSelected.name ? champSelected.name : 'Kaisa';



        axios.get(`http://ddragon.leagueoflegends.com/cdn/12.16.1/data/en_US/champion/${name}.json?api_key=${api_key}`)
            .then(function (response) {
                // handle success
                const toto = Object.values(response.data)

                // setChampion({ Kaisa: Object.values(response.data) });
                console.log("update du state ?")
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
                console.log('??')
                console.log(champion);
            });
    }

    useEffect(() => {
        champDetails();
    }, []);

    const champSpells = (champion) => {

        console.log("spells");
        console.log(champion.spells.map((s) => s.name));
        // const tata = champList.map((champ) => champ.id);
        // console.log(tata);


        // console.log(champion.spells[0]);
    }

    return (

        <>
            <div className="home-content bg-black text-white">
                <h1 className="text-white">Coming soon</h1>
                {champion.name &&
                    (<div>
                        <div>


                            {champion.name}
                        </div>
                        <div>



                            {
                                champion.spells.map((s) =>
                                (
                                    <div key={s.id}>
                                        <p>{s.name}</p>
                                        <p>{s.id}</p>
                                        <p dangerouslySetInnerHTML={{ __html: s.description }} />
                                    </div>
                                )
                                )

                            }
                        </div>
                    </div>)}
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

