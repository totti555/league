import './ChampSpells.scss'

const ChampSpells = (props) => {
    const champion = props.champion;

    return (
        <div className="champ-spells ">
            <div className="d-flex justify-content-start" >
                <div className="spell-img">
                    <img className="spell-picture" alt='spell' src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/passive/${champion.passive.image.full}`}></img>
                </div>
                <div>
                    <p className="spell-title font-weight-bold">{champion.passive.name}</p>
                    <p className="spell-description" dangerouslySetInnerHTML={{ __html: champion.passive.description }} />
                </div>
            </div>
            {
                champion.spells.map((s) =>
                (
                    <div className="d-flex justify-content-start" key={s.id}>
                        <div className="spell-img">

                            <img className="spell-picture" alt='spell' src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/spell/${s.image.full}`}></img>
                        </div>
                        <div>
                            <p className="spell-title font-weight-bold">{s.name}</p>
                            <p className="spell-description" dangerouslySetInnerHTML={{ __html: s.description }} />
                        </div>
                    </div>
                ))
            }

        </div>
    )
}




export default ChampSpells;