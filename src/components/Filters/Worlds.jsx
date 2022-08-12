const Worlds = ({ world, updateWorld, checked, setChecked }) => {
    // TODO : Inserer les logos de world
    // function handleClickworld(world) {
    //     updateWorld(world);
    // }

    const handleChangeWorld = (event) => {
        var updatedWorldList = [...checked];
        console.log("updatedWorldList");
        console.log(updatedWorldList);
        if (event.target.checked) {
            //Fusionne le nouvelelement avec le predecent 
            updatedWorldList = [...checked, event.target.value];
        } else {
            // On enleve l'element si il etait deja coche en fonction de son id
            // syntaxe splice(idRemoveElement,1)
            updatedWorldList.splice(checked.indexOf(event.target.value), 1);

        }
        setChecked(updatedWorldList);
    };


    return (
        <div>
            {/* <button onClick={() => handleClickworld(world)}> {world}</button> */}
            <label key={world}>
                <input type="checkbox" value={world}
                    onChange={handleChangeWorld} />
                {world}
            </label>
        </div>
    );
};

export default Worlds
