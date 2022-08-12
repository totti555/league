import './ChampCard.css'

const ChampCard = ({ champ }) => {
    return (
        <div>
            {/* TODO : Insert img */}
            {/* <img src={champ.photo}></img> */}
            <ChampMemo champ={champ} />
            {champ.name}
        </div>

    )
}

const ChampMemo = ({ champ }) => {
    return (
        <div>
            {/* TODO : Update memo */}
            <p>Type : {champ.damages_type === "AD" ? 'oui' : 'non'}</p>
            <p>Role : {champ.post}</p>
        </div>
    )
}

export default ChampCard;