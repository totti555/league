import './Filters.scss'


const Roles = ({ role, updateRole, checked, setChecked, roles }) => {

    const handleChangeRole = (event) => {
        var updatedRoleList = [...checked];
        if (event.target.checked) {
            //Fusionne le nouvelelement avec le predecent 
            updatedRoleList = [...checked, event.target.value];
        } else {
            // On enleve l'element si il etait deja coche en fonction de son id
            // syntaxe splice(idRemoveElement,1)
            updatedRoleList.splice(checked.indexOf(event.target.value), 1);

        }
        console.log(updatedRoleList);
        setChecked(updatedRoleList);
    };

    function handleDeleteRole() {
        setChecked([]);
    }


    return (
        <div >

            {/* {role === "Mid" ?
                <div>Mid</div> :
                role === "ADC" ?
                    <div>ADC</div>
                    : role === "Supp" ?
                        <div>Support</div>
                        : role === "Top" ?
                            <div>Top</div> : <div>Jungle</div>} */}



            {/* <button onClick={() => handleClickRole(role)}> {role}</button> */}

            <div className=" filters-list-type">

                {roles.map((role) =>
                    <div className='d-flex' key={role}>

                        <label className="toggle" key={role}>
                            <input className="toggle__input" type="checkbox" value={role} onChange={handleChangeRole} />
                            <span className="toggle__label">
                                <span className="toggle__text">{role}</span>
                            </span>
                        </label>

                    </div>
                )}
            </div>
            <div className='d-flex justify-content-center delete-button'>
                <div className="wrap">
                    <button className="button-filter" onClick={() => handleDeleteRole()}>Delete Roles <span className='cross'>❌</span></button>
                </div>
            </div>
        </div>
    );
};

export default Roles
