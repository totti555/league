import './ChampCard.scss'
import FlecheBas from "../../assets/fleche-bas.png"
import { useState } from 'react'

const ChampCard = ({ champ }) => {

    const [displayAttributes, handleClickAttributes] = useState(false);

    function canDisplayAttributes() {
        handleClickAttributes(!displayAttributes);
    }

    return (
        <div className='champ-card text-white' onClick={canDisplayAttributes} style={{ backgroundImage: `url(${champ.image})`, backgroundSize: "cover" }}>
            {/* TODO : Insert img */}
            {/* <img src={champ.photo}></img> */}
            {displayAttributes ? (
                <img className="nav-chevron-card nav-chevron-animation" src={FlecheBas} width="30px" height="30px"></img>
            ) : <img className="nav-chevron-card nav-chevron-animation-inverse" src={FlecheBas} width="30px" height="30px"></img>}

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

        <div className="filters-list-type">
            <div className='champ-memo'>
                {/* TODO : Image for damages_types*/}
                <p className='title'>{champ.damages_type === "AD" ? 'AD' : 'AP'}</p>
                {/* TODO : Image for roles*/}
                {champ.role.map((role) => (
                    <p className="title" key={role}>{role}</p>
                ))}
                <hr className='hr-color' />
                <div className='display-world-animation'>
                    <img src={require(`../../assets/Region/${champ.world}.png`)}></img>
                    <p className='title text-memo'>{champ.world}</p>
                </div>
                <div className='border-bottom'></div>
            </div>
        </div>


    )
}

export default ChampCard;