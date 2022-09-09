import { useState } from "react";
import { champList } from "../../datas/lolChamp";
import './ChampLinks.scss'

const ChampLinks = (props) => {
    const selectedKey = props.selectedKey;
    const champion = props.champion;
    const champCard = props.champCard;
    const currentChampLinks = props.currentChampLinks;


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
        return result;
    }


    return (
        <div className=" mb-5 champ-links p-3  ">
            <div className="links-content">
                <h2 className="title"> LINKS WITH : </h2>
                <div className=" d-flex flex-wrap mt-3">

                    {getLinks().map((champ, index) =>

                        <div className="d-flex align-items-center flex-column mx-3">
                            <img src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${champ.name}.png`} width='48px' className="mx-2"></img>
                            {
                                /**
                                * !Depreciated
                                * Syntax should be improve
                                */
                            }
                            <p className="small links-value">{Object.values(currentChampLinks[0])[index]}</p>
                        </div>

                    )}
                </div>
            </div>
        </div>
    )
}

export default ChampLinks;