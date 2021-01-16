import React, { useRef, useEffect } from "react";

import EndIconContainer from "../img/svg/end-icon-container.svg";

export const MenuSubItem = ({ icon, text, route }) => {
    const textItem = useRef();
    const iconContainer = useRef();
    let tCurrent = "";
    let tWidth = "";

    let iContainer = "";
    let iWidth = "";

    let vw = "";
    useEffect(() => {
        tCurrent = textItem.current;
        tWidth = tCurrent.offsetWidth;

        iContainer = iconContainer.current;
        iWidth = iContainer.offsetWidth;

        vw = 100 / document.documentElement.clientWidth;
    });
    const onMouseEnterEvent = (e) => {
        if (vw) {
            iContainer.style.width = (iWidth + tWidth) * vw + 2 + "vw";
        }
    };

    const onMouseLeaveEvent = (e) => {
        if (vw) {
            iContainer.style.width = iWidth * vw + "vw";
        }
    };

    const onClickEvent = (e) => {
        if (route) {
            window.location = route;
        }
    };

    return (
        <div className="sub-menu-container">
            <div className="sub-menu-indicator"></div>
            <div
                className="sub-menu-item-container"
                onMouseEnter={onMouseEnterEvent}
                onMouseLeave={onMouseLeaveEvent}
                onClick={onClickEvent}
            >
                <div className="sub-icon-container" ref={iconContainer}>
                    <img
                        className="sub-end-icon-container"
                        src={EndIconContainer}
                        alt=""
                    ></img>
                    <img className="sub-icon" src={icon} alt="" />
                </div>
                <div className="sub-text" ref={textItem}>
                    {text}
                </div>
            </div>
        </div>
    );
};
