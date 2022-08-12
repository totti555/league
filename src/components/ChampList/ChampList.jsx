
import { champList } from "../../datas/lolChamp";
import './ChampCard.css'
import ChampCard from "./ChampCard"
import React from 'react';

const ChampList = ({ role }) => {
    return (
        <div>
            <h1>Coming soon</h1>
            <div className="container">
                <div className="row">
                    {champList.map((champ) =>
                        <React.Fragment key={champ.id}>
                            {
                                (role === champ.role || !role) ? (
                                    <div className="col-12 col-md-3 col-lg-2 border m-3 champ-card" >
                                        <ChampCard champ={champ} />
                                    </div>) : null
                            }
                        </React.Fragment>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChampList;