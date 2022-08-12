import Roles from "./Roles";
import Types from "./Types";
import Worlds from "./Worlds";


const FiltersList = ({ roles, updateRole, types, updateType, worlds, updateWorld }) => {
    return (
        <div className="filters-list">

            <p>Post</p>
            <div>
                {roles.map((role) =>
                    <div key={role}>
                        <Roles role={role} updateRole={updateRole} />
                    </div>
                )}
                <button onClick={() => updateRole('')}>Supprimer role</button>
                {/* TODO : CSS here */}
            </div>
            <hr />


            <p>Type </p>
            <div>
                {types.map((type) =>
                    <div key={type}>
                        <Types type={type} updateType={updateType} />
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
                        <Worlds world={world} updateWorld={updateWorld} />
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