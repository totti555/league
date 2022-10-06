import noMastery from "../../../assets/Mastery/no_mastery.png"
import './ChampMastery.scss'
import React, { useCallback, useState } from "react";

const ChampMastery = (props) => {
    const summonerMastery = props.summonerMastery;
    const summoner = props.summoner;
    const champion = props.champion;
    const summonerRank = props.summonerRank;

    const masteryPercent = (mastery) => {
        // Checker le nombre d appel
        const total = mastery.championPointsSinceLastLevel + mastery.championPointsUntilNextLevel;

        const percentage = Math.round((mastery.championPointsSinceLastLevel * 100) / total);

        return percentage;
    }


    return (

        summoner &&
        <div className="champ-mastery gradient-border p-2">
            {summonerRank &&
                <>
                    <div className="d-flex justify-content-center">
                        <div className="summoner-icon position-relative align-self-center  mx-1">
                            <img alt='summoner-profile' src={`http://ddragon.leagueoflegends.com/cdn/12.18.1/img/profileicon/${summoner.profileIconId}.png`} width='88px'></img>
                            <span className="summoner-level text-white">{summoner.summonerLevel}</span>
                        </div>
                        <div className="align-self-center mx-1">
                            <h3 className="m-0">{summonerRank[0].summonerName}</h3>
                            <p className="m-0 text-secondary summoner-rank">{summonerRank[0].tier} {summonerRank[0].rank}</p>
                        </div>
                        <div className="d-flex">
                            <div className="pie animate" style={{ '--p': Math.round((summonerRank[0].wins / (summonerRank[0].losses + summonerRank[0].wins)) * 100), '--c': 'green' }}>
                                <span className='mastery-percentage-points'>{Math.round((summonerRank[0].wins / (summonerRank[0].losses + summonerRank[0].wins)) * 100)}%</span>
                            </div>
                            <div className="d-flex flex-column align-self-center ms-2">
                                <p className="m-0 text-secondary summoner-rank"><strong>{summonerRank[0].wins}</strong> WINS</p>
                                <p className="m-0 text-secondary summoner-rank"><strong>{summonerRank[0].losses}</strong> LOSSES</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="d-flex flex-column summoner-rank-img">
                            <img className="m-auto" src={require(`../../../assets/Rank/${summonerRank[0].tier.toLowerCase()}.png`)} width='150px'></img>
                            <p className="m-0 text-xl summoner-rank-lp ">{summonerRank[0].tier} {summonerRank[0].rank} <span className="text-secondary">- {summonerRank[0].leaguePoints} LP</span></p>
                        </div>
                    </div>
                </>
            }
            {summonerMastery ?
                <div className='mastery-content d-flex justify-content-around '>
                    <div className="d-flex">
                        <div className="summoner-icon position-relative mx-1">
                            <img className="" src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${champion.image.full}`} width='88px'></img>
                        </div>
                        <div className='mastery-icon align-self-center'>
                            <img src={require(`../../../assets/Mastery/mastery_${summonerMastery.championLevel}.png`)}
                                alt='mastery' title={`M${summonerMastery.championLevel} ${summonerMastery.championPoints} pts`} width='88px'></img>
                        </div>

                    </div>
                    <div className="d-flex">
                        <p className='title mastery-points align-self-center m-0'>{summonerMastery.championPoints}<span className="title fraction">/{summonerMastery.championPointsSinceLastLevel + summonerMastery.championPointsUntilNextLevel}</span></p>
                        <div className="pie animate" style={{ '--p': masteryPercent(summonerMastery), '--c': '#ECB823' }}>
                            <span className='mastery-percentage-points'>{masteryPercent(summonerMastery)}%</span>
                        </div>
                    </div>
                </div>
                :
                <div>
                    <div className='mastery-icon'>
                        <img src={noMastery} alt='no mastery' title='No mastery' width='48px'></img>
                        <p className='title'>0pt</p>
                    </div>
                    <img className='mastery-banner no-mastery' src={require(`../../../assets/Mastery/mastery_0banner.png`)}
                        alt='no-mastery' title={`No mastery pts`} height='64px' width='48px'></img>
                </div>
            }

        </div>

    )
}

export default ChampMastery