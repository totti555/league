import "../style/AboutUs.scss";
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { champList } from "../datas/lolChamp";
import ChampSpells from "../components/Champ/ChampSpells";
import ChampStats from "../components/Champ/ChampStats";
import ChampItemsList from "../components/Champ/ChampItemsList";
import ChampItemDetails from "../components/Champ/ChampItemDetails";
import ChampStuff from "../components/Champ/ChampStuff";
import ChampLinks from "../components/Champ/ChampLinks";
import ChampCard from "../components/ChampList/ChampCard";
import ChampHeader from "../components/Champ/ChampHeader";
import ChampSearch from "../components/Champ/ChampSearch";
import Stats from '../assets/Common/epees-croisees.png'


{
    /**
         * *View to display the info of one champion
         * CSS file : About.scss
         * WORK IN PROGRESS / All doesn't work !!!
         * Components : 1st part => ChampHeader, ChampSearch, ChampStats, ChampSpells
         *              2nd part => ChampItemsList, ChampItemDetails
         *              3rd part => ChampLinks
     */
}

const AboutUs = () => {

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
    const topRef = useRef(null);
    const [championsSpells, setChampionSpells] = useState([]);
    const [spellDatas, setSpellDatas] = useState([]);


    const api_key = process.env.REACT_APP_API_KEY;
    let { champName } = useParams();

    const champDetails = () => {
        const findChampKey = champList.find((champ) => champName === champ.name);
        console.log("findChampKey", findChampKey);
        if (findChampKey)
            setCurrentChampLinks(findChampKey.linksWith);
        let champKey;
        let name;
        const axios = require('axios').default;
        // champKey = location.state ? location.state.key : 145;
        champKey = findChampKey ? findChampKey.key : 145;
        setKey(champKey);
        const data = champList.filter((champ) => champ.key === champKey);

        const champSelected = data[0];
        setChampCard(champSelected);

        const exceptionalName = ['BelVeth', 'KaiSa', 'KogMaw', 'ChoGath', 'RekSai'];
        if (exceptionalName.includes(champSelected.name)) {
            const minName = champSelected.name.toLowerCase();
            name = minName.charAt(0).toUpperCase() + minName.slice(1);
        }
        else if (name === 'Wukong') {
            name = 'MonkeyKing';
        }
        else name = champSelected.name;


        // const champSelectedName = champSelected.name ? champSelected.name : 'Kaisa';



        axios.get(`http://ddragon.leagueoflegends.com/cdn/12.16.1/data/en_US/champion/${name}.json?api_key=${api_key}`)
            .then(function (response) {
                // handle success
                const obj = response.data.data
                const data = Object.values(obj);
                console.log('donnees officielle', data[0])
                setChampion(data[0]);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed

            });


        axios.get(`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champions/${champKey}.json`)
            .then(function (response) {
                // handle success
                const obj = response.data;
                // setChampion(obj)
                console.log("new", obj);
                setChampionSpells(obj)
                // const data = Object.values(obj);
                // setChampion(data[0]);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed

            });


        axios.get(`https://raw.communitydragon.org/12.2/game/data/characters/${champName.toLowerCase()}/${champName.toLowerCase()}.bin.json`)
            .then(function (response) {
                // handle success
                const obj = response.data;
                // setChampion(obj)
                console.log('allo c moii');
                console.log("data", obj);
                setSpellDatas(obj);
                // setChampionSpells(obj)
                // const data = Object.values(obj);
                // setChampion(data[0]);

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
    }, [champName]);



    return (

        <>
            <div className="about-content text-white" >
                {/* <h1 className="text-white">Coming soon</h1> */}
                {champion.name &&
                    (
                        <div>
                            {/* <div className="position-relative">
                                <img
                                    alt="Champ banner"
                                    src={process.env.PUBLIC_URL + `/Background/${champCard.name}.jpg`}
                                    width="100%"
                                ></img>
                                <ChampHeader champion={champion} level={level} setIncreaseLevel={setIncreaseLevel} setDecreaseLevel={setDecreaseLevel} increaseLevel={increaseLevel} decreaseLevel={decreaseLevel} setLevel={setLevel} />

                            </div> */}
                            <div className="about-background" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${process.env.PUBLIC_URL + `/Background/${champCard.name}.jpg`}`, backgroundSize: "cover" }} ref={topRef}>
                                <ChampHeader champion={champion} level={level} setIncreaseLevel={setIncreaseLevel} setDecreaseLevel={setDecreaseLevel} increaseLevel={increaseLevel} decreaseLevel={decreaseLevel} setLevel={setLevel} champCard={champCard} />

                            </div>
                            {
                                /**
                                    * *Champ Spells div
                                    * TODO : SCSS
                                */
                            }

                            <div className="first-block position-relative">

                                {
                                    /**
                                        * *Champ Name div
                                        * TODO : Include photo + SCSS
                                    */

                                }
                                <div className="col-xl-9 col-md-8 col-sm-7 col-vsm p-3 position-relative">
                                    {/* <ChampHeader champion={champion} level={level} setIncreaseLevel={setIncreaseLevel} setDecreaseLevel={setDecreaseLevel} increaseLevel={increaseLevel} decreaseLevel={decreaseLevel} setLevel={setLevel} /> */}
                                    <ChampSpells champion={champion} championCard={champCard} championsSpells={championsSpells} spellDatas={spellDatas} />
                                </div>

                                {
                                    /**
                                        * *Champ Card div
                                        * ? this component already exists
                                        * TODO : Component + SCSS
                                    */
                                }
                                <div className="col-xl-3 col-md-4 col-sm-5 col-vsm align-self-between">
                                    <div className="p-3">
                                        <ChampSearch setChampion={setChampion} />
                                        <div className="d-flex justify-content-center">
                                            {champCard && <ChampCard champ={champCard} />}
                                            {
                                                /**
                                                    * *Champ Stats div
                                                    * TODO : SCSS
                                                */
                                            }
                                        </div>
                                    </div>
                                    <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${Stats})`, backgroundSize: "cover" }} className='background-img-stats'>
                                        <ChampStats champion={champion} itemsBuff={itemsBuff} level={level} setIncreaseLevel={setIncreaseLevel} setDecreaseLevel={setDecreaseLevel} increaseLevel={increaseLevel} decreaseLevel={decreaseLevel} setLevel={setLevel} />
                                    </div>
                                </div>
                            </div>



                            {
                                /**
                                    * *Champ Inventory div
                                    * TODO : Component + SCSS
                                */
                            }
                            <div className='fourth-block'>
                                <div className="col-12">
                                    <ChampStuff setStuff={setStuff} selectedStuff={selectedStuff} setSelectedItem={setSelectedItem} setItemsBuff={setItemsBuff} />

                                </div>
                            </div>
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
                            <div className='second-block'>
                                <div className="col-xl-10 col-md-9 col-sm-8 col-vsm me-2">
                                    <ChampItemsList setSelectedItem={setSelectedItem} selectedItem={selectedItem} setStuff={setStuff} selectedStuff={selectedStuff} />
                                    {/* <hr className="mt-5 mb-5"></hr> */}
                                </div>
                                <div className="col-xl-2 col-md-3 col-sm-4 col-vsm">
                                    <ChampItemDetails selectedItem={selectedItem} setStuff={setStuff} selectedStuff={selectedStuff} />
                                </div>
                            </div>





                            {
                                /**
                                    * *Champ Links div
                                    * ? this component already exists
                                    * TODO : Component + SCSS
                                */
                            }

                            <div className="third-block">
                                <hr className="mt-3 mb-5"></hr>
                                <ChampLinks selectedKey={selectedKey} champion={champion} champCard={champCard} currentChampLinks={currentChampLinks} topRef={topRef} />
                            </div>


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

