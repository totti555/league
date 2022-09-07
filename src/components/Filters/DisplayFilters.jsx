
import FlecheBas from "../../assets/Common/fleche-bas.png"
import "./DisplayFilters.scss"

const DisplayFilters = (props) => {

    /**
        * *component to hide/display the filter attribute selected
        * CSS file : DisplayFilters.scss
        * Animation when clicking on the nav-chevron
    */

    const displayFilters = props.displayFilters;
    const name = props.name;
    const canDisplay = props.canDisplay;
    return (
        <div className=" list-inline-item align-middle">
            <p className="text-white">{name.toUpperCase()}</p>

            {
                /**
                    * *nav-chevron icon 
                    * Bottom arrow to SHOW the filters of the category
                    * Top arrow to HIDE the filters of the category
                */
            }

            <div>
                {canDisplay ? (
                    <img className="nav-chevron nav-chevron-animation" onClick={displayFilters} src={FlecheBas} width="30px" height="30px"></img>
                ) :
                    <img className="nav-chevron nav-chevron-animation-inverse" onClick={displayFilters} src={FlecheBas} width="30px" height="30px"></img>
                }
            </div>
        </div>
    )
}


export default DisplayFilters;