import React, { useState } from "react";

import { Label } from "./Label";

export const InputField = ({
    value = "",
    label = "",
    labelImports = false,
    inputType = "text",
    valueCallback = () => {},
}) => {
    const [val, setVal] = useState(value);

    return (
        <div className="input-field-container">
            <Label text={label} isImpotent={labelImports} />
            <input
                value={val}
                type={inputType}
                onChange={(v) => {
                    const val = v.target.value;
                    setVal(val);
                    return valueCallback(val);
                }}
            />
        </div>
    );
};
