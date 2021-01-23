import React, { Component } from "react";
//Api
import userAPI from "../../utils/userAPI.js";
import { ContentHeader } from "../../components/ContentHeader";
import { PageContainer } from "../../components/PageContainer";
import { Button } from "../../components/Button";
import { Label } from "../../components/Label";

export default class Settings extends Component {
    removeUserAccount = () => {
        userAPI
            .remove({
                id: `ObjectId(${this.props._id})`,
            })
            .then(() => {
                this.props.onUserCallback({});
            })
            .catch(console.log);
    };

    render() {
        return (
            <>
                <ContentHeader labelName={["Settings"]} />
                <PageContainer>
                    <div className="settings-page">
                        <Label text={"Delete Account"} isImpotent={true} />
                        <Button
                            text={"Delete"}
                            onClickEvent={this.removeUserAccount}
                        />
                    </div>
                </PageContainer>
            </>
        );
    }
}
