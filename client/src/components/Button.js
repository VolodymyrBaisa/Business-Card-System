import React from "react";

import { Row } from "./Row";

import ButtonGlassCover from "../img/svg/button-glass-cover.svg";
import Arrow from "../img/svg/play-arrow.svg";

export const Button = ({ text, onClickEvent }) => {
    return (
        <div className="button-container" onClick={onClickEvent}>
            <img className="glass-cover" src={ButtonGlassCover} alt={text} />
            <Row>
                <div>{text}</div>
                <img className="hover-arrow" src={Arrow} alt="" />
            </Row>
        </div>
    );
};
