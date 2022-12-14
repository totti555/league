import './ChampCard.scss'
import FlecheBas from "../../assets/Common/fleche-bas.png"
import Links from "../../assets/Links/Links.png"
import Family from "../../assets/Links/Family.png"
import Friends from "../../assets/Links/Friends.png"
import Allie from "../../assets/Links/Allie.png"
import Ennemy from "../../assets/Links/Ennemy.png"
import Heart from "../../assets/Links/Heart.png"
import Cross from "../../assets/Links/Cross.png"
import Mentor from "../../assets/Links/Mentor.png"
import noMastery from "../../assets/Mastery/no_mastery.png"
import { useState, useEffect } from 'react'
import { champList } from "../../datas/lolChamp";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";


const ChampCard = ({ champ, setCurrentChamp, setChampList, setCurrentChampLinks, currentChampLinks, linksType, setChampName, champCardImg, summoner, summonerMastery }) => {

    /**
        * *component to display the champion's cards
        * CSS file : Champcard.scss
        * Components : ChampMemo
        * ? props
    */

    /**
        * *to display/hide the champion attributes (role, post, function,...) when clicking on the card 
        * @param displayAttibutes
    */

    const [displayAttributes, handleClickAttributes] = useState(false);
    const location = useLocation();

    /**
       * *to display/hide the champion links when clicking on the links button
       * @param displayLinks
    */

    const [displayLinks, handleClickLinks] = useState(false);



    function canDisplayAttributes(name) {
        handleClickAttributes(!displayAttributes);
    }

    /**
       * *to display the champion links when clicking on the link button
       * @param champ.linksWith
       * @param champ setChampList()
       * @param displayLinks
    */

    function fetchByChampLinks() {
        // reset the research in the search bar
        setChampName('');
        // get the champ links
        const linksWith = champ.linksWith.map((lw) => lw);
        // get the name of the champ links
        const champLinksWith = Object.keys(linksWith[0]);
        // get the duplicates element
        var duplicates = champList.filter(function (c) {
            return champLinksWith.indexOf(c.name.replaceAll(' ', '_')) !== -1;
        });

        // concat with the champ selected
        const result = [champ, ...duplicates];
        setChampList(result);
        setCurrentChampLinks(champ.linksWith[0]);
        handleClickLinks(!displayLinks);

    }

    /**
       * *to hind champion links and to reset to the basic list of champions
       * @param displayLinks
       * TODO : Fix bug when we select another champ for links
       * TODO : Change this : setChampList(champList), we should get the last state of champ beforee clicking ?
    */

    function resetChampLinks() {
        handleClickLinks(!displayLinks); // ca va juste cacher celui de la carte et pas les autres
        setCurrentChampLinks(null); // reset champ links
        setChampList(champList);
    }

    const nameWithSpace = (champName) => {
        // https://stackoverflow.com/questions/15369566/putting-space-in-camel-case-string-using-regular-expression#:~:text=Requirement%3A%20Split%20a%20camel%20case,not%20incur%20between%20capital%20letters.&text=If%20you%20have%20more%20than,flag%2C%20to%20match%20them%20all.
        const expetionnalName = ['BelVeth', 'KaiSa', 'KogMaw', 'ChoGath', 'RekSai'];
        if (expetionnalName.includes(champName)) {
            var rex = /([A-Z])([A-Z])([a-z])|([a-z])([A-Z])/g;
            const name = champName.replace(rex, '$1$4\'$2$3$5');
            return name;
        }
        else {
            var rex = /([A-Z])([A-Z])([a-z])|([a-z])([A-Z])/g;
            const name = champName.replace(rex, '$1$4 $2$3$5');
            return name;
        }
    }




    // useEffect(() => {
    //     if (summonerMasteries.length) {
    //         const currentSummonerMastery = summonerMasteries.find((c) => champ.key === c.championId);
    //         console.log(currentSummonerMastery);
    //         setSummonerMastery(currentSummonerMastery);
    //     }

    // }, [summonerMasteries]);


    const championMasteryLevel = (mastery) => {
        if (mastery === 1 || mastery === 2 || mastery === 3) {
            return 4
        }
        else
            return mastery;
    }



    return (
        /**
            * * champ background image
            * ? text-white class useless ?
        */
        <>
            {<div className='champ-card text-white' onClick={() => location.pathname == '/list' && setCurrentChamp(champ.name)} style={{ backgroundImage: `url(${location.pathname == '/list' ? champ.image : champCardImg})`, backgroundSize: "cover" }}>
                {displayAttributes ? (
                    <img className="icon-gold nav-chevron-animation" onClick={() => canDisplayAttributes(champ.name)} src={FlecheBas} alt="Arrow bottom" width="30px" height="30px"></img>
                ) : <img className="icon-gold nav-chevron-animation-inverse" onClick={() => canDisplayAttributes(champ.name)} src={FlecheBas} alt="Arrow top" width="30px" height="30px"></img>}

                {displayAttributes && (<ChampMemo champ={champ} display={displayAttributes} />)}

                {

                    /**
                        * * Img to display or hide links
                        * ?Display : Selected or Cross img
                        * Hide : Family img
                        * ../assets/Links
                    */
                }




                <div className='icon-left-side'>
                    <div className='d-flex flex-column'>

                        {
                            /*
                            displayLinks ?
                                (<img onClick={resetChampLinks} src={Cross} alt="Cancel" title='Reset links' width="25px" height="25px"></img>) :
                                (
                                    champ.linksWith ?
                                        (<img onClick={fetchByChampLinks} src={Links} alt="Links" title='Show links' width="30px" height="30px"></img>)
                                        : null
                                )
                                */
                        }


                        {
                            // To Insert when CSS ready

                            summoner &&
                            <>
                                {summonerMastery ?
                                    <div className='mastery-content'>
                                        <div className='mastery-icon'>
                                            <img src={require(`../../assets/Mastery/mastery_${summonerMastery.championLevel}.png`)}
                                                alt='mastery' title={`M${summonerMastery.championLevel} ${summonerMastery.championPoints} pts`} width='48px'></img>
                                            <p className='title mastery-points'>{summonerMastery.championPoints}</p>
                                        </div>
                                        <img className='mastery-banner' src={require(`../../assets/Mastery/mastery_${championMasteryLevel(summonerMastery.championLevel)}banner.png`)}
                                            alt='mastery' title={`M${summonerMastery.championLevel} ${summonerMastery.championPoints} pts`} height='64px' width='48px'></img>
                                    </div>
                                    :
                                    <div>
                                        <div className='mastery-icon'>
                                            <img src={noMastery} alt='no mastery' title='No mastery' width='48px'></img>
                                            <p className='title'>0pt</p>
                                        </div>
                                        <img className='mastery-banner no-mastery' src={require(`../../assets/Mastery/mastery_0banner.png`)}
                                            alt='no-mastery' title={`No mastery pts`} height='64px' width='48px'></img>
                                    </div>
                                }

                            </>
                        }
                    </div>
                </div>


                {
                    /**
                        * * Img according to links
                        * ../assets/Links
                    */
                }

                {(<div className='links-type champ-links-memo '>

                    {
                        /(Friends)/.test(linksType) ?
                            (<div className='display-links'>
                                <img className="card-icon" src={Friends} alt="Friend" width="30px" height="30px"></img>
                                <p className='title text-memo'>{linksType}</p>
                                <div className='border-bottom-links'></div>
                            </div>) :
                            /(Allie)/.test(linksType) ?
                                (<div className='display-links'>
                                    <img className="card-icon" src={Allie} alt="Allie" width="30px" height="30px"></img>
                                    <p className='title text-memo'>{linksType}</p>
                                    <div className='border-bottom-links'></div>
                                </div>) :
                                /Family|Sister|Brother/.test(linksType) ?
                                    (<div className='display-links'>
                                        <img className="card-icon" src={Family} alt="Family" width="30px" height="30px"></img>
                                        <p className='title text-memo'>{linksType}</p>
                                        <div className='border-bottom-links'></div>
                                    </div>) :
                                    /(Ennemy)/.test(linksType) ?
                                        (<div className='display-links'>
                                            <img className="card-icon" src={Ennemy} alt="Ennemy" width="30px" height="30px"></img>
                                            <p className='title text-memo'>{linksType}</p>
                                            <div className='border-bottom-links'></div>
                                        </div>) :
                                        /Boyfriend|Girlfriend/.test(linksType) ?
                                            (<div className='display-links'>
                                                <img className="card-icon" src={Heart} alt="Boyfriend Girlfriend" width="30px" height="30px"></img>
                                                <p className='title text-memo'>{linksType}</p>
                                                <div className='border-bottom-links'></div>
                                            </div>) :
                                            /Mentor|Apprentice/.test(linksType) ?
                                                (<div className='display-links'>
                                                    <img className="card-icon" src={Mentor} alt="Mentor" width="30px" height="30px"></img>
                                                    <p className='title text-memo'>{linksType}</p>
                                                    <div className='border-bottom-links'></div>
                                                </div>) : null
                    }
                    {
                        /**
                            * * Add "?" Img if it's potential 
                            * ../assets/Links
                        */
                    }
                    {/* {
                    /(Potential)/.test(linksType) ?
                        (<div className='display-links'>
                            <img className="card-icon" src={Cross} alt="Unknown" width="30px" height="30px"></img>

                        </div>) : null

                } */}
                    {/* <div className="border-bottom-links"></div> */}
                </div>)
                }
                <div className='champ-name'>
                    <h3><span className='title'>{nameWithSpace(champ.name)}</span></h3>
                </div>

            </div>}
        </>

    )
}

const ChampMemo = ({ champ }) => {

    /**
        * *component to display the attributes 
        * TODO : Use one generic component for all attributes 
    */

    const navigate = useNavigate();
    const toComponentB = (champ) => {
        let name;
        const exceptionalName = ['BelVeth', 'KaiSa', 'KogMaw', 'ChoGath', 'RekSai'];
        if (exceptionalName.includes(champ.name)) {
            const minName = champ.name.toLowerCase();
            name = minName.charAt(0).toUpperCase() + minName.slice(1);
        }
        else name = champ.name;
        navigate(`/about_champ/${champ.name}`, { state: { key: champ.key, name: champ.name } });
    }


    return (

        <div className=" filters-list-type">
            <div className='champ-memo'>
                {
                    /**
                        * * Champion damages type part
                        * Include the img in /assets/Damages-Types
                        * Animation when hovering with .display-word-animation
                        * ! Depreciated : bad name for the class, should be change
                        * @param champ.damages_types
                    */
                }
                <div className='display-world-animation'>
                    {champ.damages_type === "AD" ?
                        (<div>
                            <img src={require(`../../assets/Damages-Types/long-sword.webp`)} alt="AD damages" width="30px" height="30px"></img>
                            <p className='title text-memo'>AD</p>
                            <hr className='hr-color' />
                        </div>)
                        :
                        (<div>
                            <img src={require(`../../assets/Damages-Types/amplifying-tome.webp`)} alt="AP damages" width="30px" height="30px"></img>
                            <p className='title text-memo'>AP</p>
                            <hr className='hr-color' />
                        </div>)
                    }
                </div>

                {
                    /**
                        * * Champion role part
                        * Include the img in /assets/Post
                        * @param champ.role
                    */
                }
                <div className='display-world-animation'>
                    {champ.role.map((role) => (
                        <div key={role}>
                            <img src={require(`../../assets/Post/${role}.png`)} alt="Champion post" width="38px" height="38px"></img>
                            <p className="title text-memo" key={role}>{role}</p>
                            <hr className='hr-color ' />
                        </div>
                    ))}
                </div>

                {
                    /**
                        * * Champion type part
                        * Include the img in /assets/Type
                        * @param champ.type
                    */
                }
                <div className='display-world-animation'>
                    {champ.type.map((type) => (
                        <div key={type}>
                            <img src={require(`../../assets/Type/${type}.png`)} alt="Champion type" width="30px" height="30px"></img>
                            <p className='title text-memo'>{type}</p>
                            <hr className='hr-color hr-bot hr-top' />
                        </div>
                    ))}
                </div>

                {
                    /**
                        * * Champion world part
                        * Include the img in /assets/Region
                        * !Depreciated : Check div with border-bottom, not like the others attributes
                        * @param champ.world
                    */
                }
                <div className='display-world-animation'>
                    <img src={require(`../../assets/Region/${champ.world.replace(' ', '_')}.png`)} alt="Champion world" width="30px" height="30px"></img>
                    <p className='title text-memo'>{champ.world}</p>
                    <hr className='hr-color hr-bot hr-top' />
                </div>


                <div className='display-world-animation'>
                    <div>
                        <a onClick={() => { toComponentB(champ) }}>
                            <img src={require(`../../assets/Common/plus.png`)} className="date-logo" alt="Champion world" width="30px" height="30px"></img>
                        </a>
                    </div>
                    <p className='title text-memo'>See more</p>
                </div>


                <div className='border-bottom pb-2'></div>

            </div>
        </div>


    )
}

export default ChampCard;