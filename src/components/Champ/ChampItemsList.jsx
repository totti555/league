import { useEffect } from 'react';

const ChampItems = (props) => {
    const champion = props.champion

    const champItems = () => {
        const axios = require('axios').default;
        const api_key = process.env.REACT_APP_API_KEY;
        axios.get(`http://ddragon.leagueoflegends.com/cdn/12.16.1/data/en_US/item.json`)
            .then(function (response) {
                // handle success
                const obj = response.data.data;
                const data = Object.values(obj);
                console.log(data);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    useEffect(() => {
        champItems();
    }, []);

    return (
        <div className="champ-items">
            Items
        </div>
    )
}

export default ChampItems;