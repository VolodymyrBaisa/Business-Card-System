import React from "react";

export const Filter = ({ filterItems, onClickEvent }) => {
    const getElement = (elements) => {
        return elements.target.textContent;
    };

    return (
        <div
            className="filter-container shadow"
            onClick={(e) => onClickEvent(getElement(e))}
        >
            <div className="menu">All</div>
            {filterItems
                ? filterItems.map((item) => {
                      if (Array.isArray(item)) {
                          return item.map((i) => (
                              <div className="sub-menu">{i}</div>
                          ));
                      } else {
                          return <div className="menu">{item}</div>;
                      }
                  })
                : ""}
        </div>
    );
};
