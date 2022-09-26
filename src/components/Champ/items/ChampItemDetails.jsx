import './ChampItemDetails.scss'
import { useEffect } from 'react';
import Vendor from '../../../assets/Common/vendor.jpg'
import Armor from '../../../assets/Stats/Armor.png'
import AbilityHaste from '../../../assets/Stats/AbilityHaste.png'
import AttackSpeed from '../../../assets/Stats/AttackSpeed.png'
import Health from '../../../assets/Stats/Health.png'
import Power from '../../../assets/Stats/Power.png'
import Resistance from '../../../assets/Stats/Resistance.png'

const ChampItemDetails = (props) => {

    const selectedItem = props.selectedItem;
    const setStuff = props.setStuff;
    const selectedStuff = props.selectedStuff;

    const addToStuff = (item) => {
        setStuff([...selectedStuff, item]);
    }
    let isLoading;
    useEffect(() => {

        changeColor();

    }, [selectedItem]);




    const changeColor = () => {
        if (document.getElementById("content") != null) {

            var text = document.getElementById("content");

            var str = text.innerHTML,
                reg = /Ability Power|Attack Speed|Critical Strike Chance|Mana|Move Speed|Health|Magic Resist|Base Health Regen|Ability Haste|Armor/ig; //g is to replace all occurances

            //fixing a bit
            var toStr = String(reg);
            var color = (toStr.replace('\/g', '|')).substring(1);

            //split it baby
            var colors = color.split("|");

            if (colors.indexOf("Ability Power") > -1) {
                // var goodText = str.substring(0, str.indexOf('</attention> Ability Power'));
                // if (goodText) {
                //     var number = goodText.match(/[0-9]+$/)[0];
                // }
                str = str.replace(/Ability Power/g, `<span style="color:#5F43DC;">Ability Power <img src=${Power}></img></span>`);
            }

            if (colors.indexOf("Attack Speed") > -1) {
                // var goodText = str.substring(0, str.indexOf('</attention> Attack Speed'));
                // if (goodText) {
                //     var number = goodText.match(/[0-9]+$/)[0];
                // }
                str = str.replace(/Attack Speed/g, `<span style="color:Orange;"> Attack Speed <img src=${AttackSpeed}></img></span></span>`);
            }

            if (colors.indexOf("Critical Strike Chance") > -1) {
                // var goodText = str.substring(0, str.indexOf('</attention> Critical Strike Chance'));
                // if (goodText) {
                //     var number = goodText.match(/[0-9]+$/)[0];
                // }
                str = str.replace(/Critical Strike Chance/g, `<span style="color:red;">Critical Strike Chance</span>`);
            }

            if (colors.indexOf("Mana") > -1) {
                // var goodText = str.substring(0, str.indexOf('</attention> Mana'));
                // if (goodText) {
                //     var number = goodText.match(/[0-9]+$/)[0];
                // }
                str = str.replace(/Mana/g, `<span style="color:DodgerBlue;">Mana</span>`);
            }

            if (colors.indexOf("Move Speed") > -1) {
                // var goodText = str.substring(0, str.indexOf('</attention> Move Speed'));
                // if (goodText) {
                //     var number = goodText.match(/[0-9]+$/)[0];
                // }
                str = str.replace(/Move Speed/g, `<span style="color:#EFF397;">Move Speed <img src=${AttackSpeed}></img></span></span>`);
            }

            if (colors.indexOf("Magic Resist") > -1) {
                // var goodText = str.substring(0, str.indexOf('</attention> Magic Resist'));
                // if (goodText) {
                //     var number = goodText.match(/[0-9]+$/)[0];
                // }
                str = str.replace(/Magic Resist/g, `<span style="color:DodgerBlue;">Magic Resist <img src=${Resistance}></img></span></span>`);
            }

            if (colors.indexOf("Armor") > -1) {
                // var goodText = str.substring(0, str.indexOf('</attention> Mana'));
                // if (goodText) {
                //     var number = goodText.match(/[0-9]+$/)[0];
                // }
                str = str.replace(/Armor/g, `<span style="color:DodgerBlue;">Armor <img src=${Armor}></img></span>`);
            }

            if (colors.indexOf("Base Health Regen") > -1) {
                // var goodText = str.substring(0, str.indexOf('</attention> Base Health Regen'));
                // console.log("dd", goodText)
                // if (goodText) {
                //     var number = goodText.match(/[0-9]+$/)[0];
                // }
                str = str.replace(/Base Health Regen/g, `<span style="color:#72DE38;">Base Health Regen <img src=${Health}></img></span></span>`);
            }

            if (colors.indexOf("Health") > -1) {
                // var goodText = str.substring(0, str.indexOf('</attention> Health'));
                // if (goodText) {
                //     var number = goodText.match(/[0-9]+$/)[0];
                // }
                str = str.replace(/Health/g, `<span style="color:#72DE38;">Health <img src=${Health}></img></span></span>`);
            }

            if (colors.indexOf("Ability Haste") > -1) {
                // var goodText = str.substring(0, str.indexOf('</attention> Ability Haste'));
                // if (goodText) {
                //     var number = goodText.match(/[0-9]+$/)[0];
                // }
                str = str.replace(/Ability Haste/g, `<span style="color:grey;">Ability Haste <img src=${AbilityHaste}></img></span></span>`);
            }


            document.getElementById("updated").innerHTML = str;
        }
    }

    return (
        <div className='background-img-item ' style={{ backgroundImage: `linear-gradient(to bottom, rgba(24, 32, 42, 1) 5%, rgb(0, 0, 0, 0.4) 50%,rgba(23, 32, 42, 1) 95%),url(${Vendor})`, backgroundSize: "cover" }}>
            <div className="d-flex justify-content-center champ-item p-3 mt-3" >
                {selectedItem.name ?
                    <div className="item-content">
                        <div className="text-center mb-3">
                            <h3 className='title pb-3'>{selectedItem.name}</h3>
                            <div className='item-card' style={{ cursor: 'pointer' }}>
                                <img src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/item/${selectedItem.image.full}`}></img>
                                <img src={require(`../../../assets/Common/plus.png`)} onClick={() => addToStuff(selectedItem)} className="add-item-icon about-icon-gold" alt="Champion world" width="20px" height="20px"></img>
                            </div>
                        </div>

                        <p dangerouslySetInnerHTML={{ __html: selectedItem.description }} id="content" className='hide-text item-description'></p>
                        <p dangerouslySetInnerHTML={{ __html: selectedItem.description }} id="updated" ></p>



                    </div>
                    :
                    <div className="default-details">Selectionner un item</div>
                }
            </div>
        </div>
    )
}

export default ChampItemDetails;