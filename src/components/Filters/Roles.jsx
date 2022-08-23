import './Filters.scss'


const Roles = ({ role, updateRole, checked, setChecked, roles }) => {

    /**
        * *component to display the role's filters
        * CSS file : Filters.scss
        * ? useless props
    */


    /**
        * *To update the checked roles when the user clicks on it or when the user cancels a selection
    */
    const handleChangeRole = (event) => {
        var updatedRoleList = [...checked];
        if (event.target.checked) {
            //Fusion
            updatedRoleList = [...checked, event.target.value];
        } else {
            // Remove the element if it was checked according to id 
            // syntax : splice(idRemoveElement,1)
            updatedRoleList.splice(checked.indexOf(event.target.value), 1);

        }
        setChecked(updatedRoleList);
    };

    /**
        * *To delete all checked roles 
        * TODO : It doesnt work, all selected roles are re;oved but they are checked yet
    */

    function handleDeleteRole() {
        setChecked([]);
    }


    return (
        <div >

            {
                /**
                    * *Img by roles 
                    * TODO : img for each roles selected ? (same for Worlds,Types and ChampFunctions conponents)
                    * Use /assets/Post
                    * example :
                    {role === "Mid" ?
                        <div>Mid</div> :
                            role === "ADC" ?
                                <div>ADC</div>
                                    : role === "Supp" ?
                                        <div>Support</div>
                                            : role === "Top" ?
                                                <div>Top</div> : <div>Jungle</div>}
                */
            }


            {
                /**
                    * *List of roles with checkbox (input type='checkbox')
                    * Hover the label text
                    * TODO : Hover the checkbox like the label
                */
            }

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

            {
                /**
                * *Button for delete roles
                */
            }

            <div className='d-flex justify-content-center delete-button'>
                <div className="wrap">
                    <button className="button-filter" onClick={() => handleDeleteRole()}>Delete Roles <span className='cross'>❌</span></button>
                </div>
            </div>
        </div>
    );
};

export default Roles
