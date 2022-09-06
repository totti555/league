import { useEffect, useState } from 'react';
import './ChampItemsList.scss'

const ChampItems = (props) => {
    const champion = props.champion
    const setSelectedItem = props.setSelectedItem;
    const [itemsList, setItemsList] = useState([]);
    const [searchItem, setItemName] = useState('');


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

    function handleChangeSearch(e) {
        setItemName(e.target.value)

    }

    const isItemFind = (itemsList) => {
        const data = itemsList.toLowerCase().includes(searchItem.toLowerCase());
        return data ? true : false;
    }

    // const isItemFindInCategory = (category) => {
    //     console.log(category);

    //     const itemInCategory = itemsList.map((c) => c.tags == category);
    //     console.log('category', itemInCategory);
    // }



    return (
        <div className="champ-items border p-3">
            <div>

                <p className='entity-title'>Items</p>
                {itemsList.length && (
                    <div>

                        <div className="d-flex justify-content-between">
                            <div className="d-flex form__group field">
                                <input type="input" onChange={handleChangeSearch} value={searchItem} className="form__field" placeholder="Search your champ" name="name" id='name' />
                                <label htmlFor="name" className="form__label">Search <span className="label-visible">your item</span></label>
                            </div>
                            {/* <img src={Search} className="search-icon"></img> */}
                        </div>
                        {itemsTypes().map((i) => (
                            <div key={i} className='items-content my-2'>

                                {!searchItem.length &&
                                    (<p className='items-type'>{i} :</p>)}
                                <div className='position-relative '>
                                    <div className='d-flex flex-wrap mx-2 '>

                                        {itemsList.map((item, index) =>
                                            (itemIsInclude(item, i) && (isItemFind(item.name) || !searchItem)) &&
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