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
            {worlds.map((world) =>
                <div key={world}>
                    {/* <label key={world} >
                        <input type="checkbox" className='hide-checkbox' value={world}
                            onChange={handleChangeWorld} />
                        <span class="entity">{world}</span>

                    </label> */}

                    <label class="toggle" key={world}>
                        <input class="toggle__input" type="checkbox" value={world} onChange={handleChangeWorld} />
                        <span class="toggle__label">
                            <span class="toggle__text">{world}</span>
                        </span>
                    </label>


                </div>
            )}
            <button onClick={() => handleDeleteWorld()}>Supprimer world</button>
            {/* TODO : CSS here */}
        </div>
    );
};

export default Worlds
