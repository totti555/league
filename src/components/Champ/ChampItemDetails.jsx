const ChampItemDetails = (props) => {

    const selectedItem = props.selectedItem;

    return (
        <div className="border">
            {selectedItem.name ?
                <div className="item-details  ">
                    <div className="text-center">
                        <p>Selected item : {selectedItem.name}</p>
                        <img src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/item/${selectedItem.image.full}`}></img>
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