
import { champList } from "../../datas/lolChamp";
import './ChampCard.css'
import ChampCard from "./ChampCard"
import React from 'react';

const ChampList = ({ role, type, world }) => {
    const ifNoChampSelected = () => {
        const champIsFind = champList.find((champ) => (role === champ.role || !role) && (type === champ.damages_type || !type) && (world === champ.world || !world))
        console.log(champIsFind);
        return champIsFind ? false : true
    }
    return (
        <div>
            <h1>Coming soon</h1>
            <div className="container">
                <div className="row champ-content">
                    {champList.map((champ) =>
                        <React.Fragment key={champ.id}>
                            {
                                ((role === champ.role || !role) && (type === champ.damages_type || !type) && (world === champ.world || !world)) ? (
                                    <div className="col-12 col-md-3 col-lg-2 border m-3 champ-card" >
                                        <ChampCard champ={champ} />
                                    </div>) : null
                            }
                        </React.Fragment>
                    )}
                </div>
                {ifNoChampSelected() ? (<div className="no-champ-find"> <NoChampFound /></div>) : null}


            </div>
        </div>
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