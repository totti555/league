import Badge from 'react-bootstrap/Badge';
import CloseButton from 'react-bootstrap/CloseButton';


const FiltersRecap = ({ checkedRole, checkedType, checkedWorld, setCheckedRole, setCheckedWorld, setCheckedType }) => {
    function resetFilters() {
        setCheckedRole([]);
        setCheckedType([]);
        setCheckedWorld([]);
    }
    return (
        <div className='d-flex justify-content-between'>

            {/* World tag */}
            {checkedWorld.length ? (
                <div>
                    <Badge bg="warning" text="dark">
                        {checkedWorld}
                        <CloseButton onClick={() => setCheckedWorld([])} />
                    </Badge>{' '}

                </div>)
                : null}

            {/* Type tag */}
            {checkedType.length ? (
                <div>
                    <Badge bg="warning" text="dark">
                        {checkedType}
                        <CloseButton onClick={() => setCheckedType([])} />
                    </Badge>{' '}
                </div>)
                : null}

            {/* Role tag */}
            {checkedRole.length ? (
                <div>
                    <Badge bg="warning" text="dark">
                        {checkedRole}
                        <CloseButton onClick={() => setCheckedRole([])} />
                    </Badge>{' '}

                </div>)
                : null}



            <button onClick={() => resetFilters()}>Reset Filters</button>

        </div>

    )
}


export default FiltersRecap