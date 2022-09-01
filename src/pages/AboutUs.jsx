import "../style/AboutUs.scss";
import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { champList } from "../datas/lolChamp";
import ChampSpells from "../components/Champ/ChampSpells";
import ChampStats from "../components/Champ/ChampStats";
import ChampItemsList from "../components/Champ/ChampItemsList";
import ChampItemDetails from "../components/Champ/ChampItemDetails";



const AboutUs = () => {

    const location = useLocation();
    const [champion, setChampion] = useState([]);
    const [selectedItem, setSelectedItem] = useState([]);
    const [selectedStuff, setStuff] = useState([]);

    const api_key = process.env.REACT_APP_API_KEY;
    let { champName } = useParams();

    const champDetails = async () => {
        console.log("route");
        console.log(champName);
        const findChampKey = champList.find((champ) => champName == champ.name);
        console.log(findChampKey);
        let champKey;
        let name;
        const axios = require('axios').default;
        // champKey = location.state ? location.state.key : 145;
        champKey = findChampKey ? findChampKey.key : 145;
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



    return (

        <>
            <div className="home-content bg-black text-white">
                <h1 className="text-white">Coming soon</h1>
                {champion.name &&
                    (
                        <div>
                            {
                                /**
                                    * *Champ Name div
                                    * TODO : Include photo + SCSS
                                */
                                console.log(champion)
                            }
                            <div className="champ-header">
                                <div className="d-flex justify-content-start">
                                    <div className="d-flex flex-column">
                                        <p className="champ-name text-white">{champion.name}</p>
                                        <p className="champ-subtitle">{champion.title}</p>
                                    </div>
                                    <img src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${champion.image.full}`} width='48px'></img>
                                </div>
                            </div>

                            {
                                /**
                                    * *Champ Spells div
                                    * TODO : SCSS
                                */
                            }
                            {/* <ChampSpells champion={champion} /> */}

                            {
                                /**
                                    * *Champ Stats div
                                    * TODO : SCSS
                                */
                            }

                            {/* <ChampStats champion={champion} /> */}

                            {
                                /**
                                    * *Champ Item div
                                    * TODO : Component + SCSS
                                */
                            }

                            <ChampItemDetails selectedItem={selectedItem} setStuff={setStuff} selectedStuff={selectedStuff} />

                            {
                                /**
                                    * *Champ Items div
                                    * TODO : Component + SCSS
                                */
                            }

                            <ChampItemsList setSelectedItem={setSelectedItem} />


                            {
                                /**
                                    * *Champ Inventory div
                                    * TODO : Component + SCSS
                                */
                            }

                            {
                                /**
                                    * *Champ Links div
                                    * ? this component already exists
                                    * TODO : Component + SCSS
                                */
                            }

                            {
                                /**
                                    * *Champ Card div
                                    * ? this component already exists
                                    * TODO : Component + SCSS
                                */
                            }


                        </div>
                    )}
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

