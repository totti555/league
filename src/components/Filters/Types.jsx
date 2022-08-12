const Types = ({ type, updateType, checked, setChecked }) => {
    // TODO : Inserer les logos de type
    // function handleClickType(type) {
    //     updateType(type);
    // }

    const handleChangeType = (event) => {
        var updatedTypeList = [...checked];
        console.log("updatedTypeList");
        console.log(updatedTypeList);
        if (event.target.checked) {
            //Fusionne le nouvelelement avec le predecent 
            updatedTypeList = [...checked, event.target.value];
        } else {
            // On enleve l'element si il etait deja coche en fonction de son id
            // syntaxe splice(idRemoveElement,1)
            updatedTypeList.splice(checked.indexOf(event.target.value), 1);

        }
        setChecked(updatedTypeList);
    };


    return (
        <div>
            {/* <button onClick={() => handleClickType(type)}> {type}</button> */}
            <label key={type}>
                <input type="checkbox" value={type}
                    onChange={handleChangeType} />
                {type}
            </label>
        </div>
    );
};

export default Types
