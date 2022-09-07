import { useEffect, useState } from "react"
import { champList } from "../../datas/lolChamp.jsx";
import './ChampSearch.scss'
import { useNavigate } from "react-router-dom";

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

    const navigate = useNavigate();
    const goToOtherChamp = (champ) => {
        let name;
        const exceptionalName = ['BelVeth', 'KaiSa', 'KogMaw', 'ChoGath', 'RekSai'];
        if (exceptionalName.includes(champ.name)) {
            const minName = champ.name.toLowerCase();
            name = minName.charAt(0).toUpperCase() + minName.slice(1);
        }
        else name = champ.name;
        navigate(`/about_us/${champ.name}`, { state: { key: champ.key, name: champ.name } });
    }

    return (
        <div className="champ-input">

            <input type='text' onChange={onChange}></input>
            {(searchChamp && champsFound) &&
                <div className="champ-search-result border pt-2 pb-2">
                    {champsFound.map((champ) =>
                        <div>
                            <div class="champ-search-content d-flex align-self-center" key={champ.id} onClick={() => goToOtherChamp(champ)}>
                                <img src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${champ.name}.png`} width='48px' className="ms-2"></img>
                                <div className="d-flex flex-column align-self-center ms-2">
                                    {/* {console.log(champ.name)} */}
                                    <p className="m-0">{champ.name}</p>
                                    <p className="small m-0">Blabla</p>
                                </div>
                            </div>
                            <hr className="champ-search-separator" />
                        </div>
                    )}
                </div>}
        </div>
    )
}


export default ChampSearch