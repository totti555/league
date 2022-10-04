import './ChampStats.scss'
import ChampLevel from './ChampLevel';
import Armor from '../../../assets/Stats/Armor.png'
import AbilityHaste from '../../../assets/Stats/AbilityHaste.png'
import AttackSpeed from '../../../assets/Stats/AttackSpeed.png'
import Health from '../../../assets/Stats/Health.png'
import Power from '../../../assets/Stats/Power.png'
import Resistance from '../../../assets/Stats/Resistance.png'
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';




const ChampStats = (props) => {
    const champion = props.champion;
    const championDetails = props.championDetails;
    const itemsBuff = props.itemsBuff;
    const level = props.level;


    const setDecreaseLevel = props.setDecreaseLevel;
    const setIncreaseLevel = props.setIncreaseLevel;
    const increaseLevel = props.increaseLevel;
    const decreaseLevel = props.decreaseLevel;
    const setLevel = props.setLevel;


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
    const resistance = champion.stats.spellblock;

    // Add spells

    const hpSpells = itemsBuff.FlatHPPoolMod ? itemsBuff.FlatHPPoolMod : 0;
    const magicSpells = itemsBuff.FlatMagicDamageMod ? itemsBuff.FlatMagicDamageMod : 0;
    // hp regen
    const speedSpells = itemsBuff.FlatMovementSpeedMod ? itemsBuff.FlatMovementSpeedMod : 0;
    const manaSpells = itemsBuff.FlatMPPoolMod ? itemsBuff.FlatMPPoolMod : 0;
    const critSpells = itemsBuff.FlatCritChanceMod ? itemsBuff.FlatCritChanceMod : 0;
    const armorSpells = itemsBuff.FlatArmorMod ? itemsBuff.FlatArmorMod : 0;
    // Mana Regen
    const resistanceSpells = itemsBuff.FlatSpellBlockMod ? itemsBuff.FlatSpellBlockMod : 0;
    const lifeStealSpells = itemsBuff.PercentLifeStealMod ? itemsBuff.PercentLifeStealMod : 0;
    const physicalSpells = itemsBuff.FlatPhysicalDamageMod ? itemsBuff.FlatPhysicalDamageMod : 0;

    const [championAttributes, setChampionAttributes] = useState([]);

    useEffect(() => {

        if (championDetails.name) {
            const data = [
                {
                    subject: 'Damage',
                    A: championDetails.attributeRatings.damage,
                    B: 130,
                    fullMark: 3,
                },
                {
                    subject: 'Utility',
                    A: championDetails.attributeRatings.utility,
                    B: 130,
                    fullMark: 3,
                },
                {
                    subject: 'Defense',
                    A: championDetails.attributeRatings.defense,
                    B: 100,
                    fullMark: 3,
                },
                {
                    subject: 'Difficulty',
                    A: championDetails.attributeRatings.difficulty,
                    B: 90,
                    fullMark: 3,
                },
                {
                    subject: 'Mobility',
                    A: championDetails.attributeRatings.mobility,
                    B: 85,
                    fullMark: 3,
                },
                {
                    subject: 'Toughness',
                    A: championDetails.attributeRatings.toughness,
                    B: 85,
                    fullMark: 3,
                },
            ];

            setChampionAttributes(data);
        }

    }, [championDetails.name]);


    return (
        <div className="champ-stats p-4">
            <h2 className="title">STATS :</h2>
            <hr />
            <div>
                <ChampLevel setDecreaseLevel={setDecreaseLevel} setIncreaseLevel={setIncreaseLevel} level={level} increaseLevel={increaseLevel} decreaseLevel={decreaseLevel} setLevel={setLevel} />
                <div className='d-flex justify-content-around stats-content mt-5'>
                    <div>
                        <p>Power <span><img alt='power' src={Power}></img></span> : {magicSpells}</p>
                        <p>Armor <span><img alt='armor' src={Armor}></img></span> : {Math.round((armor + armorSpells + (level * champion.stats.armorperlevel)) * 100) / 100}</p>
                        <p>Attack : {Math.round((attackDamage + physicalSpells + level * champion.stats.attackdamageperlevel) * 100) / 100}</p>
                        <p>Resistance <span><img alt='resistance' src={Resistance}></img></span> : {Math.round((resistance + resistanceSpells + level * champion.stats.spellblockperlevel) * 100) / 100}</p>
                        <p>Hp <span><img alt='health' src={Health}></img></span> : {hp + level * champion.stats.hpperlevel + hpSpells}</p>
                        <p>Mana : {mana + level * champion.stats.mpperlevel + manaSpells}</p>
                    </div>
                    <div>
                        <p>LifeSteal : {(lifeStealSpells) * 100} %</p>
                        <p>Crit : {(crit + critSpells + level * champion.stats.critperlevel) * 100} %</p>
                        {/* Miss Spells */}
                        <p>Hp regen : {Math.round((hpRegen + level * champion.stats.hpregenperlevel) * 100) / 100}</p>
                        <p>Move speed : {moveSpeed + speedSpells}</p>
                        <p>Attack speed <span><img alt='attackspeed' src={AttackSpeed}></img></span> : {(attackSpeed + (level === 1 ? 0 : level * champion.stats.attackspeedperlevel)) * 100} %</p>
                        {/* Miss Spells */}
                        <p>Mana Regen : {Math.round((manaRegen + level * champion.stats.mpregenperlevel) * 100) / 100}</p>
                    </div>
                </div>
                {championDetails.id && championAttributes.length &&
                    <div className='d-flex justify-content-center'>
                        <RadarChart

                            outerRadius={120}
                            width={350}
                            height={300}
                            data={championAttributes}
                        >
                            <PolarGrid />
                            <PolarAngleAxis dataKey="subject" />
                            <PolarRadiusAxis domain={[1520]} />
                            <Radar
                                name="Mike"
                                dataKey="A"
                                stroke="#8884d8"
                                fill="#8884d8"
                                fillOpacity={0.6}
                                shape={2}
                            />
                        </RadarChart>
                    </div>
                }
            </div>

        </div>
    )
}

export default ChampStats;