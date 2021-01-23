import React from "react";

import TriangleLabelPart from "../img/svg/triangle-label-part.svg";
import EndTitle from "../img/svg/end-title.svg";

export const ContentHeader = ({ labelName }) => {
    return (
        <>
            <div className="d-label-container">
                {labelName.map((l, index) => (
                    <div key={index} className="d-header-label-container">
                        <div className="d-header-label">{l}</div>
                        <img
                            className="d-label-end"
                            src={TriangleLabelPart}
                            alt=""
                        />
                    </div>
                ))}
            </div>

            <div className="d-line-container">
                <div className="d-line-empty"></div>
                <img className="d-line-end" src={EndTitle} alt="" />
            </div>
        </>
    );
};
