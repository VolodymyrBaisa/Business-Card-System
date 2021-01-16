import React from "react";

import LeftGlassCover from "../img/svg/left-glass-cover.svg";

export const LeftSideMenu = ({ children }) => {
    return (
        <div className="left-menu-container">
            <div className="left-menu-glass-cover">
                <img src={LeftGlassCover} alt="" />
            </div>
            <div className="left-menu">{children}</div>
        </div>
    );
};
