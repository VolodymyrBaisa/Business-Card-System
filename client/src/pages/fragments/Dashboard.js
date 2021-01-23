import React, { Component } from "react";
//Api
import cardAPI from "../../utils/cardAPI.js";

import { ContentHeader } from "../../components/ContentHeader";
import { PageContainer } from "../../components/PageContainer";
import { CardItem } from "../../components/CardItem";
import { OpenCard } from "../../components/OpenCard";

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: {},
            isCardOpen: false,
            bigImgUrl: "",
        };
        this.PUBLIC_URL =
            process.env.REACT_APP_API_URL || `http://localhost:3001`;
    }

    sortCards(cards) {
        const cardArray = { section: [] };
        cards.map((c) => {
            for (let i = 0; i < cardArray.section.length; i++) {
                if (cardArray.section[i].cardTags.includes(c.cardTags)) {
                    cardArray.section[i].img = [
                        ...cardArray.section[i].img,
                        c.img,
                    ];
                    return;
                }
            }
            cardArray.section.push({
                cardTags: c.cardTags,
                img: [c.img],
            });
        });

        this.setState({ cards: cardArray });
    }

    getAllCards() {
        cardAPI
            .all()
            .then((cards) => this.sortCards(cards.data))
            .catch(console.log);
    }

    async getAllUserCards() {
        if (this.props.user.cards) {
            const res = await Promise.all(
                this.props.user.cards.map(
                    async (card) => (await cardAPI.getById(card)).data[0]
                )
            );
            this.sortCards(res);
        }
    }

    componentDidMount() {
        !this.props.user._id ? this.getAllCards() : this.getAllUserCards();
    }

    render() {
        return (
            <>
                {this.state.cards.section ? (
                    this.state.cards.section.map((s) => {
                        return (
                            <>
                                <ContentHeader labelName={[s.cardTags]} />
                                <PageContainer>
                                    {s.img.map((img, index) => {
                                        return (
                                            <CardItem
                                                key={index}
                                                imgUrl={this.PUBLIC_URL + img}
                                                onClickCard={() => {
                                                    this.setState({
                                                        bigImgUrl:
                                                            this.PUBLIC_URL +
                                                            img,
                                                    });
                                                    this.setState({
                                                        isCardOpen: true,
                                                    });
                                                }}
                                            />
                                        );
                                    })}
                                </PageContainer>
                            </>
                        );
                    })
                ) : (
                    <></>
                )}

                {this.state.isCardOpen ? (
                    <OpenCard
                        setCard={this.state.bigImgUrl}
                        setIsCardOpen={(isCardOpen) =>
                            this.setState({ isCardOpen })
                        }
                    />
                ) : (
                    ""
                )}
            </>
        );
    }
}
