import React, {Component} from "react";
import imageSourceUtil from "utils/imageSource.util";
import {Carousel} from "react-responsive-carousel";
import {PostGetManyResultDocument} from "types/services/post";
import {PagePropCommonDocument} from "types/pageProps";
import Image from "next/image";

type PageState = {};

type PageProps = {} & PagePropCommonDocument<{ sliders: PostGetManyResultDocument[] }>;

export default class ComponentThemeMonthlyBestSell extends Component<PageProps, PageState> {
    constructor(props: PageProps) {
        super(props);
    }

    render() {
        return (
            <section className="bg-grey-9 section-padding">
                <div className="container pt-25 pb-25">
                    <div className="heading-tab d-flex">
                        <div className="heading-tab-left wow fadeIn animated">
                            <h3 className="section-title mb-20"><span>Monthly</span> Best Sell</h3>
                        </div>
                        <div className="heading-tab-right wow fadeIn animated">
                            <ul className="nav nav-tabs right no-border" id="myTab-1" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="nav-tab-one-1" data-bs-toggle="tab"
                                            data-bs-target="#tab-one-1" type="button" role="tab" aria-controls="tab-one"
                                            aria-selected="true">Featured
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="nav-tab-two-1" data-bs-toggle="tab"
                                            data-bs-target="#tab-two-1" type="button" role="tab" aria-controls="tab-two"
                                            aria-selected="false">Popular
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="nav-tab-three-1" data-bs-toggle="tab"
                                            data-bs-target="#tab-three-1" type="button" role="tab"
                                            aria-controls="tab-three" aria-selected="false">New added
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 d-none d-lg-flex">
                            <div className="banner-img style-2 wow fadeIn animated">
                                <img src="images/banner-9.jpg" />
                                    <div className="banner-text">
                                        <span>Woman Area</span>
                                        <h4 className="mt-5">Save 17% on <br/>Clothing</h4>
                                        <a href="shop-grid-right.html" className="text-white">Shop Now <i
                                            className="fi-rs-arrow-right"></i></a>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-12">
                            <div className="tab-content wow fadeIn animated" id="myTabContent-1">
                                <div className="tab-pane fade show active" id="tab-one-1" role="tabpanel"
                                     aria-labelledby="tab-one-1">
                                    <div className="carausel-4-columns-cover arrow-center position-relative">
                                        <div className="slider-arrow slider-arrow-2 carausel-4-columns-arrow"
                                             id="carausel-4-columns-arrows"></div>
                                        <div className="carausel-4-columns carausel-arrow-center"
                                             id="carausel-4-columns">
                                            <div className="product-cart-wrap">
                                                <div className="product-img-action-wrap">
                                                    <div className="product-img product-img-zoom">
                                                        <a href="shop-product-right.html">
                                                            <img className="default-img" src="images/product-1-1.jpg"
                                                                 />
                                                                <img className="hover-img" src="images/product-1-2.jpg"
                                                                     />
                                                        </a>
                                                    </div>
                                                    <div className="product-action-1">
                                                        <a aria-label="Quick view" className="action-btn small hover-up"
                                                           data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                                            <i className="fi-rs-eye"></i></a>
                                                        <a aria-label="Add To Wishlist"
                                                           className="action-btn small hover-up"
                                                           href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                        <a aria-label="Compare" className="action-btn small hover-up"
                                                           href="shop-compare.html"><i
                                                            className="fi-rs-shuffle"></i></a>
                                                    </div>
                                                    <div
                                                        className="product-badges product-badges-position product-badges-mrg">
                                                        <span className="hot">Hot</span>
                                                    </div>
                                                </div>
                                                <div className="product-content-wrap">
                                                    <div className="product-category">
                                                        <a href="shop-grid-right.html">Nulla</a>
                                                    </div>
                                                    <h2><a href="shop-product-right.html">Maecenas eget</a></h2>
                                                    <div className="rating-result" title="90%">
                                                    <span>
                                                        <span>70%</span>
                                                    </span>
                                                    </div>
                                                    <div className="product-price">
                                                        <span>$238.85 </span>
                                                        <span className="old-price">$245.8</span>
                                                    </div>
                                                    <div className="product-action-1 show">
                                                        <a aria-label="Add To Cart" className="action-btn hover-up"
                                                           href="shop-cart.html"><i
                                                            className="fi-rs-shopping-bag-add"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-cart-wrap">
                                                <div className="product-img-action-wrap">
                                                    <div className="product-img product-img-zoom">
                                                        <a href="shop-product-right.html">
                                                            <img className="default-img" src="images/product-2-1.jpg"
                                                                 />
                                                                <img className="hover-img" src="images/product-2-2.jpg"
                                                                     />
                                                        </a>
                                                    </div>
                                                    <div className="product-action-1">
                                                        <a aria-label="Quick view" className="action-btn small hover-up"
                                                           data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                                            <i className="fi-rs-eye"></i></a>
                                                        <a aria-label="Add To Wishlist"
                                                           className="action-btn small hover-up"
                                                           href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                        <a aria-label="Compare" className="action-btn small hover-up"
                                                           href="shop-compare.html"><i
                                                            className="fi-rs-shuffle"></i></a>
                                                    </div>
                                                    <div
                                                        className="product-badges product-badges-position product-badges-mrg">
                                                        <span className="new">New</span>
                                                    </div>
                                                </div>
                                                <div className="product-content-wrap">
                                                    <div className="product-category">
                                                        <a href="shop-grid-right.html">Duis </a>
                                                    </div>
                                                    <h2><a href="shop-product-right.html">Luctus suscipit</a></h2>
                                                    <div className="rating-result" title="90%">
                                                    <span>
                                                        <span>70%</span>
                                                    </span>
                                                    </div>
                                                    <div className="product-price">
                                                        <span>$138.85 </span>
                                                        <span className="old-price">$145.8</span>
                                                    </div>
                                                    <div className="product-action-1 show">
                                                        <a aria-label="Add To Cart" className="action-btn hover-up"
                                                           href="shop-cart.html"><i
                                                            className="fi-rs-shopping-bag-add"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-cart-wrap">
                                                <div className="product-img-action-wrap">
                                                    <div className="product-img product-img-zoom">
                                                        <a href="shop-product-right.html">
                                                            <img className="default-img" src="images/product-3-1.jpg"
                                                                 />
                                                                <img className="hover-img" src="images/product-3-2.jpg"
                                                                     />
                                                        </a>
                                                    </div>
                                                    <div className="product-action-1">
                                                        <a aria-label="Quick view" className="action-btn small hover-up"
                                                           data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                                            <i className="fi-rs-eye"></i></a>
                                                        <a aria-label="Add To Wishlist"
                                                           className="action-btn small hover-up"
                                                           href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                        <a aria-label="Compare" className="action-btn small hover-up"
                                                           href="shop-compare.html"><i
                                                            className="fi-rs-shuffle"></i></a>
                                                    </div>
                                                    <div
                                                        className="product-badges product-badges-position product-badges-mrg">
                                                        <span className="best">Best Sell</span>
                                                    </div>
                                                </div>
                                                <div className="product-content-wrap">
                                                    <div className="product-category">
                                                        <a href="shop-grid-right.html">Fusce </a>
                                                    </div>
                                                    <h2><a href="shop-product-right.html">Aliquam ac</a></h2>
                                                    <div className="rating-result" title="90%">
                                                    <span>
                                                        <span>70%</span>
                                                    </span>
                                                    </div>
                                                    <div className="product-price">
                                                        <span>$152.85 </span>
                                                        <span className="old-price">$156.8</span>
                                                    </div>
                                                    <div className="product-action-1 show">
                                                        <a aria-label="Add To Cart" className="action-btn hover-up"
                                                           href="shop-cart.html"><i
                                                            className="fi-rs-shopping-bag-add"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-cart-wrap">
                                                <div className="product-img-action-wrap">
                                                    <div className="product-img product-img-zoom">
                                                        <a href="shop-product-right.html">
                                                            <img className="default-img" src="images/product-4-1.jpg"
                                                                 />
                                                                <img className="hover-img" src="images/product-4-2.jpg"
                                                                     />
                                                        </a>
                                                    </div>
                                                    <div className="product-action-1">
                                                        <a aria-label="Quick view" className="action-btn small hover-up"
                                                           data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                                            <i className="fi-rs-eye"></i></a>
                                                        <a aria-label="Add To Wishlist"
                                                           className="action-btn small hover-up"
                                                           href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                        <a aria-label="Compare" className="action-btn small hover-up"
                                                           href="shop-compare.html"><i
                                                            className="fi-rs-shuffle"></i></a>
                                                    </div>
                                                    <div
                                                        className="product-badges product-badges-position product-badges-mrg">
                                                        <span className="hot">-12%</span>
                                                    </div>
                                                </div>
                                                <div className="product-content-wrap">
                                                    <div className="product-category">
                                                        <a href="shop-grid-right.html">Nunc </a>
                                                    </div>
                                                    <h2><a href="shop-product-right.html">Fusce et ligula</a></h2>
                                                    <div className="rating-result" title="90%">
                                                    <span>
                                                        <span>70%</span>
                                                    </span>
                                                    </div>
                                                    <div className="product-price">
                                                        <span>$238.85 </span>
                                                        <span className="old-price">$245.8</span>
                                                    </div>
                                                    <div className="product-action-1 show">
                                                        <a aria-label="Add To Cart" className="action-btn hover-up"
                                                           href="shop-cart.html"><i
                                                            className="fi-rs-shopping-bag-add"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-cart-wrap">
                                                <div className="product-img-action-wrap">
                                                    <div className="product-img product-img-zoom">
                                                        <a href="shop-product-right.html">
                                                            <img className="default-img" src="images/product-11-1.jpg"
                                                                 />
                                                                <img className="hover-img" src="images/product-11-2.jpg"
                                                                     />
                                                        </a>
                                                    </div>
                                                    <div className="product-action-1">
                                                        <a aria-label="Quick view" className="action-btn small hover-up"
                                                           data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                                            <i className="fi-rs-eye"></i></a>
                                                        <a aria-label="Add To Wishlist"
                                                           className="action-btn small hover-up"
                                                           href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                        <a aria-label="Compare" className="action-btn small hover-up"
                                                           href="shop-compare.html"><i
                                                            className="fi-rs-shuffle"></i></a>
                                                    </div>
                                                    <div
                                                        className="product-badges product-badges-position product-badges-mrg">
                                                        <span className="sale">Sale</span>
                                                    </div>
                                                </div>
                                                <div className="product-content-wrap">
                                                    <div className="product-category">
                                                        <a href="shop-grid-right.html">Aliquam</a>
                                                    </div>
                                                    <h2><a href="shop-product-right.html">Morbi lacinia</a></h2>
                                                    <div className="rating-result" title="90%">
                                                    <span>
                                                        <span>70%</span>
                                                    </span>
                                                    </div>
                                                    <div className="product-price">
                                                        <span>$238.85 </span>
                                                        <span className="old-price">$245.8</span>
                                                    </div>
                                                    <div className="product-action-1 show">
                                                        <a aria-label="Add To Cart" className="action-btn hover-up"
                                                           href="shop-cart.html"><i
                                                            className="fi-rs-shopping-bag-add"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab-two-1" role="tabpanel"
                                     aria-labelledby="tab-two-1">
                                    <div className="carausel-4-columns-cover arrow-center position-relative">
                                        <div className="slider-arrow slider-arrow-2 carausel-4-columns-arrow"
                                             id="carausel-4-columns-2-arrows"></div>
                                        <div className="carausel-4-columns carausel-arrow-center"
                                             id="carausel-4-columns-2">
                                            <div className="product-cart-wrap">
                                                <div className="product-img-action-wrap">
                                                    <div className="product-img product-img-zoom">
                                                        <a href="shop-product-right.html">
                                                            <img className="default-img" src="images/product-6-1.jpg"
                                                                 />
                                                                <img className="hover-img" src="images/product-6-2.jpg"
                                                                     />
                                                        </a>
                                                    </div>
                                                    <div className="product-action-1">
                                                        <a aria-label="Quick view" className="action-btn small hover-up"
                                                           data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                                            <i className="fi-rs-eye"></i></a>
                                                        <a aria-label="Add To Wishlist"
                                                           className="action-btn small hover-up"
                                                           href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                        <a aria-label="Compare" className="action-btn small hover-up"
                                                           href="shop-compare.html"><i
                                                            className="fi-rs-shuffle"></i></a>
                                                    </div>
                                                    <div
                                                        className="product-badges product-badges-position product-badges-mrg">
                                                        <span className="hot">Hot</span>
                                                    </div>
                                                </div>
                                                <div className="product-content-wrap">
                                                    <div className="product-category">
                                                        <a href="shop-grid-right.html">Watch</a>
                                                    </div>
                                                    <h2><a href="shop-product-right.html">Cotton Leaf Printed 2</a></h2>
                                                    <div className="rating-result" title="90%">
                                                    <span>
                                                        <span>70%</span>
                                                    </span>
                                                    </div>
                                                    <div className="product-price">
                                                        <span>$238.85 </span>
                                                        <span className="old-price">$245.8</span>
                                                    </div>
                                                    <div className="product-action-1 show">
                                                        <a aria-label="Add To Cart" className="action-btn hover-up"
                                                           href="shop-cart.html"><i
                                                            className="fi-rs-shopping-bag-add"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-cart-wrap">
                                                <div className="product-img-action-wrap">
                                                    <div className="product-img product-img-zoom">
                                                        <a href="shop-product-right.html">
                                                            <img className="default-img" src="images/product-7-1.jpg"
                                                                 />
                                                                <img className="hover-img" src="images/product-7-2.jpg"
                                                                     />
                                                        </a>
                                                    </div>
                                                    <div className="product-action-1">
                                                        <a aria-label="Quick view" className="action-btn small hover-up"
                                                           data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                                            <i className="fi-rs-eye"></i></a>
                                                        <a aria-label="Add To Wishlist"
                                                           className="action-btn small hover-up"
                                                           href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                        <a aria-label="Compare" className="action-btn small hover-up"
                                                           href="shop-compare.html"><i
                                                            className="fi-rs-shuffle"></i></a>
                                                    </div>
                                                    <div
                                                        className="product-badges product-badges-position product-badges-mrg">
                                                        <span className="new">New</span>
                                                    </div>
                                                </div>
                                                <div className="product-content-wrap">
                                                    <div className="product-category">
                                                        <a href="shop-grid-right.html">Watch</a>
                                                    </div>
                                                    <h2><a href="shop-product-right.html">Smart Speaker</a></h2>
                                                    <div className="rating-result" title="90%">
                                                    <span>
                                                        <span>70%</span>
                                                    </span>
                                                    </div>
                                                    <div className="product-price">
                                                        <span>$138.85 </span>
                                                        <span className="old-price">$145.8</span>
                                                    </div>
                                                    <div className="product-action-1 show">
                                                        <a aria-label="Add To Cart" className="action-btn hover-up"
                                                           href="shop-cart.html"><i
                                                            className="fi-rs-shopping-bag-add"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-cart-wrap">
                                                <div className="product-img-action-wrap">
                                                    <div className="product-img product-img-zoom">
                                                        <a href="shop-product-right.html">
                                                            <img className="default-img" src="images/product-5-1.jpg"
                                                                 />
                                                                <img className="hover-img" src="images/product-5-1.jpg"
                                                                     />
                                                        </a>
                                                    </div>
                                                    <div className="product-action-1">
                                                        <a aria-label="Quick view" className="action-btn small hover-up"
                                                           data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                                            <i className="fi-rs-eye"></i></a>
                                                        <a aria-label="Add To Wishlist"
                                                           className="action-btn small hover-up"
                                                           href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                        <a aria-label="Compare" className="action-btn small hover-up"
                                                           href="shop-compare.html"><i
                                                            className="fi-rs-shuffle"></i></a>
                                                    </div>
                                                    <div
                                                        className="product-badges product-badges-position product-badges-mrg">
                                                        <span className="best">Best Sell</span>
                                                    </div>
                                                </div>
                                                <div className="product-content-wrap">
                                                    <div className="product-category">
                                                        <a href="shop-grid-right.html">Watch</a>
                                                    </div>
                                                    <h2><a href="shop-product-right.html">Hugy Speaker</a></h2>
                                                    <div className="rating-result" title="90%">
                                                    <span>
                                                        <span>70%</span>
                                                    </span>
                                                    </div>
                                                    <div className="product-price">
                                                        <span>$152.85 </span>
                                                        <span className="old-price">$156.8</span>
                                                    </div>
                                                    <div className="product-action-1 show">
                                                        <a aria-label="Add To Cart" className="action-btn hover-up"
                                                           href="shop-cart.html"><i
                                                            className="fi-rs-shopping-bag-add"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-cart-wrap">
                                                <div className="product-img-action-wrap">
                                                    <div className="product-img product-img-zoom">
                                                        <a href="shop-product-right.html">
                                                            <img className="default-img" src="images/product-10-1.jpg"
                                                                 />
                                                                <img className="hover-img" src="images/product-10-2.jpg"
                                                                     />
                                                        </a>
                                                    </div>
                                                    <div className="product-action-1">
                                                        <a aria-label="Quick view" className="action-btn small hover-up"
                                                           data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                                            <i className="fi-rs-eye"></i></a>
                                                        <a aria-label="Add To Wishlist"
                                                           className="action-btn small hover-up"
                                                           href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                        <a aria-label="Compare" className="action-btn small hover-up"
                                                           href="shop-compare.html"><i
                                                            className="fi-rs-shuffle"></i></a>
                                                    </div>
                                                    <div
                                                        className="product-badges product-badges-position product-badges-mrg">
                                                        <span className="hot">-12%</span>
                                                    </div>
                                                </div>
                                                <div className="product-content-wrap">
                                                    <div className="product-category">
                                                        <a href="shop-grid-right.html">Watch</a>
                                                    </div>
                                                    <h2><a href="shop-product-right.html">Smart Speaker</a></h2>
                                                    <div className="rating-result" title="90%">
                                                    <span>
                                                        <span>70%</span>
                                                    </span>
                                                    </div>
                                                    <div className="product-price">
                                                        <span>$238.85 </span>
                                                        <span className="old-price">$245.8</span>
                                                    </div>
                                                    <div className="product-action-1 show">
                                                        <a aria-label="Add To Cart" className="action-btn hover-up"
                                                           href="shop-cart.html"><i
                                                            className="fi-rs-shopping-bag-add"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-cart-wrap">
                                                <div className="product-img-action-wrap">
                                                    <div className="product-img product-img-zoom">
                                                        <a href="shop-product-right.html">
                                                            <img className="default-img" src="images/product-12-1.jpg"
                                                                 />
                                                                <img className="hover-img" src="images/product-12-2.jpg"
                                                                     />
                                                        </a>
                                                    </div>
                                                    <div className="product-action-1">
                                                        <a aria-label="Quick view" className="action-btn small hover-up"
                                                           data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                                            <i className="fi-rs-eye"></i></a>
                                                        <a aria-label="Add To Wishlist"
                                                           className="action-btn small hover-up"
                                                           href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                        <a aria-label="Compare" className="action-btn small hover-up"
                                                           href="shop-compare.html"><i
                                                            className="fi-rs-shuffle"></i></a>
                                                    </div>
                                                    <div
                                                        className="product-badges product-badges-position product-badges-mrg">
                                                        <span className="sale">Sale</span>
                                                    </div>
                                                </div>
                                                <div className="product-content-wrap">
                                                    <div className="product-category">
                                                        <a href="shop-grid-right.html">Watch</a>
                                                    </div>
                                                    <h2><a href="shop-product-right.html">Cotton Leaf Printed</a></h2>
                                                    <div className="rating-result" title="90%">
                                                    <span>
                                                        <span>70%</span>
                                                    </span>
                                                    </div>
                                                    <div className="product-price">
                                                        <span>$238.85 </span>
                                                        <span className="old-price">$245.8</span>
                                                    </div>
                                                    <div className="product-action-1 show">
                                                        <a aria-label="Add To Cart" className="action-btn hover-up"
                                                           href="shop-cart.html"><i
                                                            className="fi-rs-shopping-bag-add"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab-three-1" role="tabpanel"
                                     aria-labelledby="tab-three-1">
                                    <div className="carausel-4-columns-cover arrow-center position-relative">
                                        <div className="slider-arrow slider-arrow-2 carausel-4-columns-arrow"
                                             id="carausel-4-columns-3-arrows"></div>
                                        <div className="carausel-4-columns carausel-arrow-center"
                                             id="carausel-4-columns-3">
                                            <div className="product-cart-wrap">
                                                <div className="product-img-action-wrap">
                                                    <div className="product-img product-img-zoom">
                                                        <a href="shop-product-right.html">
                                                            <img className="default-img" src="images/product-8-1.jpg"
                                                                 />
                                                                <img className="hover-img" src="images/product-8-2.jpg"
                                                                     />
                                                        </a>
                                                    </div>
                                                    <div className="product-action-1">
                                                        <a aria-label="Quick view" className="action-btn small hover-up"
                                                           data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                                            <i className="fi-rs-eye"></i></a>
                                                        <a aria-label="Add To Wishlist"
                                                           className="action-btn small hover-up"
                                                           href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                        <a aria-label="Compare" className="action-btn small hover-up"
                                                           href="shop-compare.html"><i
                                                            className="fi-rs-shuffle"></i></a>
                                                    </div>
                                                    <div
                                                        className="product-badges product-badges-position product-badges-mrg">
                                                        <span className="hot">Hot</span>
                                                    </div>
                                                </div>
                                                <div className="product-content-wrap">
                                                    <div className="product-category">
                                                        <a href="shop-grid-right.html">Watch</a>
                                                    </div>
                                                    <h2><a href="shop-product-right.html">Cotton Leaf Printed</a></h2>
                                                    <div className="rating-result" title="90%">
                                                    <span>
                                                        <span>70%</span>
                                                    </span>
                                                    </div>
                                                    <div className="product-price">
                                                        <span>$238.85 </span>
                                                        <span className="old-price">$245.8</span>
                                                    </div>
                                                    <div className="product-action-1 show">
                                                        <a aria-label="Add To Cart" className="action-btn hover-up"
                                                           href="shop-cart.html"><i
                                                            className="fi-rs-shopping-bag-add"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-cart-wrap">
                                                <div className="product-img-action-wrap">
                                                    <div className="product-img product-img-zoom">
                                                        <a href="shop-product-right.html">
                                                            <img className="default-img" src="images/product-13-1.jpg"
                                                                 />
                                                                <img className="hover-img" src="images/product-13-2.jpg"
                                                                     />
                                                        </a>
                                                    </div>
                                                    <div className="product-action-1">
                                                        <a aria-label="Quick view" className="action-btn small hover-up"
                                                           data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                                            <i className="fi-rs-eye"></i></a>
                                                        <a aria-label="Add To Wishlist"
                                                           className="action-btn small hover-up"
                                                           href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                        <a aria-label="Compare" className="action-btn small hover-up"
                                                           href="shop-compare.html"><i
                                                            className="fi-rs-shuffle"></i></a>
                                                    </div>
                                                    <div
                                                        className="product-badges product-badges-position product-badges-mrg">
                                                        <span className="new">New</span>
                                                    </div>
                                                </div>
                                                <div className="product-content-wrap">
                                                    <div className="product-category">
                                                        <a href="shop-grid-right.html">Watch</a>
                                                    </div>
                                                    <h2><a href="shop-product-right.html">Smart Speaker</a></h2>
                                                    <div className="rating-result" title="90%">
                                                    <span>
                                                        <span>70%</span>
                                                    </span>
                                                    </div>
                                                    <div className="product-price">
                                                        <span>$138.85 </span>
                                                        <span className="old-price">$145.8</span>
                                                    </div>
                                                    <div className="product-action-1 show">
                                                        <a aria-label="Add To Cart" className="action-btn hover-up"
                                                           href="shop-cart.html"><i
                                                            className="fi-rs-shopping-bag-add"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-cart-wrap">
                                                <div className="product-img-action-wrap">
                                                    <div className="product-img product-img-zoom">
                                                        <a href="shop-product-right.html">
                                                            <img className="default-img" src="images/product-14-1.jpg"
                                                                 />
                                                                <img className="hover-img" src="images/product-14-2.jpg"
                                                                     />
                                                        </a>
                                                    </div>
                                                    <div className="product-action-1">
                                                        <a aria-label="Quick view" className="action-btn small hover-up"
                                                           data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                                            <i className="fi-rs-eye"></i></a>
                                                        <a aria-label="Add To Wishlist"
                                                           className="action-btn small hover-up"
                                                           href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                        <a aria-label="Compare" className="action-btn small hover-up"
                                                           href="shop-compare.html"><i
                                                            className="fi-rs-shuffle"></i></a>
                                                    </div>
                                                    <div
                                                        className="product-badges product-badges-position product-badges-mrg">
                                                        <span className="best">Best Sell</span>
                                                    </div>
                                                </div>
                                                <div className="product-content-wrap">
                                                    <div className="product-category">
                                                        <a href="shop-grid-right.html">Watch</a>
                                                    </div>
                                                    <h2><a href="shop-product-right.html">Hugy Speaker</a></h2>
                                                    <div className="rating-result" title="90%">
                                                    <span>
                                                        <span>70%</span>
                                                    </span>
                                                    </div>
                                                    <div className="product-price">
                                                        <span>$152.85 </span>
                                                        <span className="old-price">$156.8</span>
                                                    </div>
                                                    <div className="product-action-1 show">
                                                        <a aria-label="Add To Cart" className="action-btn hover-up"
                                                           href="shop-cart.html"><i
                                                            className="fi-rs-shopping-bag-add"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-cart-wrap">
                                                <div className="product-img-action-wrap">
                                                    <div className="product-img product-img-zoom">
                                                        <a href="shop-product-right.html">
                                                            <img className="default-img" src="images/product-15-1.jpg"
                                                                 />
                                                                <img className="hover-img" src="images/product-15-2.jpg"
                                                                     />
                                                        </a>
                                                    </div>
                                                    <div className="product-action-1">
                                                        <a aria-label="Quick view" className="action-btn small hover-up"
                                                           data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                                            <i className="fi-rs-eye"></i></a>
                                                        <a aria-label="Add To Wishlist"
                                                           className="action-btn small hover-up"
                                                           href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                        <a aria-label="Compare" className="action-btn small hover-up"
                                                           href="shop-compare.html"><i
                                                            className="fi-rs-shuffle"></i></a>
                                                    </div>
                                                    <div
                                                        className="product-badges product-badges-position product-badges-mrg">
                                                        <span className="hot">-12%</span>
                                                    </div>
                                                </div>
                                                <div className="product-content-wrap">
                                                    <div className="product-category">
                                                        <a href="shop-grid-right.html">Watch</a>
                                                    </div>
                                                    <h2><a href="shop-product-right.html">Smart Speaker</a></h2>
                                                    <div className="rating-result" title="90%">
                                                    <span>
                                                        <span>70%</span>
                                                    </span>
                                                    </div>
                                                    <div className="product-price">
                                                        <span>$238.85 </span>
                                                        <span className="old-price">$245.8</span>
                                                    </div>
                                                    <div className="product-action-1 show">
                                                        <a aria-label="Add To Cart" className="action-btn hover-up"
                                                           href="shop-cart.html"><i
                                                            className="fi-rs-shopping-bag-add"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-cart-wrap">
                                                <div className="product-img-action-wrap">
                                                    <div className="product-img product-img-zoom">
                                                        <a href="shop-product-right.html">
                                                            <img className="default-img" src="images/product-11-1.jpg"/>
                                                                <img className="hover-img" src="images/product-11-2.jpg"/>
                                                        </a>
                                                    </div>
                                                    <div className="product-action-1">
                                                        <a aria-label="Quick view" className="action-btn small hover-up"
                                                           data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                                            <i className="fi-rs-eye"></i></a>
                                                        <a aria-label="Add To Wishlist"
                                                           className="action-btn small hover-up"
                                                           href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                        <a aria-label="Compare" className="action-btn small hover-up"
                                                           href="shop-compare.html"><i
                                                            className="fi-rs-shuffle"></i></a>
                                                    </div>
                                                    <div
                                                        className="product-badges product-badges-position product-badges-mrg">
                                                        <span className="sale">Sale</span>
                                                    </div>
                                                </div>
                                                <div className="product-content-wrap">
                                                    <div className="product-category">
                                                        <a href="shop-grid-right.html">Watch</a>
                                                    </div>
                                                    <h2><a href="shop-product-right.html">Cotton Leaf Printed</a></h2>
                                                    <div className="rating-result" title="90%">
                                                    <span>
                                                        <span>70%</span>
                                                    </span>
                                                    </div>
                                                    <div className="product-price">
                                                        <span>$238.85 </span>
                                                        <span className="old-price">$245.8</span>
                                                    </div>
                                                    <div className="product-action-1 show">
                                                        <a aria-label="Add To Cart" className="action-btn hover-up"
                                                           href="shop-cart.html"><i
                                                            className="fi-rs-shopping-bag-add"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
