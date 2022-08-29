import './ChampCard.scss'
import FlecheBas from "../../assets/fleche-bas.png"
import Links from "../../assets/family.png"
import Family from "../../assets/Links/Family.png"
import Friends from "../../assets/Links/Friends.png"
import Allie from "../../assets/Links/Allie.png"
import Ennemy from "../../assets/Links/Ennemy.png"
import Heart from "../../assets/Links/Heart.png"
import Cross from "../../assets/Links/Cross.png"
import Mentor from "../../assets/Links/Mentor.png"
import { useState } from 'react'
import { champList } from "../../datas/lolChamp";

const ChampCard = ({ champ, setCurrentChamp, setChampList, setCurrentChampLinks, currentChampLinks, linksType }) => {

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
    */

    function resetChampLinks() {
        handleClickLinks(!displayLinks);
        setChampList(champList);
    }

    return (
        /**
            * * champ background image
            * ? text-white class useless ?
        */
        <div className='champ-card text-white' onClick={() => setCurrentChamp(champ.name)} style={{ backgroundImage: `url(${champ.image})`, backgroundSize: "cover" }}>
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

            <div className="family">
                {
                    displayLinks ?
                        (<img onClick={resetChampLinks} className="icon-gold" src={Cross} alt="Arrow bottom" width="25px" height="25px"></img>) :
                        (
                            champ.linksWith ?
                                (<img onClick={fetchByChampLinks} className="icon-gold" src={Links} alt="Arrow bottom" width="30px" height="30px"></img>)
                                : null
                        )
                }

            </div>

            {
                /**
                    * * Img according to links
                    * ../assets/Links
                */
            }

            {(<div className='links-type champ-links-memo '>

                {
                    /(Friends)+/.test(linksType) ?
                        (<div className='display-links'>
                            <img className="card-icon" src={Friends} alt="Friend" width="30px" height="30px"></img>
                            <p className='title text-memo'>{linksType}</p>
                        </div>) :
                        /(Allie)+/.test(linksType) ?
                            (<div className='display-links'>
                                <img className="card-icon" src={Allie} alt="Allie" width="30px" height="30px"></img>
                                <p className='title text-memo'>{linksType}</p>
                            </div>) :
                            /(Ennemy)+/.test(linksType) ?
                                (<div className='display-links'>
                                    <img className="card-icon" src={Ennemy} alt="Ennemy" width="30px" height="30px"></img>
                                    <p className='title text-memo'>{linksType}</p>
                                </div>) :
                                /(Family Sister Brother)+/.test(linksType) ?
                                    (<div className='display-links'>
                                        <img className="card-icon" src={Family} alt="Family" width="30px" height="30px"></img>
                                        <p className='title text-memo'>{linksType}</p>
                                    </div>) :
                                    /(Boyfriend Girlfriend)+/.test(linksType) ?
                                        (<div className='display-links'>
                                            <img className="card-icon" src={Heart} alt="Boyfriend Girlfriend" width="30px" height="30px"></img>
                                            <p className='title text-memo'>{linksType}</p>
                                        </div>) :
                                        /(Mentor Apprentice)+/.test(linksType) ?
                                            (<div className='display-links'>
                                                <img className="card-icon" src={Mentor} alt="Mentor" width="30px" height="30px"></img>
                                                <p className='title text-memo'>{linksType}</p>
                                            </div>) : null
                }
                {
                    /**
                        * * Add "?" Img if it's potential 
                        * ../assets/Links
                    */
                }
                {
                    /(Potential)+/.test(linksType) ?
                        (<div className='display-links'>
                            <img className="card-icon" src={Family} alt="Unknown" width="30px" height="30px"></img>
                            <p className='title text-memo'>{linksType}</p>
                        </div>) : null

                }
            </div>)
            }
            <div className='champ-name'>
                <h3><span className='title'>{champ.name}</span></h3>
            </div>

        </div>

    )
}

const ChampMemo = ({ champ }) => {

    /**
        * *component to display the attributes 
        * TODO : Use one generic component for all attributes 
    */


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
                    <img src={require(`../../assets/Region/${champ.world}.png`)} alt="Champion world" width="30px" height="30px"></img>
                    <p className='title text-memo'>{champ.world}</p>
                </div>
                <div className='border-bottom pb-2'></div>

            </div>
        </div>


    )
}

export default ChampCard;