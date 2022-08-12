

const Roles = ({ role, updateRole, checked, setChecked }) => {
    // TODO : Inserer les images de role
    // function handleClickRole(role) {
    //     updateRole(role);
    // }

    const handleChangeRole = (event) => {
        var updatedRoleList = [...checked];
        console.log("updatedRoleList");
        console.log(updatedRoleList);
        if (event.target.checked) {
            //Fusionne le nouvelelement avec le predecent 
            updatedRoleList = [...checked, event.target.value];
        } else {
            // On enleve l'element si il etait deja coche en fonction de son id
            // syntaxe splice(idRemoveElement,1)
            updatedRoleList.splice(checked.indexOf(event.target.value), 1);

        }
        setChecked(updatedRoleList);
    };


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



            {/* <button onClick={() => handleClickRole(role)}> {role}</button> */}

            <label key={role}>
                <input type="checkbox" value={role}
                    onChange={handleChangeRole} />
                {role}
            </label>


        </div>
    );
};

export default Roles
