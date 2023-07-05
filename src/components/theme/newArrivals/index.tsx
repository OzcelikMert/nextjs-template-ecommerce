import React, {Component} from "react";
import imageSourceUtil from "utils/imageSource.util";
import {Carousel} from "react-responsive-carousel";
import {PostGetManyResultDocument} from "types/services/post";
import {PagePropCommonDocument} from "types/pageProps";
import Image from "next/image";

type PageState = {};

type PageProps = {} & PagePropCommonDocument<{ sliders: PostGetManyResultDocument[] }>;

export default class ComponentThemeNewArrivals extends Component<PageProps, PageState> {
    constructor(props: PageProps) {
        super(props);
    }

    render() {
        return (
            <section className="section-padding">
                <div className="container wow fadeIn animated">
                    <h3 className="section-title mb-20"><span>New</span> Arrivals</h3>
                    <div className="carausel-6-columns-cover position-relative">
                        <div className="slider-arrow slider-arrow-2 carausel-6-columns-arrow"
                             id="carausel-6-columns-2-arrows"></div>
                        <div className="carausel-6-columns carausel-arrow-center" id="carausel-6-columns-2">
                            <div className="product-cart-wrap small hover-up">
                                <div className="product-img-action-wrap">
                                    <div className="product-img product-img-zoom">
                                        <a href="shop-product-right.html">
                                            <img className="default-img" src="images/product-2-1.jpg" />
                                                <img className="hover-img" src="images/product-2-2.jpg" />
                                        </a>
                                    </div>
                                    <div className="product-action-1">
                                        <a aria-label="Quick view" className="action-btn small hover-up"
                                           data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                            <i className="fi-rs-eye"></i></a>
                                        <a aria-label="Add To Wishlist" className="action-btn small hover-up"
                                           href="shop-wishlist.html" tabIndex={0}><i className="fi-rs-heart"></i></a>
                                        <a aria-label="Compare" className="action-btn small hover-up"
                                           href="shop-compare.html" tabIndex={0}><i className="fi-rs-shuffle"></i></a>
                                    </div>
                                    <div className="product-badges product-badges-position product-badges-mrg">
                                        <span className="hot">Hot</span>
                                    </div>
                                </div>
                                <div className="product-content-wrap">
                                    <h2><a href="shop-product-right.html">Lorem ipsum dolor</a></h2>
                                    <div className="rating-result" title="90%">
                                    <span>
                                    </span>
                                    </div>
                                    <div className="product-price">
                                        <span>$238.85 </span>
                                        <span className="old-price">$245.8</span>
                                    </div>
                                </div>
                            </div>
                            <div className="product-cart-wrap small hover-up">
                                <div className="product-img-action-wrap">
                                    <div className="product-img product-img-zoom">
                                        <a href="shop-product-right.html">
                                            <img className="default-img" src="images/product-4-1.jpg" />
                                                <img className="hover-img" src="images/product-4-2.jpg" />
                                        </a>
                                    </div>
                                    <div className="product-action-1">
                                        <a aria-label="Quick view" className="action-btn small hover-up"
                                           data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                            <i className="fi-rs-eye"></i></a>
                                        <a aria-label="Add To Wishlist" className="action-btn small hover-up"
                                           href="shop-wishlist.html" tabIndex={0}><i className="fi-rs-heart"></i></a>
                                        <a aria-label="Compare" className="action-btn small hover-up"
                                           href="shop-compare.html" tabIndex={0}><i className="fi-rs-shuffle"></i></a>
                                    </div>
                                    <div className="product-badges product-badges-position product-badges-mrg">
                                        <span className="new">New</span>
                                    </div>
                                </div>
                                <div className="product-content-wrap">
                                    <h2><a href="shop-product-right.html">Aliquam posuere</a></h2>
                                    <div className="rating-result" title="90%">
                                    <span>
                                    </span>
                                    </div>
                                    <div className="product-price">
                                        <span>$173.85 </span>
                                        <span className="old-price">$185.8</span>
                                    </div>
                                </div>
                            </div>
                            <div className="product-cart-wrap small hover-up">
                                <div className="product-img-action-wrap">
                                    <div className="product-img product-img-zoom">
                                        <a href="shop-product-right.html">
                                            <img className="default-img" src="images/product-15-1.jpg" />
                                                <img className="hover-img" src="images/product-15-2.jpg" />
                                        </a>
                                    </div>
                                    <div className="product-action-1">
                                        <a aria-label="Quick view" className="action-btn small hover-up"
                                           data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                            <i className="fi-rs-eye"></i></a>
                                        <a aria-label="Add To Wishlist" className="action-btn small hover-up"
                                           href="shop-wishlist.html" tabIndex={0}><i className="fi-rs-heart"></i></a>
                                        <a aria-label="Compare" className="action-btn small hover-up"
                                           href="shop-compare.html" tabIndex={0}><i className="fi-rs-shuffle"></i></a>
                                    </div>
                                    <div className="product-badges product-badges-position product-badges-mrg">
                                        <span className="sale">Sale</span>
                                    </div>
                                </div>
                                <div className="product-content-wrap">
                                    <h2><a href="shop-product-right.html">Sed dapibus orci</a></h2>
                                    <div className="rating-result" title="90%">
                                    <span>
                                    </span>
                                    </div>
                                    <div className="product-price">
                                        <span>$215.85 </span>
                                        <span className="old-price">$235.8</span>
                                    </div>
                                </div>
                            </div>
                            <div className="product-cart-wrap small hover-up">
                                <div className="product-img-action-wrap">
                                    <div className="product-img product-img-zoom">
                                        <a href="shop-product-right.html">
                                            <img className="default-img" src="images/product-3-1.jpg" />
                                                <img className="hover-img" src="images/product-3-2.jpg" />
                                        </a>
                                    </div>
                                    <div className="product-action-1">
                                        <a aria-label="Quick view" className="action-btn small hover-up"
                                           data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                            <i className="fi-rs-eye"></i></a>
                                        <a aria-label="Add To Wishlist" className="action-btn small hover-up"
                                           href="shop-wishlist.html" tabIndex={0}><i className="fi-rs-heart"></i></a>
                                        <a aria-label="Compare" className="action-btn small hover-up"
                                           href="shop-compare.html" tabIndex={0}><i className="fi-rs-shuffle"></i></a>
                                    </div>
                                    <div className="product-badges product-badges-position product-badges-mrg">
                                        <span className="hot">.33%</span>
                                    </div>
                                </div>
                                <div className="product-content-wrap">
                                    <h2><a href="shop-product-right.html">Donec congue</a></h2>
                                    <div className="rating-result" title="90%">
                                    <span>
                                    </span>
                                    </div>
                                    <div className="product-price">
                                        <span>$83.8 </span>
                                        <span className="old-price">$125.2</span>
                                    </div>
                                </div>
                            </div>
                            <div className="product-cart-wrap small hover-up">
                                <div className="product-img-action-wrap">
                                    <div className="product-img product-img-zoom">
                                        <a href="shop-product-right.html">
                                            <img className="default-img" src="images/product-9-1.jpg" />
                                                <img className="hover-img" src="images/product-9-2.jpg" />
                                        </a>
                                    </div>
                                    <div className="product-action-1">
                                        <a aria-label="Quick view" className="action-btn small hover-up"
                                           data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                            <i className="fi-rs-eye"></i></a>
                                        <a aria-label="Add To Wishlist" className="action-btn small hover-up"
                                           href="shop-wishlist.html" tabIndex={0}><i className="fi-rs-heart"></i></a>
                                        <a aria-label="Compare" className="action-btn small hover-up"
                                           href="shop-compare.html" tabIndex={0}><i className="fi-rs-shuffle"></i></a>
                                    </div>
                                    <div className="product-badges product-badges-position product-badges-mrg">
                                        <span className="hot">-25%</span>
                                    </div>
                                </div>
                                <div className="product-content-wrap">
                                    <h2><a href="shop-product-right.html">Curabitur porta</a></h2>
                                    <div className="rating-result" title="90%">
                                    <span>
                                    </span>
                                    </div>
                                    <div className="product-price">
                                        <span>$1238.85 </span>
                                        <span className="old-price">$1245.8</span>
                                    </div>
                                </div>
                            </div>
                            <div className="product-cart-wrap small hover-up">
                                <div className="product-img-action-wrap">
                                    <div className="product-img product-img-zoom">
                                        <a href="shop-product-right.html">
                                            <img className="default-img" src="images/product-7-1.jpg" />
                                                <img className="hover-img" src="images/product-7-2.jpg" />
                                        </a>
                                    </div>
                                    <div className="product-action-1">
                                        <a aria-label="Quick view" className="action-btn small hover-up"
                                           data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                            <i className="fi-rs-eye"></i></a>
                                        <a aria-label="Add To Wishlist" className="action-btn small hover-up"
                                           href="shop-wishlist.html" tabIndex={0}><i className="fi-rs-heart"></i></a>
                                        <a aria-label="Compare" className="action-btn small hover-up"
                                           href="shop-compare.html" tabIndex={0}><i className="fi-rs-shuffle"></i></a>
                                    </div>
                                    <div className="product-badges product-badges-position product-badges-mrg">
                                        <span className="new">New</span>
                                    </div>
                                </div>
                                <div className="product-content-wrap">
                                    <h2><a href="shop-product-right.html">Praesent maximus</a></h2>
                                    <div className="rating-result" title="90%">
                                    <span>
                                    </span>
                                    </div>
                                    <div className="product-price">
                                        <span>$123 </span>
                                        <span className="old-price">$156</span>
                                    </div>
                                </div>
                            </div>
                            <div className="product-cart-wrap small hover-up">
                                <div className="product-img-action-wrap">
                                    <div className="product-img product-img-zoom">
                                        <a href="shop-product-right.html">
                                            <img className="default-img" src="images/product-1-1.jpg" />
                                                <img className="hover-img" src="images/product-1-2.jpg" />
                                        </a>
                                    </div>
                                    <div className="product-action-1">
                                        <a aria-label="Quick view" className="action-btn small hover-up"
                                           data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                            <i className="fi-rs-eye"></i></a>
                                        <a aria-label="Add To Wishlist" className="action-btn small hover-up"
                                           href="shop-wishlist.html" tabIndex={0}><i className="fi-rs-heart"></i></a>
                                        <a aria-label="Compare" className="action-btn small hover-up"
                                           href="shop-compare.html" tabIndex={0}><i className="fi-rs-shuffle"></i></a>
                                    </div>
                                </div>
                                <div className="product-content-wrap">
                                    <h2><a href="shop-product-right.html">Vestibulum ante</a></h2>
                                    <div className="rating-result" title="90%">
                                    <span>
                                    </span>
                                    </div>
                                    <div className="product-price">
                                        <span>$238.85 </span>
                                        <span className="old-price">$245.8</span>
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
