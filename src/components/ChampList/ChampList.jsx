
import { champList } from "../../datas/lolChamp";
import './ChampCard.scss'
import ChampCard from "./ChampCard"
import React from 'react';
import { useState } from 'react'

const ChampList = ({ role, type, world, checkedRole, checkedType, checkedWorld, checkedChampFunction, searchResult, setChampName }) => {

    const [currentChamp, setCurrentChamp] = useState('Kaisa');
    // let background = "../../assets/Background/Kaisa.jpg";

    // TODO : utiliser useEffect

    const ifNoChampSelected = () => {
        const champIsFind = champList.find((champ) => (role === champ.role || !role) && (type === champ.damages_type || !type) && (world === champ.world || !world));
        return champIsFind ? false : true
    }
    const isCheckedChampFunction = (cf) => {
        //TODO : Afficher uniquement pour les 2 filtres, et pas les 2 categories
        const intersection = checkedChampFunction.filter(element => cf.includes(element));
        return intersection.length ? true : false;
    }

    const isCheckedRole = (role) => {
        //TODO : Afficher uniquement pour les 2 filtres, et pas les 2 categories
        // let names= ["Style","List","Raw"];
        // let results= names.filter(x => x.toLowerCase().includes("s"));
        // console.log(results); //["Style", "List"]


        // Maybe with => const  intersections = array1.filter(e => array2.indexOf(e) !== -1);




        const intersection = checkedRole.filter(element => role.includes(element));
        return intersection.length ? true : false;
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
        // style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${process.env.PUBLIC_URL + `/Background/${currentChamp}.jpg`}` }} className="background-img"
        <div>
            <div className="box-shadow ps-3">
                <h1 className="champ-title"><span className="title">CHAMPIONS</span></h1>
            </div>
            <br />
            <div className="container">
                <div className="row champ-content">
                    {champList.map((champ) =>
                        <React.Fragment key={champ.id}>
                            {
                                ((isCheckedRole(champ.role) || !checkedRole.length)
                                    && (isCheckedType(champ.damages_type) || !checkedType.length)
                                    && (isCheckedWorld(champ.world) || !checkedWorld.length)
                                    && (isCheckedChampFunction(champ.type) || !checkedChampFunction.length)
                                    && (isChampionFind(champ.name) || !searchResult)) ? (
                                    // <div className="col-12 col-md-3 col-lg-2 border m-3 champ-card">
                                    <div className=" col-12 col-sm-6 col-mid-4 col-lg-4 col-xl-3 col-mid-3 col-xxl-1 col-custom-5 col-custom-4 col-custom-3 col-custom-2 col-custom">
                                        <ChampCard champ={champ} setCurrentChamp={setCurrentChamp} />
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