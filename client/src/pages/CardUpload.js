import React, { Component } from "react";
import { Header } from "../components/Header";
import { UploadNewCard } from "../components/UploadNewCard";

export default class CardUpload extends Component {
    render() {
        return(
            <Header />,
            <UploadNewCard />
        )
        
    }
}
