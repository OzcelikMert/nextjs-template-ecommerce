import React, {Component} from "react";
import imageSourceUtil from "utils/imageSource.util";
import {Carousel} from "react-responsive-carousel";
import {PostGetManyResultDocument} from "types/services/post";
import {PagePropCommonDocument} from "types/pageProps";
import Image from "next/image";

type PageState = {};

type PageProps = {} & PagePropCommonDocument<{ sliders: PostGetManyResultDocument[] }>;

export default class ComponentThemePopularCategories extends Component<PageProps, PageState> {
    constructor(props: PageProps) {
        super(props);
    }

    render() {
        return (
            <section className="popular-categories section-padding mt-15 mb-25">
                <div className="container wow fadeIn animated">
                    <h3 className="section-title mb-20"><span>Popular</span> Categories</h3>
                    <div className="carausel-6-columns-cover position-relative">
                        <div className="slider-arrow slider-arrow-2 carausel-6-columns-arrow"
                             id="carausel-6-columns-arrows"></div>
                        <div className="carausel-6-columns" id="carausel-6-columns">
                            <div className="card-1">
                                <figure className=" img-hover-scale overflow-hidden">
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
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
