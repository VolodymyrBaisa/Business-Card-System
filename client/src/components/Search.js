import React from "react";

import PullDownButton from "../img/svg/caret-down.svg";
import SearchSVG from "../img/svg/search.svg";

export const Search = () => {
    return (
        <div className="search-container">
            <div className="search-filter-button">
                All
                <img src={PullDownButton} alt="" />
            </div>
            <img
                src={SearchSVG}
                className="search-button"
                alt="Search button"
            />
            <input type="text" name="search"></input>
        </div>
    );
};
