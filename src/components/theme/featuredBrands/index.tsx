import React, {Component} from "react";
import imageSourceUtil from "utils/imageSource.util";
import {Carousel} from "react-responsive-carousel";
import {PostGetManyResultDocument} from "types/services/post";
import {PagePropCommonDocument} from "types/pageProps";
import Image from "next/image";

type PageState = {};

type PageProps = {} & PagePropCommonDocument<{ sliders: PostGetManyResultDocument[] }>;

export default class ComponentThemeFeaturedBrands extends Component<PageProps, PageState> {
    constructor(props: PageProps) {
        super(props);
    }

    render() {
        return (
            <section className="section-padding">
                <div className="container">
                    <h3 className="section-title mb-20 wow fadeIn animated"><span>Featured</span> Brands</h3>
                    <div className="carausel-6-columns-cover position-relative wow fadeIn animated">
                        <div className="slider-arrow slider-arrow-2 carausel-6-columns-arrow"
                             id="carausel-6-columns-3-arrows"></div>
                        <div className="carausel-6-columns text-center" id="carausel-6-columns-3">
                            <div className="brand-logo">
                                <img className="img-grey-hover" src="assets/images/brand-1.png" />
                            </div>
                            <div className="brand-logo">
                                <img className="img-grey-hover" src="assets/images/brand-2.png" />
                            </div>
                            <div className="brand-logo">
                                <img className="img-grey-hover" src="assets/images/brand-3.png" />
                            </div>
                            <div className="brand-logo">
                                <img className="img-grey-hover" src="assets/images/brand-4.png" />
                            </div>
                            <div className="brand-logo">
                                <img className="img-grey-hover" src="assets/images/brand-5.png" />
                            </div>
                            <div className="brand-logo">
                                <img className="img-grey-hover" src="assets/images/brand-6.png" />
                            </div>
                            <div className="brand-logo">
                                <img className="img-grey-hover" src="assets/images/brand-3.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
