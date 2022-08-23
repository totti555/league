import './Filters.scss'


const Types = ({ type, updateType, checked, setChecked, types }) => {

    /**
        * *component to display the types's filters
        * CSS file : Filters.scss
        * ? useless props
    */


    /**
        * *To update the checked types when the user clicks on it or when the user cancels a selection
        * Funtion details in Roles.jsx
    */

    const handleChangeType = (event) => {
        var updatedTypeList = [...checked];
        console.log("updatedTypeList");
        console.log(updatedTypeList);
        if (event.target.checked) {
            updatedTypeList = [...checked, event.target.value];
        } else {
            updatedTypeList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedTypeList);
    };

    /**
        * *To delete all checked types 
        * TODO : It doesnt work, all selected types are removed but they are checked yet
    */

    function handleDeleteType() {
        setChecked([]);
    }


    return (
        <div>
            {
                /**
                    * *List of types with checkbox (input type='checkbox')
                    * Hover the label text
                    * TODO : Hover the checkbox like the label
                    * TODO : Img for each types ?
                */
            }

            <div className=" filters-list-type">
                {types.map((type) =>
                    <div className='d-flex' key={type}>
                        <label className="toggle" key={type}>
                            <input className="toggle__input" type="checkbox" value={type} onChange={handleChangeType} />
                            <span className="toggle__label">
                                <span className="toggle__text">{type}</span>
                            </span>
                        </label>
                    </div>
                )}
            </div>

            {
                /**
                    * *Button for delete types
                */
            }

            <div className='d-flex justify-content-center delete-button'>
                <div className="wrap">
                    <button className="button-filter" onClick={() => handleDeleteType()}>Delete Types <span className='cross'>❌</span></button>
                </div>
            </div>

        </div>
    )
};

export default Types
