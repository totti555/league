import Roles from "./Roles";
import Types from "./Types";
import Worlds from "./Worlds";
import './FiltersList.scss'
import { useState } from 'react'
import DisplayFilters from "./DisplayFilters";
import Search from "../../assets/search.svg"
import Okay from "../../assets/okay.png"
import ChampFunctions from "./ChampFunctions";




const FiltersList = ({ roles, updateRole, types, updateType, worlds, updateWorld, champFunctions, checkedRole, setCheckedRole, checkedType, setCheckedType, checkedWorld, setCheckedWorld, searchChamp, setChampName, checkedChampFunction, setCheckedChampFunction }) => {

    /**
   * *component to display the filters list (left of the page)
   * CSS file : FiltersList.scss
   * !Depreciated : I don't like this !
   * TODO: 4 components (Roles,Worlds,ChampFunctions,Types) with the same code => One single component Attributes.jsx
   */

    /**
   * *states and functions to display the filters attributes by clicking
   */

    const [displayRoles, handleClickRoles] = useState(false);
    const [displayTypes, handleClickTypes] = useState(false);
    const [displayWorlds, handleClickWorlds] = useState(false);
    const [displaySearch, handleClickSearch] = useState(false);
    const [displayChampFunctions, handleClickChampFunctions] = useState(false);

    function canDisplayRoles() {
        handleClickRoles(!displayRoles);
    }

    function canDisplayTypes() {
        handleClickTypes(!displayTypes);
    }


    function canDisplayChampFunctions() {
        handleClickChampFunctions(!displayChampFunctions);
    }

    function canDisplayWorlds() {
        handleClickWorlds(!displayWorlds);
    }

    function canDisplaySearchBar() {
        handleClickSearch(!displaySearch);
    }

    /**
    * *To set a name  in relation to the text that the user entered in the search bar
    * Then, it will filter the cha;p list by the name entered by the user
    */

    function handleChangeSearch(e) {
        setChampName(e.target.value)

    }
    return (
        <>

            {
                /**
                    * * Filter search bar
                    * TODO : search-icon is not displayed (black background and black icon),shoulduse CSS filter
                    * ? : maybe separate the design of the button with the filtersList design in two different files
                    * @param displaySearch
                    * @param canDisplaySearchBar
                */
            }
            <DisplayFilters displayFilters={canDisplaySearchBar} canDisplay={displaySearch} name={'Search champ'} />
            {displaySearch && (
                <div className=" filters-list-type ms-0">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex form__group field">
                            <input type="input" onChange={handleChangeSearch} value={searchChamp} className="form__field" placeholder="Search your champ" name="name" id='name' />
                            <label htmlFor="name" className="form__label">Search <span className="label-visible">your champ</span></label>
                        </div>
                        <img src={Search} className="search-icon"></img>
                    </div>
                </div>)}
            <hr />

            {
                /**
                    * * Filter by roles
                    * @param displayRoles
                    * @param canDisplayRoles
                */
            }

            <DisplayFilters displayFilters={canDisplayRoles} canDisplay={displayRoles} name={'Poste'} />
            {displayRoles && (
                <div>
                    <Roles setChecked={setCheckedRole} checked={checkedRole} roles={roles} />
                </div>
            )}

            <hr />

            {
                /**
                    * * Filter by types
                    * @param displayTypes
                    * @param canDisplayTypes
                */
            }

            <DisplayFilters displayFilters={canDisplayTypes} canDisplay={displayTypes} name={'Type'} />
            {displayTypes && (
                <div>
                    <Types checked={checkedType} setChecked={setCheckedType} types={types} />
                </div>
            )}

            <hr />

            {
                /**
                    * * Filter by functions
                    * @param displayChampFunctions
                    * @param canDisplayChampFunctions
                */
            }

            <DisplayFilters displayFilters={canDisplayChampFunctions} canDisplay={displayChampFunctions} name={'Functions'} />
            {displayChampFunctions && (
                <div>
                    <ChampFunctions checked={checkedChampFunction} setChecked={setCheckedChampFunction} champFunctions={champFunctions} />
                </div>
            )}

            <hr />

            {
                /**
                    * * Filter by worlds
                    * @param displayWorlds
                    * @param canDisplayWorlds
                */
            }

            <DisplayFilters displayFilters={canDisplayWorlds} canDisplay={displayWorlds} name={'World'} />
            {displayWorlds && (
                <div>
                    <Worlds checked={checkedWorld} setChecked={setCheckedWorld} worlds={worlds} />
                </div>
            )}

            {
                /**
                   Img rammus okay
                */
            }

            <div className="d-flex justify-content-center">
                <img src={Okay} className="okay-picture" width="140px" height="140px"></img>
            </div>


        </>
    )
}


export default FiltersList