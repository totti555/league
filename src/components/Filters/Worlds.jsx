const Worlds = ({ world, updateWorld }) => {
    // TODO : Inserer les logos de world
    function handleClickWorld(world) {
        updateWorld(world);
    }
    return (
        <div>
            <button onClick={() => handleClickWorld(world)}> {world}</button>
        </div>
    );
};

export default Worlds