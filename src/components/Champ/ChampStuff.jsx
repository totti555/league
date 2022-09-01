import './ChampStuff.scss'

const ChampStuff = (props) => {

    const setStuff = props.setStuff;
    const selectedStuff = props.selectedStuff;
    const setSelectedItem = props.setSelectedItem;

    const handleClickItem = (item) => {
        setSelectedItem(item);
    }

    const removeToStuff = (stuff) => {
        const newStuff = selectedStuff.filter((s) => s.name !== stuff.name)
        setStuff(newStuff);
    }

    return (
        <div className='d-flex justify-content-start'>
            Stuff :
            {Array.from(Array(5)).map((_, i) =>
                selectedStuff[i] ?
                    (<div className='stuff-item border'>
                        <div className='item-card h-auto'>
                            <img src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/item/${selectedStuff[i].image.full}`} alt="stuff-item" onClick={() => handleClickItem(selectedStuff[i])} width="32px"></img>
                            <img src={require(`../../assets/bin.png`)} onClick={() => removeToStuff(selectedStuff[i])} className="delete-item-icon about-icon-gold" alt="Champion world" width="10px" height="10px"></img>
                        </div>
                    </div>) :
                    <div className='stuff-item border'>
                        N
                    </div>

            )

            }
        </div>
    )
}

export default ChampStuff