import Roles from "./Roles";
import Types from "./Types";
import Worlds from "./Worlds";
import './FiltersList.scss'
import { useState } from 'react'
import DisplayFilters from "./DisplayFilters";



const FiltersList = ({ roles, updateRole, types, updateType, worlds, updateWorld, checkedRole, setCheckedRole, checkedType, setCheckedType, checkedWorld, setCheckedWorld, searchChamp, setChampName }) => {
    const [displayRoles, handleClickRoles] = useState(false);
    const [displayTypes, handleClickTypes] = useState(false);
    const [displayWorlds, handleClickWorlds] = useState(false);

    function canDisplayRoles() {
        handleClickRoles(!displayRoles);
    }

    function canDisplayTypes() {
        handleClickTypes(!displayTypes);
    }

    function canDisplayWorlds() {
        handleClickWorlds(!displayWorlds);
    }

    function handleChangeSearch(e) {
        setChampName(e.target.value)

    }
    return (
        <div className="filters-list">

            {/* <input type="text" placeholder="Search your champ" onChange={handleChangeSearch} value={searchChamp}></input> */}

            <div className="form__group field">
                <input type="input" onChange={handleChangeSearch} value={searchChamp} className="form__field" placeholder="Search your champ" name="name" id='name' />
                <label for="name" className="form__label">Search your champ</label>
            </div>
            <hr />


            <DisplayFilters displayFilters={canDisplayRoles} name={'Poste'} />
            {displayRoles && (
                <div className="filters-list-type">
                    <Roles setChecked={setCheckedRole} checked={checkedRole} roles={roles} />
                </div>
            )}

            {/* TODO : CSS here */}

            <hr />

            <DisplayFilters displayFilters={canDisplayTypes} name={'Type'} />
            {displayTypes && (
                <div className="filters-list-type">
                    <Types checked={checkedType} setChecked={setCheckedType} types={types} />
                </div>
            )}




            <hr />

            <DisplayFilters displayFilters={canDisplayWorlds} name={'World'} />
            {displayWorlds && (
                <div className="filters-list-type">
                    <Worlds checked={checkedWorld} setChecked={setCheckedWorld} worlds={worlds} />
                </div>
            )}


        </div>
    )
}


export default FiltersList