import React, {Component} from "react";
import imageSourceUtil from "utils/imageSource.util";
import {Carousel} from "react-responsive-carousel";
import {PostGetManyResultDocument} from "types/services/post";
import {PagePropCommonDocument} from "types/pageProps";
import Image from "next/image";

type PageState = {};

type PageProps = {} & PagePropCommonDocument<{ sliders: PostGetManyResultDocument[] }>;

export default class ComponentThemeBannerTwo extends Component<PageProps, PageState> {
    constructor(props: PageProps) {
        super(props);
    }

    render() {
        return (
            <section className="mb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="banner-bg wow fadeIn animated"
                                 style={{backgroundImage: "url(assets/images/banner-8.jpg)"}}>
                                <div className="banner-content">
                                    <h5 className="text-grey-4 mb-15">Shop Today’s Deals</h5>
                                    <h2 className="fw-600">Happy <span className="text-brand">Mother's Day</span>. Big
                                        Sale Up to 40%</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
