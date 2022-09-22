import ImageGallery from 'react-image-gallery';
import React, { useState } from 'react';
import './ChampSkins.scss';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';



const ChampSkins = (props) => {

    const champion = props.champion;
    const setBackgroundImg = props.setBackgroundImg;
    const setChampCardImg = props.setChampCardImg;
    const [skinImages, setSkinImages] = useState([]);
    const location = useLocation();

    useEffect(() => {
        getSkinsImages()

    }, [champion]);

    useEffect(() => {
        getSkinsImages();

    }, [location.pathname]);

    const getSkinsImages = () => {
        let i;
        let images = [];
        const skinsNumImg = champion.skins.filter((spell) => spell.name !== 'Original');
        console.log(skinsNumImg);

        for (i = 0; i < skinsNumImg.length; i++) {
            const param = {
                original: skinsNumImg[i].splashPath,
                thumbnail: skinsNumImg[i].splashPath,
                param: skinsNumImg[i].loadScreenPath,
                description: skinsNumImg[i].name,
            }
            images.push(param);
        }
        setBackgroundImg(images[0].original);

        setSkinImages(images);
    }

    const refImg = useRef(null);
    const renderCustomControls = () => {
        if (refImg.current) {
            const index = refImg.current.getCurrentIndex();
            if (skinImages[index]) {
                setBackgroundImg(skinImages[index].original);
                setChampCardImg(skinImages[index].param);
            }
        }
    }

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
                        <div className='skin-number'>{`${refImg.current ? refImg.current.getCurrentIndex() + 1 : null} `} <strong> / {skinImages.length}</strong></div>
                    </>}
                </div>
            </div>
        </>
    )

}

export default ChampSkins;