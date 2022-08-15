import Button from "../Utils/Button";

const DisplayFilters = (props) => {
    const displayFilters = props.displayFilters;
    const name = props.name;
    return (
        <div className='post-filters'>
            <p className="text-white">{name} :</p>
            <Button name={name} click={displayFilters} />
        </div>
    )
}


export default DisplayFilters;