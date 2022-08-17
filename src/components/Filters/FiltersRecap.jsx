import Badge from '../Utils/Badge';


const FiltersRecap = ({ checkedRole, checkedType, checkedWorld, setCheckedRole, setCheckedWorld, setCheckedType }) => {
    function resetFilters() {
        setCheckedRole([]);
        setCheckedType([]);
        setCheckedWorld([]);
    }

    function handleCloseType(selectedType) {
        const allButNotCurrentData = checkedType.find((types) => selectedType !== types);
        allButNotCurrentData ? setCheckedType([allButNotCurrentData])
            : setCheckedType([]);

    }

    function handleCloseWorld(selectedWorld) {
        const allButNotCurrentData = checkedWorld.find((world) => selectedWorld !== world);
        allButNotCurrentData ? setCheckedWorld([allButNotCurrentData])
            : setCheckedWorld([]);

    }

    function handleCloseRole(selectedRole) {
        const allButNotCurrentData = checkedRole.find((role) => selectedRole !== role);
        allButNotCurrentData ? setCheckedRole([allButNotCurrentData])

            : setCheckedRole([]);

    }

    return (
        <div>
            <div className='d-flex justify-content-between'>

                {/* World tag */}
                {checkedWorld.length ? (
                    <div>
                        {checkedWorld.map((t) =>
                            (<Badge name={t} handleClose={handleCloseWorld} key={t}></Badge>)
                        )}


                    </div>)
                    : null}

                {/* Type tag */}
                {checkedType.length ? (
                    <div>
                        {checkedType.map((t) =>
                            (<Badge name={t} handleClose={handleCloseType} key={t}></Badge>)
                        )}


                    </div>)
                    : null}

                {/* Role tag */}
                {checkedRole.length ? (
                    <div>
                        {checkedRole.map((t) =>
                            (<Badge name={t} handleClose={handleCloseRole} key={t}></Badge>)
                        )}

                    </div>)
                    : null}

            </div>

            <div className='d-flex justify-content-center delete-button'>
                <div className="wrap">
                    <button className="button-filter" onClick={() => resetFilters()}>Reset Filters <span className='cross'>❌</span></button>
                </div>
            </div>

        </div>

    )
}


export default FiltersRecap