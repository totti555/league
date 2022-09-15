import { useState, useEffect } from "react";
import { champList } from "../../datas/lolChamp";
import { useNavigate } from "react-router-dom";
import Angry from '../../assets/Common/angry.png'
import './ChampLinks.scss'

const ChampLinks = (props) => {
    const [linksResult, setLinksResult] = useState([]);
    const selectedKey = props.selectedKey;
    const champion = props.champion;
    const champCard = props.champCard;
    const currentChampLinks = props.currentChampLinks;
    const topRef = props.topRef;

    const navigate = useNavigate();


    const getLinks = () => {
        // get the champ links
        const linksWith = champCard.linksWith.map((lw) => lw);
        // get the name of the champ links
        const champLinksWith = Object.keys(linksWith[0]);
        // get the duplicates element
        var duplicates = champList.filter(function (c) {
            return champLinksWith.indexOf(c.name.replaceAll(' ', '_')) !== -1;
        });

        // concat with the champ selected
        // Links with the champ datas
        const result = duplicates;
        console.log("result", result);
        setLinksResult(result);
    }

    useEffect(() => {
        if (champCard.linksWith)
            getLinks();
    }, [champCard]);

    function scrollToTop() {
        topRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    const goToOtherChamp = (champ) => {
        let name;
        name = champ.name
        scrollToTop();
        navigate(`/about_us/${champ.name}`, { state: { key: champ.key, name: champ.name } });
    }


    return (
        <div className=" mb-5 champ-links p-3  ">
            <div className="links-content">
                <h2 className="title"> LINKS WITH : </h2>
                <div className=" d-flex flex-wrap mt-3 justify-content-center">

                    {champCard.linksWith && linksResult.map((champ, index) =>

                        <div className="d-flex align-items-center flex-column mx-3" key={index} onClick={() => goToOtherChamp(champ)}>
                            <img src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${champ.name}.png`} width='64px' className="mx-2"></img>
                            {
                                /**
                                * !Depreciated
                                * Syntax should be improve
                                */
                            }
                            {currentChampLinks[0] && <p className="small links-value">{Object.values(currentChampLinks[0])[index]}</p>}
                        </div>

                    )}
                    {console.log(currentChampLinks)}
                    {!currentChampLinks && <p><span className="me-3"><img src={Angry} alt='angry' width='128px'></img></span>Ce champion n'a pas de liens directs avec d'autres champion !</p>}
                </div>
            </div>
        </div>
    )
}

export default ChampLinks;