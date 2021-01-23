import React, { Component } from "react";

import { ContentHeader } from "../../components/ContentHeader";
import { PageContainer } from "../../components/PageContainer";
import { InputField } from "../../components/InputField";
import { Row } from "../../components/Row";
import { Button } from "../../components/Button";
import { UploadNewCard } from "../../components/UploadNewCard";

export default class CardUpload extends Component {
    render() {
        return (
            <>
                <ContentHeader labelName={["Upload New Card"]} />
                <PageContainer>
                    <div className="card-upload-page">
                        <UploadNewCard />
                        <Row id={2}>
                            <InputField
                                label={"Card Tag"}
                                labelImports={true}
                                inputType={"text"}
                            />
                            <InputField
                                label={"Card Tags"}
                                labelImports={true}
                                inputType={"text"}
                            />
                        </Row>
                        <Row id={2}>
                            <InputField
                                label={"First Name"}
                                labelImports={true}
                                inputType={"text"}
                            />
                            <InputField
                                label={"Last Name"}
                                labelImports={true}
                                inputType={"text"}
                            />
                        </Row>
                        <InputField
                            label={"Company Name"}
                            labelImports={true}
                            inputType={"text"}
                        />
                        <InputField
                            label={"Phone Number"}
                            labelImports={true}
                            inputType={"text"}
                        />
                        <InputField
                            label={"Email"}
                            labelImports={true}
                            inputType={"text"}
                        />
                        <InputField
                            label={"Address"}
                            labelImports={true}
                            inputType={"text"}
                        />
                        <Button text={"Save Card"} />
                    </div>
                </PageContainer>
            </>
        );
    }
}
