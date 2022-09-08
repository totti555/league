import ChampLevel from "./ChampLevel";

const ChampHeader = (props) => {

    const champion = props.champion;
    const level = props.level;
    const setDecreaseLevel = props.setDecreaseLevel;
    const setIncreaseLevel = props.setIncreaseLevel;
    const increaseLevel = props.increaseLevel;
    const decreaseLevel = props.decreaseLevel;
    const setLevel = props.setLevel;
    const champCard = props.champCard;


    return (
        <div className="champ-header  mb-5  d-flex justify-content-center">
            <div>
                <div className="d-flex flex-column text-center">
                    <h1 className="title">{champion.name.toUpperCase()}</h1>
                    <h2>{champion.title}</h2>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="position-relative me-4">
                        <img src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${champion.image.full}`} width='64px'></img>
                        <span className="champ-level">{level}</span>
                    </div>
                    <div className="align-self-center">
                        <div className="d-flex ">
                            <div className='display-world-animation d-flex'>
                                {champCard.role.map((role) => (
                                    <div key={role} className='text-center' >
                                        <img src={require(`../../assets/Post/${role}.png`)} alt="Champion post" width="38px" height="38px"></img>
                                        <p className="title text-memo small" key={role}>{role}</p>
                                    </div>
                                ))}
                                <hr className="vertical-hr"></hr>
                            </div>

                            <div className='display-world-animation d-flex'>
                                {champCard.type.map((type) => (
                                    <div key={type} className='text-center' >
                                        <img src={require(`../../assets/Type/${type}.png`)} alt="Champion post" width="38px" height="38px"></img>
                                        <p className="title text-memo small " key={type}>{type}</p>
                                    </div>
                                ))}
                                <hr className="vertical-hr"></hr>
                            </div>

                            <div className='display-world-animation'>
                                <div className='text-center'>
                                    <img src={require(`../../assets/Region/${champCard.world}.png`)} alt="Champion world" width="38px" height="38px"></img>
                                    <p className='title text-memo'>{champCard.world}</p>
                                    {/* <hr className="vertical-hr"></hr> */}
                                </div>
                            </div>

                            {/* <div className='display-world-animation d-flex'>
                                <img src={require(`../../assets/Damages-Types/${champCard.damages_type}.png`)} alt="Champion post" width="38px" height="38px"></img>
                                <p className="title text-memo" key={champCard.damages_type}>{champCard.damages_type}</p>
                                <hr className="vertical-hr"></hr>
                            </div> */}


                            {/* I / I / I / I / I */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="d-flex justify-content-between header-content flex-wrap p-2">
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
            </div> */}
        </div>
    )
}

export default ChampHeader;