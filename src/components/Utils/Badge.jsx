import CloseButton from 'react-bootstrap/CloseButton';

const Badge = (props) => {
    const name = props.name;
    const handleClose = props.handleClose;
    return (
        <div className="d-flex justify-content-between">
            <span>{name}</span>
            <CloseButton onClick={() => handleClose(name)} />
        </div>
    )
};

export default Badge;