import './ChampItemDetails.scss'

const ChampItemDetails = (props) => {

    const selectedItem = props.selectedItem;
    const setStuff = props.setStuff;
    const selectedStuff = props.selectedStuff;

    const addToStuff = (item) => {
        setStuff(...selectedStuff, ...item);
    }

    return (
        <div className="border">
            {selectedItem.name ?
                <div className="item-details  ">
                    <div className="text-center">
                        <p>Selected item : {selectedItem.name}</p>
                        <div class='item-card'>
                            <img src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/item/${selectedItem.image.full}`}></img>
                            <img src={require(`../../assets/plus.png`)} onClick={() => addToStuff(selectedItem)} className="add-item-icon about-icon-gold" alt="Champion world" width="20px" height="20px"></img>
                        </div>
                    </div>
                    <p dangerouslySetInnerHTML={{ __html: selectedItem.description }}></p>
                </div>
                :
                <div className="default-details">Selectionner un item</div>
            }

        </div>
    )
}

export default ChampItemDetails;