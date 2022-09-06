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
        <div className='align-self-center wrap '>
            {/* <p>Level {level}</p> */}
            <button className="button-filter button-level" onClick={() => addLevel(level)} disabled={increaseLevel}>+</button>
            <button className="button-filter button-level " onClick={() => removeLevel(level)} disabled={decreaseLevel}>-</button>
        </div>
    )
}

export default ChampLevel;