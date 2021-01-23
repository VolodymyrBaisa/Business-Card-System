import React from "react";

export const LogOut = (props) => {
    return (
        <svg
            width={props.width}
            height={props.height}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M5.25 12.25H2.91667C2.60725 12.25 2.3105 12.1271 2.09171 11.9083C1.87292 11.6895 1.75 11.3928 1.75 11.0833V2.91667C1.75 2.60725 1.87292 2.3105 2.09171 2.09171C2.3105 1.87292 2.60725 1.75 2.91667 1.75H5.25"
                stroke={props.color}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M9.33331 9.91667L12.25 7L9.33331 4.08334"
                stroke={props.color}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12.25 7H5.25"
                stroke={props.color}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
