import React, { useState } from "react";

import { UserPlaceholder } from "./UserPlaceholder";
import { InputField } from "./InputField";
import { Button } from "./Button";
//Api
import userAPI from "../utils/userAPI.js";

export const SignIn = ({ onClickCreateAccountCallback, userCallback }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onClickSignInEvent = () => {
        if (email && password) {
            userAPI
                .loginUser({
                    email,
                    password,
                })
                .then((res) => {
                    if (res.status === 200) {
                        userCallback(res.data);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    return (
        <div className="sign-in-container blur-enable shadow">
            <div className="left">
                <UserPlaceholder />
                <hr />
            </div>
            <div className="right">
                <div className="header-text">Sign In</div>
                <InputField
                    label={"Email Address"}
                    labelImports={true}
                    inputType={"email"}
                    valueCallback={(v) => setEmail(v)}
                />
                <InputField
                    label={"Password"}
                    labelImports={true}
                    inputType={"password"}
                    valueCallback={(v) => setPassword(v)}
                />
                <Button text={"Sign in"} onClickEvent={onClickSignInEvent} />
                <Button
                    text={"Create an account"}
                    onClickEvent={onClickCreateAccountCallback}
                />
            </div>
        </div>
    );
};
