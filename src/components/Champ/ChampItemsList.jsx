import { useEffect, useState } from 'react';
import './ChampItemsList.scss'

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
                console.log(itemsList.length)
                if (itemsList.length)
                    setSelectedItem(itemsList[0])
            });
    }

    useEffect(() => {
        champItems();

    }, []);

    useEffect(() => {
        if (itemsList.length) {
            setSelectedItem(itemsList[0])
        }
    }, [itemsList])

    const itemsTypes = () => {
        const itemsTypes = itemsList.map((item) => item.tags);
        const uniqueItemsTypes = Array.prototype.concat.apply([], itemsTypes);
        const uniqueArr = [...new Set(uniqueItemsTypes)];
        return uniqueArr;
    }

    const itemIsInclude = (item, i) => {
        const itemsTypesArr = item.tags;
        return (itemsTypesArr.includes(i) && item.inStore !== false) ? true : false
    }

    const handleClickItem = (item) => {
        setSelectedItem(item);
    }



    return (
        <div className="champ-items border p-3">
            <div>
                <p className='entity-title'>Items</p>
                {itemsList.length && (
                    <div>
                        {itemsTypes().map((i) => (
                            <div key={i} className='items-content my-2'>
                                <p className='items-type'>{i} :</p>
                                <div className='position-relative '>
                                    <div className='d-flex flex-wrap mx-2 '>

                                        {itemsList.map((item, index) =>
                                            itemIsInclude(item, i) &&
                                            <div key={index} className=" p-0 my-1 mx-1" onClick={() => handleClickItem(item)}>
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
        </div>
    )
}

export default ChampItems;