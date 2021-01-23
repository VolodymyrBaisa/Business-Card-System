import React, { useState } from "react";

import { Filter } from "./Filter";

import PullDownButton from "../img/svg/caret-down.svg";
import SearchSVG from "../img/svg/search.svg";

export const Search = ({ onSearchCallback }) => {
    const [isFilter, setIsFilter] = useState(false);
    const [search, setSearch] = useState("");
    return (
        <>
            <div className="search-container">
                <div
                    className="search-filter-button"
                    onClick={() => setIsFilter(!isFilter)}
                >
                    All
                    <img src={PullDownButton} alt="" />
                </div>
                <img
                    src={SearchSVG}
                    className="search-button"
                    alt="Search button"
                    onClick={() => onSearchCallback(search)}
                />
                <input
                    type="text"
                    name="search"
                    placeholder="Search business cards..."
                    onChange={(v) => setSearch(v.target.value)}
                ></input>
                {isFilter ? (
                    <Filter
                        filterItems={[
                            "My Cards",
                            "Home",
                            ["Electric", "Plumber"],
                            "Taxi",
                        ]}
                        onClickEvent={(e) => {
                            setIsFilter(!isFilter);
                        }}
                    />
                ) : (
                    ""
                )}
            </div>
        </>
    );
};
