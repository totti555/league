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

    const sumObjectsByKey = (...objs) => {
        const res = objs.reduce((a, b) => {
            for (let k in b) {
                if (b.hasOwnProperty(k))
                    a[k] = (a[k] || 0) + b[k];
            }
            return a;
        }, {});
        return res;
    }

    const champStats = () => {
        if (selectedStuff.length) {
            const itemStats = selectedStuff.map((item) =>
                item.stats);
            // const cc = sum(selectedStuff[0].stats, selectedStuff[1].stats);
            // console.log(cc);

            let firstEnt = selectedStuff[0].stats;
            let obj;

            console.log('selectedStuff :', itemStats);
            Array.from(Array(5)).map((_, i) => {
                if (firstEnt !== itemStats[i]) {
                    const obj = sumObjectsByKey(firstEnt, itemStats[i]);
                    firstEnt = obj;
                    return firstEnt;
                }

            })
            setItemsBuff(firstEnt);
        }
        else setItemsBuff([]);
    }

    useEffect(() => {
        champStats();
    }, [selectedStuff]);

    return (
        <div className='champ-stuff'>
            <div className='d-flex justify-content-center'>
                <div className='champ-stuff-content p-2'>
                    <h2 className='title'>STUFF :</h2>
                    <div className='d-flex justify-content-between stuff-content py-2 my-2'>

                        {Array.from(Array(5)).map((_, i) =>
                            selectedStuff[i] ?
                                (<div className='stuff-item mx-1 ' key={i}>
                                    <div className='item-card h-auto'>
                                        <img className='item-img' src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/item/${selectedStuff[i].image.full}`} alt="stuff-item" onClick={() => handleClickItem(selectedStuff[i])} width="64px"></img>
                                        <img src={require(`../../../assets/Common/bin.png`)} onClick={() => removeToStuff(selectedStuff[i])} className="delete-item-icon about-icon-gold" alt="Champion world" width="10px" height="10px"></img>
                                    </div>
                                </div>) :
                                <div className='stuff-item mx-1' key={i}>
                                    {/* <div className='empty'>Empty</div> */}
                                    <img className='item-img' src={require('../../../assets/Common/empty-item.png')} alt="stuff-item" width="64px"></img>

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