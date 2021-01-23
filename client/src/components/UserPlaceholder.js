import React from "react";

import UserPlaceholderSVG from "../img/svg/user.svg";

export const UserPlaceholder = () => {
    return (
        <div className="user-placeholder">
            <img
                className="user-placeholder-svg"
                src={UserPlaceholderSVG}
                alt=""
            />
        </div>
    );
};
