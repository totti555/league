import { useState } from "react";
import { champList } from "../../datas/lolChamp";

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
        <div>
            Links with :
            {getLinks().map((champ) =>
                <div>
                    <img src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${champ.name}.png`} width='48px' className="mx-2"></img>
                    {console.log(currentChampLinks)}
                    <p>{currentChampLinks[champ.name]}</p>
                </div>
            )}
        </div>
    )
}

export default ChampLinks;