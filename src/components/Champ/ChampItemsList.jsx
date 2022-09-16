import { useEffect, useState } from 'react';
import './ChampItemsList.scss'
import Search from "../../assets/Common/search.svg"

const ChampItems = (props) => {
    const setSelectedItem = props.setSelectedItem;
    const [itemsList, setItemsList] = useState([]);
    const [searchItem, setItemName] = useState('');
    const setStuff = props.setStuff;
    const selectedStuff = props.selectedStuff;
    // const selectedItem = props.selectedItem;


    const champItems = () => {
        console.log('champItems');
        const axios = require('axios').default;
        // const api_key = process.env.REACT_APP_API_KEY;
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
                // if (itemsList.length)
                //     setSelectedItem(itemsList[0])
            });
    }

    useEffect(() => {
        champItems();

    }, []);

    useEffect(() => {
        if (itemsList.length) {
            console.log(itemsList);
            setSelectedItem(itemsList[115])
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

    const addToStuff = (item) => {
        setStuff([...selectedStuff, item]);
    }



    return (
        <div className="champ-items">
            <div>

                <h2 className='title'>ITEMS :</h2>
                {itemsList.length && (
                    <div>
                        <div className="">
                            <div className="position-relative">
                                <form autoComplete='off'>
                                    <input type="input" onChange={handleChangeSearch} value={searchItem} className="form__field" placeholder="Search your champ" name="name" id='name' />
                                    <label htmlFor="name" className="form__label">Search your item</label>
                                </form>
                                <img src={Search} alt="search" className="search-icon"></img>
                            </div>
                            {/* <img src={Search} className="search-icon"></img> */}
                        </div>
                        <hr ></hr>
                        <div className='overflow-items-list'>
                            {itemsTypes().map((i) => (
                                <div key={i} className='items-content my-2'>

                                    {!searchItem.length &&
                                        (<h3 className='title'>{i.replace(/([A-Z])/g, ' $1').toUpperCase()} :</h3>)}
                                    <div className='position-relative '>
                                        <div className='d-flex flex-wrap mx-2 '>

                                            {itemsList.map((item, index) =>
                                                (itemIsInclude(item, i) && (isItemFind(item.name) || !searchItem)) &&
                                                <div key={index} className=" p-0 my-1 mx-1 item-card position-relative" onClick={() => handleClickItem(item)}>
                                                    {/* <p className='small'>{item.name}</p> */}
                                                    <img alt='item' src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/item/${item.image.full}`} width="48px" style={{ cursor: 'pointer' }}></img>
                                                    <img src={require(`../../assets/Common/plus.png`)} onClick={() => addToStuff(item)} className="add-item-icon about-icon-gold" alt="Champion world" width="20px" height="20px" style={{ cursor: 'pointer' }}></img>
                                                </div>
                                            )}

                                        </div>
                                    </div>
                                </div>)
                            )}
                        </div>



                    </div>
                )}
            </div>
        </div>
    )
}

export default ChampItems;