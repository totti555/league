import "../style/AboutChamp.scss";
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { champList } from "../datas/lolChamp";
import ChampSpells from "../components/Champ/spells/ChampSpells";
import ChampStats from "../components/Champ/stats/ChampStats";
import ChampItemsList from "../components/Champ/items/ChampItemsList";
import ChampItemDetails from "../components/Champ/items/ChampItemDetails";
import ChampStuff from "../components/Champ/items/ChampStuff";
import ChampLinks from "../components/Champ/links/ChampLinks";
import ChampCard from "../components/ChampList/ChampCard";
import ChampHeader from "../components/Champ/header/ChampHeader";
import ChampSearch from "../components/Champ/search/ChampSearch";
import Stats from '../assets/Common/epees-croisees.png';
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import ChampSkins from "../components/Champ/skins/ChampSkins";
import BlueEssence from '../assets/Common/blue-essence.png';
import Rp from '../assets/Common/rp.png';
import Calendar from '../assets/Common/calendar.png';
import ChampSideBar from "../components/Champ/sidebar/ChampSideBar";
import ChampMastery from "../components/Champ/mastery/ChampMastery";




{
    /**
         * *View to display the info of one champion
         * SCSS file : AboutChamp.scss
         * WORK IN PROGRESS / BETA
         * Components : header => ChampHeader, ChampSideBar
         *              1st part => ChampSpells, ChampSearch, ChampMastery, ChampCard, ChampSkins
         *              2nd part => ChampStats, ChampStuff
         *              3rd part => ChampItemsList, ChampItemDetails
         *              4th part => ChampLinks
         *              5th part => Footer
     */
}

const AboutChamp = (props) => {

    const [champion, setChampion] = useState([]);
    const [championDetails, setChampionDetails] = useState([]);
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
    const linksRef = useRef(null);
    const itemsRef = useRef(null);
    const champRef = useRef(null)
    const searchRef = useRef(null);
    const [championsSpells, setChampionSpells] = useState([]);
    const [spellDatas, setSpellDatas] = useState([]);
    /**
        * Background image and card image for each skins of a champion
    */
    const [backgroundImg, setBackgroundImg] = useState('');
    const [champCardImg, setChampCardImg] = useState('');

    const summoner = props.summoner;
    const [summonerMastery, setSummonerMastery] = useState([]);
    const summonerRank = props.summonerRank;


    const api_key = process.env.REACT_APP_API_KEY;
    /**
         * *to get the pathparam of the selected champ
         @param champName
     */

    let { champName } = useParams();
    let navigate = useNavigate();

    const champDetails = () => {
        const axios = require('axios').default;
        let champKey;
        let name;
        /**
             * get the key of the selected champ
             ** key is linked with ddragon datas
        */
        const findChampByRouteName = champList.find((champ) => champName.toLowerCase() === champ.name.toLowerCase());

        if (findChampByRouteName) {
            // set the links of the champion
            setCurrentChampLinks(findChampByRouteName.linksWith);
        }
        else {
            console.log('Route has been not found => redirection to Kaisa default view');
            navigate("/about_champ/Kaisa");
        }

        // 145 : Key of default value (Kai'sa)
        champKey = findChampByRouteName ? findChampByRouteName.key : 145;
        // Only usefull for props of ChampLinks 
        setKey(champKey);

        // init the chammpion card 
        setChampCard(findChampByRouteName);

        // Some pathparam exception for Belveth, Kaisa, Chogath and Wukong to match with ddragon datas
        const exceptionalName = ['BelVeth', 'KaiSa', 'ChoGath'];
        if (exceptionalName.includes(findChampByRouteName.name)) {
            const minName = findChampByRouteName.name.toLowerCase();
            name = minName.charAt(0).toUpperCase() + minName.slice(1);
        }
        else if (name === 'Wukong') {
            name = 'MonkeyKing';
        }
        else name = findChampByRouteName.name;


        /**
            ** get the ddragon datas on the selected champion
            * champ square assets / champ name / champ subtitle 
            * ? Should we remove ddragon instead of ccdragon ?
            @param champion
        */


        axios.get(`http://ddragon.leagueoflegends.com/cdn/12.16.1/data/en_US/champion/${name}.json`)
            .then(function (response) {
                // handle success
                const obj = response.data.data
                const data = Object.values(obj);
                console.log('ddragon datas :', data[0])
                setChampion(data[0]);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed

            });

        /**
            ** get the meriaki datas on the selected champion
                * champ lore / champ price (BE / RP) / release / skins infos 
                * backend call 
            * 
            @param championDetails
        */

        axios.get(`http://localhost:8080/getAllChampInfos/${name}`, { mode: 'cors' })
            .then(function (response) {
                // handle success
                console.log('Meriaki datas :', response.data);
                setChampionDetails(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });


        /**
            ** get the ccdragon datas on the selected champion
                * champ spells
            * 
            @param championsSpells
        */


        axios.get(`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champions/${champKey}.json`)
            .then(function (response) {
                const obj = response.data;
                console.log('cdragon datas :', response.data);
                setChampionSpells(obj)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed

            });


        // axios.get(`http://cdn.merakianalytics.com/riot/lol/resources/latest/en-US/champions.json?api_key=${api_key}`)
        //     .then(function (response) {
        //         // handle success
        //         console.log('MERAKIANA', response);

        //     })
        //     .catch(function (error) {
        //         // handle error
        //         console.log(error);
        //     })
        //     .then(function () {
        //         // always executed

        //     });

        // axios.get(`http://cdn.merakianalytics.com/riot/lol/resources/latest/en-US/champions.json`, { headers: { Authorization: api_key } })
        //     .then(response => {
        //         // If request is good...
        //         console.log('MERAKIANA', response);
        //     })
        //     .catch((error) => {
        //         console.log('error ' + error);
        //     });


        // axios.get(`https://raw.communitydragon.org/12.2/game/data/characters/${champName.toLowerCase()}/${champName.toLowerCase()}.bin.json`)
        //     .then(function (response) {
        //         // handle success
        //         const obj = response.data;
        //         // setChampion(obj)
        //         console.log('allo c moii');
        //         console.log("data", obj);
        //         setSpellDatas(obj);
        //         // setChampionSpells(obj)
        //         // const data = Object.values(obj);
        //         // setChampion(data[0]);

        //     })
        //     .catch(function (error) {
        //         // handle error
        //         console.log(error);
        //     })
        //     .then(function () {
        //         // always executed

        //     });



    }

    /**
        * Init axios requests when pathparam exists
    */

    useEffect(() => {
        champDetails();
    }, [champName]);


    /**
        ** axios request to get the Summoner mastery
        * backend call
        @param summonerMastery
    */

    useEffect(() => {

        const axios = require('axios').default;

        if (summoner.id && champCard.key) {
            axios.get(`http://localhost:8080/getSummoner/${summoner.id}/champion/${champCard.key}`, { mode: 'cors' })
                .then(function (response) {
                    // handle success
                    console.log('Summoner :', summoner);
                    console.log('Summoner mastery  :', response.data);
                    setSummonerMastery(response.data);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });
        }


    }, [summoner, champName, champion]);

    // useEffect(() => {
    //     const axios = require('axios').default;
    //     console.log(summoner);
    //     if (summoner.id) {
    //         axios.get(`http://localhost:8080/summoner/${summoner.puuid}/matches`, { mode: 'cors' })
    //             .then(function (response) {
    //                 // handle success
    //                 console.log('Summoner matches  :', response.data);
    //                 // setSummonerMatches()
    //             })
    //             .catch(function (error) {
    //                 // handle error
    //                 console.log(error);
    //             })
    //             .then(function () {
    //                 // always executed
    //             });


    //         axios.get(`http://localhost:8080/summoner/matches/EUW1_6093332491`, { mode: 'cors' })
    //             .then(function (response) {
    //                 // handle success
    //                 console.log('SUMMONER MATCH  :', response.data);
    //             })
    //             .catch(function (error) {
    //                 // handle error
    //                 console.log(error);
    //             })
    //             .then(function () {
    //                 // always executed
    //             });
    //     }


    // }, [summoner]);



    return (

        <>
            <div className="about-content text-white" >
                {/* <h1 className="text-white">Coming soon</h1> */}
                {champion.name &&
                    (
                        <div>
                            {

                                /* <div className="position-relative">
                                <img
                                    alt="Champ banner"
                                    src={process.env.PUBLIC_URL + `/Background/${champCard.name}.jpg`}
                                    width="100%"
                                ></img>
                                <ChampHeader champion={champion} level={level} setIncreaseLevel={setIncreaseLevel} setDecreaseLevel={setDecreaseLevel} increaseLevel={increaseLevel} decreaseLevel={decreaseLevel} setLevel={setLevel} />

                            </div> */}
                            <div className="about-background position-relative" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${backgroundImg}`, backgroundSize: "cover" }} ref={topRef}>
                                <ChampHeader champion={champion} level={level} setIncreaseLevel={setIncreaseLevel} setDecreaseLevel={setDecreaseLevel} increaseLevel={increaseLevel} decreaseLevel={decreaseLevel} setLevel={setLevel} champCard={champCard} />
                                <ChampSideBar champion={champion} topRef={topRef} champRef={champRef} searchRef={searchRef} itemsRef={itemsRef} linksRef={linksRef} />
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
                                <div className="col-xl-7 col-md-7 col-sm-7 col-vsm p-3 position-relative about-spells">
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
                                <div className="col-xl-5 col-md-5 col-sm-5 col-vsm align-self-between" ref={champRef}>
                                    <div className="p-3">
                                        <ChampSearch setChampion={setChampion} champCardImg={champCardImg} searchRef={searchRef} />
                                        <br />
                                        {summoner.id && summonerMastery.championLevel &&
                                            <ChampMastery champion={champion} summoner={summoner} summonerMastery={summonerMastery} summonerRank={summonerRank} />
                                        }
                                        <>
                                            <div className=" d-flex position-relative">
                                                <div className="background-champ-card ms-0" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_${champion.skins[0].num}.jpg`}`, backgroundSize: "cover" }}>
                                                    <div className="gradient-champ-card"></div>
                                                </div>
                                                <div className="card-content d-flex flex-column">
                                                    {champCard && summoner && summonerMastery.championLevel &&
                                                        <div className="d-flex justify-content-center">
                                                            <ChampCard champ={champCard} champCardImg={champCardImg} summoner={summoner} summonerMastery={summonerMastery} />
                                                        </div>}

                                                    {((champCard && !summoner.id) || (champCard && summoner.id && !summonerMastery.championLevel)) &&
                                                        <div className="d-flex justify-content-center">
                                                            <ChampCard champ={champCard} champCardImg={champCardImg} summoner={summoner} />
                                                        </div>}



                                                    {championDetails.id &&
                                                        <>
                                                            <div className="d-flex justify-content-between champ-prices">
                                                                <p>{championDetails.price.blueEssence} <span><img alt='blue-essence' title={`${championDetails.price.blueEssence} Blue essence`} src={BlueEssence} width='15px'></img></span></p>
                                                                <p>{championDetails.price.rp} <span><img alt='rp' title={`${championDetails.price.rp} RP`} src={Rp} width='20px'></img></span></p>
                                                                <p>{championDetails.releaseDate} <span><img alt='date' title='Release date' src={Calendar} className='about-icon-gold' width='20px'></img></span></p>
                                                            </div>

                                                            <div>
                                                                <p className="champ-real-name m-0">{championDetails.fullName ? championDetails.fullName : championDetails.name}</p>
                                                                <p className="champ-lore m-0">{championDetails.lore}</p>
                                                            </div>
                                                        </>
                                                    }
                                                </div>


                                                {
                                                    /**
                                                        * *Champ Stats div
                                                        * TODO : SCSS
                                                    */
                                                }
                                            </div>
                                        </>
                                    </div>
                                    <div className="position-relative about-skins">
                                        {championDetails.id && <ChampSkins champion={championDetails} setBackgroundImg={setBackgroundImg} setChampCardImg={setChampCardImg} />}
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
                                <div className="col-12 ">
                                    <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8) 10%, rgba(0, 0, 0, 0.8) 70%, rgb(0, 0, 0, 1) 90%),url(${Stats})`, backgroundSize: "cover" }} className='background-img-stats'>
                                        <ChampStats champion={champion} championDetails={championDetails} itemsBuff={itemsBuff} level={level} setIncreaseLevel={setIncreaseLevel} setDecreaseLevel={setDecreaseLevel} increaseLevel={increaseLevel} decreaseLevel={decreaseLevel} setLevel={setLevel} />
                                    </div>
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
                            <div className='second-block' ref={itemsRef}>
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

                            <div className="third-block" ref={linksRef}>
                                <hr className="mt-3 mb-5"></hr>
                                <ChampLinks selectedKey={selectedKey} champion={champion} champCard={champCard} currentChampLinks={currentChampLinks} topRef={topRef} />
                            </div>


                        </div>

                    )}
                {champion.name && <Footer />}
            </div>


        </>
    )
}

export default AboutChamp;


// const AboutChamp = () => {

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

