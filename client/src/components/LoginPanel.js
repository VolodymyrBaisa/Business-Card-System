import React, { useState } from "react";
//Api
import userAPI from "../utils/userAPI.js";

import { UserNotification } from "../components/UserNotification";
import { AccountList } from "../components/AccountList";
import { AccountListMenu } from "../components/AccountListMenu";
import { SignIn } from "../components/SignIn";
import { CreateAnAccount } from "../components/CreateAnAccount";

import UserPlaceholder from "../img/svg/user.svg";
import Close from "../img/svg/x.svg";
//import PNG
import UserPicture from "../img/user-img.png";

export const LoginPanel = ({ user, setUserCallback }) => {
    const [isSignInWindowOpen, setIsSignInWindowOpen] = useState(false);
    const [isCreateAccountWindowOpen, setIsCreateAccountWindowOpen] = useState(
        false
    );
    const [isUserIconClick, setIsUserIconClick] = useState(false);
    const [_user, _setUser] = useState("");

    const logOut = () => {
        userAPI
            .logout()
            .then((res) => {
                if (res.status === 200) {
                    _setUser("");
                    setUserCallback("");
                }
            })
            .catch(console.log);
    };

    return user._id || _user._id ? (
        <>
            <div className="login-panel">
                <UserNotification />
                <AccountList userName={user.firstName || _user.firstName} />
                <div
                    className="user-picture-container"
                    onClick={() => setIsUserIconClick(!isUserIconClick)}
                >
                    <img src={UserPicture} alt="User profile" />
                </div>
            </div>
            {isUserIconClick ? (
                <AccountListMenu
                    onClickAccAndSetCallback={() => setIsUserIconClick(false)}
                    onClickLogoutCallback={() => {
                        setIsUserIconClick(false);
                        logOut();
                    }}
                />
            ) : (
                ""
            )}
        </>
    ) : (
        <>
            <div
                className="login-panel"
                onClick={() => {
                    setIsSignInWindowOpen(!isSignInWindowOpen);
                    setIsCreateAccountWindowOpen(false);
                }}
            >
                <div className="user">
                    {!isSignInWindowOpen && !isCreateAccountWindowOpen ? (
                        <img
                            className="user-placeholder-svg"
                            src={UserPlaceholder}
                            alt=""
                        />
                    ) : (
                        <img className="close-svg" src={Close} alt="" />
                    )}
                </div>
            </div>
            {isSignInWindowOpen ? (
                <SignIn
                    onClickCreateAccountCallback={() => {
                        setIsSignInWindowOpen(false);
                        setIsCreateAccountWindowOpen(true);
                    }}
                    userCallback={(user) => {
                        _setUser(user);
                        setUserCallback(user);
                        setIsSignInWindowOpen(false);
                    }}
                />
            ) : (
                ""
            )}
            {isCreateAccountWindowOpen ? (
                <CreateAnAccount
                    userCallback={(user) => {
                        _setUser(user);
                        setUserCallback(user);
                        setIsSignInWindowOpen(false);
                        setIsCreateAccountWindowOpen(false);
                    }}
                />
            ) : (
                ""
            )}
        </>
    );
};
