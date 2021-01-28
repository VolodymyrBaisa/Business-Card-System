import React, { Component } from "react";
//Api
import cardAPI from "../../utils/cardAPI.js";
import userAPI from "../../utils/userAPI.js";
import { ContentHeader } from "../../components/ContentHeader";
import { PageContainer } from "../../components/PageContainer";
import { InputField } from "../../components/InputField";
import { Row } from "../../components/Row";
import { Button } from "../../components/Button";
import { UploadNewCard } from "../../components/UploadNewCard";

export default class CardUpload extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedFile: null,
            cardInfo: {
                cardTag: "",
                firstName: "",
                lastName: "",
                companyName: "",
                phoneNumber: "",
                email: "",
                address: "",
            },
        };
    }

    onClickSave = () => {
        const cardInfo = this.state.cardInfo;
        const file = this.state.selectedFile;
        if (
            cardInfo.cardTag &&
            cardInfo.firstName &&
            cardInfo.phoneNumber &&
            cardInfo.email &&
            file
        ) {
            const data = new FormData();
            data.append("cardInfo", JSON.stringify(cardInfo));
            data.append("user", JSON.stringify(this.props));
            data.append("file", file);

            cardAPI
                .upload(data)
                .then(async (res) => {
                    const user = await userAPI.authenticateUser();
                    this.props.onUserCallback(user);
                })
                .catch(console.log);
        }
    };

    render() {
        return (
            <>
                <ContentHeader labelName={["Upload New Card"]} />
                <PageContainer>
                    <div className="card-upload-page">
                        <UploadNewCard
                            fileCallback={(file) =>
                                this.setState({ selectedFile: file })
                            }
                        />
                        <InputField
                            label={"Card Tag"}
                            labelImports={true}
                            inputType={"text"}
                            valueCallback={(v) =>
                                this.setState({
                                    cardInfo: {
                                        ...this.state.cardInfo,
                                        cardTag: v,
                                    },
                                })
                            }
                        />
                        <Row id={2}>
                            <InputField
                                label={"First Name"}
                                labelImports={true}
                                inputType={"text"}
                                valueCallback={(v) =>
                                    this.setState({
                                        cardInfo: {
                                            ...this.state.cardInfo,
                                            firstName: v,
                                        },
                                    })
                                }
                            />
                            <InputField
                                label={"Last Name"}
                                labelImports={false}
                                inputType={"text"}
                                valueCallback={(v) =>
                                    this.setState({
                                        cardInfo: {
                                            ...this.state.cardInfo,
                                            lastName: v,
                                        },
                                    })
                                }
                            />
                        </Row>
                        <InputField
                            label={"Company Name"}
                            labelImports={false}
                            inputType={"text"}
                            valueCallback={(v) =>
                                this.setState({
                                    cardInfo: {
                                        ...this.state.cardInfo,
                                        companyName: v,
                                    },
                                })
                            }
                        />
                        <InputField
                            label={"Phone Number"}
                            labelImports={true}
                            inputType={"text"}
                            valueCallback={(v) =>
                                this.setState({
                                    cardInfo: {
                                        ...this.state.cardInfo,
                                        phoneNumber: v,
                                    },
                                })
                            }
                        />
                        <InputField
                            label={"Email"}
                            labelImports={true}
                            inputType={"text"}
                            valueCallback={(v) =>
                                this.setState({
                                    cardInfo: {
                                        ...this.state.cardInfo,
                                        email: v,
                                    },
                                })
                            }
                        />
                        <InputField
                            label={"Address"}
                            labelImports={false}
                            inputType={"text"}
                            valueCallback={(v) =>
                                this.setState({
                                    cardInfo: {
                                        ...this.state.cardInfo,
                                        address: v,
                                    },
                                })
                            }
                        />
                        <Button
                            text={"Save Card"}
                            onClickEvent={this.onClickSave}
                        />
                    </div>
                </PageContainer>
            </>
        );
    }
}
