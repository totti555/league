import { useEffect, useState } from "react"
import { champList } from "../../datas/lolChamp.jsx";
import './ChampSearch.scss'
import { useNavigate } from "react-router-dom";
import Search from "../../assets/Common/search.svg"

const ChampSearch = (props) => {

    const [searchChamp, setSearchChamp] = useState('');
    const [champsFound, setChampBySearch] = useState([]);
    const [allChamps, setAllChamps] = useState([]);
    const api_key = process.env.REACT_APP_API_KEY;

    const setChampion = props.setChampion;

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

    useEffect(() => {
        getAllChamps();
    })

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

    const getAllChamps = () => {
        const axios = require('axios').default;
        axios.get(`http://ddragon.leagueoflegends.com/cdn/12.16.1/data/en_US/champion.json?api_key=${api_key}`)
            .then(function (response) {
                // handle success
                setAllChamps(response.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed

            });
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

            <div className="">
                <div className="position-relative">
                    <input type="input" onChange={onChange} value={searchChamp} className="form__field" placeholder="Search champ" name="name" id='name' />
                    <img src={Search} className="search-icon"></img>
                </div>
            </div>

            {(searchChamp && champsFound) &&
                <div className="champ-search-result pt-2 pb-2">
                    {champsFound.map((champ) =>
                        <div key={champ.id} >
                            <div className="champ-search-content d-flex align-self-center" onClick={() => goToOtherChamp(champ)}>
                                <img src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${champName(champ)}.png`} width='48px' className="ms-2"></img>
                                <div className="d-flex flex-column align-self-center ms-2">
                                    <p id={`content${champ.id}`} className="m-0 hide-text font-weight-bold small">{champ.name.toUpperCase()}</p>
                                    <p id={`updated${champ.id}`} className="m-0 research-result"></p>
                                    {allChamps && <p className="small m-0 subtitle">{allChamps[champName(champ)].title}</p>}
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