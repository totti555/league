import ChampList from "../components/ChampList/ChampList";
import FiltersList from "../components/Filters/FiltersList";
import { champList } from "../datas/lolChamp";
import { useState } from 'react'

const Look = () => {
    const [role, updateRole] = useState('')
    const roles = champList.reduce(
        (acc, champ) =>
            acc.includes(champ.role) ? acc : acc.concat(champ.role),
        []
    )

    return (
        <div className='row'>
            <div className="col-4">
                <FiltersList roles={roles} role={role} updateRole={updateRole} />
            </div>
            <div className="col-8">
                <ChampList roles={roles} role={role} />
            </div>
        </div>
    );
};

export default Look;