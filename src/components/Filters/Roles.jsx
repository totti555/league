import { useState } from "react";


const Roles = ({ role, updateRole, checked, setChecked, roles }) => {

    let isChecked = useState(false);

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

    function handleDeleteRole() {
        setChecked([]);
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



            {/* <button onClick={() => handleClickRole(role)}> {role}</button> */}

            <div>

                {roles.map((role) =>
                    <div key={role}>
                        <label key={role}>
                            <input type="checkbox" value={role}
                                onChange={handleChangeRole} />
                            {role}
                        </label>
                    </div>
                )}
                <button onClick={() => handleDeleteRole()}>Supprimer role</button>


                {/* TODO : CSS here */}
            </div>




        </div>
    );
};

export default Roles
