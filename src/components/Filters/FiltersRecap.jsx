import Badge from 'react-bootstrap/Badge';
import CloseButton from 'react-bootstrap/CloseButton';


const FiltersRecap = ({ checkedRole, checkedType, checkedWorld, setCheckedRole, setCheckedWorld, setCheckedType }) => {
    function resetFilters() {
        setCheckedRole([]);
        setCheckedType([]);
        setCheckedWorld([]);
    }

    function handleCloseType(selectedType) {
        const allButNotCurrentData = checkedType.find((types) => selectedType !== types);
        console.log([allButNotCurrentData]);
        allButNotCurrentData ? setCheckedType([allButNotCurrentData])
            : setCheckedType([]);

    }

    function handleCloseWorld(selectedWorld) {
        const allButNotCurrentData = checkedWorld.find((world) => selectedWorld !== world);
        console.log([allButNotCurrentData]);
        allButNotCurrentData ? setCheckedWorld([allButNotCurrentData])
            : setCheckedWorld([]);

    }

    function handleCloseRole(selectedRole) {
        const allButNotCurrentData = checkedRole.find((role) => selectedRole !== role);
        console.log([allButNotCurrentData]);
        allButNotCurrentData ? setCheckedRole([allButNotCurrentData])
            : setCheckedRole([]);

    }

    return (
        <div className='d-flex justify-content-between'>

            {/* World tag */}
            {checkedWorld.length ? (
                <div>
                    {checkedWorld.map((t) =>
                    (<Badge bg="warning" text="dark" key={t}>
                        {t}
                        <CloseButton onClick={() => handleCloseWorld(t)} />
                    </Badge>)
                    )}


                </div>)
                : null}

            {/* Type tag */}
            {checkedType.length ? (
                <div>
                    {checkedType.map((t) =>
                    (<Badge bg="warning" text="dark" key={t}>
                        {t}
                        <CloseButton onClick={() => handleCloseType(t)} />
                    </Badge>)
                    )}


                </div>)
                : null}

            {/* Role tag */}
            {checkedRole.length ? (
                <div>
                    {checkedRole.map((t) =>
                    (<Badge bg="warning" text="dark" key={t}>
                        {t}
                        <CloseButton onClick={() => handleCloseRole(t)} />
                    </Badge>)
                    )}

                </div>)
                : null}



            <button onClick={() => resetFilters()}>Reset Filters</button>

        </div>

    )
}


export default FiltersRecap