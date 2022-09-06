import './ChampSpells.scss'

const ChampSpells = (props) => {
    const champion = props.champion;

    return (
        <div className="champ-spells border ps-3">
            <div className='align-self-center mt-2 champ-spells-overflow'>
                <Spells image={champion.passive.image.full} name={champion.passive.name} description={champion.passive.description} isPassive={true} />
                {
                    champion.spells.map((s) =>

                    (
                        <Spells image={s.image.full} name={s.name} description={s.description} isPassive={false} key={s.id} />
                    ))
                }

            </div>
        </div>
    )
}


const Spells = (props) => {

    const image = props.image;
    const name = props.name;
    const description = props.description
    const isPassive = props.isPassive

    return (
        <div className="mb-2 spell-content mx-3" >
            <div className="spell-img d-flex justify-content-start ms-2">
                {isPassive ?
                    <img className="spell-picture" alt='spell' src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/passive/${image}`} width='48px' height="48px"></img>
                    :
                    <img className="spell-picture" alt='spell' src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/spell/${image}`} width='48px' height="48px"></img>
                }
                <div className='ms-2'>
                    <p className="entity-title font-weight-bold mb-1">{name}</p>
                    <p className='spell-cooldown small mb-0'>10 / 15/ 20</p>
                </div>

            </div>

            <div className='ms-1 mt-2'>
                <p className="spell-description m-0" dangerouslySetInnerHTML={{ __html: description }} />
            </div>
        </div>
    )
}

export default ChampSpells;