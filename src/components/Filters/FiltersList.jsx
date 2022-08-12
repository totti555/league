import Roles from "./Roles";
import Types from "./Types";
import Worlds from "./Worlds";


const FiltersList = ({ roles, updateRole, types, updateType, worlds, updateWorld, checkedRole, setCheckedRole, checkedType, setCheckedType, checkedWorld, setCheckedWorld }) => {



    function handleDeleteRole() {
        setCheckedRole([]);
        console.log(checkedRole);
    }
    return (
        <div className="filters-list">

            <p>Post</p>
            <div>
                {roles.map((role) =>
                    <div key={role}>
                        <Roles role={role} updateRole={updateRole} setChecked={setCheckedRole} checked={checkedRole} />
                    </div>
                )}
                <button onClick={() => handleDeleteRole()}>Supprimer role</button>


                {/* TODO : CSS here */}
            </div>
            <hr />


            <p>Type </p>
            <div>
                {types.map((type) =>
                    <div key={type}>
                        <Types type={type} updateType={updateType} checked={checkedType} setChecked={setCheckedType} />
                    </div>
                )}
                <button onClick={() => updateType('')}>Supprimer type</button>
                {/* TODO : CSS here */}
            </div>




            <hr />
            <p>World </p>
            <div>
                {worlds.map((world) =>
                    <div key={world}>
                        <Worlds world={world} updateWorld={updateWorld} checked={checkedWorld} setChecked={setCheckedWorld} />
                    </div>
                )}
                <button onClick={() => updateWorld('')}>Supprimer world</button>
                {/* TODO : CSS here */}
            </div>
            {/* TODO */}

        </div>
    )
}


export default FiltersList