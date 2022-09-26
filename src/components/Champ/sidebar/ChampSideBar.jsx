import Luden from '../../../assets/Common/luden.jpg';
import Family from '../../../assets/Common/family-menu.png';
import Search from "../../../assets/Common/loupe.png";
import FlecheBas from "../../../assets/Common/fleche-bas.png"
import { useState } from 'react';
import './ChampSideBar.scss';

const ChampSideBar = (props) => {
    const [displayMenu, setDisplayMenu] = useState(true);
    const champion = props.champion;
    const linksRef = props.linksRef;
    const champRef = props.champRef;
    const topRef = props.topRef;
    const itemsRef = props.itemsRef;
    const searchRef = props.searchRef;

    function scrollToLinks() {
        linksRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    function scrollToTop() {
        topRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    function scrollToChamp() {
        champRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    function scrollToItems() {
        itemsRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    const scrollToSearchBar = async () => {
        searchRef.current.focus();
        scrollToChamp();
    }

    function canDisplayMenu() {
        setDisplayMenu(!displayMenu);
    }



    return (
        <div className="side-bar-menu animation-menu-list">
            {displayMenu ? (
                <img className="icon-gold nav-chevron-animation" onClick={() => canDisplayMenu()} src={FlecheBas} title='Hide side bar' alt="Arrow top" width="30px" height="30px"></img>
            ) : <img className="icon-gold nav-chevron-animation-inverse" onClick={() => canDisplayMenu()} src={FlecheBas} title='Display side bar' alt="Arrow bottom" width="30px" height="30px"></img>}
            {displayMenu && <div className="d-flex flex-column menu-content">

                <div className='pe-1 ps-1'>
                    <img src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${champion.image.full}`} alt='champ-icon' title='Go to champ presentation' onClick={scrollToTop} width='48px'></img>
                </div>
                <hr />
                <div className='pe-1 ps-1'>
                    <img className="luden-icon" src={Luden} onClick={scrollToItems} alt='luden-icon' title='Go to Items' width='48px'></img>
                </div>
                <hr />
                <div className='pe-1 ps-1'>
                    <img className="icon-menu" src={Search} onClick={scrollToSearchBar} title='Search champ' alt='search-icon-menu' width='32px'></img>
                </div>
                <hr />
                <div className='pe-1 ps-1'>
                    <img className="family-icon icon-menu" src={Family} onClick={scrollToLinks} title='Go to Links' alt='fammily-icon' height='32px' ></img>
                </div>
                <div class="border-bottom pb-2"></div>
            </div>}
        </div>
    )
}

export default ChampSideBar;