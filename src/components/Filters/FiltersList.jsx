import Roles from "./Roles";
import Types from "./Types";
import Worlds from "./Worlds";
import './FiltersList.scss'
import { useState } from 'react'
import DisplayFilters from "./DisplayFilters";
import Search from "../../assets/search.svg"
import Okay from "../../assets/okay.png"




const FiltersList = ({ roles, updateRole, types, updateType, worlds, updateWorld, checkedRole, setCheckedRole, checkedType, setCheckedType, checkedWorld, setCheckedWorld, searchChamp, setChampName }) => {
    const [displayRoles, handleClickRoles] = useState(false);
    const [displayTypes, handleClickTypes] = useState(false);
    const [displayWorlds, handleClickWorlds] = useState(false);
    const [displaySearch, handleClickSearch] = useState(false);

    function canDisplayRoles() {
        handleClickRoles(!displayRoles);
    }

    function canDisplayTypes() {
        handleClickTypes(!displayTypes);
    }

    function canDisplayWorlds() {
        handleClickWorlds(!displayWorlds);
    }

    function canDisplaySearchBar() {
        handleClickSearch(!displaySearch);
    }

    function handleChangeSearch(e) {
        setChampName(e.target.value)

    }
    return (
        <div className="filters-list">

            {/* <input type="text" placeholder="Search your champ" onChange={handleChangeSearch} value={searchChamp}></input> */}
            <DisplayFilters displayFilters={canDisplaySearchBar} canDisplay={displaySearch} name={'Search champ'} />
            {displaySearch && (
                <div className="filters-list-type ms-0">
                    <div className="form__group field">
                        <input type="input" onChange={handleChangeSearch} value={searchChamp} className="form__field" placeholder="Search your champ" name="name" id='name' />
                        <label htmlFor="name" className="form__label">Search your champ</label>
                    </div>
                    <img src={Search} className="search-icon"></img>
                </div>)}
            <hr />


            <DisplayFilters displayFilters={canDisplayRoles} canDisplay={displayRoles} name={'Poste'} />
            {displayRoles && (
                <div>
                    <Roles setChecked={setCheckedRole} checked={checkedRole} roles={roles} />
                </div>
            )}

            {/* TODO : CSS here */}

            <hr />

            <DisplayFilters displayFilters={canDisplayTypes} canDisplay={displayTypes} name={'Type'} />
            {displayTypes && (
                <div>
                    <Types checked={checkedType} setChecked={setCheckedType} types={types} />
                </div>
            )}




            <hr />

            <DisplayFilters displayFilters={canDisplayWorlds} canDisplay={displayWorlds} name={'World'} />
            {displayWorlds && (
                <div>
                    <Worlds checked={checkedWorld} setChecked={setCheckedWorld} worlds={worlds} />
                </div>
            )}
            <div className="d-flex justify-content-center">
                <img src={Okay} width="140px" height="140px"></img>
            </div>


        </div>
    )
}


export default FiltersList