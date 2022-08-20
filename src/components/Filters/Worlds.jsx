import './Filters.scss'


const Worlds = ({ world, updateWorld, checked, setChecked, worlds }) => {
    // TODO : Inserer les logos de world
    // function handleClickworld(world) {
    //     updateWorld(world);
    // }

    const handleChangeWorld = (event) => {
        var updatedWorldList = [...checked];
        if (event.target.checked) {
            updatedWorldList = [...checked, event.target.value];
        } else {
            updatedWorldList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedWorldList);
    };

    function handleDeleteWorld() {
        setChecked([]);
    }


    return (
        <div>
            <div className=" filters-list-type">
                {worlds.map((world) =>
                    <div className='d-flex' key={world}>
                        {/* <label key={world} >
                        <input type="checkbox" className='hide-checkbox' value={world}
                            onChange={handleChangeWorld} />
                        <span class="entity">{world}</span>

                    </label> */}

                        <label className="toggle" key={world}>
                            <input className="toggle__input" type="checkbox" value={world} onChange={handleChangeWorld} />
                            <span className="toggle__label">
                                <span className="toggle__text">{world}</span>
                            </span>
                        </label>


                    </div>
                )}
                {/* TODO : CSS here */}
            </div>
            <div className='d-flex justify-content-center delete-button'>
                <div className="wrap">
                    <button className="button-filter" onClick={() => handleDeleteWorld()}>Delete Worlds <span className='cross'>❌</span></button>
                </div>
                {/* <button className="btn-filter" onClick={() => handleDeleteWorld()}>DELETE WORLDS <span className='cross'>❌</span></button> */}
            </div>
        </div>
    );
};

export default Worlds
