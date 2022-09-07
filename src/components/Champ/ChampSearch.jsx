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

    const changeColor = (research, id) => {
        if (document.getElementById(`content${id}`) != null) {
            var text = document.getElementById(`content${id}`);
            var str = text.innerHTML;
            let textToReplace = `${research.toUpperCase()}`;
            var re = new RegExp(textToReplace, "g");
            str = str.replace(re, `<span style="color:#ECB823;">${research.toUpperCase()}</span>`)
            document.getElementById(`updated${id}`).innerHTML = str;
        }


    }

    useEffect(() => {
        for (let i = 1; i < 162; i++) {
            changeColor(searchChamp, i)
        }
    });


    useEffect(() => {
        const championsFound = champList.filter((champ) => champ.name.toLowerCase().includes(searchChamp.toLowerCase()));
        setChampBySearch(championsFound);
    }, [searchChamp]);

    const navigate = useNavigate();
    const goToOtherChamp = (champ) => {
        let name;
        name = champ.name
        // const exceptionalName = ['BelVeth', 'KaiSa', 'KogMaw', 'ChoGath', 'RekSai'];
        // if (exceptionalName.includes(champ.name)) {
        //     const minName = champ.name.toLowerCase();
        //     name = minName.charAt(0).toUpperCase() + minName.slice(1);
        // }
        // else name = champ.name;
        navigate(`/about_us/${champ.name}`, { state: { key: champ.key, name: champ.name } });
        setSearchChamp('');
    }

    const champName = (champ) => {
        let name;
        /**
         * TODO : Problem with Wukong and Kogmaw
        */
        const exceptionalName = ['BelVeth', 'KaiSa', 'ChoGath'];
        const wukong = 'MonkeyKing';
        if (exceptionalName.includes(champ.name)) {
            const minName = champ.name.toLowerCase();
            return name = minName.charAt(0).toUpperCase() + minName.slice(1);
        }
        else if (champ.name == 'Wukong') {
            return name = wukong
        }
        else return name = champ.name;
    }


    return (
        <div className="champ-input">

            <input type='text' onChange={onChange}></input>
            {(searchChamp && champsFound) &&
                <div className="champ-search-result border pt-2 pb-2">
                    {champsFound.map((champ) =>
                        <div key={champ.id} >
                            <div className="champ-search-content d-flex align-self-center" onClick={() => goToOtherChamp(champ)}>
                                <img src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${champName(champ)}.png`} width='48px' className="ms-2"></img>
                                <div className="d-flex flex-column align-self-center ms-2">
                                    <p id={`content${champ.id}`} className="m-0 hide-text font-weight-bold small">{champ.name.toUpperCase()}</p>
                                    <p id={`updated${champ.id}`} className="m-0 research-result"></p>
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