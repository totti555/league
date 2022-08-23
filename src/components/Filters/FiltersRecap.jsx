import Badge from '../Utils/Badge';


const FiltersRecap = ({ checkedRole, checkedType, checkedWorld, setCheckedRole, setCheckedWorld, setCheckedType }) => {


    /**
       * *Component to recap all the filters applied, we can also delete all the filters applied.
       * SCSS file : none
       * Components used : Badge
       * Each filter is reresented as a badge
       * We can delete the badge to delete the filter
       * TODO : CSS of this badge (not enough good for me)
       * ?useless props / redefined props ? 
   */


    /**
       * *Reset all the filters 
       * TODO : Add setCheckedChampFunction([]) from props
   */

    function resetFilters() {
        setCheckedRole([]);
        setCheckedType([]);
        setCheckedWorld([]);
    }

    /**
       * *To close the selected type
       * @param checkedType
    */

    function handleCloseType(selectedType) {
        const allButNotCurrentData = checkedType.find((types) => selectedType !== types);
        allButNotCurrentData ? setCheckedType([allButNotCurrentData])
            : setCheckedType([]);
    }

    /**
       * *To close the selected world
       * @param checkedWorld
    */

    function handleCloseWorld(selectedWorld) {
        const allButNotCurrentData = checkedWorld.find((world) => selectedWorld !== world);
        allButNotCurrentData ? setCheckedWorld([allButNotCurrentData])
            : setCheckedWorld([]);
    }

    /**
       * *To close the selected role
       * @param checkedRole
    */

    function handleCloseRole(selectedRole) {
        const allButNotCurrentData = checkedRole.find((role) => selectedRole !== role);
        allButNotCurrentData ? setCheckedRole([allButNotCurrentData])

            : setCheckedRole([]);
    }

    /**
       * *To close the selected function
       * TODO : Make a function for that
       * @param checkedFunction
    */

    return (
        <div>
            <div className='d-flex justify-content-center'>
                <div className='d-flex justify-content-between px-1'>

                    {
                        /**
                            * *Display badge(s) for the world(s) selected
                            * @param checkedWorld
                        */
                    }

                    {checkedWorld.length ? (
                        <div>
                            {checkedWorld.map((t) =>
                                (<Badge name={t} handleClose={handleCloseWorld} key={t}></Badge>)
                            )}


                        </div>)
                        : null}

                    {
                        /**
                            * *Display badge(s) for the type(s) selected
                            * @param checkedType
                        */
                    }

                    {checkedType.length ? (
                        <div>
                            {checkedType.map((t) =>
                                (<Badge name={t} handleClose={handleCloseType} key={t}></Badge>)
                            )}


                        </div>)
                        : null}

                    {
                        /**
                            * *Display badge(s) for the role(s) selected
                            * @param checkedRole
                        */
                    }

                    {checkedRole.length ? (
                        <div>
                            {checkedRole.map((t) =>
                                (<Badge name={t} handleClose={handleCloseRole} key={t}></Badge>)
                            )}

                        </div>)
                        : null}

                </div>
            </div>

            {
                /**
                   * *Button for reset all the selected filters
                   * @param checkedRole
               */
            }

            <div className='d-flex justify-content-center delete-button'>
                <div className="wrap">
                    <button className="button-filter" onClick={() => resetFilters()}>Reset Filters <span className='cross'>❌</span></button>
                </div>
            </div>

        </div>

    )
}


export default FiltersRecap