import React from "react";
import './AppContainer.css';
import DevilSkeleton from '../Images/right.png';
import AngelSkeleton from '../Images/left.png';
import MintBlock from './MintBlock.js';
import Preview from '../Images/preview.png';

function AppContainer() {
    return (
        <div className="app-container">
            <div className="app-container_main">
                <img className="app-container_skeleton" src={AngelSkeleton}></img>
                <MintBlock />
                <img className="app-container_skeleton" src={DevilSkeleton}></img>
            </div>
            <div className="app-container_description">
                <div className="app-container_info">
                    <h2 className="app-container_info-title">ABOUT</h2>
                    <p className="app-container_info-text">
                        Skeletons of forgotten blockchain is a 7070 NFT's that has been lost on the vastness of the Ethereum Blockchain. Each of them are unique and has its own story.
                        Their goal is to come together to defend the dark side of ERC - 721.
                    </p>
                    <p className="app-container_info-subtext">And of course you cant see the most dangeround and rarest skeletons on the right...</p>
                </div>
                <img className="app-container_preview" src={Preview}></img>
            </div>
        </div>
    );
}

export default AppContainer;