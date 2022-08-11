
import { champList } from "../../datas/lolChamp";
import ChampCard from "./ChampCard"

const ChampList = () => {
    return (
        <div>
            {champList.map((champ) =>
                <div key={champ.id}>
                    <ChampCard champ={champ} />
                </div>
            )}
        </div>
    );
};

export default ChampList;