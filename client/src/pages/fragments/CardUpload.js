import React, { Component } from "react";

import { PageHeader } from "../../components/PageHeader";
import { PageContainer } from "../../components/PageContainer";

export default class CardUpload extends Component {
    render() {
        return (
            <>
                <div className="d-header-container">
                    <PageHeader labelName={["Upload New Card"]} />
                    <PageContainer>
                        <div>Upload New Card</div>
                    </PageContainer>
                </div>
            </>
        );
    }
}
