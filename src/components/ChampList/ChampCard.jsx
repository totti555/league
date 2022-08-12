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
            <p>Type : {champ.damages_type === "AD" ? 'AD' : 'AP'}</p>
            <p>Role : {champ.role}</p>
            <p>World : {champ.world}</p>
        </div>
    )
}

export default ChampCard;