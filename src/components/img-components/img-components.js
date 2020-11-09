import React from 'react';

function ImgComp({ src }) {
    let imgStyles = {
        width:100 + "%",
        height:100 + "auto",      
    };
    return (
    <img src={src} alt="slide-image" style={imgStyles}></img>)
}
export default ImgComp;