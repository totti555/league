import "../style/AboutUs.scss";
import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { champList } from "../datas/lolChamp";
import ChampSpells from "../components/Champ/ChampSpells";
import ChampStats from "../components/Champ/ChampStats";
import ChampItemsList from "../components/Champ/ChampItemsList";
import ChampItemDetails from "../components/Champ/ChampItemDetails";
import ChampStuff from "../components/Champ/ChampStuff";
import ChampLinks from "../components/Champ/ChampLinks";
import ChampCard from "../components/ChampList/ChampCard";
import ChampLevel from "../components/Champ/ChampLevel";



const AboutUs = () => {

    const location = useLocation();
    const [champion, setChampion] = useState([]);
    const [selectedItem, setSelectedItem] = useState([]);
    const [selectedStuff, setStuff] = useState([]);
    const [itemsBuff, setItemsBuff] = useState([]);
    const [selectedKey, setKey] = useState(145);
    const [champCard, setChampCard] = useState([]);
    const [level, setLevel] = useState(1);
    const [increaseLevel, setIncreaseLevel] = useState(false);
    const [decreaseLevel, setDecreaseLevel] = useState(true);
    const [currentChampLinks, setCurrentChampLinks] = useState([]);


    const api_key = process.env.REACT_APP_API_KEY;
    let { champName } = useParams();

    const champDetails = async () => {
        console.log("route");
        console.log(champName);
        const findChampKey = champList.find((champ) => champName == champ.name);
        console.log("bizarree", findChampKey);
        setCurrentChampLinks(findChampKey.linksWith);
        console.log(findChampKey);
        let champKey;
        let name;
        const axios = require('axios').default;
        // champKey = location.state ? location.state.key : 145;
        champKey = findChampKey ? findChampKey.key : 145;
        setKey(champKey);
        const data = champList.filter((champ) => champ.key == champKey);

        const champSelected = data[0];
        setChampCard(champSelected);

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

            });
    }


    useEffect(() => {
        champDetails();
    }, []);



    return (

        <>
            <div className="home-content text-white" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${process.env.PUBLIC_URL + `/Background/${champCard.name}.jpg`}` }}>
                {/* <h1 className="text-white">Coming soon</h1> */}
                {champion.name &&
                    (
                        <div>

                            {
                                /**
                                    * *Champ Spells div
                                    * TODO : SCSS
                                */
                            }

                            <div className="d-flex justify-content-between first-block">
                                {
                                    /**
                                        * *Champ Name div
                                        * TODO : Include photo + SCSS
                                    */
                                    console.log(champion)
                                }
                                <div>
                                    <div className="champ-header border mb-2">
                                        <div className="d-flex justify-content-between header-content flex-wrap">
                                            <div className="d-flex justify-content-start">
                                                <div className="position-relative">
                                                    <img src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${champion.image.full}`} width='64px'></img>
                                                    <span className="champ-level">{level}</span>
                                                </div>
                                                <div className="d-flex flex-column ms-5">
                                                    <p className="champ-name text-white">{champion.name}</p>
                                                    <p className="champ-subtitle">{champion.title}</p>
                                                </div>
                                            </div>
                                            <ChampLevel setDecreaseLevel={setDecreaseLevel} setIncreaseLevel={setIncreaseLevel} level={level} increaseLevel={increaseLevel} decreaseLevel={decreaseLevel} setLevel={setLevel} />
                                        </div>
                                    </div>
                                    <ChampSpells champion={champion} />
                                </div>

                                {
                                    /**
                                        * *Champ Card div
                                        * ? this component already exists
                                        * TODO : Component + SCSS
                                    */
                                }
                                <div className="mx-5">
                                    <div className="d-flex justify-content-center ">
                                        {champCard && <ChampCard champ={champCard} className='' />}
                                        {
                                            /**
                                                * *Champ Stats div
                                                * TODO : SCSS
                                            */
                                        }
                                    </div>
                                    <ChampStats champion={champion} itemsBuff={itemsBuff} level={level} />
                                </div>
                            </div>



                            {
                                /**
                                    * *Champ Inventory div
                                    * TODO : Component + SCSS
                                */
                            }

                            <ChampStuff setStuff={setStuff} selectedStuff={selectedStuff} setSelectedItem={setSelectedItem} setItemsBuff={setItemsBuff} />

                            {
                                /**
                                    * *Champ Item div
                                    * TODO : Component + SCSS
                                */
                            }

                            {
                                /**
                                    * *Champ Items div
                                    * TODO : Component + SCSS
                                */
                            }
                            <div className='d-flex justify-content-between second-block'>
                                <ChampItemsList setSelectedItem={setSelectedItem} />
                                <hr></hr>
                                <ChampItemDetails selectedItem={selectedItem} setStuff={setStuff} selectedStuff={selectedStuff} />
                            </div>





                            {
                                /**
                                    * *Champ Links div
                                    * ? this component already exists
                                    * TODO : Component + SCSS
                                */
                            }

                            <ChampLinks selectedKey={selectedKey} champion={champion} champCard={champCard} currentChampLinks={currentChampLinks} />



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

