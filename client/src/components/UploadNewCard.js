import React, { useState } from "react";

import { CloseButton } from "./CloseButton";
import { ButtonSelectFile } from "./ButtonSelectFile";

export const UploadNewCard = ({ fileCallback }) => {
    const [file, setFile] = useState("");
    return !file ? (
        <div className="upload-new-card-container">
            <div className="upload-card-text">Drop file here</div>
            <div className="upload-card-text">or</div>
            <ButtonSelectFile
                text={"Select File"}
                onClickEvent={(e) => {
                    const file = e.target ? e.target.files[0] : "";
                    setFile(file);
                    fileCallback(file);
                }}
            />
        </div>
    ) : (
        <div className="file-container">
            <div className="file">{file.name}</div>
            <CloseButton
                onClickEvent={() => {
                    setFile("");
                }}
            />
        </div>
    );
};
