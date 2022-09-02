import { useEffect, useState } from 'react';

const ChampItems = (props) => {
    const champion = props.champion
    const setSelectedItem = props.setSelectedItem;
    const [itemsList, setItemsList] = useState([]);


    const champItems = () => {
        const axios = require('axios').default;
        const api_key = process.env.REACT_APP_API_KEY;
        axios.get(`http://ddragon.leagueoflegends.com/cdn/12.16.1/data/en_US/item.json`)
            .then(function (response) {
                // handle success
                const obj = response.data.data;
                const data = Object.values(obj);
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

    const itemIsInclude = (item, i) => {
        const itemsTypesArr = item.tags;
        return itemsTypesArr.includes(i) ? true : false
    }

    const handleClickItem = (item) => {
        setSelectedItem(item);
    }



    return (
        <div className="champ-items border col-8">
            Items
            {itemsList.length && (
                <div className='container'>
                    {itemsTypes().map((i) => (
                        <div key={i}>
                            <p className='small'>{i} :</p>
                            <div className='row '>
                                <div>
                                {itemsList.map((item, index) =>
                                    itemIsInclude(item, i) &&
                                    <div key={index} className="d-flex justify-content-start col-1" onClick={() => handleClickItem(item)}>
                                        {/* <p className='small'>{item.name}</p> */}
                                        <img src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/item/${item.image.full}`} width="48px"></img>
                                    </div>
                                )}
                            </div>
                            </div>
                        </div>)
                    )}



                </div>
            )}
        </div>
    )
}

export default ChampItems;