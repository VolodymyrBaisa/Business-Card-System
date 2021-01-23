import React, { useState } from "react";
//Api
import userAPI from "../utils/userAPI.js";

import { UserPlaceholder } from "./UserPlaceholder";
import { InputField } from "./InputField";
import { Button } from "./Button";

export const CreateAnAccount = ({ userCallback }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");

    const passwordCompare = (p, p1) => p === p1;

    const authenticateUser = () => {
        userAPI
            .authenticateUser()
            .then((res) => {
                if (res.status === 200) {
                    userCallback(res.data);
                }
            })
            .catch(console.log);
    };

    const createNewAccount = () => {
        if (email && password && passwordCompare(password, confPassword)) {
            userAPI
                .signup({
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    password: password,
                })
                .then((res) => {
                    if (res.status === 200) {
                        authenticateUser();
                    }
                })
                .catch(console.log);
        } else {
        }
    };

    const onClickSignInEvent = () => {
        createNewAccount();
    };

    return (
        <div className="create-an-account-container blur-enable shadow">
            <div className="left">
                <UserPlaceholder />
                <hr />
            </div>
            <div className="right">
                <div className="header-text">Create An Account</div>
                <InputField
                    label={"First Name"}
                    labelImports={true}
                    inputType={"text"}
                    valueCallback={(v) => setFirstName(v)}
                />
                <InputField
                    label={"Last Name"}
                    labelImports={true}
                    inputType={"text"}
                    valueCallback={(v) => setLastName(v)}
                />
                <InputField
                    label={"Email"}
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
                <InputField
                    label={"Repeat Password"}
                    labelImports={true}
                    inputType={"password"}
                    valueCallback={(v) => setConfPassword(v)}
                />
                <Button text={"Sign in"} onClickEvent={onClickSignInEvent} />
            </div>
        </div>
    );
};
