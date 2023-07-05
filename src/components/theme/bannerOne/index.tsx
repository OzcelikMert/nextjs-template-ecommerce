import React, {Component} from "react";
import imageSourceUtil from "utils/imageSource.util";
import {Carousel} from "react-responsive-carousel";
import {PostGetManyResultDocument} from "types/services/post";
import {PagePropCommonDocument} from "types/pageProps";
import Image from "next/image";

type PageState = {};

type PageProps = {} & PagePropCommonDocument<{ sliders: PostGetManyResultDocument[] }>;

export default class ComponentThemeBannerOne extends Component<PageProps, PageState> {
    constructor(props: PageProps) {
        super(props);
    }

    render() {
        return (
            <section className="banner-2 section-padding pb-0">
                <div className="container">
                    <div className="banner-img banner-big wow fadeIn animated f-none">
                        <img src="images/banner-4.png" />
                            <div className="banner-text d-md-block d-none">
                                <h4 className="mb-15 mt-40 text-brand">Repair Services</h4>
                                <h1 className="fw-600 mb-20">We're an Apple <br/>Authorised Service Provider</h1>
                                <a href="shop-grid-right.html" className="btn">Learn More <i className="fi-rs-arrow-right"></i></a>
                            </div>
                    </div>
                </div>
            </section>
        );
    }
}
