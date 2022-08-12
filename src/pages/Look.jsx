import ChampList from "../components/ChampList/ChampList";
import FiltersList from "../components/Filters/FiltersList";
import FiltersRecap from "../components/Filters/FiltersRecap";
import { champList } from "../datas/lolChamp";
import { useState } from 'react'

const Look = () => {
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
            <div className="col-4">
                <h2>FILTERS</h2>
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
                    setCheckedWorld={setCheckedWorld} />
            </div>
            <div className="col-8">
                <ChampList role={role} type={type} world={world} checkedRole={checkedRole} checkedType={checkedType} checkedWorld={checkedWorld} />
            </div>
        </div>
    );
};

export default Look;