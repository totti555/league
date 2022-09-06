import { useEffect, useState } from "react"
import { champList } from "../../datas/lolChamp.jsx";
import './ChampSearch.scss'

const ChampSearch = () => {

    const [searchChamp, setSearchChamp] = useState('');
    const [champsFound, setChampBySearch] = useState([]);

    function onChange(e) {
        setSearchChamp(e.target.value);

    }

    useEffect(() => {
        const championsFound = champList.filter((champ) => champ.name.toLowerCase().includes(searchChamp.toLowerCase()));
        console.log("cf", championsFound)
        setChampBySearch(championsFound);
    }, [searchChamp]);

    return (
        <div>
            <label>Search</label>
            <input type='text' onChange={onChange}></input>
            {champsFound && <div className="champ-search-result">
                {champsFound.map((champ) =>
                    <div class="champ-search-content">
                        <div className="d-flex" key={champ.id}>
                            <img src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${champ.name}.png`} width='12px' className="mx-2"></img>
                            <div className="d-flex flex-column align-self-center">
                                {/* {console.log(champ.name)} */}
                                <p>{champ.name}</p>
                                <p>Icone ?</p>
                            </div>
                        </div>
                        <hr />
                    </div>
                )}
            </div>}
        </div>
    )
}

export default ChampSearch