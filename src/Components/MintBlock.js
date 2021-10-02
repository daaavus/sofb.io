import React, {useState} from "react";
import './MintBlock.css';

function MintBlock () {
    const [sliderCount, setSliderCount] = React.useState(1);
    let Input = React.createRef();

    const handlChange = () => {
        setSliderCount(Input.current.value);
    }

    return (
        <div className="mint-block">
            <h1 className="mint-title">Mint your skeleton!</h1>
            <input className="mint-input" type="range" min="1" max="5" list="1" step="1" defaultValue="1" ref={Input} onChange={handlChange}/>
            <button className="mint-button">Mint {sliderCount}</button>
            <span className="mint-quantity">WILL BE AVAILABLE ON THE 15th OF OCTOBER</span>
        </div>
    );    
}

export default MintBlock;