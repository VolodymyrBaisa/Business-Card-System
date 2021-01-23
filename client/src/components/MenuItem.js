import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import EndMenuContainer from "../img/svg/end-menu-container.svg";
import EndIconContainer from "../img/svg/end-icon-container.svg";

export const MenuItem = ({
    icon,
    text,
    route,
    isMenuActivated,
    setIsMenuActivated,
    children,
}) => {
    const textItem = useRef();
    const iconContainer = useRef();

    let tCurrent = "";
    let tWidth = 0;

    let iContainer = "";
    let iWidth = 40;

    let vw = "";
    useEffect(() => {
        tCurrent = textItem.current;
        tWidth = tCurrent.offsetWidth;

        iContainer = iconContainer.current;
        iWidth = saveValue(iContainer.clientWidth);
        vw = 100 / document.documentElement.clientWidth;
    });
    const shiftLine = () => {
        iContainer.style.width = (iWidth + tWidth) * vw + 2 + "vw";
    };
    const unShiftLine = () => {
        iContainer.style.width = iWidth * vw + "vw";
    };

    const isChildrenRendered = () => (children ? true : false);

    const onMouseEnterEvent = () => {
        if (vw && !isChildrenRendered()) {
            shiftLine();
        }
    };

    const onMouseLeaveEvent = () => {
        if (vw && !isChildrenRendered()) {
            unShiftLine();
        }
    };

    const onClickEvent = () => {
        if (isChildrenRendered()) {
            if (!isMenuActivated) {
                shiftLine();
                setIsMenuActivated(true);
            } else {
                unShiftLine();
                setIsMenuActivated(false);
            }
        }
    };

    return (
        <>
            <Link
                className="menu-item-container"
                onMouseEnter={onMouseEnterEvent}
                onMouseLeave={onMouseLeaveEvent}
                onClick={onClickEvent}
                to={route}
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
            </Link>
            <div>{children}</div>
        </>
    );
};

let saved = 0;
function saveValue(value) {
    return saved === 0 ? (saved = value) : saved;
}
