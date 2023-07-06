import React, {Component} from "react";
import imageSourceUtil from "utils/imageSource.util";
import {Carousel} from "react-responsive-carousel";
import {PostGetManyResultDocument} from "types/services/post";
import {PagePropCommonDocument} from "types/pageProps";
import Image from "next/image";

type PageState = {};

type PageProps = {} & PagePropCommonDocument<{ sliders: PostGetManyResultDocument[] }>;

export default class ComponentThemeFeatures extends Component<PageProps, PageState> {
    constructor(props: PageProps) {
        super(props);
    }

    render() {
        return (
            <section className="featured section-padding position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
                            <div className="banner-features wow fadeIn animated hover-up">
                                <img src="assets/images/feature-1.png" />
                                    <h4 className="bg-1">Free Shipping</h4>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
                            <div className="banner-features wow fadeIn animated hover-up">
                                <img src="assets/images/feature-2.png" />
                                    <h4 className="bg-3">Online Order</h4>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
                            <div className="banner-features wow fadeIn animated hover-up">
                                <img src="assets/images/feature-3.png" />
                                    <h4 className="bg-2">Save Money</h4>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
                            <div className="banner-features wow fadeIn animated hover-up">
                                <img src="assets/images/feature-4.png" />
                                    <h4 className="bg-4">Promotions</h4>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
                            <div className="banner-features wow fadeIn animated hover-up">
                                <img src="assets/images/feature-5.png" />
                                    <h4 className="bg-5">Happy Sell</h4>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
                            <div className="banner-features wow fadeIn animated hover-up">
                                <img src="assets/images/feature-6.png" />
                                    <h4 className="bg-6">24/7 Support</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
