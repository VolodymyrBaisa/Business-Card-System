import React, { useRef, useEffect } from "react";

import ShareSVG from "../img/svg/share.svg";

export const FloatShareButton = ({ children }) => {
    const subButton = useRef();
    let subButtons = "";
    useEffect(() => {
        subButtons = subButton.current.querySelectorAll(
            ".float-share-sub-button-container"
        );
    });

    const onMouseEnterEvent = (e) => {
        const length = subButtons.length - 1;
        loop(length);
        function loop(i) {
            setTimeout(function () {
                subButtons[i].classList.remove("hide");
                if (--i >= 0) loop(i);
            }, 100);
        }
    };

    const onMouseLeaveEvent = (e) => {
        const length = subButtons.length - 1;
        loop(0);
        function loop(i) {
            setTimeout(function () {
                subButtons[i].classList.add("hide");
                if (++i <= length) loop(i);
            }, 100);
        }
    };

    return (
        <div onMouseLeave={onMouseLeaveEvent}>
            <div className="float-share-children-container" ref={subButton}>
                {children}
            </div>
            <div
                className="float-share-button-container"
                onMouseEnter={onMouseEnterEvent}
            >
                <img src={ShareSVG} alt="Share button" />
            </div>
        </div>
    );
};
