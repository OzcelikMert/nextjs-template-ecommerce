import React, {Component} from "react";
import imageSourceUtil from "utils/imageSource.util";
import {Carousel} from "react-responsive-carousel";
import {PostGetManyResultDocument} from "types/services/post";
import {PagePropCommonDocument} from "types/pageProps";
import Image from "next/image";
import Slider from "react-slick";

type PageState = {};

type PageProps = {} & PagePropCommonDocument<{ sliders: PostGetManyResultDocument[] }>;

export default class ComponentThemeFeaturedBrands extends Component<PageProps, PageState> {
    constructor(props: PageProps) {
        super(props);
    }
    sliderRef = React.createRef<Slider>();

    settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        arrows: false,
        autoplay: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        loop: true,
        adaptiveHeight: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ],
    };

    render() {
        return (
            <section className="section-padding">
                <div className="container">
                    <h3 className="section-title mb-20 wow fadeIn animated"><span>Featured</span> Brands</h3>
                    <div className="carausel-6-columns-cover position-relative wow fadeIn animated">
                        <div className="slider-arrow slider-arrow-2 carausel-6-columns-arrow">
                            <span className="slider-btn slider-prev"><i className="fi-rs-angle-left"></i></span>
                            <span className="slider-btn slider-next"><i className="fi-rs-angle-right"></i></span>
                        </div>
                        <Slider className="carausel-6-columns text-center" {...this.settings}>
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
                        </Slider>
                    </div>
                </div>
            </section>
        );
    }
}
