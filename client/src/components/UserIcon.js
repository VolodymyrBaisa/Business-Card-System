import React from "react";

export const UserIcon = ({ userIcon }) => {
    return (
        <div className="user-icon-container">
            <img className="user-icon" src={userIcon} />
        </div>
    );
};
