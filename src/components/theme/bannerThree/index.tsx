import React, {Component} from "react";
import imageSourceUtil from "utils/imageSource.util";
import {Carousel} from "react-responsive-carousel";
import {PostGetManyResultDocument} from "types/services/post";
import {PagePropCommonDocument} from "types/pageProps";
import Image from "next/image";

type PageState = {};

type PageProps = {} & PagePropCommonDocument<{ sliders: PostGetManyResultDocument[] }>;

export default class ComponentThemeBannerThree extends Component<PageProps, PageState> {
    constructor(props: PageProps) {
        super(props);
    }

    render() {
        return (
            <section className="banners mb-15">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="banner-img wow fadeIn animated">
                                <img src="assets/images/banner-1.png" />
                                    <div className="banner-text">
                                        <span>Smart Offer</span>
                                        <h4>Save 20% on <br/>Woman Bag</h4>
                                        <a href="shop-grid-right.html">Shop Now <i
                                            className="fi-rs-arrow-right"></i></a>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="banner-img wow fadeIn animated">
                                <img src="assets/images/banner-2.png" />
                                    <div className="banner-text">
                                        <span>Sale off</span>
                                        <h4>Great Summer <br/>Collection</h4>
                                        <a href="shop-grid-right.html">Shop Now <i
                                            className="fi-rs-arrow-right"></i></a>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 d-md-none d-lg-flex">
                            <div className="banner-img wow fadeIn animated  mb-sm-0">
                                <img src="assets/images/banner-3.png" />
                                    <div className="banner-text">
                                        <span>New Arrivals</span>
                                        <h4>Shop Today’s <br/>Deals & Offers</h4>
                                        <a href="shop-grid-right.html">Shop Now <i
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
