import ChampList from "../components/ChampList/ChampList";
import FiltersList from "../components/Filters/FiltersList";
import FiltersRecap from "../components/Filters/FiltersRecap";
import { champList } from "../datas/lolChamp";
import { useState } from 'react'
import '../style/Look.scss'

const Look = (props) => {
    const [searchResult, setChampName] = useState('');
    const [role, updateRole] = useState('')
    const [type, updateType] = useState('')
    const [world, updateWorld] = useState('')
    const [checkedRole, setCheckedRole] = useState([]);
    const [checkedWorld, setCheckedWorld] = useState([]);
    const [checkedType, setCheckedType] = useState([]);
    const rolesList = champList.reduce(
        (acc, champ) =>
            acc.includes(champ.role) ? acc : acc.concat(champ.role),
        []
    )

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
        <div className='row'>
            <div className="col-4 filters">
                <div className="ms-2">
                    <h2 className="text-white">FILTERS</h2>
                    <hr />
                    <FiltersRecap
                        checkedRole={checkedRole}
                        setCheckedRole={setCheckedRole} checkedType={checkedType}
                        setCheckedType={setCheckedType} checkedWorld={checkedWorld}
                        setCheckedWorld={setCheckedWorld} />
                    <hr />
                    <FiltersList
                        roles={rolesList} updateRole={updateRole} types={typesList}
                        updateType={updateType} worlds={worldList} updateWorld={updateWorld} checkedRole={checkedRole}
                        setCheckedRole={setCheckedRole} checkedType={checkedType}
                        setCheckedType={setCheckedType} checkedWorld={checkedWorld}
                        setCheckedWorld={setCheckedWorld} setChampName={setChampName} searchResult={searchResult} />
                </div>
            </div>
            <div className="col-8">
                <ChampList role={role} type={type} world={world} checkedRole={checkedRole} checkedType={checkedType} checkedWorld={checkedWorld} searchResult={searchResult} setChampName={setChampName} />
            </div>
        </div>
    );
};

export default Look;