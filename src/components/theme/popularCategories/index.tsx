import React, {Component} from "react";
import imageSourceUtil from "utils/imageSource.util";
import {Carousel} from "react-responsive-carousel";
import {PostGetManyResultDocument} from "types/services/post";
import {PagePropCommonDocument} from "types/pageProps";
import Image from "next/image";
import Slider from "react-slick";

type PageState = {};

type PageProps = {} & PagePropCommonDocument<{ sliders: PostGetManyResultDocument[] }>;

export default class ComponentThemePopularCategories extends Component<PageProps, PageState> {
    sliderRef = React.createRef<Slider>();

    constructor(props: PageProps) {
        super(props);
    }

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
            <section className="popular-categories section-padding mt-15 mb-25">
                <div className="container wow fadeIn animated">
                    <h3 className="section-title mb-20"><span>Popular</span> Categories</h3>
                    <div className="carausel-6-columns-cover position-relative">
                        <div className="slider-arrow slider-arrow-2 carausel-6-columns-arrow">
                            <span className="slider-btn slider-prev"><i className="fi-rs-angle-left"></i></span>
                            <span className="slider-btn slider-next"><i className="fi-rs-angle-right"></i></span>
                        </div>
                        <Slider className="carausel-6-columns" {...this.settings} ref={this.sliderRef} centerPadding="10px">
                            <div className="card-1">
                                <figure className="img-hover-scale overflow-hidden">
                                    <a href="shop-grid-right.html"><img src="assets/images/category-thumb-1.jpg" /></a>
                                </figure>
                                <h5><a href="shop-grid-right.html">T-Shirt</a></h5>
                            </div>
                            <div className="card-1">
                                <figure className=" img-hover-scale overflow-hidden">
                                    <a href="shop-grid-right.html"> <img src="assets/images/category-thumb-2.jpg" /></a>
                                </figure>
                                <h5><a href="shop-grid-right.html">Bags</a></h5>
                            </div>
                            <div className="card-1">
                                <figure className=" img-hover-scale overflow-hidden">
                                    <a href="shop-grid-right.html"><img src="assets/images/category-thumb-3.jpg" /></a>
                                </figure>
                                <h5><a href="shop-grid-right.html">Sandan</a></h5>
                            </div>
                            <div className="card-1">
                                <figure className=" img-hover-scale overflow-hidden">
                                    <a href="shop-grid-right.html"><img src="assets/images/category-thumb-4.jpg" /></a>
                                </figure>
                                <h5><a href="shop-grid-right.html">Scarf Cap</a></h5>
                            </div>
                            <div className="card-1">
                                <figure className=" img-hover-scale overflow-hidden">
                                    <a href="shop-grid-right.html"><img src="assets/images/category-thumb-5.jpg" /></a>
                                </figure>
                                <h5><a href="shop-grid-right.html">Shoes</a></h5>
                            </div>
                            <div className="card-1">
                                <figure className=" img-hover-scale overflow-hidden">
                                    <a href="shop-grid-right.html"><img src="assets/images/category-thumb-6.jpg" /></a>
                                </figure>
                                <h5><a href="shop-grid-right.html">Pillowcase</a></h5>
                            </div>
                            <div className="card-1">
                                <figure className=" img-hover-scale overflow-hidden">
                                    <a href="shop-grid-right.html"><img src="assets/images/category-thumb-7.jpg" /></a>
                                </figure>
                                <h5><a href="shop-grid-right.html">Jumpsuits</a></h5>
                            </div>
                            <div className="card-1">
                                <figure className=" img-hover-scale overflow-hidden">
                                    <a href="shop-grid-right.html"><img src="assets/images/category-thumb-8.jpg" /></a>
                                </figure>
                                <h5><a href="shop-grid-right.html">Hats</a></h5>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        );
    }
}
