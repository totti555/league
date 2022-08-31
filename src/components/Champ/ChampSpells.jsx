import './ChampSpells.scss'

const ChampSpells = (props) => {
    const champion = props.champion;

    return (
        <div className="champ-spells ">
            <Spells image={champion.passive.image.full} name={champion.passive.name} description={champion.passive.description} isPassive={true} />
            {
                champion.spells.map((s) =>

                (
                    <Spells image={s.image.full} name={s.name} description={s.description} isPassive={false} key={s.id} />
                ))
            }

        </div>
    )
}


const Spells = (props) => {

    const image = props.image;
    const name = props.name;
    const description = props.description
    const isPassive = props.isPassive

    return (
        <div className="d-flex justify-content-start" >
            <div className="spell-img">
                {isPassive ?
                    <img className="spell-picture" alt='spell' src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/passive/${image}`} width='48px'></img>
                    :
                    <img className="spell-picture" alt='spell' src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/spell/${image}`} width='48px'></img>
                }
            </div>

            <div>
                <p className="spell-title font-weight-bold">{name}</p>
                <p className="spell-description" dangerouslySetInnerHTML={{ __html: description }} />
            </div>
        </div>
    )
}

export default ChampSpells;