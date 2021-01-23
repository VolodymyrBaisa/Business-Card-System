import React from "react";

import { CloseButton } from "./CloseButton";

export const OpenCard = ({ text, setCard, setIsCardOpen }) => {
    return (
        <div className="open-card-container blur-enable shadow">
            <div className="header">
                <div className="header-title">text</div>
                <CloseButton
                    onClickEvent={() => {
                        setIsCardOpen(false);
                    }}
                />
            </div>
            <hr />
            <img className="card" src={setCard} alt="Business Card" />
        </div>
    );
};
