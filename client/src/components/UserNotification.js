import React from "react";

import Bell from "../img/svg/bell.svg";

export const UserNotification = ({ isUserLoggedIn }) => {
    return (
        <div className="user-notification-container">
            <img src={Bell} alt="User notification" />
        </div>
    );
};
