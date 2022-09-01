const ChampLinks = (props) => {
    const selectedKey = props.selectedKey;
    const champion = props.champion;

    return (
        <div>
            Links with :
            <img src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${champion.image.full}`} width='48px'></img>
        </div>
    )
}

export default ChampLinks;