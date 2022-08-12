import Roles from "./Roles";
import Types from "./Types";
import Worlds from "./Worlds";


const FiltersList = ({ roles, updateRole, types, updateType, worlds, updateWorld, checkedRole, setCheckedRole, checkedType, setCheckedType, checkedWorld, setCheckedWorld }) => {

    return (
        <div className="filters-list">

            <p>Post</p>

            <Roles setChecked={setCheckedRole} checked={checkedRole} roles={roles} />
            {/* TODO : CSS here */}

            <hr />


            <p>Type </p>

            <Types checked={checkedType} setChecked={setCheckedType} types={types} />




            <hr />
            <p>World </p>

            <Worlds checked={checkedWorld} setChecked={setCheckedWorld} worlds={worlds} />
        </div>
    )
}


export default FiltersList