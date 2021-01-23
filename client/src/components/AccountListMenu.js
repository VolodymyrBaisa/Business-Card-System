import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Lock } from "./icons/Lock";
import { LogOut } from "./icons/LogOut";

export const AccountListMenu = ({
    onClickAccAndSetCallback,
    onClickLogoutCallback,
}) => {
    const [colorLock, setColorLock] = useState("#424F62");
    const onMouseEnterLockEvent = () => setColorLock("#fff");
    const onMouseLiveLockEvent = () => setColorLock("#424F62");

    const [colorLogOut, setColorLogOut] = useState("#424F62");
    const onMouseEnterLogOutEvent = () => setColorLogOut("#fff");
    const onMouseLiveLogOutEvent = () => setColorLogOut("#424F62");

    return (
        <div className="account-list-container shadow">
            <Link
                className="menu"
                onClick={() => {
                    return onClickAccAndSetCallback();
                }}
                to={"/accountandsecurity"}
                onMouseEnter={onMouseEnterLockEvent}
                onMouseLeave={onMouseLiveLockEvent}
            >
                <Lock width={"1vw"} height={"1vw"} color={colorLock} />
                <div className="text">Account & Settings</div>
            </Link>
            <div
                className="menu"
                onClick={onClickLogoutCallback}
                onMouseEnter={onMouseEnterLogOutEvent}
                onMouseLeave={onMouseLiveLogOutEvent}
            >
                <LogOut width={"1vw"} height={"1vw"} color={colorLogOut} />
                <div className="text">Logout</div>
            </div>
        </div>
    );
};
