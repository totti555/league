import ImageGallery from 'react-image-gallery';
import React, { useState } from 'react';
import './ChampSkins.scss';
import { useEffect } from 'react';



const ChampSkins = (props) => {

    const champion = props.champion;
    const [skinImages, setSkinImages] = useState([]);

    useEffect(() => {
        getSkinsImages()

    }, [champion]);

    const getSkinsImages = () => {
        let i;
        let images = [];
        console.log(champion.skins)
        const skinsNumImg = champion.skins.filter((spell) => spell.num && spell.num !== 0);

        for (i = 0; i < skinsNumImg.length; i++) {
            const param = {
                original: `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_${skinsNumImg[i].num}.jpg`,
                thumbnail: `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_${skinsNumImg[i].num}.jpg`,
                description: skinsNumImg[i].name,
            }
            images.push(param);
        }

        setSkinImages(images);

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
                <div className='skins-content'>
                    {skinImages && <>
                        <ImageGallery items={skinImages} showFullscreenButton={false} autoPlay={true} slideInterval={7000} slideDuration={600} />
                        <div className='skin-name'></div>
                    </>}
                </div>
            </div>
        </>
    )

}

export default ChampSkins;