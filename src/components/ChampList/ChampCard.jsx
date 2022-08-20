import './ChampCard.scss'
import FlecheBas from "../../assets/fleche-bas.png"
import { useState } from 'react'

const ChampCard = ({ champ, setCurrentChamp }) => {

    const [displayAttributes, handleClickAttributes] = useState(false);

    function canDisplayAttributes(name) {
        setCurrentChamp(name);
        handleClickAttributes(!displayAttributes);
    }

    return (
        <div className='champ-card text-white' onClick={() => canDisplayAttributes(champ.name)} style={{ backgroundImage: `url(${champ.image})`, backgroundSize: "cover" }}>
            {/* TODO : Insert img */}
            {/* <img src={champ.photo}></img> */}
            {displayAttributes ? (
                <img className="nav-chevron-card nav-chevron-animation" src={FlecheBas} alt="Arrow bottom" width="30px" height="30px"></img>
            ) : <img className="nav-chevron-card nav-chevron-animation-inverse" src={FlecheBas} alt="Arrow top" width="30px" height="30px"></img>}

            {displayAttributes && (<ChampMemo champ={champ} display={displayAttributes} />)}



            <div className='champ-name'>
                <h3><span className='title'>{champ.name}</span></h3>
            </div>

        </div>

    )
}

const ChampMemo = ({ champ }) => {

    // const [displayWorld, handleClickWorld] = useState(false);

    // function canDisplayWorld() {
    //     handleClickWorld(!displayWorld);
    // }


    return (

        <div className=" filters-list-type">
            <div className='champ-memo'>

                {/* TODO : Image for damages_types*/}
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

                {/* <hr className='hr-color' /> */}

                {/* TODO : Image for roles*/}
                <div className='display-world-animation'>
                    {champ.role.map((role) => (
                        <div key={role}>
                            <img src={require(`../../assets/Post/${role}.png`)} alt="Champion post" width="38px" height="38px"></img>
                            <p className="title text-memo" key={role}>{role}</p>
                            <hr className='hr-color ' />
                        </div>
                    ))}
                </div>

                {/* <hr className='hr-color' /> */}
                <div className='display-world-animation'>
                    {champ.type.map((type) => (
                        <div key={type}>
                            <img src={require(`../../assets/Type/${type}.png`)} alt="Champion type" width="30px" height="30px"></img>
                            <p className='title text-memo'>{type}</p>
                            <hr className='hr-color hr-bot hr-top' />
                        </div>
                    ))}
                </div>
                {/* <hr className='hr-color' /> */}
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