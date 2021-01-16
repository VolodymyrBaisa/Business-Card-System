import React, { Component } from "react";

import { PageHeader } from "../../components/PageHeader";
import { PageContainer } from "../../components/PageContainer";

export default class Settings extends Component {
    render() {
        return (
            <>
                <div className="d-header-container">
                    <PageHeader labelName={["Settings"]} />
                    <PageContainer>
                        <div>Settings</div>
                    </PageContainer>
                </div>
            </>
        );
    }
}
