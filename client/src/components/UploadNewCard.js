import React from "react";

import { Button } from "./Button";

export const UploadNewCard = () => {
    return (
        <div className="upload-new-card-container">
            <div className="upload-card-text">Drop file here</div>
            <div className="upload-card-text">or</div>
            <Button text={"Select File"} />
        </div>
    );
};
