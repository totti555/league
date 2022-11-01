import ImageGallery from 'react-image-gallery';
import React, { useState } from 'react';
import './ChampSkins.scss';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Rp from '../../../assets/Common/rp.png';
import MythicEssence from '../../../assets/Common/mythic-essence.png';
import Calendar from '../../../assets/Common/calendar.png';




const ChampSkins = (props) => {

    /**
        * *To display a carousel of skin with prices, rarity 
        * * Set the background images and the card images of each champion's skins.  
        
        * SCSS file : ChampSkin.scss
        * Components : ImageGallery (external CSS bookstore for carousel) 
    */

    const champion = props.champion;
    const setBackgroundImg = props.setBackgroundImg;
    const setChampCardImg = props.setChampCardImg;

    /**
        **get good index of thee image selected by the carousel
    */
    const [indexSkins, setIndexSkins] = useState(0);

    /**
        **state to get all the datas for the skinsof the selected champion
    */
    const [skinImages, setSkinImages] = useState([]);
    const location = useLocation();

    /**
        **Change color according to skin rarity
    */

    const changeColor = () => {
        if (skinImages) {
            if (document.getElementById(`skin-rarity`) != null) {
                var text = document.getElementById('skin-rarity');

                var str = text.innerHTML,
                    reg = /Common|Mythic|Legendary|Ultimate|Epic/ig; //g is to replace all occurances

                //fixing a bit
                var toStr = String(reg);
                var color = (toStr.replace('\/g', '|')).substring(1);

                //split it baby
                var colors = color.split("|");

                if (colors.indexOf("Common") > -1) {
                    str = str.replace(/Common/g, `<span style="color:#51D64A">Common</span>`);
                }

                if (colors.indexOf("Epic") > -1) {
                    str = str.replace(/Epic/g, `<span style="color:#00DBF4">Epic</span>`);
                }

                if (colors.indexOf("Mythic") > -1) {
                    str = str.replace(/Mythic/g, `<span style="color:#C804C3;">Mythic</span>`);
                }

                if (colors.indexOf("Legendary") > -1) {
                    str = str.replace(/Legendary/g, `<span style="color:#FF484D">Legendary</span>`);
                }

                if (colors.indexOf("Utimate") > -1) {
                    str = str.replace(/Utimate/g, `<span style="color:#EDA44C">Utimate</span>`);
                }
                document.getElementById(`skin-rarity-updated`).innerHTML = str;
            }

        }

    }

    useEffect(() => {
        getSkinsImages();
        changeColor();
    }, [champion, location.pathname]);

    /**
        **get all skin images in one object
    */

    const getSkinsImages = () => {
        let i;
        let images = [];
        let imagesByReleaseDesc;
        const skinsNumImg = champion.skins.filter((spell) => spell.name !== 'Original');

        for (i = 0; i < skinsNumImg.length; i++) {
            const param = {
                original: skinsNumImg[i].splashPath,
                thumbnail: skinsNumImg[i].splashPath,
                loadScreen: skinsNumImg[i].loadScreenPath,
                description: skinsNumImg[i].name,
                params: { rarity: skinsNumImg[i].rarity, cost: skinsNumImg[i].cost, release: skinsNumImg[i].release }
            }
            images.push(param);
        }
        // Get image by the most recent image
        imagesByReleaseDesc = images.reverse();
        // Set default background image (the most recent)
        setBackgroundImg(imagesByReleaseDesc[0].original);

        setSkinImages(imagesByReleaseDesc);
    }

    /**
        **set dynamic background images according to the carousel display
    */

    const refImg = useRef(null);
    const renderCustomControls = () => {
        if (refImg.current) {
            // get the index of the image of the carousel
            const index = refImg.current.getCurrentIndex();
            // set card and background images 
            if (skinImages[index]) {
                setBackgroundImg(skinImages[index].original);
                setChampCardImg(skinImages[index].loadScreen);
            }
            setIndexSkins(index);
        }
    }

    useEffect(() => {
        changeColor();
    }, [indexSkins]);



    return (
        <>
            <div className='champ-skins p-4'>
                <div >
                    <h2 className="title">SKINS :</h2>
                    <hr></hr>
                </div>
                {
                    /**
                        **https://www.npmjs.com/package/react-image-gallery
                        * slideInterval : delay to change img 
                        * slideDuration : delay of the transition
                    */
                }
                <div className='skins-content position-relative'>
                    {skinImages && <>
                        <ImageGallery ref={refImg} renderCustomControls={renderCustomControls} items={skinImages} showFullscreenButton={false} autoPlay={true} slideInterval={10000} slideDuration={600} />
                        <div className='skin-number'>{`${indexSkins ? indexSkins + 1 : '1'} `} <strong> / {skinImages.length}</strong></div>
                        {refImg.current && skinImages.length &&
                            <div className='d-flex flex-column skin-infos'>
                                {
                                    skinImages[indexSkins].params.cost !== 'special' ?
                                        <p className='mb-0'>{skinImages[indexSkins].params.cost} <span><img alt='rp' title={`${skinImages[indexSkins].params.cost} RP`} src={Rp} width='20px'></img></span></p>
                                        :
                                        <p className='mb-0'><span style={{ color: '#9E65CD' }}>Special</span> <span><img alt='Mythic essence' title='Mythic essence' src={MythicEssence} width='20px'></img></span></p>
                                }
                                <p id='skin-rarity' className='mb-0  hide-skin-rarity'>
                                    {skinImages[indexSkins].params.rarity === 'NoRarity' ? 'Common' : skinImages[indexSkins].params.rarity}
                                    <span><img src={require(`../../../assets/Rarity/${skinImages[indexSkins].params.rarity}.png`)} width='20px' alt='rarity' title='Skin rarity'></img></span>
                                </p>
                                <p id='skin-rarity-updated' className='mb-0'>
                                    {skinImages[indexSkins].params.rarity === 'NoRarity' ? 'Common' : skinImages[indexSkins].params.rarity}
                                    <span><img src={require(`../../../assets/Rarity/${skinImages[indexSkins].params.rarity}.png`)} width='20px' alt='rarity' title='Common rarity'></img></span>
                                </p>
                                {skinImages[indexSkins].params.release !== '0000-00-00' &&
                                    <p className='mb-0'>
                                        {skinImages[indexSkins].params.release}
                                        <span> <img alt='date' title='Skin release date' src={Calendar} className='about-icon-gold' width='20px'></img></span>
                                    </p>}
                            </div>}
                    </>}
                </div>
            </div>
        </>
    )

}

export default ChampSkins;