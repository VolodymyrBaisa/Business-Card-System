import React, { Component } from "react";
import { Header } from '../components/Header';
import { CreateAnAccount } from "../components/CreateAnAccount";

export default class AccountAndSecurity extends Component {
    render() {
        return(
            <Header />,
            <CreateAnAccount />
        )
    }
}
