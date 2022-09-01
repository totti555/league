import { useEffect, useState } from 'react';

const ChampItems = (props) => {
    const champion = props.champion
    const [itemsList, setItemsList] = useState([]);

    const champItems = () => {
        const axios = require('axios').default;
        const api_key = process.env.REACT_APP_API_KEY;
        axios.get(`http://ddragon.leagueoflegends.com/cdn/12.16.1/data/en_US/item.json`)
            .then(function (response) {
                // handle success
                const obj = response.data.data;
                const data = Object.values(obj);
                console.log(data);
                setItemsList(data);

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

    const itemsTypes = () => {
        const itemsTypes = itemsList.map((item) => item.tags);
        const uniqueItemsTypes = Array.prototype.concat.apply([], itemsTypes);
        const uniqueArr = [...new Set(uniqueItemsTypes)];
        return uniqueArr;
    }



    return (
        <div className="champ-items">
            Items
            {itemsList.length && (
                <div className='container'>
                    {itemsTypes().map((i) => (
                        <div key={i}>
                            <p className='small'>{i}</p>

                        </div>)
                    )}

                    <div className='row'>
                        {itemsList.map((item, index) =>
                            <div key={index} className="d-flex justify-content-center col-1">
                                {/* <p className='small'>{item.name}</p> */}
                                <img src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/item/${item.image.full}`} width="20px"></img>
                            </div>
                        )}
                    </div>


                </div>
            )}
        </div>
    )
}

export default ChampItems;