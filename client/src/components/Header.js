import React from "react";

import TopGlassCover from "../img/svg/top-glass-cover.svg";

export const Header = ({ children }) => {
    return (
        <div className="top-container">
            <div className="top-glass-cover">
                <img src={TopGlassCover} alt="" />
            </div>
            <div className="header">{children}</div>
            <div className="underline"></div>
        </div>
    );
};
