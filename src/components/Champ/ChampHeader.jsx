import ChampLevel from "./ChampLevel";
import './ChampHeader.scss'

const ChampHeader = (props) => {

    const champion = props.champion;
    const level = props.level;
    const champCard = props.champCard;


    return (
        <div className="champ-header  mb-5  d-flex justify-content-center">
            <div>
                <div className="d-flex flex-column text-center animation-champ-title mb-3">
                    <h1 className="title">{champion.name.toUpperCase()}</h1>
                    <h2>{champion.title}</h2>
                </div>
                <div className="d-flex justify-content-center mx-2  ">
                    <div className="position-relative me-4 align-self-center animation-champ-square">
                        <img className="" src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${champion.image.full}`} width='64px'></img>
                        <span className="champ-level">{level}</span>
                    </div>
                    <div className="align-self-center header-attributes">
                        <div className="d-flex flex-wrap align-items-center  ">
                            <div className=' d-flex'>
                                {champCard.role.map((role) => (
                                    <div key={role} className='d-flex display-entity-memo animation-entity-1'>
                                        <div className='text-center my-1 ' >
                                            <img src={require(`../../assets/Post/${role}.png`)} alt="Champion post" width="38px" height="38px"></img>
                                            <p className="title text-memo memo-description " key={role}>{role}</p>
                                        </div>
                                        <hr className="vertical-hr"></hr>
                                    </div>
                                ))}

                            </div>

                            <div className='d-flex'>
                                {champCard.type.map((type) => (
                                    <div className="d-flex display-entity-memo animation-entity-2 " key={type}>
                                        <div className='text-center my-1 ' >
                                            <img src={require(`../../assets/Type/${type}.png`)} alt="Champion post" width="38px" height="38px"></img>
                                            <p className="title text-memo memo-description  " key={type}>{type}</p>
                                        </div>
                                        <hr className="vertical-hr"></hr>
                                    </div>
                                ))}
                                {/* <hr className="vertical-hr"></hr> */}
                            </div>

                            <div className='display-entity-memo animation-entity-3'>
                                <div className='text-center my-1 '>
                                    <img src={require(`../../assets/Region/${champCard.world.replace(' ', '_')}.png`)} alt="Champion world" width="38px" height="38px"></img>
                                    <p className='title text-memo memo-description'>{champCard.world}</p>
                                    {/* <hr className="vertical-hr"></hr> */}
                                </div>
                            </div>
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