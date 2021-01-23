import React, { Component } from "react";
//Api
import userAPI from "../utils/userAPI.js";
//import components
import { Section } from "../components/Section";
import { Header } from "../components/Header";
import { Logo } from "../components/Logo";
import { LeftSideMenu } from "../components/LeftSideMenu";
import { FloatShareButton } from "../components/FloatShareButton";
import { FloatShareSubButton } from "../components/FloatShareSubButton";
import { Search } from "../components/Search";
import { LoginPanel } from "../components/LoginPanel";
import { MenuItem } from "../components/MenuItem";
import { MenuSubItem } from "../components/MenuSubItem";
import { ContentPanel } from "../components/ContentPanel";
import { Row } from "../components/Row";

//import SVG
import FacebookMessenger from "../img/svg/facebook-messenger.svg";
import Skype from "../img/svg/skype.svg";
import Print from "../img/svg/print.svg";
import Bump from "../img/svg/bump-share.svg";
import Home from "../img/svg/home.svg";
import Lock from "../img/svg/lock.svg";
import Card from "../img/svg/credit-card.svg";
import Settings from "../img/svg/sliders.svg";
import Upload from "../img/svg/upload-cloud.svg";

export default class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuActivated: false,
            user: {},
        };
    }

    authenticateUser() {
        userAPI
            .authenticateUser()
            .then((res) => {
                if (res.status === 200) {
                    this.setState({ user: res.data });
                    this.props.onUserCallback(res.data);
                }
            })
            .catch(console.log);
    }

    componentDidMount() {
        this.authenticateUser();
    }

    render() {
        return (
            <div className="container-page">
                <Section>
                    <Header>
                        <Logo />
                        <Search
                            onSearchCallback={(search) =>
                                this.props.onSearchCallback(search)
                            }
                        />
                        <LoginPanel
                            user={this.state.user}
                            setUserCallback={(user) => {
                                this.setState({ user: user });
                                this.props.onUserCallback(user);
                            }}
                        />
                    </Header>
                    <Row id={1}>
                        <LeftSideMenu>
                            <MenuItem
                                icon={Home}
                                text={"Dashboard"}
                                route={"/"}
                            />
                            {this.state.user._id ? (
                                <>
                                    <MenuItem
                                        icon={Lock}
                                        text={"Account & Security"}
                                        route={"/accountandsecurity"}
                                    />
                                    <MenuItem
                                        icon={Card}
                                        text={"New Card"}
                                        isMenuActivated={
                                            this.state.isMenuActivated
                                        }
                                        setIsMenuActivated={(isMenuActivated) =>
                                            this.setState({ isMenuActivated })
                                        }
                                    >
                                        <MenuSubItem
                                            icon={Upload}
                                            text={"Upload"}
                                            isMenuActivated={
                                                this.state.isMenuActivated
                                            }
                                            route={"/cardupload"}
                                        />
                                    </MenuItem>
                                    <MenuItem
                                        icon={Settings}
                                        text={"Settings"}
                                        route={"/security"}
                                    />
                                </>
                            ) : (
                                ""
                            )}
                        </LeftSideMenu>
                        <ContentPanel>{this.props.children}</ContentPanel>
                    </Row>
                    <FloatShareButton>
                        <FloatShareSubButton
                            img={FacebookMessenger}
                            alt={"Share in Facebook messenger"}
                        />
                        <FloatShareSubButton
                            img={Skype}
                            alt={"Share in Skype"}
                        />
                        <FloatShareSubButton img={Print} alt={"Print card"} />
                        <FloatShareSubButton img={Bump} alt={"Share by bump"} />
                    </FloatShareButton>
                </Section>
            </div>
        );
    }
}
