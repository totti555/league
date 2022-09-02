import './ChampStats.scss'
import { useState, useEffect } from 'react'


const ChampStats = (props) => {
    const champion = props.champion;
    const itemsBuff = props.itemsBuff;
    const level = props.level;


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

    // Add spells

    const hpSpells = itemsBuff.FlatHPPoolMod ? itemsBuff.FlatHPPoolMod : 0;
    const magic = itemsBuff.FlatMagicDamageMod ? itemsBuff.FlatMagicDamageMod : 0;
    // hp regen
    const speedSpells = itemsBuff.FlatMovementSpeedMod ? itemsBuff.FlatMovementSpeedMod : 0;
    const manaSpells = itemsBuff.FlatMPPoolMod ? itemsBuff.FlatMPPoolMod : 0;
    // Mana Regen
    const spellBlockSpells = itemsBuff.FlatSpellBlockMod ? itemsBuff.FlatSpellBlockMod : 0;


    return (
        <div className="champ-stats m-2 border">
            <p className="stats-title font-weight-bold mb-1">Stats</p>

            <div className='d-flex justify-content-start stats-content'>
                {console.log("cc", itemsBuff)}
                <div>
                    <p>Power : 0</p>
                    <p>Armor : {Math.round((armor + (level * champion.stats.armorperlevel)) * 100) / 100}</p>
                    <p>Attack : {Math.round(attackDamage + level * champion.stats.attackdamageperlevel * 100) / 100}</p>

                    <p>Hp : {hp + level * champion.stats.hpperlevel + hpSpells}</p>
                    <p>Mana : {mana + level * champion.stats.mpperlevel + manaSpells}</p>
                </div>
                <div>
                    <p>Crit : {crit + level * champion.stats.critperlevel}</p>
                    <p>Hp regen : {Math.round((hpRegen + level * champion.stats.hpregenperlevel) * 100) / 100}</p>
                    <p>Move speed : {moveSpeed + speedSpells}</p>
                    <p>Attack speed : {Math.round((attackSpeed + level * champion.stats.attackspeedperlevel) * 100) / 100}</p>
                    <p>Mana Regen : {Math.round((manaRegen + level * champion.stats.mpregenperlevel) * 100) / 100}</p>
                    <p>Spell block : {Math.round((spellBlock + level * champion.stats.spellblockperlevel + spellBlockSpells) * 100) / 100}</p>
                </div>
            </div>

        </div>
    )
}

export default ChampStats;