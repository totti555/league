import ChampLevel from "./ChampLevel";

const ChampHeader = (props) => {

    const champion = props.champion;
    const level = props.level;
    const setDecreaseLevel = props.setDecreaseLevel;
    const setIncreaseLevel = props.setIncreaseLevel;
    const increaseLevel = props.increaseLevel;
    const decreaseLevel = props.decreaseLevel;
    const setLevel = props.setLevel


    return (
        <div className="champ-header border mb-2 p-3">
            <div className="d-flex justify-content-between header-content flex-wrap p-2">
                <div className="d-flex justify-content-start">
                    <div className="position-relative">
                        <img src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${champion.image.full}`} width='64px'></img>
                        <span className="champ-level">{level}</span>
                    </div>
                    <div className="d-flex flex-column ms-5">
                        <p className="champ-name text-white">{champion.name}</p>
                        <p className="champ-subtitle">{champion.title}</p>
                    </div>
                </div>
                <ChampLevel setDecreaseLevel={setDecreaseLevel} setIncreaseLevel={setIncreaseLevel} level={level} increaseLevel={increaseLevel} decreaseLevel={decreaseLevel} setLevel={setLevel} />
            </div>
        </div>
    )
}

export default ChampHeader;