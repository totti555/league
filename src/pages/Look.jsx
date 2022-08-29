import ChampList from "../components/ChampList/ChampList";
import FiltersList from "../components/Filters/FiltersList";
import FiltersRecap from "../components/Filters/FiltersRecap";
import { champList } from "../datas/lolChamp";
import { useState } from 'react'
import '../style/Look.scss'
import DisplayFilters from "../components/Filters/DisplayFilters";
import FlecheBas from "../assets/fleche-bas.png"

const Look = (props) => {

    /**
        * *View to display the champions and the filter lists
        * CSS file : Look.scss
        * Components : ChampList, FiltersList, FiltersRecap, DisplayFilters
    */

    /**
        * *states
        * !Depreciated
        * ? These states are usefull ? 
        * @param role
        * @param type
        * @param world
        * @param champFunction
    */

    const [searchResult, setChampName] = useState('');
    const [role, updateRole] = useState('')
    const [type, updateType] = useState('')
    const [world, updateWorld] = useState('')
    // const [champFunction, updateChampFunction] = useState('');

    /**
       * *states to know the checked attributes
       * @param checkedRole
       * @param checkedWorld
       * @param checkedChampFunction
       * @param checkedType
   */

    const [checkedRole, setCheckedRole] = useState([]);
    const [checkedWorld, setCheckedWorld] = useState([]);
    const [checkedChampFunction, setCheckedChampFunction] = useState([]);
    const [checkedType, setCheckedType] = useState([]);

    /**
       * *state + function to display the filters tags
       * @param displayTags
    */

    const [displayTags, handleClickTags] = useState(false);

    function canDisplayTags() {
        handleClickTags(!displayTags);
    }

    /**
       * *state + function to SHOW / HIDE the filters (FiltersList.jsx)
       * @param displayFilters
    */

    const [displayFilters, setDisplayFilters] = useState(false);

    function showFilters() {
        setDisplayFilters(!displayFilters);
    }

    /**
       * *state for the background image of the body for the look page
       * img /assets/Background
       * Img by default : /public/Background/Kaisa
       * @param currentChamp
    */

    const [currentChamp, setCurrentChamp] = useState('Kaisa');

    /**
       * ?to remove ?
    */

    // function flatten(arr) {
    //     return arr.reduce(function (flat, toFlatten) {
    //         return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    //     }, []);
    // }

    /**
      * *function to get all unique roles of champions
      * !Depreciated : variable names
      * @param champList.role
   */

    const rolesList = () => {
        const toto = champList.map((champ) => champ.role);
        const tata = Array.prototype.concat.apply([], toto);
        const uniqueArr = [...new Set(tata)]
        return uniqueArr;
    }

    /**
      * *function to get all unique functions of champions
      * @param champList.type
    */

    const champFunctionsList = () => {
        const champFunctionsList = champList.map((champ) => champ.type);
        const removeDuplicatesElements = Array.prototype.concat.apply([], champFunctionsList);
        const uniqueFunctionList = [...new Set(removeDuplicatesElements)];
        return uniqueFunctionList;
    }

    /**
      * *function to get all unique type of damages of champions
      * @param champList.damages_type
    */

    const typesList = champList.reduce(
        (acc, champ) =>
            acc.includes(champ.damages_type) ? acc : acc.concat(champ.damages_type),
        []
    )

    /**
      * *function to get all unique worlds of champions
      * @param champList.worlds
    */

    const worldList = champList.reduce(
        (acc, champ) =>
            acc.includes(champ.world) ? acc : acc.concat(champ.world),
        []
    )



    return (
        /**
            * *change the background-image
            * img in /public/Background
        */
        <div className='row content background-img' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${process.env.PUBLIC_URL + `/Background/${currentChamp}.jpg`}` }} >
            <div>
                {
                    /**
                        * *Div to for filters (col-2)
                    */
                }

                <div className={displayFilters ? 'hide-filters' : 'col-2 col-custom-filter filters pe-0 ps-0'}>

                    <div className="box-shadow ps-3 filters-title">
                        <h1><span className="title">FILTERS</span></h1>
                    </div>
                    <hr />
                    <div className="list-inline text-center align-items-center h-100">
                        {
                            /**
                                * *Display FiltersRecap with animation
                            */
                        }
                        <DisplayFilters displayFilters={canDisplayTags} canDisplay={displayTags} name={'Current filters'} />
                        {displayTags && (
                            <FiltersRecap
                                checkedRole={checkedRole}
                                setCheckedRole={setCheckedRole} checkedType={checkedType}
                                setCheckedType={setCheckedType} checkedWorld={checkedWorld}
                                setCheckedWorld={setCheckedWorld} setChampName={setChampName}
                            />)}

                        <hr />

                        {
                            /**
                                * *Others filters
                            */
                        }

                        <FiltersList
                            roles={rolesList()} updateRole={updateRole} types={typesList} champFunctions={champFunctionsList()}
                            updateType={updateType} worlds={worldList} updateWorld={updateWorld} checkedRole={checkedRole}
                            setCheckedRole={setCheckedRole} checkedType={checkedType}
                            setCheckedType={setCheckedType} checkedWorld={checkedWorld}
                            checkedChampFunction={checkedChampFunction} setCheckedChampFunction={setCheckedChampFunction}
                            setCheckedWorld={setCheckedWorld} setChampName={setChampName} searchResult={searchResult} />

                    </div>
                </div>
                {
                    /**
                        * *Div for the champions list (col-10)
                    */
                }
                <div className={displayFilters ? 'col-12 champs-list ps-0' : 'col-10 col-custom-champion champs-list ps-0'}>
                    {
                        /**
                            * *Button to hide filters 
                            * Div for the champions list : col-10 => col-12
                            * Div for the filters list : col-2 => col-0
                            * Animation : 
                            * left arrow : hide filters
                            * right arrow : show filters
                        */
                    }
                    <div className="display-filters" onClick={showFilters}>
                        {displayFilters ? (<img className="nav-chevron-filters " src={FlecheBas} alt="Arrow bottom" width="30px" height="30px"></img>)
                            : (<img className="nav-chevron-filters-inverse" src={FlecheBas} alt="Arrow bottom" width="30px" height="30px"></img>)}

                    </div>
                    <ChampList
                        role={role} type={type} world={world}
                        checkedRole={checkedRole} checkedType={checkedType} checkedChampFunction={checkedChampFunction}
                        checkedWorld={checkedWorld} searchResult={searchResult} setChampName={setChampName} setCurrentChamp={setCurrentChamp} />
                </div>
            </div>
        </div>
    );
};

export default Look;