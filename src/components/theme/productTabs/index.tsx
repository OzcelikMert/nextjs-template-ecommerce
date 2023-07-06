import React, {Component} from "react";
import imageSourceUtil from "utils/imageSource.util";
import {Carousel} from "react-responsive-carousel";
import {PostGetManyResultDocument} from "types/services/post";
import {PagePropCommonDocument} from "types/pageProps";
import Image from "next/image";

type PageState = {};

type PageProps = {} & PagePropCommonDocument<{ sliders: PostGetManyResultDocument[] }>;

export default class ComponentThemeProductTabs extends Component<PageProps, PageState> {
    constructor(props: PageProps) {
        super(props);
    }

    render() {
        return (
            <section className="product-tabs section-padding position-relative wow fadeIn animated">
                <div className="bg-square"></div>
                <div className="container">
                    <div className="tab-header">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="nav-tab-one" data-bs-toggle="tab"
                                        data-bs-target="#tab-one" type="button" role="tab" aria-controls="tab-one"
                                        aria-selected="true">Featured
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="nav-tab-two" data-bs-toggle="tab"
                                        data-bs-target="#tab-two" type="button" role="tab" aria-controls="tab-two"
                                        aria-selected="false">Popular
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="nav-tab-three" data-bs-toggle="tab"
                                        data-bs-target="#tab-three" type="button" role="tab" aria-controls="tab-three"
                                        aria-selected="false">New added
                                </button>
                            </li>
                        </ul>
                        <a href="#" className="view-more d-none d-md-flex">View More<i
                            className="fi-rs-angle-double-small-right"></i></a>
                    </div>
                    <div className="tab-content wow fadeIn animated" id="myTabContent">
                        <div className="tab-pane fade show active" id="tab-one" role="tabpanel"
                             aria-labelledby="tab-one">
                            <div className="row product-grid-4">
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <a href="shop-product-right.html">
                                                    <img className="default-img" src="assets/images/product-1-1.jpg" />
                                                        <img className="hover-img" src="assets/images/product-1-2.jpg" />
                                                </a>
                                            </div>
                                            <div className="product-action-1">
                                                <a aria-label="Quick view" className="action-btn hover-up"
                                                   data-bs-toggle="modal" data-bs-target="#quickViewModal"><i
                                                    className="fi-rs-eye"></i></a>
                                                <a aria-label="Add To Wishlist" className="action-btn hover-up"
                                                   href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                <a aria-label="Compare" className="action-btn hover-up"
                                                   href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="hot">Hot</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <a href="shop-grid-right.html">Clothing</a>
                                            </div>
                                            <h2><a href="shop-product-right.html">Colorful Pattern Shirts</a></h2>
                                            <div className="rating-result" title="90%">
                                            <span>
                                                <span>90%</span>
                                            </span>
                                            </div>
                                            <div className="product-price">
                                                <span>$238.85 </span>
                                                <span className="old-price">$245.8</span>
                                            </div>
                                            <div className="product-action-1 show">
                                                <a aria-label="Add To Cart" className="action-btn hover-up"
                                                   href="shop-cart.html"><i className="fi-rs-shopping-bag-add"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <a href="shop-product-right.html">
                                                    <img className="default-img" src="assets/images/product-2-1.jpg" />
                                                        <img className="hover-img" src="assets/images/product-2-2.jpg" />
                                                </a>
                                            </div>
                                            <div className="product-action-1">
                                                <a aria-label="Quick view" className="action-btn hover-up"
                                                   data-bs-toggle="modal" data-bs-target="#quickViewModal"><i
                                                    className="fi-rs-eye"></i></a>
                                                <a aria-label="Add To Wishlist" className="action-btn hover-up"
                                                   href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                <a aria-label="Compare" className="action-btn hover-up"
                                                   href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="new">New</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <a href="shop-grid-right.html">Clothing</a>
                                            </div>
                                            <h2><a href="shop-product-right.html">Plain Color Pocket Shirts</a></h2>
                                            <div className="rating-result" title="90%">
                                            <span>
                                                <span>50%</span>
                                            </span>
                                            </div>
                                            <div className="product-price">
                                                <span>$138.85 </span>
                                                <span className="old-price">$255.8</span>
                                            </div>
                                            <div className="product-action-1 show">
                                                <a aria-label="Add To Cart" className="action-btn hover-up"
                                                   href="shop-cart.html"><i className="fi-rs-shopping-bag-add"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <a href="shop-product-right.html">
                                                    <img className="default-img" src="assets/images/product-3-1.jpg" />
                                                        <img className="hover-img" src="assets/images/product-3-2.jpg" />
                                                </a>
                                            </div>
                                            <div className="product-action-1">
                                                <a aria-label="Quick view" className="action-btn hover-up"
                                                   data-bs-toggle="modal" data-bs-target="#quickViewModal"><i
                                                    className="fi-rs-eye"></i></a>
                                                <a aria-label="Add To Wishlist" className="action-btn hover-up"
                                                   href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                <a aria-label="Compare" className="action-btn hover-up"
                                                   href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="best">Best Sell</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <a href="shop-grid-right.html">Shirts</a>
                                            </div>
                                            <h2><a href="shop-product-right.html">Vintage Floral Oil Shirts</a></h2>
                                            <div className="rating-result" title="90%">
                                            <span>
                                                <span>95%</span>
                                            </span>
                                            </div>
                                            <div className="product-price">
                                                <span>$338.85 </span>
                                                <span className="old-price">$445.8</span>
                                            </div>
                                            <div className="product-action-1 show">
                                                <a aria-label="Add To Cart" className="action-btn hover-up"
                                                   href="shop-cart.html"><i className="fi-rs-shopping-bag-add"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <a href="shop-product-right.html">
                                                    <img className="default-img" src="assets/images/product-4-1.jpg" />
                                                        <img className="hover-img" src="assets/images/product-4-2.jpg" />
                                                </a>
                                            </div>
                                            <div className="product-action-1">
                                                <a aria-label="Quick view" className="action-btn hover-up"
                                                   data-bs-toggle="modal" data-bs-target="#quickViewModal"><i
                                                    className="fi-rs-eye"></i></a>
                                                <a aria-label="Add To Wishlist" className="action-btn hover-up"
                                                   href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                <a aria-label="Compare" className="action-btn hover-up"
                                                   href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="sale">Sale</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <a href="shop-grid-right.html">Clothing</a>
                                            </div>
                                            <h2><a href="shop-product-right.html">Colorful Hawaiian Shirts</a></h2>
                                            <div className="rating-result" title="90%">
                                            <span>
                                                <span>70%</span>
                                            </span>
                                            </div>
                                            <div className="product-price">
                                                <span>$123.85 </span>
                                                <span className="old-price">$235.8</span>
                                            </div>
                                            <div className="product-action-1 show">
                                                <a aria-label="Add To Cart" className="action-btn hover-up"
                                                   href="shop-cart.html"><i className="fi-rs-shopping-bag-add"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-xs-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <a href="shop-product-right.html">
                                                    <img className="default-img" src="assets/images/product-5-1.jpg" />
                                                        <img className="hover-img" src="assets/images/product-5-2.jpg" />
                                                </a>
                                            </div>
                                            <div className="product-action-1">
                                                <a aria-label="Quick view" className="action-btn hover-up"
                                                   data-bs-toggle="modal" data-bs-target="#quickViewModal"><i
                                                    className="fi-rs-eye"></i></a>
                                                <a aria-label="Add To Wishlist" className="action-btn hover-up"
                                                   href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                <a aria-label="Compare" className="action-btn hover-up"
                                                   href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="hot">-30%</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <a href="shop-grid-right.html">Shirt</a>
                                            </div>
                                            <h2><a href="shop-product-right.html">Flowers Sleeve Lapel Shirt</a></h2>
                                            <div className="rating-result" title="90%">
                                            <span>
                                                <span>70%</span>
                                            </span>
                                            </div>
                                            <div className="product-price">
                                                <span>$28.85 </span>
                                                <span className="old-price">$45.8</span>
                                            </div>
                                            <div className="product-action-1 show">
                                                <a aria-label="Add To Cart" className="action-btn hover-up"
                                                   href="shop-cart.html"><i className="fi-rs-shopping-bag-add"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-xs-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <a href="shop-product-right.html">
                                                    <img className="default-img" src="assets/images/product-6-1.jpg" />
                                                        <img className="hover-img" src="assets/images/product-6-2.jpg" />
                                                </a>
                                            </div>
                                            <div className="product-action-1">
                                                <a aria-label="Quick view" className="action-btn hover-up"
                                                   data-bs-toggle="modal" data-bs-target="#quickViewModal"><i
                                                    className="fi-rs-eye"></i></a>
                                                <a aria-label="Add To Wishlist" className="action-btn hover-up"
                                                   href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                <a aria-label="Compare" className="action-btn hover-up"
                                                   href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="hot">-22%</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <a href="shop-grid-right.html">Shirts</a>
                                            </div>
                                            <h2><a href="shop-product-right.html">Ethnic Floral Casual Shirts</a></h2>
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
                                                   href="shop-cart.html"><i className="fi-rs-shopping-bag-add"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-xs-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <a href="shop-product-right.html">
                                                    <img className="default-img" src="assets/images/product-7-1.jpg" />
                                                        <img className="hover-img" src="assets/images/product-7-2.jpg" />
                                                </a>
                                            </div>
                                            <div className="product-action-1">
                                                <a aria-label="Quick view" className="action-btn hover-up"
                                                   data-bs-toggle="modal" data-bs-target="#quickViewModal"><i
                                                    className="fi-rs-eye"></i></a>
                                                <a aria-label="Add To Wishlist" className="action-btn hover-up"
                                                   href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                <a aria-label="Compare" className="action-btn hover-up"
                                                   href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="new">New</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <a href="shop-grid-right.html">Shoes</a>
                                            </div>
                                            <h2><a href="shop-product-right.html">Stitching Hole Sandals</a></h2>
                                            <div className="rating-result" title="90%">
                                            <span>
                                                <span>98%</span>
                                            </span>
                                            </div>
                                            <div className="product-price">
                                                <span>$1275.85 </span>
                                            </div>
                                            <div className="product-action-1 show">
                                                <a aria-label="Add To Cart" className="action-btn hover-up"
                                                   href="shop-cart.html"><i className="fi-rs-shopping-bag-add"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <a href="shop-product-right.html">
                                                    <img className="default-img" src="assets/images/product-8-1.jpg" />
                                                        <img className="hover-img" src="assets/images/product-8-2.jpg" />
                                                </a>
                                            </div>
                                            <div className="product-action-1">
                                                <a aria-label="Quick view" className="action-btn hover-up"
                                                   data-bs-toggle="modal" data-bs-target="#quickViewModal"><i
                                                    className="fi-rs-eye"></i></a>
                                                <a aria-label="Add To Wishlist" className="action-btn hover-up"
                                                   href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                <a aria-label="Compare" className="action-btn hover-up"
                                                   href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <a href="shop-grid-right.html">Shirt</a>
                                            </div>
                                            <h2><a href="shop-product-right.html">Mens Porcelain Shirt</a></h2>
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
                                                   href="shop-cart.html"><i className="fi-rs-shopping-bag-add"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab-two" role="tabpanel" aria-labelledby="tab-two">
                            <div className="row product-grid-4">
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <a href="shop-product-right.html">
                                                    <img className="default-img" src="assets/images/product-9-1.jpg" />
                                                        <img className="hover-img" src="assets/images/product-9-2.jpg" />
                                                </a>
                                            </div>
                                            <div className="product-action-1">
                                                <a aria-label="Quick view" className="action-btn hover-up"
                                                   data-bs-toggle="modal" data-bs-target="#quickViewModal"><i
                                                    className="fi-rs-eye"></i></a>
                                                <a aria-label="Add To Wishlist" className="action-btn hover-up"
                                                   href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                <a aria-label="Compare" className="action-btn hover-up"
                                                   href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="hot">Hot</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <a href="shop-grid-right.html">Donec </a>
                                            </div>
                                            <h2><a href="shop-product-right.html">Lorem ipsum dolor</a></h2>
                                            <div className="rating-result" title="90%">
                                            <span>
                                                <span>90%</span>
                                            </span>
                                            </div>
                                            <div className="product-price">
                                                <span>$238.85 </span>
                                                <span className="old-price">$245.8</span>
                                            </div>
                                            <div className="product-action-1 show">
                                                <a aria-label="Add To Cart" className="action-btn hover-up"
                                                   href="shop-cart.html"><i className="fi-rs-shopping-bag-add"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <a href="shop-product-right.html">
                                                    <img className="default-img" src="assets/images/product-10-1.jpg" />
                                                        <img className="hover-img" src="assets/images/product-10-2.jpg" />
                                                </a>
                                            </div>
                                            <div className="product-action-1">
                                                <a aria-label="Quick view" className="action-btn hover-up"
                                                   data-bs-toggle="modal" data-bs-target="#quickViewModal"><i
                                                    className="fi-rs-eye"></i></a>
                                                <a aria-label="Add To Wishlist" className="action-btn hover-up"
                                                   href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                <a aria-label="Compare" className="action-btn hover-up"
                                                   href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="new">New</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <a href="shop-grid-right.html">Music</a>
                                            </div>
                                            <h2><a href="shop-product-right.html">Sed tincidunt interdum</a></h2>
                                            <div className="rating-result" title="90%">
                                            <span>
                                                <span>50%</span>
                                            </span>
                                            </div>
                                            <div className="product-price">
                                                <span>$138.85 </span>
                                                <span className="old-price">$255.8</span>
                                            </div>
                                            <div className="product-action-1 show">
                                                <a aria-label="Add To Cart" className="action-btn hover-up"
                                                   href="shop-cart.html"><i className="fi-rs-shopping-bag-add"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <a href="shop-product-right.html">
                                                    <img className="default-img" src="assets/images/product-11-1.jpg" />
                                                        <img className="hover-img" src="assets/images/product-11-2.jpg" />
                                                </a>
                                            </div>
                                            <div className="product-action-1">
                                                <a aria-label="Quick view" className="action-btn hover-up"
                                                   data-bs-toggle="modal" data-bs-target="#quickViewModal"><i
                                                    className="fi-rs-eye"></i></a>
                                                <a aria-label="Add To Wishlist" className="action-btn hover-up"
                                                   href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                <a aria-label="Compare" className="action-btn hover-up"
                                                   href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="best">Best Sell</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <a href="shop-grid-right.html">Watch</a>
                                            </div>
                                            <h2><a href="shop-product-right.html">Fusce metus orci</a></h2>
                                            <div className="rating-result" title="90%">
                                            <span>
                                                <span>95%</span>
                                            </span>
                                            </div>
                                            <div className="product-price">
                                                <span>$338.85 </span>
                                                <span className="old-price">$445.8</span>
                                            </div>
                                            <div className="product-action-1 show">
                                                <a aria-label="Add To Cart" className="action-btn hover-up"
                                                   href="shop-cart.html"><i className="fi-rs-shopping-bag-add"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <a href="shop-product-right.html">
                                                    <img className="default-img" src="assets/images/product-12-1.jpg" />
                                                        <img className="hover-img" src="assets/images/product-12-2.jpg" />
                                                </a>
                                            </div>
                                            <div className="product-action-1">
                                                <a aria-label="Quick view" className="action-btn hover-up"
                                                   data-bs-toggle="modal" data-bs-target="#quickViewModal"><i
                                                    className="fi-rs-eye"></i></a>
                                                <a aria-label="Add To Wishlist" className="action-btn hover-up"
                                                   href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                <a aria-label="Compare" className="action-btn hover-up"
                                                   href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="sale">Sale</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <a href="shop-grid-right.html">Music</a>
                                            </div>
                                            <h2><a href="shop-product-right.html">Integer venenatis libero</a></h2>
                                            <div className="rating-result" title="90%">
                                            <span>
                                                <span>70%</span>
                                            </span>
                                            </div>
                                            <div className="product-price">
                                                <span>$123.85 </span>
                                                <span className="old-price">$235.8</span>
                                            </div>
                                            <div className="product-action-1 show">
                                                <a aria-label="Add To Cart" className="action-btn hover-up"
                                                   href="shop-cart.html"><i className="fi-rs-shopping-bag-add"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <a href="shop-product-right.html">
                                                    <img className="default-img" src="assets/images/product-13-1.jpg" />
                                                        <img className="hover-img" src="assets/images/product-13-2.jpg" />
                                                </a>
                                            </div>
                                            <div className="product-action-1">
                                                <a aria-label="Quick view" className="action-btn hover-up"
                                                   data-bs-toggle="modal" data-bs-target="#quickViewModal"><i
                                                    className="fi-rs-eye"></i></a>
                                                <a aria-label="Add To Wishlist" className="action-btn hover-up"
                                                   href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                <a aria-label="Compare" className="action-btn hover-up"
                                                   href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="hot">-30%</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <a href="shop-grid-right.html">Speaker</a>
                                            </div>
                                            <h2><a href="shop-product-right.html">Cras tempor orci id</a></h2>
                                            <div className="rating-result" title="90%">
                                            <span>
                                                <span>70%</span>
                                            </span>
                                            </div>
                                            <div className="product-price">
                                                <span>$28.85 </span>
                                                <span className="old-price">$45.8</span>
                                            </div>
                                            <div className="product-action-1 show">
                                                <a aria-label="Add To Cart" className="action-btn hover-up"
                                                   href="shop-cart.html"><i className="fi-rs-shopping-bag-add"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <a href="shop-product-right.html">
                                                    <img className="default-img" src="assets/images/product-14-1.jpg" />
                                                        <img className="hover-img" src="assets/images/product-14-2.jpg" />
                                                </a>
                                            </div>
                                            <div className="product-action-1">
                                                <a aria-label="Quick view" className="action-btn hover-up"
                                                   data-bs-toggle="modal" data-bs-target="#quickViewModal"><i
                                                    className="fi-rs-eye"></i></a>
                                                <a aria-label="Add To Wishlist" className="action-btn hover-up"
                                                   href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                <a aria-label="Compare" className="action-btn hover-up"
                                                   href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="hot">-22%</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <a href="shop-grid-right.html">Camera</a>
                                            </div>
                                            <h2><a href="shop-product-right.html">Nullam cursus mi qui</a></h2>
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
                                                   href="shop-cart.html"><i className="fi-rs-shopping-bag-add"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <a href="shop-product-right.html">
                                                    <img className="default-img" src="assets/images/product-15-1.jpg" />
                                                        <img className="hover-img" src="assets/images/product-15-2.jpg" />
                                                </a>
                                            </div>
                                            <div className="product-action-1">
                                                <a aria-label="Quick view" className="action-btn hover-up"
                                                   data-bs-toggle="modal" data-bs-target="#quickViewModal"><i
                                                    className="fi-rs-eye"></i></a>
                                                <a aria-label="Add To Wishlist" className="action-btn hover-up"
                                                   href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                <a aria-label="Compare" className="action-btn hover-up"
                                                   href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="new">New</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <a href="shop-grid-right.html">Phone</a>
                                            </div>
                                            <h2><a href="shop-product-right.html">Fusce fringilla ultrices</a></h2>
                                            <div className="rating-result" title="90%">
                                            <span>
                                                <span>98%</span>
                                            </span>
                                            </div>
                                            <div className="product-price">
                                                <span>$1275.85 </span>
                                            </div>
                                            <div className="product-action-1 show">
                                                <a aria-label="Add To Cart" className="action-btn hover-up"
                                                   href="shop-cart.html"><i className="fi-rs-shopping-bag-add"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <a href="shop-product-right.html">
                                                    <img className="default-img" src="assets/images/product-1-1.jpg" />
                                                        <img className="hover-img" src="assets/images/product-1-2.jpg" />
                                                </a>
                                            </div>
                                            <div className="product-action-1">
                                                <a aria-label="Quick view" className="action-btn hover-up"
                                                   data-bs-toggle="modal" data-bs-target="#quickViewModal"><i
                                                    className="fi-rs-eye"></i></a>
                                                <a aria-label="Add To Wishlist" className="action-btn hover-up"
                                                   href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                <a aria-label="Compare" className="action-btn hover-up"
                                                   href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <a href="shop-grid-right.html">Accessories </a>
                                            </div>
                                            <h2><a href="shop-product-right.html">Sed sollicitudin est</a></h2>
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
                                                   href="shop-cart.html"><i className="fi-rs-shopping-bag-add"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab-three" role="tabpanel" aria-labelledby="tab-three">
                            <div className="row product-grid-4">
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <a href="shop-product-right.html">
                                                    <img className="default-img" src="assets/images/product-2-1.jpg" />
                                                        <img className="hover-img" src="assets/images/product-2-2.jpg" />
                                                </a>
                                            </div>
                                            <div className="product-action-1">
                                                <a aria-label="Quick view" className="action-btn hover-up"
                                                   data-bs-toggle="modal" data-bs-target="#quickViewModal"><i
                                                    className="fi-rs-eye"></i></a>
                                                <a aria-label="Add To Wishlist" className="action-btn hover-up"
                                                   href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                <a aria-label="Compare" className="action-btn hover-up"
                                                   href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="hot">Hot</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <a href="shop-grid-right.html">Music</a>
                                            </div>
                                            <h2><a href="shop-product-right.html">Donec ut nisl rutrum</a></h2>
                                            <div className="rating-result" title="90%">
                                            <span>
                                                <span>90%</span>
                                            </span>
                                            </div>
                                            <div className="product-price">
                                                <span>$238.85 </span>
                                                <span className="old-price">$245.8</span>
                                            </div>
                                            <div className="product-action-1 show">
                                                <a aria-label="Add To Cart" className="action-btn hover-up"
                                                   href="shop-cart.html"><i className="fi-rs-shopping-bag-add"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <a href="shop-product-right.html">
                                                    <img className="hover-img" src="assets/images/product-3-1.jpg" />
                                                        <img className="default-img" src="assets/images/product-3-2.jpg" />
                                                </a>
                                            </div>
                                            <div className="product-action-1">
                                                <a aria-label="Quick view" className="action-btn hover-up"
                                                   data-bs-toggle="modal" data-bs-target="#quickViewModal"><i
                                                    className="fi-rs-eye"></i></a>
                                                <a aria-label="Add To Wishlist" className="action-btn hover-up"
                                                   href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                <a aria-label="Compare" className="action-btn hover-up"
                                                   href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="new">New</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <a href="shop-grid-right.html">Music</a>
                                            </div>
                                            <h2><a href="shop-product-right.html">Nullam dapibus pharetra</a></h2>
                                            <div className="rating-result" title="90%">
                                            <span>
                                                <span>50%</span>
                                            </span>
                                            </div>
                                            <div className="product-price">
                                                <span>$138.85 </span>
                                                <span className="old-price">$255.8</span>
                                            </div>
                                            <div className="product-action-1 show">
                                                <a aria-label="Add To Cart" className="action-btn hover-up"
                                                   href="shop-cart.html"><i className="fi-rs-shopping-bag-add"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <a href="shop-product-right.html">
                                                    <img className="hover-img" src="assets/images/product-4-1.jpg" />
                                                        <img className="default-img" src="assets/images/product-4-2.jpg" />
                                                </a>
                                            </div>
                                            <div className="product-action-1">
                                                <a aria-label="Quick view" className="action-btn hover-up"
                                                   data-bs-toggle="modal" data-bs-target="#quickViewModal"><i
                                                    className="fi-rs-eye"></i></a>
                                                <a aria-label="Add To Wishlist" className="action-btn hover-up"
                                                   href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                <a aria-label="Compare" className="action-btn hover-up"
                                                   href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="best">Best Sell</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <a href="shop-grid-right.html">Watch</a>
                                            </div>
                                            <h2><a href="shop-product-right.html">Morbi dictum finibus</a></h2>
                                            <div className="rating-result" title="90%">
                                            <span>
                                                <span>95%</span>
                                            </span>
                                            </div>
                                            <div className="product-price">
                                                <span>$338.85 </span>
                                                <span className="old-price">$445.8</span>
                                            </div>
                                            <div className="product-action-1 show">
                                                <a aria-label="Add To Cart" className="action-btn hover-up"
                                                   href="shop-cart.html"><i className="fi-rs-shopping-bag-add"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <a href="shop-product-right.html">
                                                    <img className="hover-img" src="assets/images/product-5-1.jpg" />
                                                        <img className="default-img" src="assets/images/product-5-2.jpg" />
                                                </a>
                                            </div>
                                            <div className="product-action-1">
                                                <a aria-label="Quick view" className="action-btn hover-up"
                                                   data-bs-toggle="modal" data-bs-target="#quickViewModal"><i
                                                    className="fi-rs-eye"></i></a>
                                                <a aria-label="Add To Wishlist" className="action-btn hover-up"
                                                   href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                <a aria-label="Compare" className="action-btn hover-up"
                                                   href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="sale">Sale</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <a href="shop-grid-right.html">Music</a>
                                            </div>
                                            <h2><a href="shop-product-right.html">Nunc volutpat massa</a></h2>
                                            <div className="rating-result" title="90%">
                                            <span>
                                                <span>70%</span>
                                            </span>
                                            </div>
                                            <div className="product-price">
                                                <span>$123.85 </span>
                                                <span className="old-price">$235.8</span>
                                            </div>
                                            <div className="product-action-1 show">
                                                <a aria-label="Add To Cart" className="action-btn hover-up"
                                                   href="shop-cart.html"><i className="fi-rs-shopping-bag-add"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <a href="shop-product-right.html">
                                                    <img className="hover-img" src="assets/images/product-6-1.jpg" />
                                                        <img className="default-img" src="assets/images/product-6-2.jpg" />
                                                </a>
                                            </div>
                                            <div className="product-action-1">
                                                <a aria-label="Quick view" className="action-btn hover-up"
                                                   data-bs-toggle="modal" data-bs-target="#quickViewModal"><i
                                                    className="fi-rs-eye"></i></a>
                                                <a aria-label="Add To Wishlist" className="action-btn hover-up"
                                                   href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                <a aria-label="Compare" className="action-btn hover-up"
                                                   href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="hot">-30%</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <a href="shop-grid-right.html">Speaker</a>
                                            </div>
                                            <h2><a href="shop-product-right.html">Nullam ultricies luctus</a></h2>
                                            <div className="rating-result" title="90%">
                                            <span>
                                                <span>70%</span>
                                            </span>
                                            </div>
                                            <div className="product-price">
                                                <span>$28.85 </span>
                                                <span className="old-price">$45.8</span>
                                            </div>
                                            <div className="product-action-1 show">
                                                <a aria-label="Add To Cart" className="action-btn hover-up"
                                                   href="shop-cart.html"><i className="fi-rs-shopping-bag-add"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <a href="shop-product-right.html">
                                                    <img className="hover-img" src="assets/images/product-7-1.jpg" />
                                                        <img className="default-img" src="assets/images/product-7-2.jpg" />
                                                </a>
                                            </div>
                                            <div className="product-action-1">
                                                <a aria-label="Quick view" className="action-btn hover-up"
                                                   data-bs-toggle="modal" data-bs-target="#quickViewModal"><i
                                                    className="fi-rs-eye"></i></a>
                                                <a aria-label="Add To Wishlist" className="action-btn hover-up"
                                                   href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                <a aria-label="Compare" className="action-btn hover-up"
                                                   href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="hot">-22%</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <a href="shop-grid-right.html">Camera</a>
                                            </div>
                                            <h2><a href="shop-product-right.html">Nullam mattis enim</a></h2>
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
                                                   href="shop-cart.html"><i className="fi-rs-shopping-bag-add"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <a href="shop-product-right.html">
                                                    <img className="hover-img" src="assets/images/product-8-1.jpg" />
                                                        <img className="default-img" src="assets/images/product-8-2.jpg" />
                                                </a>
                                            </div>
                                            <div className="product-action-1">
                                                <a aria-label="Quick view" className="action-btn hover-up"
                                                   data-bs-toggle="modal" data-bs-target="#quickViewModal"><i
                                                    className="fi-rs-eye"></i></a>
                                                <a aria-label="Add To Wishlist" className="action-btn hover-up"
                                                   href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                <a aria-label="Compare" className="action-btn hover-up"
                                                   href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="new">New</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <a href="shop-grid-right.html">Phone</a>
                                            </div>
                                            <h2><a href="shop-product-right.html">Vivamus sollicitudin</a></h2>
                                            <div className="rating-result" title="90%">
                                            <span>
                                                <span>98%</span>
                                            </span>
                                            </div>
                                            <div className="product-price">
                                                <span>$1275.85 </span>
                                            </div>
                                            <div className="product-action-1 show">
                                                <a aria-label="Add To Cart" className="action-btn hover-up"
                                                   href="shop-cart.html"><i className="fi-rs-shopping-bag-add"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <a href="shop-product-right.html">
                                                    <img className="hover-img" src="assets/images/product-9-1.jpg" />
                                                        <img className="default-img" src="assets/images/product-9-2.jpg" />
                                                </a>
                                            </div>
                                            <div className="product-action-1">
                                                <a aria-label="Quick view" className="action-btn hover-up"
                                                   data-bs-toggle="modal" data-bs-target="#quickViewModal"><i
                                                    className="fi-rs-eye"></i></a>
                                                <a aria-label="Add To Wishlist" className="action-btn hover-up"
                                                   href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                <a aria-label="Compare" className="action-btn hover-up"
                                                   href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <a href="shop-grid-right.html">Accessories </a>
                                            </div>
                                            <h2><a href="shop-product-right.html"> Donec ut nisl rutrum</a></h2>
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
                                                   href="shop-cart.html"><i className="fi-rs-shopping-bag-add"></i></a>
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
