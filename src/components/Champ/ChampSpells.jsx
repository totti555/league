import './ChampSpells.scss'
import Q from '../../assets/Spells/a.png'
import W from '../../assets/Spells/q.png'
import E from '../../assets/Spells/e.png'
import R from '../../assets/Spells/r.png'
import P from '../../assets/Spells/p.png'
import { useEffect, useState } from 'react'
import MoveSpeed from '../../assets/Stats/Movement_speed.png'


const ChampSpells = (props) => {
    const champion = props.champion;
    const championCard = props.championCard;
    const spellDatas = props.spellDatas;
    const spellsLetterImg = [Q, W, E, R];
    const spellsLetter = ['Q', 'W', 'E', 'R'];
    const [formattedKey, setFormattedKey] = useState('');
    const [letter, setLetter] = useState('Q');
    const championsSpells = props.championsSpells;
    const [damages, setDamages] = useState([]);





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

    useEffect(() => {
        if (document.getElementById('video') !== null) {
            let myVid = document.getElementById('video');
            myVid.load();
        }

    })

    return (

        <div className="champ-spells mb-2" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${`${championCard.image}`}`, backgroundSize: "cover" }}>
            {
                (champion && championCard) && (<div className='background-spells ps-3 pe-3 '>
                    <h2 className="title">SPELLS :</h2>
                    <div className='d-flex justify-content-center spell-header'>
                        <div className='align-self-center mx-2'>
                            <img className="spell-picture" alt='spell' src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/passive/${champion.passive.image.full}`} width='48px' height="48px"></img>
                        </div>
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
                        {/* {championsSpells.spells && <p id='test' dangerouslySetInnerHTML={{ __html: championsSpells.spells[1].dynamicDescription }}></p>} */}
                        {/* <div onClick={() => spellSelected('P')}>
                            <Spells image={champion.passive.image.full} name={champion.passive.name} description={champion.passive.description} isPassive={true} letter={P} tooltip={champion.passive.tooltip} />
                        </div> */}
                        {/* <h3 className='title'>SPELLS:</h3> */}
                        {
                            champion.spells.map((s, index) =>

                            (
                                <div key={s.id} onClick={() => spellSelected(spellsLetter[index])}>
                                    {championsSpells.spells && <Spells championsSpells={championsSpells} spellDatas={spellDatas} spellId={s.id} image={s.image.full} name={s.name} cooldown={s.cooldownBurn} champion={champion} description={championsSpells.spells[index].dynamicDescription} isPassive={false} letter={spellsLetterImg[index]} stringLetter={spellsLetter[index]} tooltip={s.tooltip} setDamages={setDamages} damages={damages} />}
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
    const champion = props.champion;
    const spellId = props.spellId;
    const description = props.description;
    const isPassive = props.isPassive;
    const letter = props.letter;
    const tooltip = props.tooltip;
    const setDamages = props.setDamages;
    const damages = props.damages;
    const stringLetter = props.stringLetter;
    const cooldown = props.cooldown;
    const spellDatas = props.spellDatas;
    const championsSpells = props.championsSpells;





    function changeText() {



        const data = spellDatas[`Characters/${champion.id}/Spells/${spellId}Ability/${spellId}`].mSpell.mDataValues;

        console.log('Pour le spell', stringLetter)

        console.log('changement de texte', spellDatas[`Characters/${champion.id}/Spells/${spellId}Ability/${spellId}`].mSpell.mDataValues);

        // Base Damage
        if (data.find((damages) => damages.mName == `${stringLetter}BaseDamage`)) {
            let str = document.getElementById(`${stringLetter}spell`).innerHTML;
            const baseDamageJson = data.find((damages) => damages.mName == `${stringLetter}BaseDamage`);
            console.log(baseDamageJson);
            const baseDamage = baseDamageJson.mValues[2];
            let textToReplace = `${"@" + stringLetter + "Damage@"}`;
            var re = new RegExp(textToReplace, "g");
            let res = str.replace(re, baseDamage);
            document.getElementById(`${stringLetter}spell`).innerHTML = res;
        }

        // Slow Duration
        if (data.find((damages) => damages.mName == `${stringLetter}SlowDuration`)) {
            let str = document.getElementById(`${stringLetter}spell`).innerHTML;
            const slowDamageJson = data.find((damages) => damages.mName == `${stringLetter}SlowDuration`);
            console.log(slowDamageJson);
            const slowDamage = slowDamageJson.mValues[2];
            let textToReplace = `${"@" + stringLetter + "SlowDuration@"}`;
            var re = new RegExp(textToReplace, "g");
            let res = str.replace(re, `<span style="color:purple;">${slowDamage}</span>`);
            document.getElementById(`${stringLetter}spell`).innerHTML = res;
        }

        //Slow Percentage
        if (data.find((damages) => damages.mName == `${stringLetter}SlowPercentage`)) {
            let str = document.getElementById(`${stringLetter}spell`).innerHTML;
            const slowDamageJson = data.find((damages) => damages.mName == `${stringLetter}SlowPercentage`);
            console.log(slowDamageJson);
            const slowDamage = slowDamageJson.mValues[2];
            console.log(str);
            str = str.replace('*', '_');
            let textToReplace = `${"@" + stringLetter + "SlowPercentage_-100@"}`;
            console.log('to replace', textToReplace);
            var re = new RegExp(textToReplace, "g");
            let res = str.replace(re, `<span style="color:purple;">${slowDamage * -100}</span>`);
            document.getElementById(`${stringLetter}spell`).innerHTML = res;
        }

        // SpellVamp

        if (data.find((damages) => damages.mName == `${stringLetter}SpellVamp`)) {
            let str = document.getElementById(`${stringLetter}spell`).innerHTML;
            const slowDamageJson = data.find((damages) => damages.mName == `${stringLetter}SpellVamp`);
            console.log(slowDamageJson);
            const slowDamage = slowDamageJson.mValues[2];
            let textToReplace = `${"@" + stringLetter + "SpellVamp@"}`;
            var re = new RegExp(textToReplace, "g");
            let res = str.replace(re, `${slowDamage}`);
            document.getElementById(`${stringLetter}spell`).innerHTML = res;
        }

        // Spell Vamp Empowered

        if (data.find((damages) => damages.mName == `${stringLetter}SpellVampEmpowered`)) {
            let str = document.getElementById(`${stringLetter}spell`).innerHTML;
            const slowDamageJson = data.find((damages) => damages.mName == `${stringLetter}SpellVampEmpowered`);
            console.log(slowDamageJson);
            const slowDamage = slowDamageJson.mValues[2];
            let textToReplace = `${"@" + stringLetter + "SpellVampEmpowered@"}`;
            var re = new RegExp(textToReplace, "g");
            let res = str.replace(re, `${slowDamage}`);
            document.getElementById(`${stringLetter}spell`).innerHTML = res;
        }

        // Minion fear duration 

        if (data.find((damages) => damages.mName == `${stringLetter}MinionFearDuration`)) {
            let str = document.getElementById(`${stringLetter}spell`).innerHTML;
            const slowDamageJson = data.find((damages) => damages.mName == `${stringLetter}MinionFearDuration`);
            console.log(slowDamageJson);
            const slowDamage = slowDamageJson.mValues[2];
            let textToReplace = `${"@" + stringLetter + "MinionFearDuration@"}`;
            var re = new RegExp(textToReplace, "g");
            let res = str.replace(re, `${slowDamage}`);
            document.getElementById(`${stringLetter}spell`).innerHTML = res;
        }

        // Move speed bonus


        if (data.find((damages) => damages.mName == `${stringLetter}MovementSpeedBonus`)) {
            let str = document.getElementById(`${stringLetter}spell`).innerHTML;
            const slowDamageJson = data.find((damages) => damages.mName == `${stringLetter}MovementSpeedBonus`);
            console.log(slowDamageJson);
            const slowDamage = slowDamageJson.mValues[2];
            console.log(str);
            str = str.replace('*', '_');
            let textToReplace = `${"@" + stringLetter + "MovementSpeedBonus_100@%"}`;
            console.log('to replace', textToReplace);
            var re = new RegExp(textToReplace, "g");
            let res = str.replace(re, `<span>${Math.round(slowDamage * -100)}% <img src=${MoveSpeed}></img></span>`);
            document.getElementById(`${stringLetter}spell`).innerHTML = res;
        }

        // Delay 
        if (data.find((damages) => damages.mName == `${stringLetter}Duration`)) {
            let str = document.getElementById(`${stringLetter}spell`).innerHTML;
            const slowDamageJson = data.find((damages) => damages.mName == `${stringLetter}Duration`);
            console.log(slowDamageJson);
            const slowDamage = slowDamageJson.mValues[2];
            let textToReplace = `${"@" + stringLetter + "Duration@"}`;
            var re = new RegExp(textToReplace, "g");
            let res = str.replace(re, `${slowDamage}`);
            document.getElementById(`${stringLetter}spell`).innerHTML = res;
        }




    }

    useEffect(() => {
        if (spellDatas[`Characters/${champion.id}/Spells/${spellId}Ability/${spellId}`])
            changeText();
    }, [spellDatas])





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
                    <p className='spell-cooldown small mb-0'>{cooldown}</p>
                </div>

            </div>


            <div className='ms-1 mt-2 position-relative'>
                {/* <p className="spell-description m-0" dangerouslySetInnerHTML={{ __html: description }} /> */}
                <p className='spell-description m-0' id={`${stringLetter}spell`} dangerouslySetInnerHTML={{ __html: description }}></p>
            </div>
            <hr />
        </div>
    )
}

export default ChampSpells;