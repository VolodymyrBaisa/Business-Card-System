import React, { useRef, useEffect } from "react";

import EndMenuContainer from "../img/svg/end-menu-container.svg";
import EndIconContainer from "../img/svg/end-icon-container.svg";

export const MenuItem = ({ icon, text, route, children }) => {
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
        <>
            <div
                className="menu-item-container"
                onMouseEnter={onMouseEnterEvent}
                onMouseLeave={onMouseLeaveEvent}
                onClick={onClickEvent}
            >
                <img
                    className="end-menu-container"
                    src={EndMenuContainer}
                    alt=""
                />
                <div className="icon-container" ref={iconContainer}>
                    <img
                        className="end-icon-container"
                        src={EndIconContainer}
                        alt=""
                    ></img>
                    <img className="icon" src={icon} alt="" />
                </div>
                <div className="text" ref={textItem}>
                    {text}
                </div>
            </div>
            <div>{children}</div>
        </>
    );
};
