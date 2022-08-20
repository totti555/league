import './Filters.scss'


const ChampFunctions = ({ checked, setChecked, champFunctions }) => {

    const handleChangeChampFunction = (event) => {
        var updatedChampFunctionList = [...checked];
        if (event.target.checked) {
            updatedChampFunctionList = [...checked, event.target.value];
        } else {
            updatedChampFunctionList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedChampFunctionList);
    };

    function handleDeleteChampFunction() {
        setChecked([]);
    }


    return (
        <div >
            <div className=" filters-list-type">

                {champFunctions.map((champFunction) =>
                    <div className='d-flex' key={champFunction}>

                        <label className="toggle" key={champFunction}>
                            <input className="toggle__input" type="checkbox" value={champFunction} onChange={handleChangeChampFunction} />
                            <span className="toggle__label">
                                <span className="toggle__text">{champFunction}</span>
                            </span>
                        </label>

                    </div>
                )}
            </div>
            <div className='d-flex justify-content-center delete-button'>
                <div className="wrap">
                    <button className="button-filter" onClick={() => handleDeleteChampFunction()}>Delete Functions <span className='cross'>❌</span></button>
                </div>
            </div>
        </div>
    );
};

export default ChampFunctions
