
import FlecheBas from "../../assets/fleche-bas.png"
import "./DisplayFilters.scss"

const DisplayFilters = (props) => {
    const displayFilters = props.displayFilters;
    const name = props.name;
    const canDisplay = props.canDisplay;
    return (
        <div className=" list-inline-item align-middle">
            <p className="text-white">{name.toUpperCase()}</p>
            <div>
                {canDisplay ? (
                    <img className="nav-chevron nav-chevron-animation" onClick={displayFilters} src={FlecheBas} width="30px" height="30px"></img>
                ) :
                    <img className="nav-chevron nav-chevron-animation-inverse" onClick={displayFilters} src={FlecheBas} width="30px" height="30px"></img>
                }
            </div>

            {/* <Button name={name} click={displayFilters} /> */}
        </div>
    )
}


export default DisplayFilters;