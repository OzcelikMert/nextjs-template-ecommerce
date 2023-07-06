import React, {Component} from "react";
import imageSourceUtil from "utils/imageSource.util";
import {Carousel} from "react-responsive-carousel";
import {PostGetManyResultDocument} from "types/services/post";
import {PagePropCommonDocument} from "types/pageProps";
import Image from "next/image";

type PageState = {};

type PageProps = {} & PagePropCommonDocument<{ sliders: PostGetManyResultDocument[] }>;

export default class ComponentThemeDeals extends Component<PageProps, PageState> {
    constructor(props: PageProps) {
        super(props);
    }

    render() {
        return (
            <section className="deals section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 deal-co">
                            <div className="deal wow fadeIn animated mb-md-4 mb-sm-4 mb-lg-0"
                                 style={{backgroundImage: "url(&#x27;assets/images/menu-banner-7.jpg&#x27;)"}}>
                                <div className="deal-top">
                                    <h2 className="text-brand">Deal of the Day</h2>
                                    <h5>Limited quantities.</h5>
                                </div>
                                <div className="deal-content">
                                    <h6 className="product-title"><a href="shop-product-right.html">Summer Collection
                                        New Morden Design</a></h6>
                                    <div className="product-price"><span className="new-price">$139.00</span><span
                                        className="old-price">$160.99</span></div>
                                </div>
                                <div className="deal-bottom">
                                    <p>Hurry Up! Offer End In:</p>
                                    <div className="deals-countdown" data-countdown="2025/03/25 00:00:00"></div>
                                    <a href="shop-grid-right.html" className="btn hover-up">Shop Now <i
                                        className="fi-rs-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 deal-co">
                            <div className="deal wow fadeIn animated"
                                 style={{backgroundImage: "url(&#x27;assets/images/menu-banner-8.jpg&#x27;)"}}>
                                <div className="deal-top">
                                    <h2 className="text-brand">Men Clothing</h2>
                                    <h5>Shirt & Bag</h5>
                                </div>
                                <div className="deal-content">
                                    <h6 className="product-title"><a href="shop-product-right.html">Try something new on
                                        vacation</a></h6>
                                    <div className="product-price"><span className="new-price">$178.00</span><span
                                        className="old-price">$256.99</span></div>
                                </div>
                                <div className="deal-bottom">
                                    <p>Hurry Up! Offer End In:</p>
                                    <div className="deals-countdown" data-countdown="2026/03/25 00:00:00"></div>
                                    <a href="shop-grid-right.html" className="btn hover-up">Shop Now <i
                                        className="fi-rs-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
