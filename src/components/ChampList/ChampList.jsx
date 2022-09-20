
import { champList } from "../../datas/lolChamp";
import './ChampCard.scss'
import ChampCard from "./ChampCard"
import React from 'react';
import { useState } from 'react'
import '../Filters/Filters.scss'

const ChampList = ({ role, type, world, checkedRole, checkedType, checkedWorld, checkedChampFunction, searchResult, setChampName, setCurrentChamp }) => {

    /**
        * *To display the list of champions according to filters
        * SCSS file : ChampCard.scss
        * Components : ChampCard, NoChampFound
        * ! Depreciated : create a CSS file ChampList.scss instead of ChampCard.scss
        * TODO : props and variable
        * @param props
    */

    /**
        * *to filter the champions by name or by date
        * @param champ
    */
    const [champ, setChampList] = useState(champList);

    /**
      * *to filter the champions by links
      * @param champ
  */

    const [currentChampLinks, setCurrentChampLinks] = useState(null);

    /**
        * *to display a div when no champions are found
        * TODO : doesn't work currently
        * ? useEffect to solve the proble; ? 
        * ?  useEffect(() => {
        * ?  const element = document.getElementById('champ-card');
        * ?  element.classList.toggle("champ-card");
        * ?  }, [searchResult]);
    */
    // const ifNoChampSelected = () => {
    //     const champIsFind = champList.find((champ) => (role === champ.role || !role) && (type === champ.damages_type || !type) && (world === champ.world || !world));
    //     return champIsFind ? false : true
    // }

    /**
        * *find champions by the functions selected 
        * can filter for a champion with multiple functions 
        * TODO : We should display the champ with only the categories selected
        * Maybe with => const  intersections = array1.filter(e => array2.indexOf(e) !== -1); ? 
    */

    const isCheckedChampFunction = (cf) => {
        const intersection = checkedChampFunction.filter(element => cf.includes(element));
        return intersection.length ? true : false;
    }

    /**
        * *find champions by the roles selected 
        * can filter for a champion with multiple roles
        * TODO : We should display the champ with only the categories selected
        * ? Maybe with => const  intersections = array1.filter(e => array2.indexOf(e) !== -1); ? 
    */

    const isCheckedRole = (role) => {
        const intersection = checkedRole.filter(element => role.includes(element));
        return intersection.length ? true : false;
    }

    /**
        * *find champions by the type selected 
        * @param champsList.damages_types
    */

    const isCheckedType = (type) => {
        return checkedType.find((c) => c === type) ? true : false
    }

    /**
        * *find champions by the world selected 
        * @param champsList.world
    */

    const isCheckedWorld = (world) => {
        return checkedWorld.find((c) => c === world) ? true : false
    }

    /**
        * *find champions by name with a search bar
        * @param champsList.name
    */

    const isChampionFind = (champName) => {
        const data = champName.toLowerCase().includes(searchResult.toLowerCase());
        return data ? true : false;
    }

    /**
        * *to filter the champions order by name desc
    */

    function fetchByNameDecreasing() {

        let sortedData = champ.slice().sort((a, b) => b.id - a.id);
        setChampList(sortedData);

    }


    function fetchByNameAscending() {
        let sortedData = champ.slice().sort((a, b) => a.id - b.id);
        setChampList(sortedData);
    }

    /**
        * *to filter the champions order by date desc
        * @param champsList.release
    */

    function fetchByDateDecreasing() {
        let sortedData = champ.slice().sort(function (a, b) {
            return new Date(b.release) - new Date(a.release);
        });
        setChampList(sortedData);
    }

    /**
        * *to filter the champions order by date asc
        * ? refacto in one function ? 
        * @param champsList.release
    */

    function fetchByDateAscending() {
        let sortedData = champ.slice().sort(function (a, b) {
            return new Date(a.release) - new Date(b.release);
        });
        setChampList(sortedData);
    }


    return (
        <div>
            <div className="box-shadow p-0 d-flex justify-content-between ">
                <h1 className="champ-title align-self-center mb-0 ms-2"><span className="title">CHAMPIONS</span></h1>
                <div className='d-flex justify-content-center button-champ-list my-0'>

                    <hr className="vertical-hr"></hr>

                    <div className="d-flex justify-content-start ">
                        <p className="align-self-center text-white mb-0 title">NAME :</p>
                        <div className="d-flex flex-column">
                            <button onClick={fetchByNameAscending}>
                                <img className="increase-button" src={require(`../../assets/Common/left_arrow_hover.png`)} style={{ cursor: 'pointer' }} width='40px' ></img>
                            </button>

                            <button onClick={fetchByNameDecreasing}>
                                <img className="decrease-button" src={require(`../../assets/Common/left_arrow_hover.png`)} style={{ cursor: 'pointer' }} width='40px'></img>
                            </button>
                        </div>
                    </div>

                    <hr className="vertical-hr"></hr>

                    <div className="d-flex justify-content-start ">
                        <p className="align-self-center text-white mb-0 title">DATE :</p>
                        <div className="d-flex flex-column">
                            <button onClick={fetchByDateAscending}>
                                <img className="increase-button" src={require(`../../assets/Common/left_arrow_hover.png`)} style={{ cursor: 'pointer' }} width='40px' ></img>
                            </button>

                            <button onClick={fetchByDateDecreasing}>
                                <img className="decrease-button" src={require(`../../assets/Common/left_arrow_hover.png`)} style={{ cursor: 'pointer' }} width='40px'></img>
                            </button>
                        </div>
                    </div>



                </div>
                {/* <ChampionNumberFound champNumber={champ.length} /> */}
            </div>
            <br />
            <div className="container">
                <div className="row champ-content">
                    {champ.map((champ) =>
                        <React.Fragment key={champ.id}>
                            {
                                ((isCheckedRole(champ.role) || !checkedRole.length)
                                    && (isCheckedType(champ.damages_type) || !checkedType.length)
                                    && (isCheckedWorld(champ.world) || !checkedWorld.length)
                                    && (isCheckedChampFunction(champ.type) || !checkedChampFunction.length)
                                    && (isChampionFind(champ.name) || !searchResult))
                                    ? (
                                        // <div className="col-12 col-md-3 col-lg-2 border m-3 champ-card">
                                        <div className="d-flex justify-content-center col-12 col-custom-7 col-custom-6 col-sm-6 col-mid-4 col-lg-4 col-xl-3 col-mid-3 col-xxl-1 col-custom-5 col-custom-4 col-custom-3 col-custom-2 col-custom">
                                            <ChampCard champ={champ} setCurrentChamp={setCurrentChamp} setChampName={setChampName} setChampList={setChampList} currentChampLinks={currentChampLinks} setCurrentChampLinks={setCurrentChampLinks} linksType={currentChampLinks ? currentChampLinks[champ.name] : ''} />
                                        </div>) : null
                            }
                        </React.Fragment>
                    )}
                </div>
                {!champ.length ? (<div className="no-champ-find"> <NoChampFound /></div>) : null}


            </div>
        </div >
    );
};

/**
   * TODO : this component should be done where isNoChampSelected will work
   * TODO : CSS + Responsive
*/

const NoChampFound = () => {
    return (
        <div>
            <p>No champ found !</p>
            <p>Retry with others filters or reset it</p>
        </div>
    )
}

const ChampionNumberFound = (props) => {
    const champNumber = props.champNumber;
    return (
        <div>
            {champNumber} found.
        </div>
    )
}

export default ChampList;