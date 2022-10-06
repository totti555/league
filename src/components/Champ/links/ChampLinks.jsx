import { useState, useEffect } from "react";
import { champList } from "../../../datas/lolChamp";
import { useNavigate } from "react-router-dom";
import Angry from '../../../assets/Common/angry.png'
import './ChampLinks.scss'
import Family from "../../../assets/Links/Family.png"
import Friends from "../../../assets/Links/Friends.png"
import Allie from "../../../assets/Links/Allie.png"
import Ennemy from "../../../assets/Links/Ennemy.png"
import Lovers from "../../../assets/Links/Lover.png"
import Mentor from "../../../assets/Links/Mentor.png"

const ChampLinks = (props) => {
    const [linksResult, setLinksResult] = useState([]);
    const selectedKey = props.selectedKey;
    const champion = props.champion;
    const champCard = props.champCard;
    const currentChampLinks = props.currentChampLinks;
    const topRef = props.topRef;
    const [championsList, setChampList] = useState(champList);

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
        setLinksResult(result);
    }

    useEffect(() => {
        if (champCard.linksWith)
            getLinks();
    }, [champCard]);

    useEffect(() => {
        changeColor();
    }, [linksResult])

    function scrollToTop() {
        topRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    const goToOtherChamp = (champ) => {
        let name;
        name = champ.name
        scrollToTop();
        navigate(`/about_champ/${champ.name}`, { state: { key: champ.key, name: champ.name } });
        navigate(0);
    }

    const changeColor = () => {
        if (currentChampLinks && currentChampLinks[0]) {
            const linksLength = Object.keys(currentChampLinks[0]).length;
            for (let i = 0; i < linksLength; i++) {
                if (document.getElementById(`links${i}`) != null) {

                    var text = document.getElementById(`links${i}`);

                    var str = text.innerHTML,
                        reg = /Potential Friends|Potential Ennemy|Potential Allie|Friends|Allie|Ennemy|Family|Father|Daughter|Son|Potential Boyfriend|Potential Girlfriend|Girlfriend|Boyfriend|Sister|Brother/ig; //g is to replace all occurances

                    //fixing a bit
                    var toStr = String(reg);
                    var color = (toStr.replace('\/g', '|')).substring(1);

                    //split it baby
                    var colors = color.split("|");

                    if (colors.indexOf("Potential Friends") > -1) {
                        str = str.replace(/Potential Friends/g, `<span style="color:#51D64A"><em>Potential</em> Friends</span>`);
                    }

                    if (colors.indexOf("Friends") > -1) {
                        str = str.replace(/Friends/g, `<span style="color:#51D64A;">Friends <img src=${Friends} width='24px' class='friend-img'></img></span>`);
                    }

                    if (colors.indexOf("Potential Ennemy") > -1) {
                        str = str.replace(/Potential Ennemy/g, `<span style="color:#EA5353"><em>Potential</em> Ennemy</span>`);
                    }

                    if (colors.indexOf("Ennemy") > -1) {
                        str = str.replace(/Ennemy/g, `<span style="color:#EA5353">Ennemy <img src=${Ennemy} width='24px' class='ennemy-img'></img></span>`);
                    }

                    if (colors.indexOf("Potential Allie") > -1) {
                        str = str.replace(/Potential Allie/g, `<span style="color:#83CCFF"><em>Potential</em> Allie</span>`);
                    }

                    if (colors.indexOf("Allie") > -1) {

                        str = str.replace(/Allie/g, `<span style="color:#83CCFF">Allie <img src=${Allie} width='24px' class='allie-img'/></span>`);
                    }

                    if (colors.indexOf("Potential Boyfriend") > -1) {
                        str = str.replace(/Potential Boyfriend/g, `<span style="color:#FFA9E6"><em>Potential</em> Boyfriend</span>`);
                    }

                    if (colors.indexOf("Potential Girlfriend") > -1) {
                        str = str.replace(/Potential Girlfriend/g, `<span style="color:#FFA9E6"><em>Potential</em> Girlfriend</span>`);
                    }

                    if (colors.indexOf("Boyfriend") > -1) {
                        str = str.replace(/Boyfriend/g, `<span style="color:#FFA9E6">Boyfriend <img src=${Lovers} width='20px' class='lover-img'></img></span>`);
                    }

                    if (colors.indexOf("Girlfriend") > -1) {
                        str = str.replace(/Girlfriend/g, `<span style="color:#FFA9E6">Girlfriend <img src=${Lovers} width='20px' class='lover-img'></img></span>`);
                    }


                    if (colors.indexOf("Sister") > -1) {
                        str = str.replace(/Sister/g, `<span style="color:#ECB823">Sister <img src=${Family} width='20px' class='family-img'></img></span>`);
                    }

                    if (colors.indexOf("Father") > -1) {
                        str = str.replace(/Father/g, `<span style="color:#ECB823">Father <img src=${Family} width='20px' class='family-img'></img></span>`);
                    }

                    if (colors.indexOf("Daughter") > -1) {
                        str = str.replace(/Daughter/g, `<span style="color:#ECB823">Daughter <img src=${Family} width='20px' class='family-img'></img></span>`);
                    }

                    if (colors.indexOf("Son") > -1) {
                        str = str.replace(/Son/g, `<span style="color:#ECB823">Son <img src=${Family} width='20px' class='family-img'></img></span>`);
                    }

                    if (colors.indexOf("Brother") > -1) {
                        str = str.replace(/Brother/g, `<span style="color:#ECB823">Brother <img src=${Family} width='20px' class='family-img'></img></span>`);
                    }

                    document.getElementById(`updatedlinks${i}`).innerHTML = str;
                }

            }
        }
    }

    const exceptionalName = (name) => {
        if (name === 'KaiSa') return name = 'Kaisa'
        else if (name === 'ChoGath') return name = 'Chogath'
        else return name;
    }



    return (
        <div className=" mb-5 champ-links p-3  ">
            <div className="links-content">
                <h2 className="title"> LINKS WITH : </h2>
                <div className="d-flex justify-content-center my-3">
                    <div className="align-items-center flex-column text-center">
                        <img id='main' src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${champion.image.full}`} width='80px' className="mx-2 position-relative "></img>
                        <h3 className="text-center title">{champion.name.toUpperCase()}</h3>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className=" d-flex flex-wrap justify-content-center mt-3 gradient-border p-3">

                        {champCard.linksWith && linksResult.map((champ, index) =>

                            <div className="d-flex align-items-center flex-column mx-3" key={index} onClick={() => goToOtherChamp(champ)} >

                                <img id={`div${index}`} src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${exceptionalName(champ.name)}.png`} width='64px' className="mx-2 position-relative img-links"></img>

                                {
                                    /**
                                    * !Depreciated
                                    * Syntax should be improve
                                    */
                                }
                                {currentChampLinks.length &&
                                    <div>
                                        <p className="small links-value hide-links-value" id={`links${index}`}>{currentChampLinks[0][champ.name]}</p>
                                        <p className=" links-value mb-0" id={`updatedlinks${index}`}>{currentChampLinks[0][champ.name]}</p>
                                    </div>}
                            </div>

                        )}
                        {!currentChampLinks && <p className="no-links"><span className="me-3"><img src={Angry} alt='angry' width='128px'></img></span>Ce champion n'a pas de liens directs avec d'autres champion !</p>}
                    </div>
                </div>
                {championsList.length &&
                    <div>
                        <h3 className="title">{champCard.world.toUpperCase()} :</h3>
                        <div className="d-flex flex-wrap justify-content-center">
                            {championsList.map((champ) =>
                                <div key={champ.id}>

                                    {
                                        champ.world === champCard.world &&
                                        <div>
                                            <img src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${exceptionalName(champ.name)}.png`} width='64px' className="m-2 position-relative img-links"></img>
                                        </div>
                                    }
                                </div>


                            )}
                        </div>
                    </div>
                }
            </div>
            <p className="sig">{champion.name}</p>

        </div>
    )
}

export default ChampLinks;