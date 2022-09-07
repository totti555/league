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
import ChampHeader from "../components/Champ/ChampHeader";
import ChampSearch from "../components/Champ/ChampSearch";

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

        const findChampKey = champList.find((champ) => champName == champ.name);
        console.log("findChampKey", findChampKey);
        setCurrentChampLinks(findChampKey.linksWith);
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
    }, [champName]);



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

                                }
                                {/* <div>
                                    <ChampHeader champion={champion} level={level} setIncreaseLevel={setIncreaseLevel} setDecreaseLevel={setDecreaseLevel} increaseLevel={increaseLevel} decreaseLevel={decreaseLevel} setLevel={setLevel} />
                                    <ChampSpells champion={champion} />
                                </div> */}

                                {
                                    /**
                                        * *Champ Card div
                                        * ? this component already exists
                                        * TODO : Component + SCSS
                                    */
                                }
                                <div className="mx-5">
                                    <ChampSearch />
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
                            {/* <div className='d-flex justify-content-between second-block'>
                                <ChampItemsList setSelectedItem={setSelectedItem} />
                                <hr></hr>
                                <ChampItemDetails selectedItem={selectedItem} setStuff={setStuff} selectedStuff={selectedStuff} />
                            </div> */}





                            {
                                /**
                                    * *Champ Links div
                                    * ? this component already exists
                                    * TODO : Component + SCSS
                                */
                            }

                            {/* <div className="third-block">
                                <ChampLinks selectedKey={selectedKey} champion={champion} champCard={champCard} currentChampLinks={currentChampLinks} />
                            </div> */}



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

