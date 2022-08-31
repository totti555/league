import './ChampStats.scss'
import { useState, useEffect } from 'react'


const ChampStats = (props) => {
    const champion = props.champion
    const [level, setLevel] = useState(1);
    const [increaseLevel, setIncreaseLevel] = useState(false);
    const [decreaseLevel, setDecreaseLevel] = useState(true);

    const addLevel = (champLevel) => {
        if (champLevel < 18) {
            let incrLevel = champLevel + 1;
            if (incrLevel !== 18) {
                setDecreaseLevel(false)
            }
            else setIncreaseLevel(true);
            setLevel(incrLevel);
        }
        else setIncreaseLevel(true)

    }

    const removeLevel = (champLevel) => {
        if (champLevel > 1) {
            let decrLevel = champLevel - 1;
            if (decrLevel !== 1) {
                setIncreaseLevel(false)
            }
            else setDecreaseLevel(true);
            setLevel(decrLevel);
        }
        else setDecreaseLevel(true)

    }

    // useEffect(() => {
    //     if (level > 0 && level < 19)
    //         setLevel(level);
    // }, [level]);

    const armor = champion.stats.armor;
    const attackDamage = champion.stats.attackdamage;
    const attackSpeed = champion.stats.attackspeed;
    const crit = champion.stats.crit;
    const hp = champion.stats.hp;
    const hpRegen = champion.stats.hpregen;
    const moveSpeed = champion.stats.movespeed;
    const mana = champion.stats.mp;
    const manaRegen = champion.stats.mpregen;
    const spellBlock = champion.stats.spellblock;

    return (
        <div className="champ-stats">
            Stats

            <div>
                <p>Armor : {Math.round((armor + (level * champion.stats.armorperlevel)) * 100) / 100}</p>
                <p>Attack : {attackDamage + level * champion.stats.attackdamageperlevel}</p>
                <p>Attack speed : {Math.round((attackSpeed + level * champion.stats.attackspeedperlevel) * 100) / 100}</p>
                <p>Crit : {crit + level * champion.stats.critperlevel}</p>
                <p>Hp : {hp + level * champion.stats.hpperlevel}</p>
                <p>Hp regen : {Math.round((hpRegen + level * champion.stats.hpregenperlevel) * 100) / 100}</p>
                <p>Move speed : {moveSpeed}</p>
                <p>Mana : {mana + level * champion.stats.mpperlevel}</p>
                <p>Mana Regen : {Math.round((manaRegen + level * champion.stats.mpregenperlevel) * 100) / 100}</p>
                <p>Spell block : {Math.round((spellBlock + level * champion.stats.spellblockperlevel) * 100) / 100}</p>
            </div>
            <div className='d-flex justify-content-center'>
                <p>Level {level}</p>
                <button onClick={() => addLevel(level)} disabled={increaseLevel}>+</button>
                <button onClick={() => removeLevel(level)} disabled={decreaseLevel}>-</button>
            </div>
        </div>
    )
}

export default ChampStats;