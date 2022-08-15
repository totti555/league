import Button from "../Utils/Button";
import FlecheBas from "../../assets/fleche-bas.png"

const DisplayFilters = (props) => {
    const displayFilters = props.displayFilters;
    const name = props.name;
    return (
        <div className="d-flex justify-content-between">
            <p className="text-white">{name.toUpperCase()}</p>
            <div>
                <img onClick={displayFilters} src={FlecheBas} width="30px" height="30px"></img>

            </div>

            {/* <Button name={name} click={displayFilters} /> */}
        </div>
    )
}


export default DisplayFilters;