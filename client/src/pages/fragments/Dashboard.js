import React, { Component } from "react";

import { PageHeader } from "../../components/PageHeader";
import { PageContainer } from "../../components/PageContainer";

export default class Dashboard extends Component {
    render() {
        return (
            <>
                <div className="d-header-container">
                    <PageHeader labelName={["My Cards"]} />
                    <PageContainer>
                        <div>Card</div>
                    </PageContainer>
                </div>

                <div className="d-header-container">
                    <PageHeader labelName={["Home, Plumbers"]} />
                    <PageContainer>
                        <div>Card</div>
                    </PageContainer>
                </div>
            </>
        );
    }
}
