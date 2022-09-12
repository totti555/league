import './ChampStuff.scss'
import { useEffect } from 'react';

const ChampStuff = (props) => {

    const setStuff = props.setStuff;
    const selectedStuff = props.selectedStuff;
    const setSelectedItem = props.setSelectedItem;
    const setItemsBuff = props.setItemsBuff;

    const handleClickItem = (item) => {
        setSelectedItem(item);
    }

    const removeToStuff = (stuff) => {
        const newStuff = selectedStuff.filter((s) => s.name !== stuff.name)
        setStuff(newStuff);
    }

    const champStats = () => {

        if (selectedStuff.length) {
            let stats;
            const test = selectedStuff.map((item) =>
                item.stats);

            let firstEnt = selectedStuff[0].stats;
            let obj;


            Array.from(Array(5)).map((_, i) => {
                if (firstEnt !== test[i]) {
                    obj = Object.assign({}, firstEnt, test[i]);
                    firstEnt = obj;
                    return firstEnt;
                }

            })
            setItemsBuff(firstEnt);
            // const test3 = test.map((item) => {
            //     if (firstEnt !== item) {
            //         firstEnt = Object.assign({}, firstEnt, item);
            //         console.log('cc');
            //         console.log(firstEnt);
            //         // stats = firstEnt.shift();
            //         // console.log(stats);
            //         return firstEnt;

            //     }
            // })


            // const test2 = test.map((itemStat) => {
            //     if (itemStat !== firstEnt) {

            //         firstEnt = sum(firstEnt, itemStat);
            //         console.log('firstEnt');
            //         console.log(firstEnt);
            //         return firstEnt
            //     }
            // }
            // );
            // console.log(test2);

        }
    }

    useEffect(() => {
        champStats();
    }, [selectedStuff]);

    return (
        <div className='champ-stuff'>
            <div className='d-flex justify-content-center'>
                <div className='champ-content p-2'>
                    <h2 className='title'>STUFF :</h2>
                    <div className='d-flex justify-content-between stuff-content py-2 my-2'>

                        {Array.from(Array(5)).map((_, i) =>
                            selectedStuff[i] ?
                                (<div className='stuff-item mx-1 ' key={i}>
                                    <div className='item-card h-auto'>
                                        <img src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/item/${selectedStuff[i].image.full}`} alt="stuff-item" onClick={() => handleClickItem(selectedStuff[i])} width="64px"></img>
                                        <img src={require(`../../assets/Common/bin.png`)} onClick={() => removeToStuff(selectedStuff[i])} className="delete-item-icon about-icon-gold" alt="Champion world" width="10px" height="10px"></img>
                                    </div>
                                </div>) :
                                <div className='stuff-item mx-1' key={i}>
                                    <div className='empty'>Empty</div>
                                </div>

                        )

                        }
                    </div>
                    <hr className='mb-0' ></hr>
                </div>
            </div>

        </div>
    )
}

export default ChampStuff