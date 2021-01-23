import React from "react";

export const Lock = (props) => {
    return (
        <svg
            width={props.width}
            height={props.height}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11.0833 6.41667H2.91667C2.27233 6.41667 1.75 6.93901 1.75 7.58334V11.6667C1.75 12.311 2.27233 12.8333 2.91667 12.8333H11.0833C11.7277 12.8333 12.25 12.311 12.25 11.6667V7.58334C12.25 6.93901 11.7277 6.41667 11.0833 6.41667Z"
                stroke={props.color}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M4.08331 6.41667V4.08334C4.08331 3.30979 4.3906 2.56792 4.93758 2.02094C5.48457 1.47396 6.22643 1.16667 6.99998 1.16667C7.77353 1.16667 8.51539 1.47396 9.06237 2.02094C9.60936 2.56792 9.91665 3.30979 9.91665 4.08334V6.41667"
                stroke={props.color}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
