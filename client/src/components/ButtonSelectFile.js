import React from "react";

import { Row } from "./Row";

import ButtonGlassCover from "../img/svg/button-glass-cover.svg";
import Arrow from "../img/svg/play-arrow.svg";

export const ButtonSelectFile = ({ text, onClickEvent }) => {
    return (
        <div>
            <div className="button-container">
                <img
                    className="glass-cover"
                    src={ButtonGlassCover}
                    alt={text}
                />
                <Row>
                    <div>{text}</div>
                    <img className="hover-arrow" src={Arrow} alt="" />
                </Row>
                <input
                    type="file"
                    onClick={(e) => (e.target.value = "")}
                    onChange={(e) => onClickEvent(e)}
                />
            </div>
        </div>
    );
};
