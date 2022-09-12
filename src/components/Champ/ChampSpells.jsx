import './ChampSpells.scss'
import Q from '../../assets/Spells/a.png'
import W from '../../assets/Spells/q.png'
import E from '../../assets/Spells/e.png'
import R from '../../assets/Spells/r.png'
import P from '../../assets/Spells/p.png'
import { useEffect, useState } from 'react'


const ChampSpells = (props) => {
    const champion = props.champion;
    const championCard = props.championCard;
    const spellsLetterImg = [Q, W, E, R];
    const spellsLetter = ['Q', 'W', 'E', 'R'];
    const [formattedKey, setFormattedKey] = useState('');
    const [letter, setLetter] = useState('Q')


    const getVideos = (champion) => {

        var key = champion.key + "";
        while (key.length < 4) key = "0" + key;
        setFormattedKey(key);
    }

    const spellSelected = (letter) => {
        let myVid = document.getElementById('video');
        setLetter(letter);
        myVid.load();
    }

    useEffect(() => {
        getVideos(champion);
    }, [champion]);


    return (

        <div className="champ-spells mb-2" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${`${championCard.image}`}`, backgroundSize: "cover" }}>
            {
                (champion && championCard) && (<div className='background-spells ps-3 pe-3 '>
                    <h2 className="title">SPELLS :</h2>
                    <div className='select-spells '>

                        <div className='gradient-border d-flex flex-wrap mt-3 mb-3' id="box">
                            {
                                champion.spells.map((s, index) =>
                                    <div className='m-2' key={index} onClick={() => spellSelected(spellsLetter[index])}>
                                        <img className="spell-picture" alt='spell' src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/spell/${s.image.full}`} width='64px' height="64px"></img>
                                    </div>
                                )
                            }
                        </div>

                    </div>

                    <hr />
                    {formattedKey &&
                        <div className='spell-video d-flex justify-content-center'>
                            <video autoPlay muted loop className='video' id='video'>
                                <source src={`https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${formattedKey}/ability_${formattedKey}_${letter}1.webm`} type="video/webm"></source>
                            </video>
                        </div>
                    }
                    <hr />
                    <div className='align-self-center mt-2 champ-spells-overflow'>
                        {/* <h3 className='title'>PASSIVE:</h3> */}
                        <div onClick={() => spellSelected('P')}>
                            <Spells image={champion.passive.image.full} name={champion.passive.name} description={champion.passive.description} isPassive={true} letter={P} />
                        </div>
                        {/* <h3 className='title'>SPELLS:</h3> */}
                        {
                            champion.spells.map((s, index) =>

                            (
                                <div key={s.id} onClick={() => spellSelected(spellsLetter[index])}>
                                    <Spells image={s.image.full} name={s.name} description={s.description} isPassive={false} letter={spellsLetterImg[index]} />
                                </div>
                            ))
                        }

                    </div>
                </div>)
            }

        </div>
    )
}


const Spells = (props) => {

    const image = props.image;
    const name = props.name;
    const description = props.description;
    const isPassive = props.isPassive;
    const letter = props.letter;

    return (
        <div className="my-1 spell-content  mx-3" >
            <div className='spell-letter'>
                {/* {letter} */}
                <img src={letter} width='98px'></img>
            </div>
            <div className="spell-img d-flex justify-content-start ms-2">
                {isPassive ?
                    <img className="spell-picture" alt='spell' src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/passive/${image}`} width='48px' height="48px"></img>
                    :
                    <img className="spell-picture" alt='spell' src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/spell/${image}`} width='48px' height="48px"></img>
                }
                <div className='ms-2'>
                    <p className="entity-title font-weight-bold mb-1">{name}</p>
                    <p className='spell-cooldown small mb-0'>10 / 15 / 20 / 25 / 30</p>
                </div>

            </div>


            <div className='ms-1 mt-2 position-relative'>
                <p className="spell-description m-0" dangerouslySetInnerHTML={{ __html: description }} />
            </div>
            <hr />
        </div>
    )
}

export default ChampSpells;