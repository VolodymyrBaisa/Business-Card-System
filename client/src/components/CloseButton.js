import React from "react";

import ButtonGlassCover from "../img/svg/button-glass-cover.svg";
import CloseSVG from "../img/svg/x.svg";

export const CloseButton = ({ onClickEvent }) => {
    return (
        <div
            className="close-button-container blur-disable"
            onClick={onClickEvent}
        >
            <img className="glass-cover" src={ButtonGlassCover} alt="" />
            <img className="close" src={CloseSVG} alt="Close" />
        </div>
    );
};
