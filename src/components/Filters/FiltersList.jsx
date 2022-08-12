import Roles from "./Roles";


const FiltersList = ({ roles, updateRole, role }) => {
    return (
        <div className="filters-list">
            <h2>FILTERS</h2>
            <hr />
            <p>Post</p>
            <div>
                {roles.map((role) =>
                    <div key={role}>
                        <Roles role={role} updateRole={updateRole} />
                    </div>
                )}
                <button onClick={() => updateRole('')}>Supprimer role</button>
                {/* TODO */}
            </div>
            <hr />
            <p>Type : </p>
            {/* TODO */}
            <hr />
            <p>World : </p>
            {/* TODO */}

        </div>
    )
}


export default FiltersList