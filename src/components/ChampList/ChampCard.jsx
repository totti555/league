const ChampCard = ({ champ }) => {
    return (
        <div>
            {/* <img src={champ.photo}></img> */}
            <ChampMemo champ={champ} />
            {champ.name}
        </div>
    )
}

const ChampMemo = ({ champ }) => {
    return (
        <div>
            <p>Type : {champ.damages_type === "AD" ? 'oui' : 'non'}</p>
        </div>
    )
}

export default ChampCard;