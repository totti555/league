import CloseButton from 'react-bootstrap/CloseButton';

const Badge = (props) => {
    const name = props.name;
    const handleClose = props.handleClose;
    return (
        <div className="d-flex justify-content-between tag-filters my-1">
            {name}
            <span onClick={() => handleClose(name)} className="cross"> ❌</span>
            {/* <CloseButton  /> */}
        </div>
    )
};

export default Badge;