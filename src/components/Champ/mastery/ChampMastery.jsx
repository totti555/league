import noMastery from "../../../assets/Mastery/no_mastery.png"
import './ChampMastery.scss'
import { LineChart, Line } from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const ChampMastery = (props) => {
    const summonerMastery = props.summonerMastery;
    const summoner = props.summoner;
    const champion = props.champion;

    const masteryPercent = (mastery) => {
        console.log('Checker le nombre d appel');
        const total = mastery.championPointsSinceLastLevel + mastery.championPointsUntilNextLevel;

        const percentage = Math.round((mastery.championPointsSinceLastLevel * 100) / total);

        return percentage;
    }



    const data = [
        {
            subject: 'Math',
            A: 120,
            B: 110,
            fullMark: 150,
        },
        {
            subject: 'Chinese',
            A: 98,
            B: 130,
            fullMark: 150,
        },
        {
            subject: 'English',
            A: 86,
            B: 130,
            fullMark: 150,
        },
        {
            subject: 'Geography',
            A: 99,
            B: 100,
            fullMark: 150,
        },
        {
            subject: 'Physics',
            A: 85,
            B: 90,
            fullMark: 150,
        },
        {
            subject: 'History',
            A: 65,
            B: 85,
            fullMark: 150,
        },
    ];




    return (

        summoner &&
        <div className="champ-mastery gradient-border">
            {summonerMastery ?
                <div className='mastery-content d-flex justify-content-between '>
                    <div className="d-flex">
                        <div className="summoner-icon position-relative  mx-1">

                            <img alt='summoner-profile' src={`http://ddragon.leagueoflegends.com/cdn/12.18.1/img/profileicon/${summoner.profileIconId}.png`} width='88px'></img>
                            <span className="summoner-level text-white">{summoner.summonerLevel}</span>
                        </div>
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
                        <div class="pie animate" style={{ '--p': masteryPercent(summonerMastery), '--c': '#ECB823' }}>
                            <span className='mastery-percentage-points'>{masteryPercent(summonerMastery)}%</span>
                        </div>
                        {/* <RadarChart

                            outerRadius={80}
                            width={160}
                            height={160}
                            data={data}
                        >
                            <PolarGrid />
                            <PolarAngleAxis dataKey="subject" />
                            <PolarRadiusAxis />
                            <Radar
                                name="Mike"
                                dataKey="A"
                                stroke="#8884d8"
                                fill="#8884d8"
                                fillOpacity={0.6}
                            />
                        </RadarChart> */}
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