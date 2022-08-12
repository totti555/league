import Badge from 'react-bootstrap/Badge';
import CloseButton from 'react-bootstrap/CloseButton';


const FiltersRecap = ({ updateRole, updateWorld, updateType, world, type, role }) => {
    function resetFilters() {
        updateRole('');
        updateType('');
        updateWorld('');
    }
    return (
        <div className='d-flex justify-content-between'>

            {/* World tag */}
            {world ? (
                <div>
                    <Badge bg="warning" text="dark">
                        {world}
                        <CloseButton onClick={() => updateWorld('')} />
                    </Badge>{' '}

                </div>)
                : null}

            {/* Type tag */}
            {type ? (
                <div>
                    <Badge bg="warning" text="dark">
                        {type}
                        <CloseButton onClick={() => updateType('')} />
                    </Badge>{' '}
                </div>)
                : null}

            {/* Role tag */}
            {role ? (
                <div>
                    <Badge bg="warning" text="dark">
                        {role}
                        <CloseButton onClick={() => updateRole('')} />
                    </Badge>{' '}

                </div>)
                : null}



            <button onClick={() => resetFilters()}>Reset Filters</button>

        </div>

    )
}


export default FiltersRecap