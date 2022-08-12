const Types = ({ type, updateType }) => {
    // TODO : Inserer les logos de type
    function handleClickType(type) {
        updateType(type);
    }
    return (
        <div>
            <button onClick={() => handleClickType(type)}> {type}</button>
        </div>
    );
};

export default Types
