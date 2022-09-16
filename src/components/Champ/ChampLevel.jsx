const ChampLevel = (props) => {

    const setLevel = props.setLevel;
    const setIncreaseLevel = props.setIncreaseLevel;
    const setDecreaseLevel = props.setDecreaseLevel;
    const level = props.level;
    const increaseLevel = props.increaseLevel;
    const decreaseLevel = props.decreaseLevel;

    const addLevel = (champLevel) => {
        if (champLevel < 18) {
            let incrLevel = champLevel + 1;
            if (incrLevel !== 18) {
                setDecreaseLevel(false)
            }
            else setIncreaseLevel(true);
            setLevel(incrLevel);
        }
        else setIncreaseLevel(true)

    }

    const removeLevel = (champLevel) => {
        if (champLevel > 1) {
            let decrLevel = champLevel - 1;
            if (decrLevel !== 1) {
                setIncreaseLevel(false)
            }
            else setDecreaseLevel(true);
            setLevel(decrLevel);
        }
        else setDecreaseLevel(true)

    }

    return (
        <div className='d-flex justify-content-center  champ-level '>
            {/* <p>Level {level}</p> */}
            <div className="wtf">
                <button onClick={() => addLevel(level)} disabled={increaseLevel}>
                    <img className="increase-button" src={require(`../../assets/Common/left_arrow_hover.png`)} style={{ cursor: 'pointer' }} ></img>
                </button>
            </div>
            <div className="wtf2">
                <button onClick={() => removeLevel(level)} disabled={decreaseLevel}>
                    <img className="decrease-button" src={require(`../../assets/Common/left_arrow_hover.png`)} style={{ cursor: 'pointer' }}></img>
                </button>
            </div>
        </div>
    )
}

export default ChampLevel;