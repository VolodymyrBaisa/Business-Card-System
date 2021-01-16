import React from "react";

<<<<<<< HEAD
import TopGlassCover from "./img/svg/top-glass-cover";

export const Header = () => {
  return (
    <div className="top-container">
      <div className="top-glass-cover">
        <image src={TopGlassCover} />
      </div>
      <div className="header"></div>
      <div className="underline"></div>
    </div>
  );
=======
import TopGlassCover from "../img/svg/top-glass-cover.svg";

export const Header = () => {
    useLogRender();
    return (
        <div className="top-container">
            <div className="top-glass-cover">
                <image src={TopGlassCover} />
            </div>
            <div className="header"></div>
            <div className="underline"></div>
        </div>
    );
>>>>>>> main
};
