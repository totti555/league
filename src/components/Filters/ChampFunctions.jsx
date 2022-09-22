import './Filters.scss'


const ChampFunctions = ({ checked, setChecked, champFunctions }) => {

    /**
        * *component to display the functions's filters
        * CSS file : Filters.scss
        * ? useless props
    */


    /**
        * *To update the checked functions when the user clicks on it or when the user cancels a selection
        * Funtion details in Roles.jsx
    */



    const handleChangeChampFunction = (event) => {
        var updatedChampFunctionList = [...checked];
        if (event.target.checked) {
            updatedChampFunctionList = [...checked, event.target.value];
        } else {
            updatedChampFunctionList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedChampFunctionList);
    };


    /**
        * *To delete all checked functions 
        * TODO : It doesnt work, all selected functions are removed but they are checked yet
    */

    function handleDeleteChampFunction() {
        setChecked([]);
    }


    return (
        <div>
            {
                /**
                    * *List of functions with checkbox (input type='checkbox')
                    * Hover the label text
                    * TODO : Hover the checkbox like the label
                    * TODO : Img for each functions ?
                */
            }

            <div className=" filters-list-type">

                {champFunctions.map((champFunction) =>
                    <div className='d-flex' key={champFunction}>

                        <label className="toggle" key={champFunction}>
                            <input className="toggle__input" type="checkbox" value={champFunction} onChange={handleChangeChampFunction} />
                            <span className="toggle__label">
                                <span className="toggle__text">{champFunction}</span>
                            </span>
                        </label>

                    </div>
                )}
            </div>

            {
                /**
                    * *Button for delete worlds
                */
            }

            <div className='d-flex justify-content-center delete-button'>
                <div className="wrap">
                    <button className="button-filter" onClick={() => handleDeleteChampFunction()}><span className='title'>Delete Functions</span> <span className='cross'>❌</span></button>
                </div>
            </div>
        </div>
    );
};

export default ChampFunctions
