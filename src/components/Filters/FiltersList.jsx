import Button from "../Utils/Button";
import Roles from "./Roles";
import Types from "./Types";
import Worlds from "./Worlds";
import './FiltersList.css'
import { useState } from 'react'



const FiltersList = ({ roles, updateRole, types, updateType, worlds, updateWorld, checkedRole, setCheckedRole, checkedType, setCheckedType, checkedWorld, setCheckedWorld, searchChamp, setChampName }) => {
    const [displayRoles, handleClickRoles] = useState(false)

    function canDisplayRoles() {
        handleClickRoles(!displayRoles);
    }

    function handleChangeSearch(e) {
        setChampName(e.target.value)

    }
    return (
        <div className="filters-list">

            <input type="text" placeholder="Search your champ" onChange={handleChangeSearch} value={searchChamp}></input>
            <div className='post-filters'>
                <p>Poste :</p>
                <Button name={'Poste'} click={canDisplayRoles} />
            </div>
            {displayRoles && (
                <div className="div3">
                    <Roles setChecked={setCheckedRole} checked={checkedRole} roles={roles} />
                </div>
            )}

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