import ChampList from "../components/ChampList/ChampList";
import FiltersList from "../components/Filters/FiltersList";
import FiltersRecap from "../components/Filters/FiltersRecap";
import { champList } from "../datas/lolChamp";
import { useState } from 'react'
import '../style/Look.scss'
import DisplayFilters from "../components/Filters/DisplayFilters";

const Look = (props) => {
    const [searchResult, setChampName] = useState('');
    const [role, updateRole] = useState('')
    const [type, updateType] = useState('')
    const [world, updateWorld] = useState('')
    const [champFunction, updateChampFunction] = useState('');
    const [checkedRole, setCheckedRole] = useState([]);
    const [checkedWorld, setCheckedWorld] = useState([]);
    const [checkedChampFunction, setCheckedChampFunction] = useState([]);
    const [checkedType, setCheckedType] = useState([]);
    const [displayTags, handleClickTags] = useState(false);

    function canDisplayTags() {
        handleClickTags(!displayTags);
    }

    function flatten(arr) {
        return arr.reduce(function (flat, toFlatten) {
            return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
        }, []);
    }

    const rolesList = () => {
        const toto = champList.map((champ) => champ.role);
        const tata = Array.prototype.concat.apply([], toto);
        const uniqueArr = [...new Set(tata)]
        // const tata = toto.
        // reduce(
        //     (acc, champ) =>
        //         acc.includes(champ) ? acc : acc.concat(champ),
        //     []
        // )
        // {role:"toto"},{role:"toto"}
        // {name:'role'},{name:role}
        // const tata = flatten(toto);
        return uniqueArr;
    }

    const champFunctionsList = () => {
        const champFunctionsList = champList.map((champ) => champ.type);
        const removeDuplicatesElements = Array.prototype.concat.apply([], champFunctionsList);
        const uniqueFunctionList = [...new Set(removeDuplicatesElements)];
        console.log(uniqueFunctionList);
        return uniqueFunctionList;
    }

    const typesList = champList.reduce(
        (acc, champ) =>
            acc.includes(champ.damages_type) ? acc : acc.concat(champ.damages_type),
        []
    )



    const worldList = champList.reduce(
        (acc, champ) =>
            acc.includes(champ.world) ? acc : acc.concat(champ.world),
        []
    )



    return (
        <div className='row content background-img' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${process.env.PUBLIC_URL + `/Background/Kaisa.jpg`}` }} >
            <div>
            <div className="col-2 filters pe-0 ps-0" >
               
                    <div className="box-shadow ps-3 filters-title">
                        <h1><span className="title">FILTERS</span></h1>
                    </div>
                    <hr />
                    <div className="list-inline text-center align-items-center h-100">
                    <DisplayFilters displayFilters={canDisplayTags} canDisplay={displayTags} name={'Current filters'} />
                    {displayTags && (
                        <FiltersRecap
                            checkedRole={checkedRole}
                            setCheckedRole={setCheckedRole} checkedType={checkedType}
                            setCheckedType={setCheckedType} checkedWorld={checkedWorld}
                            setCheckedWorld={setCheckedWorld}
                        />)}

                    <hr />
                    <FiltersList
                        roles={rolesList()} updateRole={updateRole} types={typesList} champFunctions={champFunctionsList()}
                        updateType={updateType} worlds={worldList} updateWorld={updateWorld} checkedRole={checkedRole}
                        setCheckedRole={setCheckedRole} checkedType={checkedType}
                        setCheckedType={setCheckedType} checkedWorld={checkedWorld}
                        checkedChampFunction={checkedChampFunction} setCheckedChampFunction={setCheckedChampFunction}
                        setCheckedWorld={setCheckedWorld} setChampName={setChampName} searchResult={searchResult} />

            </div>
            </div>
            <div className="col-10 champs-list ps-0">
                <ChampList
                    role={role} type={type} world={world}
                    checkedRole={checkedRole} checkedType={checkedType} checkedChampFunction={checkedChampFunction}
                    checkedWorld={checkedWorld} searchResult={searchResult} setChampName={setChampName} />
            </div>
            </div>
        </div>
    );
};

export default Look;