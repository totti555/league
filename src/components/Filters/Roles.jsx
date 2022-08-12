

const Roles = ({ role, updateRole }) => {
    // TODO : Inserer les images de role
    function handleClickRole(role) {
        updateRole(role);
    }
    return (
        <div>

            {/* {role === "Mid" ?
                <div>Mid</div> :
                role === "ADC" ?
                    <div>ADC</div>
                    : role === "Supp" ?
                        <div>Support</div>
                        : role === "Top" ?
                            <div>Top</div> : <div>Jungle</div>} */}
            <button onClick={() => handleClickRole(role)}> {role}</button>


        </div>
    );
};

export default Roles
