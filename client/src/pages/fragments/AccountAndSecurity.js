import React, { Component } from "react";
//Api
import userAPI from "../../utils/userAPI.js";
import { ContentHeader } from "../../components/ContentHeader";
import { PageContainer } from "../../components/PageContainer";
import { Button } from "../../components/Button";
import { InputField } from "../../components/InputField";
import { Row } from "../../components/Row";
import { UserIcon } from "../../components/UserIcon";

import UserImg from "../../img/user-img.png";

export default class AccountAndSecurity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: this.props.id,
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            email: this.props.email,
            password: "",
            confPassword: "",
        };
    }
    updateUserInfo = () => {
        if (
            this.state.password &&
            this.state.email &&
            this.state.password === this.state.confPassword
        ) {
            userAPI
                .update({
                    _id: this.props._id,
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    email: this.state.email,
                    password: this.state.password,
                })
                .then((res) => {
                    if (res.status === 200) {
                        this.props.onUserCallback(res.data);
                    }
                })
                .catch(console.log);
        } else {
        }
    };

    render() {
        return (
            <>
                <ContentHeader labelName={["Account & Security"]} />
                <PageContainer>
                    <div className="account-and-security-page">
                        <UserIcon userIcon={UserImg} />
                        <Row id={2}>
                            <InputField
                                value={this.props.firstName}
                                label={"First Name"}
                                labelImports={true}
                                inputType={"text"}
                                valueCallback={(v) =>
                                    this.setState({ firstName: v })
                                }
                            />
                            <InputField
                                value={this.props.lastName}
                                label={"Last Name"}
                                labelImports={true}
                                inputType={"text"}
                                valueCallback={(v) =>
                                    this.setState({ lastName: v })
                                }
                            />
                        </Row>
                        <InputField
                            value={this.props.email}
                            label={"Email"}
                            labelImports={true}
                            inputType={"email"}
                            valueCallback={(v) => this.setState({ email: v })}
                        />
                        <Row id={2}>
                            <InputField
                                label={"New Password"}
                                labelImports={true}
                                inputType={"password"}
                                valueCallback={(v) =>
                                    this.setState({ password: v })
                                }
                            />
                            <InputField
                                label={"Confirm Password"}
                                labelImports={true}
                                inputType={"password"}
                                valueCallback={(v) =>
                                    this.setState({ confPassword: v })
                                }
                            />
                        </Row>
                        <Button
                            text={"Save Profile"}
                            onClickEvent={this.updateUserInfo}
                        />
                    </div>
                </PageContainer>
            </>
        );
    }
}
