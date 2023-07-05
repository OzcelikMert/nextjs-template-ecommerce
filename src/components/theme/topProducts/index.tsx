import React, {Component} from "react";
import imageSourceUtil from "utils/imageSource.util";
import {Carousel} from "react-responsive-carousel";
import {PostGetManyResultDocument} from "types/services/post";
import {PagePropCommonDocument} from "types/pageProps";
import Image from "next/image";

type PageState = {};

type PageProps = {} & PagePropCommonDocument<{ sliders: PostGetManyResultDocument[] }>;

export default class ComponentThemeTopProducts extends Component<PageProps, PageState> {
    constructor(props: PageProps) {
        super(props);
    }

    render() {
        return (
            <section className="mb-45">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-sm-5 mb-md-0">
                            <div className="banner-img wow fadeIn animated mb-md-4 mb-lg-0">
                                <img src="images/banner-10.jpg" />
                                    <div className="banner-text">
                                        <span>Shoes Zone</span>
                                        <h4>Save 17% on <br/>All Items</h4>
                                        <a href="shop-grid-right.html">Shop Now <i
                                            className="fi-rs-arrow-right"></i></a>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-sm-5 mb-md-0">
                            <h4 className="section-title style-1 mb-30 wow fadeIn animated">Deals & Outlet</h4>
                            <div className="product-list-small wow fadeIn animated">
                                <article className="row align-items-center">
                                    <figure className="col-md-4 mb-0">
                                        <a href="shop-product-right.html"><img src="images/thumbnail-3.jpg" /></a>
                                    </figure>
                                    <div className="col-md-8 mb-0">
                                        <h4 className="title-small">
                                            <a href="shop-product-right.html">Fish Print Patched T-shirt</a>
                                        </h4>
                                        <div className="product-price">
                                            <span>$238.85 </span>
                                            <span className="old-price">$245.8</span>
                                        </div>
                                    </div>
                                </article>
                                <article className="row align-items-center">
                                    <figure className="col-md-4 mb-0">
                                        <a href="shop-product-right.html"><img src="images/thumbnail-4.jpg" /></a>
                                    </figure>
                                    <div className="col-md-8 mb-0">
                                        <h4 className="title-small">
                                            <a href="shop-product-right.html">Vintage Floral Print Dress</a>
                                        </h4>
                                        <div className="product-price">
                                            <span>$238.85 </span>
                                            <span className="old-price">$245.8</span>
                                        </div>
                                    </div>
                                </article>
                                <article className="row align-items-center">
                                    <figure className="col-md-4 mb-0">
                                        <a href="shop-product-right.html"><img src="images/thumbnail-5.jpg" /></a>
                                    </figure>
                                    <div className="col-md-8 mb-0">
                                        <h4 className="title-small">
                                            <a href="shop-product-right.html">Multi-color Stripe Circle Print
                                                T-Shirt</a>
                                        </h4>
                                        <div className="product-price">
                                            <span>$238.85 </span>
                                            <span className="old-price">$245.8</span>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-sm-5 mb-md-0">
                            <h4 className="section-title style-1 mb-30 wow fadeIn animated">Top Selling</h4>
                            <div className="product-list-small wow fadeIn animated">
                                <article className="row align-items-center">
                                    <figure className="col-md-4 mb-0">
                                        <a href="shop-product-right.html"><img src="images/thumbnail-6.jpg" /></a>
                                    </figure>
                                    <div className="col-md-8 mb-0">
                                        <h4 className="title-small">
                                            <a href="shop-product-right.html">Geometric Printed Long Sleeve Blosue</a>
                                        </h4>
                                        <div className="product-price">
                                            <span>$238.85 </span>
                                            <span className="old-price">$245.8</span>
                                        </div>
                                    </div>
                                </article>
                                <article className="row align-items-center">
                                    <figure className="col-md-4 mb-0">
                                        <a href="shop-product-right.html"><img src="images/thumbnail-7.jpg" /></a>
                                    </figure>
                                    <div className="col-md-8 mb-0">
                                        <h4 className="title-small">
                                            <a href="shop-product-right.html">Print Patchwork Maxi Dress</a>
                                        </h4>
                                        <div className="product-price">
                                            <span>$238.85 </span>
                                            <span className="old-price">$245.8</span>
                                        </div>
                                    </div>
                                </article>
                                <article className="row align-items-center">
                                    <figure className="col-md-4 mb-0">
                                        <a href="shop-product-right.html"><img src="images/thumbnail-8.jpg" /></a>
                                    </figure>
                                    <div className="col-md-8 mb-0">
                                        <h4 className="title-small">
                                            <a href="shop-product-right.html">Daisy Floral Print Straps Jumpsuit</a>
                                        </h4>
                                        <div className="product-price">
                                            <span>$238.85 </span>
                                            <span className="old-price">$245.8</span>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="section-title style-1 mb-30 wow fadeIn animated">Hot Releases</h4>
                            <div className="product-list-small wow fadeIn animated">
                                <article className="row align-items-center">
                                    <figure className="col-md-4 mb-0">
                                        <a href="shop-product-right.html"><img src="images/thumbnail-9.jpg" /></a>
                                    </figure>
                                    <div className="col-md-8 mb-0">
                                        <h4 className="title-small">
                                            <a href="shop-product-right.html">Floral Print Casual Cotton Dress</a>
                                        </h4>
                                        <div className="product-price">
                                            <span>$238.85 </span>
                                            <span className="old-price">$245.8</span>
                                        </div>
                                    </div>
                                </article>
                                <article className="row align-items-center">
                                    <figure className="col-md-4 mb-0">
                                        <a href="shop-product-right.html"><img src="images/thumbnail-1.jpg" /></a>
                                    </figure>
                                    <div className="col-md-8 mb-0">
                                        <h4 className="title-small">
                                            <a href="shop-product-right.html">Ruffled Solid Long Sleeve Blouse</a>
                                        </h4>
                                        <div className="product-price">
                                            <span>$238.85 </span>
                                            <span className="old-price">$245.8</span>
                                        </div>
                                    </div>
                                </article>
                                <article className="row align-items-center">
                                    <figure className="col-md-4 mb-0">
                                        <a href="shop-product-right.html"><img src="images/thumbnail-2.jpg" /></a>
                                    </figure>
                                    <div className="col-md-8 mb-0">
                                        <h4 className="title-small">
                                            <a href="shop-product-right.html">Multi-color Print V-neck T-Shirt</a>
                                        </h4>
                                        <div className="product-price">
                                            <span>$238.85 </span>
                                            <span className="old-price">$245.8</span>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
