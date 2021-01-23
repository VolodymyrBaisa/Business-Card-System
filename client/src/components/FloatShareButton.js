import React, { useRef, useEffect, useState } from "react";

import ShareSVG from "../img/svg/share.svg";

export const FloatShareButton = ({ children }) => {
    const [isActivated, setIsActivated] = useState(false);
    const button = useRef();
    const subButton = useRef();
    let subButtons = "";
    useEffect(() => {
        subButtons = subButton.current.querySelectorAll(
            ".float-share-sub-button-container"
        );
    });

    const onClickEvent = (e) => {
        const length = subButtons.length - 1;
        if (!isActivated) {
            button.current.classList.add("is-activated");
            loop(length);
            function loop(i) {
                setTimeout(function () {
                    subButtons[i].classList.remove("hide");
                    if (--i >= 0) loop(i);
                    else setIsActivated(true);
                }, 100);
            }
        } else {
            button.current.classList.remove("is-activated");
            loop(0);
            function loop(i) {
                setTimeout(function () {
                    subButtons[i].classList.add("hide");
                    if (++i <= length) loop(i);
                    else setIsActivated(false);
                }, 100);
            }
        }
    };

    return (
        <div>
            <div className="float-share-children-container" ref={subButton}>
                {children}
            </div>
            <div
                className="float-share-button-container shadow"
                ref={button}
                onClick={onClickEvent}
            >
                <img src={ShareSVG} alt="Share button" />
            </div>
        </div>
    );
};
