import './Filters.scss'


const Worlds = ({ world, updateWorld, checked, setChecked, worlds }) => {

    /**
        * *component to display the worlds's filters
        * CSS file : Filters.scss
        * ? useless props
    */


    /**
        * *To update the checked roles when the user clicks on it or when the user cancels a selection
        * Funtion details in Roles.jsx
    */

    const handleChangeWorld = (event) => {
        var updatedWorldList = [...checked];
        if (event.target.checked) {
            updatedWorldList = [...checked, event.target.value];
        } else {
            updatedWorldList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedWorldList);
    };

    /**
        * *To delete all checked worlds 
        * TODO : It doesnt work, all selected worlds are removed but they are checked yet
    */

    function handleDeleteWorld() {
        setChecked([]);
    }


    return (
        <div>
            {
                /**
                    * *List of worlds with checkbox (input type='checkbox')
                    * Hover the label text
                    * TODO : Hover the checkbox like the label
                    * TODO : Img for each types ?
                */
            }
            <div className=" filters-list-type">
                {worlds.map((world) =>
                    <div className='d-flex' key={world}>
                        <label className="toggle" key={world}>
                            <input className="toggle__input" type="checkbox" value={world} onChange={handleChangeWorld} />
                            <span className="toggle__label">
                                <span className="toggle__text">{world}</span>
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
                    <button className="button-filter" onClick={() => handleDeleteWorld()}><span className='title'>Delete Worlds</span> <span className='cross'>❌</span></button>
                </div>
            </div>
        </div>
    );
};

export default Worlds
