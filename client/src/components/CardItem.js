import React from "react";

export const CardItem = ({ imgUrl, onClickCard }) => {
    return (
        <span
            className="card-item-container"
            onClick={() => onClickCard(imgUrl)}
        >
            <img className="card-item" src={imgUrl} alt="" />
        </span>
    );
};
