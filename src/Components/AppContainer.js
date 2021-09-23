import React from "react";
import CreatorAvatar from "../Images/sofb_icon.png"
import Preview from "../Images/sofb_preview.png";

function AppContainer() {
    return (
        <div className="App">
            <img src={CreatorAvatar} alt="SOFB logo"></img>
            <p>(are you ready?)</p>
            <div>
                <img src={Preview} alt="SOFB editions preview"></img>
            </div>
        </div>
    );
}

export default AppContainer;