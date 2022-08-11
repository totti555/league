
import { champList } from "../../datas/lolChamp";
import ChampCard from "./ChampCard"

const ChampList = () => {
    return (
        <div>
            {champList.map((champ) =>
                <ChampCard champ={champ} />
            )}
        </div>
    );
};

export default ChampList;