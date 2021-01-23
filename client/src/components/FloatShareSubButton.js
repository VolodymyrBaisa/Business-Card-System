import React from "react";

export const FloatShareSubButton = ({ img, alt }) => {
    return (
        <div className="float-share-sub-button-container shadow hide">
            <img src={img} alt={alt} />
        </div>
    );
};
