import React from "react";

export const Label = ({ text, isImpotent = false }) => {
    return (
        <div className="label-container">
            <div className="text">
                {text}
                {isImpotent ? <div className="is-important">*</div> : ""}
            </div>
        </div>
    );
};
