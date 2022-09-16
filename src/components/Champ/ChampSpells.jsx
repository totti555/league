import './ChampSpells.scss'
import Q from '../../assets/Spells/a.png'
import W from '../../assets/Spells/q.png'
import E from '../../assets/Spells/e.png'
import R from '../../assets/Spells/r.png'
import P from '../../assets/Spells/p.png'
import { useEffect, useState } from 'react'
import MoveSpeed from '../../assets/Stats/Movement_speed.png'
import AttackDamage from '../../assets/Stats/Attack_damage.png'
import Armor from '../../assets/Stats/Armor.png'
import AbilityHaste from '../../assets/Stats/AbilityHaste.png'
import AttackSpeed from '../../assets/Stats/AttackSpeed.png'
import Health from '../../assets/Stats/Health.png'
import Power from '../../assets/Stats/Power.png'
import Resistance from '../../assets/Stats/Resistance.png'
import { useLocation } from 'react-router-dom';




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
                                    {championsSpells.spells && <Spells index={index} championsSpells={championsSpells} spellDatas={spellDatas} spellId={s.id} image={s.image.full} name={s.name} cooldown={s.cooldownBurn} champion={champion} description={s.description} isPassive={false} letter={spellsLetterImg[index]} stringLetter={spellsLetter[index]} tooltip={s.tooltip} setDamages={setDamages} damages={damages} />}
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
    const index = props.index;
    const location = useLocation();





    function changeText() {
        console.log('on eest dans la fonction?')
        console.log(spellDatas[`Characters/${champion.id}/CharacterRecords/Root`]);
        if (spellDatas[`Characters/${champion.id}/CharacterRecords/Root`]) {
            const spellNameAPI = spellDatas[`Characters/${champion.id}/CharacterRecords/Root`].spellNames[index];
            // const data = spellDatas[`Characters/${champion.id}/Spells/${spellId}Ability/${spellId}`].mSpell.mDataValues;
            console.log('Pour le spell', spellNameAPI)

            console.log('changement de texte', `Characters/${champion.id}/Spells/${spellNameAPI}`);
            const data = spellDatas[`Characters/${champion.id}/Spells/${spellNameAPI}`].mSpell.mDataValues;
            console.log(data);
            if (data) {

                if (data.find((damages) => damages.mName === `${stringLetter}BaseDamage`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const baseDamageJson = data.find((damages) => damages.mName === `${stringLetter}BaseDamage`);
                    console.log(baseDamageJson);
                    const baseDamage = baseDamageJson.mValues[2];
                    let textToReplace = `${"@" + stringLetter + "Damage@"}`;
                    var re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, baseDamage);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                // Slow Duration
                if (data.find((damages) => damages.mName === `${stringLetter}SlowDuration`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `${stringLetter}SlowDuration`);
                    console.log(slowDamageJson);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = `${"@" + stringLetter + "SlowDuration@"}`;
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `<span style="color:purple;">${slowDamage}</span>`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                //Slow Percentage
                if (data.find((damages) => damages.mName === `${stringLetter}SlowPercentage`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `${stringLetter}SlowPercentage`);
                    console.log(slowDamageJson);
                    const slowDamage = slowDamageJson.mValues[2];
                    console.log(str);
                    str = str.replace('*', '_');
                    let textToReplace = `${"@" + stringLetter + "SlowPercentage_-100@"}`;
                    console.log('to replace', textToReplace);
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `<span style="color:purple;">${slowDamage * -100}</span>`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                //Slow Percentage
                if (data.find((damages) => damages.mName === `SlowPercentage`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `SlowPercentage`);
                    console.log(slowDamageJson);
                    const slowDamage = slowDamageJson.mValues[2];
                    console.log(str);
                    str = str.replace('*', '_');
                    let textToReplace = `${"@SlowPercentage_100@"}`;
                    console.log('to replace', textToReplace);
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${slowDamage * 100}`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                // SpellVamp

                if (data.find((damages) => damages.mName === `${stringLetter}SpellVamp`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `${stringLetter}SpellVamp`);
                    console.log(slowDamageJson);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = `${"@" + stringLetter + "SpellVamp@"}`;
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${slowDamage}`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                // Spell Vamp Empowered

                if (data.find((damages) => damages.mName === `${stringLetter}SpellVampEmpowered`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `${stringLetter}SpellVampEmpowered`);
                    console.log(slowDamageJson);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = `${"@" + stringLetter + "SpellVampEmpowered@"}`;
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${slowDamage}`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                // Minion fear duration 

                if (data.find((damages) => damages.mName === `${stringLetter}MinionFearDuration`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `${stringLetter}MinionFearDuration`);
                    console.log(slowDamageJson);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = `${"@" + stringLetter + "MinionFearDuration@"}`;
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${slowDamage}`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                // Move speed bonus


                if (data.find((damages) => damages.mName === `${stringLetter}MovementSpeedBonus`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `${stringLetter}MovementSpeedBonus`);
                    console.log(slowDamageJson);
                    const slowDamage = slowDamageJson.mValues[2];
                    console.log(str);
                    str = str.replace('*', '_');
                    let textToReplace = `${"@" + stringLetter + "MovementSpeedBonus_100@%"}`;
                    console.log('to replace', textToReplace);
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `<span>${Math.round(slowDamage * -100)}% <img src=${MoveSpeed}></img></span>`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                // Delay 
                if (data.find((damages) => damages.mName === `${stringLetter}Duration`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `${stringLetter}Duration`);
                    console.log(slowDamageJson);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = `${"@" + stringLetter + "Duration@"}`;
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${slowDamage}`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                // AD Amp damages
                if (data.find((damages) => damages.mName === `${stringLetter}TotalADAmp`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const baseDamageJson = data.find((damages) => damages.mName === `${stringLetter}TotalADAmp`);
                    console.log(baseDamageJson);
                    const baseDamage = baseDamageJson.mValues[2];
                    let textToReplace = `${"@" + stringLetter + "TotalADAmp_100@%"}`;
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `<span>${Math.round(baseDamage * 100)}%</span>`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                //Movement speed

                if (data.find((damages) => damages.mName === `${stringLetter}MovementSpeed`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `${stringLetter}MovementSpeed`);
                    console.log(slowDamageJson);
                    const slowDamage = slowDamageJson.mValues[2];
                    console.log(str);
                    str = str.replace('*', '_');
                    let textToReplace = `${"@" + stringLetter + "MovementSpeed_100@%"}`;
                    console.log('to replace', textToReplace);
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `<span>${Math.round(slowDamage * -100)}% <img src=${MoveSpeed}></img></span>`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                // Self healing

                if (data.find((damages) => damages.mName === `${stringLetter}HealingAmp`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `${stringLetter}HealingAmp`);
                    console.log(slowDamageJson);
                    const slowDamage = slowDamageJson.mValues[2];
                    console.log(str);
                    str = str.replace('*', '_');
                    let textToReplace = `${"@" + stringLetter + "HealingAmp_100@%"}`;
                    console.log('to replace', textToReplace);
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `<span>${Math.round(slowDamage * 100)}% <img src=${Health}></img></span>`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                // Extension

                if (data.find((damages) => damages.mName === `${stringLetter}Extension`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `${stringLetter}Extension`);
                    console.log(slowDamageJson);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = `${"@" + stringLetter + "Extension@"}`;
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${slowDamage}`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }




                // BaseDamage @Damage@

                if (data.find((damages) => damages.mName === `BaseDamage`)) {
                    console.log('cc cest moi')
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `BaseDamage`);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = "@Damage@";
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${slowDamage}`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                // BaseDamage @TotalDamage@

                if (data.find((damages) => damages.mName === `BaseDamage`)) {
                    console.log('cc cest moi')
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `BaseDamage`);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = "@TotalDamage@";
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${slowDamage}`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                // BaseDamage @FinalDamage@

                if (data.find((damages) => damages.mName === `BaseDamage`)) {
                    console.log('cc cest moi')
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `BaseDamage`);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = "@FinalDamage@";
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${slowDamage}`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                // @Damage@

                if (data.find((damages) => damages.mName === `BaseDamageNamed`)) {
                    console.log('cc cest moi')
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `BaseDamageNamed`);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = "@Damage@";
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${slowDamage}`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                // @TotalDamage@

                if (data.find((damages) => damages.mName === `Damage`)) {
                    console.log('cc cest moi')
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `Damage`);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = "@TotalDamage@";
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${slowDamage}`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                //@PassiveDamage@

                if (data.find((damages) => damages.mName === `PassiveBaseDamage`)) {
                    console.log('cc cest moi')
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `PassiveBaseDamage`);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = "@PassiveDamage@";
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${slowDamage}`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                //@E1Damage@

                if (data.find((damages) => damages.mName === `BaseDamage`)) {
                    console.log('cc cest moi')
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `BaseDamage`);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = "@E1Damage@";
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${slowDamage}`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                //@ActiveDamage@

                if (data.find((damages) => damages.mName === `ActiveBaseDamage`)) {
                    console.log('cc cest moi')
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `ActiveBaseDamage`);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = "@ActiveDamage@";
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${slowDamage}`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                //@SilenceDuration@

                if (data.find((damages) => damages.mName === `ZapCountdown`)) {
                    console.log('cc cest moi')
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `ZapCountdown`);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = "@SilenceDuration@";
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${slowDamage}`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                //@CDRefund@
                if (data.find((damages) => damages.mName === `CDRefund`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `CDRefund`);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = "@CDRefund@";
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `<span style="color:grey;">${slowDamage}</span>`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                //@MSValue@
                if (data.find((damages) => damages.mName === `MSValue`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `MSValue`);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = "@MSValue@";
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${slowDamage}`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                //@ChannelDuration@
                if (data.find((damages) => damages.mName === `ChannelDuration`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `ChannelDuration`);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = "@ChannelDuration@";
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${slowDamage}`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                //@DetonationTimeout@
                if (data.find((damages) => damages.mName === `DetonationTimeout`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `DetonationTimeout`);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = "@DetonationTimeout@";
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `<span style="color:grey;">${slowDamage}</span>`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                //@ManaReturn@
                if (data.find((damages) => damages.mName === `ManaReturn`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `ManaReturn`);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = "@ManaReturn@";
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${slowDamage}`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                //@ShieldBlockTotal@
                if (data.find((damages) => damages.mName === `ShieldAmount`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `ShieldAmount`);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = "@ShieldBlockTotal@";
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${slowDamage}`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                //@BaseDuration@
                if (data.find((damages) => damages.mName === `BaseDuration`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `BaseDuration`);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = "@BaseDuration@";
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${slowDamage}`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                //@MovementSpeedDuration@
                if (data.find((damages) => damages.mName === `MovementSpeedDuration`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `MovementSpeedDuration`);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = "@MovementSpeedDuration@";
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${slowDamage}`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                //@EnergyRestore@
                if (data.find((damages) => damages.mName === `EnergyRestore`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `EnergyRestore`);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = "@EnergyRestore@";
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${slowDamage}`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                if (data.find((damages) => damages.mName === `ShieldDuration`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `ShieldDuration`);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = "@ShieldDuration@";
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${slowDamage}`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                //@TibbersAADamage@
                if (data.find((damages) => damages.mName === `TibbersAttackDamage`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `TibbersAttackDamage`);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = "@TibbersAADamage@";
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${slowDamage}`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                //@TotalPassthroughDamage@
                if (data.find((damages) => damages.mName === `PassthroughBaseDamage`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `PassthroughBaseDamage`);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = "@TotalPassthroughDamage@";
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${slowDamage}`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                //@TotalExplosionDamage@
                if (data.find((damages) => damages.mName === `ExplosionBaseDamage`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `ExplosionBaseDamage`);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = "@TotalExplosionDamage@";
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${slowDamage}`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                if (data.find((damages) => damages.mName === `StunDuration`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `StunDuration`);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = "@StunDuration@";
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${Math.round((slowDamage) * 100) / 100}`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                if (data.find((damages) => damages.mName === `DamagePerSecond`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `DamagePerSecond`);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = "@TotalDamagePerSecond@";
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${slowDamage}`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                // SlowPercentEmpoweredTT

                if (data.find((damages) => damages.mName === `SlowPercentEmpoweredTT`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `SlowPercentEmpoweredTT`);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = "@SlowPercentEmpoweredTT@";
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${slowDamage}`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                // GrowthTime

                if (data.find((damages) => damages.mName === `GrowthTime`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `GrowthTime`);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = "@GrowthTime@";
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${slowDamage}`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                if (data.find((damages) => damages.mName === `HasteDuration`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `HasteDuration`);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = "@HasteDuration@";
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${slowDamage}`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                if (data.find((damages) => damages.mName === `HasteValue`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `HasteValue`);
                    console.log(slowDamageJson);
                    const slowDamage = slowDamageJson.mValues[2];
                    console.log(str);
                    str = str.replace('*', '_');
                    let textToReplace = `${"@HasteValue_100@%"}`;
                    console.log('to replace', textToReplace);
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `<span>${Math.round(slowDamage * 100)}%`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                if (data.find((damages) => damages.mName === `DamageMultiplier`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `DamageMultiplier`);
                    console.log(slowDamageJson);
                    const slowDamage = slowDamageJson.mValues[2];
                    console.log(str);
                    str = str.replace('*', '_');
                    let textToReplace = `${"@DamageMultiplier_100@%"}`;
                    console.log('to replace', textToReplace);
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `<span>${Math.round(slowDamage * 100)}%`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                if (data.find((damages) => damages.mName === `SlowDuration`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `SlowDuration`);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = "@SlowDuration@";
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${slowDamage}`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                if (data.find((damages) => damages.mName === `${stringLetter}DamageReduction`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `${stringLetter}DamageReduction`);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = `@${stringLetter}DamageReduction@`;
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${slowDamage}`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                //@RShieldDuration@

                if (data.find((damages) => damages.mName === `RShieldDuration`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `RShieldDuration`);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = `@RShieldDuration@`;
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${slowDamage}`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                //@KnockupDuration@

                if (data.find((damages) => damages.mName === `KnockupDuration`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `KnockupDuration`);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = `@KnockupDuration@`;
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${slowDamage}`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                //@RStasisDuration@

                if (data.find((damages) => damages.mName === `RStasisDuration`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `RStasisDuration`);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = `@RStasisDuration@`;
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${slowDamage}`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                // @InitialMS@

                if (data.find((damages) => damages.mName === `InitialMS`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `InitialMS`);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = `@InitialMS@`;
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${slowDamage}`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }


                // @SlowAmount@

                if (data.find((damages) => damages.mName === `SlowAmount`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `SlowAmount`);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = `@SlowAmount@`;
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${Math.round((slowDamage) * 100) / 100}}`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                // @MinKnockup@

                if (data.find((damages) => damages.mName === `MinKnockup`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `MinKnockup`);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = `@MinKnockup@`;
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${Math.round((slowDamage) * 100) / 100}`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                // @SlowZoneDuration@

                if (data.find((damages) => damages.mName === `SlowZoneDuration`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `SlowZoneDuration`);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = `@SlowZoneDuration@`;
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${Math.round((slowDamage) * 100) / 100}`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                // @MoveSpeedMod@

                if (data.find((damages) => damages.mName === `MoveSpeedMod`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `MoveSpeedMod`);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = `@MoveSpeedMod@`;
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${slowDamage}`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                // @MarkDuration@

                if (data.find((damages) => damages.mName === `MarkDuration`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `MarkDuration`);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = `@MarkDuration@`;
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${slowDamage}`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                // @MarkDamage@

                if (data.find((damages) => damages.mName === `BaseMarkDamage`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `BaseMarkDamage`);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = `@MarkDamage@`;
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${slowDamage}`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }


                // @MaxKnockup@

                if (data.find((damages) => damages.mName === `MaxKnockup`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `MaxKnockup`);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = `@MaxKnockup@`;
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${Math.round((slowDamage) * 100) / 100}`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }

                // @StarBaseDamageIncrease@

                if (data.find((damages) => damages.mName === `StarBaseDamageIncrease`)) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `StarBaseDamageIncrease`);
                    const slowDamage = slowDamageJson.mValues[2];
                    let textToReplace = `@StarBaseDamageIncrease@`;
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${Math.round((slowDamage) * 100) / 100}`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }


                // @DamageReductionWaveClear

                if (data.find((damages) => damages.mName === 'DamageReductionWaveclear')) {
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = data.find((damages) => damages.mName === `DamageReductionWaveclear`);
                    console.log(slowDamageJson);
                    const slowDamage = slowDamageJson.mValues[2];
                    console.log(str);
                    str = str.replace('*', '_');
                    let textToReplace = `${"@DamageReductionWaveclear.0_100@%"}`;
                    console.log('to replace', textToReplace);
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `<span>${Math.round(slowDamage * 100)}%<span>`);
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;
                }



            }


            // @EffectXAmount@
            for (let i = 1; i < 9; i++) {

                if (championsSpells.spells[index].effectAmounts) {
                    // if (data.find((damages) => damages.mName === `BaseDamageNamed`)) {
                    //     console.log('cc cest moi')
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = championsSpells.spells[index].effectAmounts[`Effect${i}Amount`][2];
                    let textToReplace = `@Effect${i}Amount@`;
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${slowDamageJson}`);
                    // }
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;

                }
            }

            // @EffectXAmount@
            for (let i = 1; i < 8; i++) {

                if (championsSpells.spells[index].effectAmounts) {
                    // if (data.find((damages) => damages.mName === `BaseDamageNamed`)) {
                    //     console.log('cc cest moi')
                    let str = document.getElementById(`${stringLetter}spell`).innerHTML;
                    const slowDamageJson = championsSpells.spells[index].effectAmounts[`Effect${i}Amount`][2];
                    str = str.replace('*', '_');
                    let textToReplace = `@Effect${i}Amount_100@%`;
                    re = new RegExp(textToReplace, "g");
                    let res = str.replace(re, `${slowDamageJson * 100}%`);
                    // }
                    document.getElementById(`${stringLetter}spell`).innerHTML = res;

                }
            }

            // Spells without letter 


            let str = document.getElementById(`${stringLetter}spell`).innerHTML;
            let textToReplace = "@TotalDamage@";
            var reg = new RegExp(textToReplace, "g");
            let res = str.replace(reg, `XX`);
            document.getElementById(`${stringLetter}spell`).innerHTML = res;
        }

        // Remove @SpellModifierDescriptionAppend@
        let str = document.getElementById(`${stringLetter}spell`).innerHTML;
        let res = str.replace('@SpellModifierDescriptionAppend@', '');
        document.getElementById(`${stringLetter}spell`).innerHTML = res;




    }


    useEffect(() => {
        // if (spellDatas[`Characters/${champion.id}/Spells/${spellId}Ability/${spellId}`])
        changeText();
    }, [spellDatas])



    const changeColor = () => {
        if (document.getElementById(`${stringLetter}spell`) != null) {

            var text = document.getElementById(`${stringLetter}spell`);

            var str = text.innerHTML,
                reg = /magic damage|Attack Speed|Shield|seconds|Ability Power|Attack Damage|Critical Strike Chance|Mana Regen|Mana|Speed|Move Speed|Health|Magic Resist|Base Health Regen|Ability Haste|Armor/ig; //g is to replace all occurances

            //fixing a bit
            var toStr = String(reg);
            var color = (toStr.replace('\/g', '|')).substring(1);

            //split it baby
            var colors = color.split("|");

            if (colors.indexOf("magic damage") > -1) {
                str = str.replace(/magic damage/g, `<span style="color:#5F43DC;">magic damage <img src=${Power} width='28px'></img></span>`);
            }

            if (colors.indexOf("Ability Power") > -1) {
                str = str.replace(/Ability Power/g, `<span style="color:#5F43DC;">Ability Power <img src=${Power} width='28px'></img></span>`);
            }

            if (colors.indexOf("Attack Damage") > -1) {
                str = str.replace(/Attack Damage/g, `<span style="color:Orange;"> Attack Damage<img class='attack-damage' src=${AttackDamage}></img></span></span>`);
            }

            if (colors.indexOf("Attack Speed") > -1) {
                str = str.replace(/Attack Speed/g, `<span style="color:Orange;"> Attack Speed <img src=${AttackSpeed}></img></span></span>`);
            }

            // if (colors.indexOf("Shield") > -1) {
            //     str = str.replace(/Shield/g, `<span style="color:rgb(247, 96, 41);">Shield<img src=${Armor}></img></span></span>`);
            // }

            if (colors.indexOf("Critical Strike Chance") > -1) {
                str = str.replace(/Critical Strike Chance/g, `<span style="color:red;">Critical Strike Chance</span>`);
            }

            if (colors.indexOf("Mana Regen") > -1) {
                str = str.replace(/Mana Regen/g, `<span style="color:DodgerBlue;">Mana Regen</span>`);
            }

            if (colors.indexOf("seconds") > -1) {
                str = str.replace(/seconds/g, `<span style="color:grey;">seconds <img src=${AbilityHaste} width='28px'></img></span>`);
            }

            if (colors.indexOf("Mana") > -1) {
                str = str.replace(/Mana/g, `<span style="color:DodgerBlue;">Mana</span>`);
            }

            // if (colors.indexOf("Move Speed") > -1) {
            //     // var goodText = str.substring(0, str.indexOf('</attention> Move Speed'));
            //     // if (goodText) {
            //     //     var number = goodText.match(/[0-9]+$/)[0];
            //     // }
            //     str = str.replace(/Move Speed/g, `<span style="color:#EFF397;">Move Speed <img src=${AttackSpeed}></img></span></span>`);
            // }

            // if (colors.indexOf("Magic Resist") > -1) {
            //     // var goodText = str.substring(0, str.indexOf('</attention> Magic Resist'));
            //     // if (goodText) {
            //     //     var number = goodText.match(/[0-9]+$/)[0];
            //     // }
            //     str = str.replace(/Magic Resist/g, `<span style="color:DodgerBlue;">Magic Resist <img src=${Resistance}></img></span></span>`);
            // }

            // if (colors.indexOf("Armor") > -1) {
            //     // var goodText = str.substring(0, str.indexOf('</attention> Mana'));
            //     // if (goodText) {
            //     //     var number = goodText.match(/[0-9]+$/)[0];
            //     // }
            //     str = str.replace(/Armor/g, `<span style="color:DodgerBlue;">Armor <img src=${Armor}></img></span>`);
            // }

            if (colors.indexOf("Base Health Regen") > -1) {
                // var goodText = str.substring(0, str.indexOf('</attention> Base Health Regen'));
                // console.log("dd", goodText)
                // if (goodText) {
                //     var number = goodText.match(/[0-9]+$/)[0];
                // }
                str = str.replace(/Base Health Regen/g, `<span style="color:#72DE38;">Base Health Regen <img src=${Health}></img></span></span>`);
            }

            if (colors.indexOf("Health") > -1) {
                // var goodText = str.substring(0, str.indexOf('</attention> Health'));
                // if (goodText) {
                //     var number = goodText.match(/[0-9]+$/)[0];
                // }
                str = str.replace(/Health/g, `<span style="color:#72DE38;">Health <img src=${Health}></img></span></span>`);
            }

            if (colors.indexOf("Move Speed") > -1) {
                // var goodText = str.substring(0, str.indexOf('</attention> Health'));
                // if (goodText) {
                //     var number = goodText.match(/[0-9]+$/)[0];
                // }
                str = str.replace(/Move Speed/g, `<span style="color:#EFF397;">Move Speed <img src=${MoveSpeed}></img></span></span>`);
            }

            if (colors.indexOf("Ability Haste") > -1) {
                // var goodText = str.substring(0, str.indexOf('</attention> Ability Haste'));
                // if (goodText) {
                //     var number = goodText.match(/[0-9]+$/)[0];
                // }
                str = str.replace(/Ability Haste/g, `<span style="color:grey;">Ability Haste <img src=${AbilityHaste}></img></span></span>`);
            }

            if (str.includes(`${champion.name}`)) {
                let textToReplace = `${champion.name}`;
                var re = new RegExp(textToReplace, "g");
                str = str.replace(re, `<span style="font-weight:bold">${champion.name}</span>`);
            }


            document.getElementById(`${stringLetter}updatedspell`).innerHTML = str;
        }
    }


    useEffect(() => {
        changeText();
        changeColor();
    }, [champion.id]);

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
                <p className='spell-description hide-description m-0' id={`${stringLetter}spell`} dangerouslySetInnerHTML={{ __html: championsSpells.spells[index].dynamicDescription }}></p>

                <p className='spell-description m-0' id={`${stringLetter}updatedspell`} dangerouslySetInnerHTML={{ __html: championsSpells.spells[index].dynamicDescription }}></p>
            </div>
            <hr />
        </div>
    )
}

export default ChampSpells;