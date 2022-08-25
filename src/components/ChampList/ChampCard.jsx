import './ChampCard.scss'
import FlecheBas from "../../assets/fleche-bas.png"
import { useState } from 'react'
import { champList } from "../../datas/lolChamp";

const ChampCard = ({ champ, setCurrentChamp, setChampList }) => {

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

    function canDisplayAttributes(name) {
        setCurrentChamp(name);
        handleClickAttributes(!displayAttributes);
    }

    function fetchByChampLinks() {
        // get the champ links
        const linksWith = champ.linksWith.map((lw) => lw);
        // get the name of the champ links
        const champLinksWith = Object.keys(linksWith[0]);
        // get the duplicates element
        var duplicates = champList.filter(function (c) {
            return champLinksWith.indexOf(c.name.replaceAll(' ', '_')) != -1;
        });

        // concat with the champ selected
        const result = [champ, ...duplicates];
        setChampList(result);
    }


    return (
        /**
            * * champ background image
            * ? text-white class useless ?
        */
        <div className='champ-card text-white' onClick={() => canDisplayAttributes(champ.name)} style={{ backgroundImage: `url(${champ.image})`, backgroundSize: "cover" }}>
            {displayAttributes ? (
                <img className="nav-chevron-card nav-chevron-animation" src={FlecheBas} alt="Arrow bottom" width="30px" height="30px"></img>
            ) : <img className="nav-chevron-card nav-chevron-animation-inverse" src={FlecheBas} alt="Arrow top" width="30px" height="30px"></img>}

            {displayAttributes && (<ChampMemo champ={champ} display={displayAttributes} />)}


            <div onClick={fetchByChampLinks}><h3><span className='title'>Click ici</span></h3></div>
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