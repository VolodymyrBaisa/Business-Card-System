import React from "react";

export const Row = ({ children, id = 0 }) => {
    const getClassName = (i) => {
        switch (i) {
            case 0:
                return "row-flex-start";
            case 1:
                return "row-flex-start-stretch";
            case 2:
                return "row-space-between-center";
            default:
                return "row-flex-start";
        }
    };

    return <div className={getClassName(id)}>{children}</div>;
};
