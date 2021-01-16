import React from "react";

import { UserNotification } from "../components/UserNotification";
import { AccountList } from "../components/AccountList";

import User from "../img/svg/user.svg";

export const LoginPanel = ({ isUserLoggedIn }) => {
    return isUserLoggedIn ? (
        <div className="login-panel">
            <UserNotification />
            <AccountList userName="Jon" />
            <div className="user-icon-container"></div>
        </div>
    ) : (
        <div className="login-panel">
            <div className="user">
                <img className="userSVG" src={User} alt="" />
                <div className="user-container"></div>
            </div>
        </div>
    );
};
