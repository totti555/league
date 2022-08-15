import './Filters.scss'


const Types = ({ type, updateType, checked, setChecked, types }) => {

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

    function handleDeleteType() {
        setChecked([]);
    }


    return (

        <div>
            {types.map((type) =>
                <div key={type}>
                    {/* <button onClick={() => handleClickType(type)}> {type}</button> */}
                    <label key={type}>
                        <input type="checkbox" value={type}
                            onChange={handleChangeType} />
                        {type}
                    </label>
                </div>
            )}
            <button onClick={() => handleDeleteType()}>Supprimer type</button>
            {/* TODO : CSS here */}
        </div>
    )
};

export default Types
