
import { champList } from "../../datas/lolChamp";
import './ChampCard.css'
import ChampCard from "./ChampCard"
import React from 'react';

const ChampList = ({ role, type, world, checkedRole, checkedType, checkedWorld, searchResult, setChampName }) => {

    // TODO : utiliser useEffect

    const ifNoChampSelected = () => {
        const champIsFind = champList.find((champ) => (role === champ.role || !role) && (type === champ.damages_type || !type) && (world === champ.world || !world));
        return champIsFind ? false : true
    }
    const isCheckedRole = (role) => {
        return checkedRole.find((c) => c === role) ? true : false
    }

    const isCheckedType = (type) => {
        return checkedType.find((c) => c === type) ? true : false
    }

    const isCheckedWorld = (world) => {
        return checkedWorld.find((c) => c === world) ? true : false
    }

    const isChampionFind = (champName) => {
        // console.log(champList.map((champ) => champ.name.toLowerCase().includes(searchResult.toLowerCase())));
        const data = champName.toLowerCase().includes(searchResult.toLowerCase());
        return data ? true : false;
    }


    // useEffect(() => {
    //     const element = document.getElementById('champ-card');
    //     element.classList.toggle("champ-card");
    // }, [searchResult]);


    return (
        <div className="overflow">
            <h1 className=" box-shadow text-white">Champion</h1>
            <div className="container">
                <div className="row champ-content">
                    {champList.map((champ) =>
                        <React.Fragment key={champ.id}>
                            {
                                ((isCheckedRole(champ.role) || !checkedRole.length) && (isCheckedType(champ.damages_type) || !checkedType.length)
                                    && (isCheckedWorld(champ.world) || !checkedWorld.length) && (isChampionFind(champ.name) || !searchResult)) ? (
                                    // <div className="col-12 col-md-3 col-lg-2 border m-3 champ-card">
                                    <div className=" col-12 col-md-4 col-lg-4 col-xl-3 col-xxl-2">
                                        <ChampCard champ={champ} />
                                    </div>) : null
                            }
                        </React.Fragment>
                    )}
                </div>
                {ifNoChampSelected() ? (<div className="no-champ-find"> <NoChampFound /></div>) : null}


            </div>
        </div >
    );
};


const NoChampFound = () => {
    return (
        <div>
            {/* TODO : Design  */}
            <p>Pas de champion trouve</p>
            <p>Reesayez avec d'autres filtres !</p>
        </div>
    )
}

export default ChampList;