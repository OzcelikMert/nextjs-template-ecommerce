import { PagePropCommonDocument } from "types/pageProps";
import { PostGetOneResultDocument } from "types/services/post";
import React, { Component } from "react";
import { GetServerSidePropsContext } from "next";
import HTMLReactParser from "html-react-parser";
import SelectedComponents from "components/selectedComponents";
import postService from "services/post.service";
import {
  PageTypeId,
  PostTermTypeId,
  PostTypeId,
  StatusId,
} from "constants/index";
import viewLib from "lib/view.lib";
import pageLib from "lib/page.lib";
import ThemeWidgetSearch from "components/theme/widgets/search";
import PagePaths from "constants/pagePaths";
import ThemeWidgetCategories from "components/theme/widgets/categories";
import { PostTermGetResultDocument } from "types/services/postTerm";
import postTermService from "services/postTerm.service";
import ComponentError404 from "components/error/404";
import ComponentPageHeader from "components/tools/carousel";

type PageState = {};

type PageProps = {} & PagePropCommonDocument<{
  blog: PostGetOneResultDocument;
  categories: PostTermGetResultDocument[];
}>;

export default class PageProducts extends Component<PageProps, PageState> {
  constructor(props: PageProps) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-lg-9">
            <div className="shop-product-fillter">
              <div className="totall-product">
                <p>
                  {" "}
                  We found <strong className="text-brand">688</strong> items for
                  you!
                </p>
              </div>
              <div className="sort-by-product-area">
                <div className="sort-by-cover mr-10">
                  <div className="sort-by-product-wrap">
                    <div className="sort-by">
                      <span>
                        <i className="fi-rs-apps"></i>Show:
                      </span>
                    </div>
                    <div className="sort-by-dropdown-wrap">
                      <span>
                        {" "}
                        50 <i className="fi-rs-angle-small-down"></i>
                      </span>
                    </div>
                  </div>
                  <div className="sort-by-dropdown">
                    <ul>
                      <li>
                        <a className="active" href="#">
                          50
                        </a>
                      </li>
                      <li>
                        <a href="#">100</a>
                      </li>
                      <li>
                        <a href="#">150</a>
                      </li>
                      <li>
                        <a href="#">200</a>
                      </li>
                      <li>
                        <a href="#">All</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sort-by-cover">
                  <div className="sort-by-product-wrap">
                    <div className="sort-by">
                      <span>
                        <i className="fi-rs-apps-sort"></i>Sort by:
                      </span>
                    </div>
                    <div className="sort-by-dropdown-wrap">
                      <span>
                        {" "}
                        Featured <i className="fi-rs-angle-small-down"></i>
                      </span>
                    </div>
                  </div>
                  <div className="sort-by-dropdown">
                    <ul>
                      <li>
                        <a className="active" href="#">
                          Featured
                        </a>
                      </li>
                      <li>
                        <a href="#">Price: Low to High</a>
                      </li>
                      <li>
                        <a href="#">Price: High to Low</a>
                      </li>
                      <li>
                        <a href="#">Release Date</a>
                      </li>
                      <li>
                        <a href="#">Avg. Rating</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row product-grid-3">
              <div className="col-lg-4 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="images/product-2-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="images/product-2-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                      >
                        <i className="fi-rs-search"></i>
                      </a>
                      <a
                        aria-label="Add To Wishlist"
                        className="action-btn hover-up"
                        href="shop-wishlist.html"
                      >
                        <i className="fi-rs-heart"></i>
                      </a>
                      <a
                        aria-label="Compare"
                        className="action-btn hover-up"
                        href="shop-compare.html"
                      >
                        <i className="fi-rs-shuffle"></i>
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="hot">Hot</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Music</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">
                        Colorful Pattern Shirts
                      </a>
                    </h2>
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
                      <a
                        aria-label="Add To Cart"
                        className="action-btn hover-up"
                        href="shop-cart.html"
                      >
                        <i className="fi-rs-shopping-bag-add"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="images/product-3-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="images/product-3-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                      >
                        <i className="fi-rs-search"></i>
                      </a>
                      <a
                        aria-label="Add To Wishlist"
                        className="action-btn hover-up"
                        href="shop-wishlist.html"
                      >
                        <i className="fi-rs-heart"></i>
                      </a>
                      <a
                        aria-label="Compare"
                        className="action-btn hover-up"
                        href="shop-compare.html"
                      >
                        <i className="fi-rs-shuffle"></i>
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="new">New</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Music</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">
                        Cartoon Astronaut T-Shirts
                      </a>
                    </h2>
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
                      <a
                        aria-label="Add To Cart"
                        className="action-btn hover-up"
                        href="shop-cart.html"
                      >
                        <i className="fi-rs-shopping-bag-add"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="images/product-7-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="images/product-7-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                      >
                        <i className="fi-rs-search"></i>
                      </a>
                      <a
                        aria-label="Add To Wishlist"
                        className="action-btn hover-up"
                        href="shop-wishlist.html"
                      >
                        <i className="fi-rs-heart"></i>
                      </a>
                      <a
                        aria-label="Compare"
                        className="action-btn hover-up"
                        href="shop-compare.html"
                      >
                        <i className="fi-rs-shuffle"></i>
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="best">Best Sell</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Watch</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">Plain Striola Shirts</a>
                    </h2>
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
                      <a
                        aria-label="Add To Cart"
                        className="action-btn hover-up"
                        href="shop-cart.html"
                      >
                        <i className="fi-rs-shopping-bag-add"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="images/product-1-2.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="images/product-1-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                      >
                        <i className="fi-rs-search"></i>
                      </a>
                      <a
                        aria-label="Add To Wishlist"
                        className="action-btn hover-up"
                        href="shop-wishlist.html"
                      >
                        <i className="fi-rs-heart"></i>
                      </a>
                      <a
                        aria-label="Compare"
                        className="action-btn hover-up"
                        href="shop-compare.html"
                      >
                        <i className="fi-rs-shuffle"></i>
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="sale">Sale</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Music</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">
                        Landscape Painting Shirt
                      </a>
                    </h2>
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
                      <a
                        aria-label="Add To Cart"
                        className="action-btn hover-up"
                        href="shop-cart.html"
                      >
                        <i className="fi-rs-shopping-bag-add"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="images/product-4-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="images/product-3-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                      >
                        <i className="fi-rs-search"></i>
                      </a>
                      <a
                        aria-label="Add To Wishlist"
                        className="action-btn hover-up"
                        href="shop-wishlist.html"
                      >
                        <i className="fi-rs-heart"></i>
                      </a>
                      <a
                        aria-label="Compare"
                        className="action-btn hover-up"
                        href="shop-compare.html"
                      >
                        <i className="fi-rs-shuffle"></i>
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="hot">-30%</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Speaker</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">Letter Print T-Shirt</a>
                    </h2>
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
                      <a
                        aria-label="Add To Cart"
                        className="action-btn hover-up"
                        href="shop-cart.html"
                      >
                        <i className="fi-rs-shopping-bag-add"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="images/product-5-2.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="images/product-5-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                      >
                        <i className="fi-rs-search"></i>
                      </a>
                      <a
                        aria-label="Add To Wishlist"
                        className="action-btn hover-up"
                        href="shop-wishlist.html"
                      >
                        <i className="fi-rs-heart"></i>
                      </a>
                      <a
                        aria-label="Compare"
                        className="action-btn hover-up"
                        href="shop-compare.html"
                      >
                        <i className="fi-rs-shuffle"></i>
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="hot">-22%</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Camera</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">
                        Element Pattern Print Shirts
                      </a>
                    </h2>
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
                      <a
                        aria-label="Add To Cart"
                        className="action-btn hover-up"
                        href="shop-cart.html"
                      >
                        <i className="fi-rs-shopping-bag-add"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="images/product-8-2.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="images/product-8-1.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                      >
                        <i className="fi-rs-search"></i>
                      </a>
                      <a
                        aria-label="Add To Wishlist"
                        className="action-btn hover-up"
                        href="shop-wishlist.html"
                      >
                        <i className="fi-rs-heart"></i>
                      </a>
                      <a
                        aria-label="Compare"
                        className="action-btn hover-up"
                        href="shop-compare.html"
                      >
                        <i className="fi-rs-shuffle"></i>
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="new">New</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Phone</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">Vintage Henley Shirt</a>
                    </h2>
                    <div className="rating-result" title="90%">
                      <span>
                        <span>98%</span>
                      </span>
                    </div>
                    <div className="product-price">
                      <span>$1275.85 </span>
                    </div>
                    <div className="product-action-1 show">
                      <a
                        aria-label="Add To Cart"
                        className="action-btn hover-up"
                        href="shop-cart.html"
                      >
                        <i className="fi-rs-shopping-bag-add"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="images/product-11-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="images/product-11-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                      >
                        <i className="fi-rs-search"></i>
                      </a>
                      <a
                        aria-label="Add To Wishlist"
                        className="action-btn hover-up"
                        href="shop-wishlist.html"
                      >
                        <i className="fi-rs-heart"></i>
                      </a>
                      <a
                        aria-label="Compare"
                        className="action-btn hover-up"
                        href="shop-compare.html"
                      >
                        <i className="fi-rs-shuffle"></i>
                      </a>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Accessories </a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">Cotton Leaf Printed</a>
                    </h2>
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
                      <a
                        aria-label="Add To Cart"
                        className="action-btn hover-up"
                        href="shop-cart.html"
                      >
                        <i className="fi-rs-shopping-bag-add"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="images/product-13-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="images/product-13-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                      >
                        <i className="fi-rs-search"></i>
                      </a>
                      <a
                        aria-label="Add To Wishlist"
                        className="action-btn hover-up"
                        href="shop-wishlist.html"
                      >
                        <i className="fi-rs-heart"></i>
                      </a>
                      <a
                        aria-label="Compare"
                        className="action-btn hover-up"
                        href="shop-compare.html"
                      >
                        <i className="fi-rs-shuffle"></i>
                      </a>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Accessories </a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">Cotton Leaf Printed</a>
                    </h2>
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
                      <a
                        aria-label="Add To Cart"
                        className="action-btn hover-up"
                        href="shop-cart.html"
                      >
                        <i className="fi-rs-shopping-bag-add"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="images/product-3-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="images/product-3-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                      >
                        <i className="fi-rs-search"></i>
                      </a>
                      <a
                        aria-label="Add To Wishlist"
                        className="action-btn hover-up"
                        href="shop-wishlist.html"
                      >
                        <i className="fi-rs-heart"></i>
                      </a>
                      <a
                        aria-label="Compare"
                        className="action-btn hover-up"
                        href="shop-compare.html"
                      >
                        <i className="fi-rs-shuffle"></i>
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="hot">Hot</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Music</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">
                        Colorful Pattern Shirts
                      </a>
                    </h2>
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
                      <a
                        aria-label="Add To Cart"
                        className="action-btn hover-up"
                        href="shop-cart.html"
                      >
                        <i className="fi-rs-shopping-bag-add"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="images/product-2-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="images/product-2-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                      >
                        <i className="fi-rs-search"></i>
                      </a>
                      <a
                        aria-label="Add To Wishlist"
                        className="action-btn hover-up"
                        href="shop-wishlist.html"
                      >
                        <i className="fi-rs-heart"></i>
                      </a>
                      <a
                        aria-label="Compare"
                        className="action-btn hover-up"
                        href="shop-compare.html"
                      >
                        <i className="fi-rs-shuffle"></i>
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="new">New</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Music</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">
                        Cartoon Astronaut T-Shirts
                      </a>
                    </h2>
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
                      <a
                        aria-label="Add To Cart"
                        className="action-btn hover-up"
                        href="shop-cart.html"
                      >
                        <i className="fi-rs-shopping-bag-add"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="images/product-7-2.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="images/product-7-1.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                      >
                        <i className="fi-rs-search"></i>
                      </a>
                      <a
                        aria-label="Add To Wishlist"
                        className="action-btn hover-up"
                        href="shop-wishlist.html"
                      >
                        <i className="fi-rs-heart"></i>
                      </a>
                      <a
                        aria-label="Compare"
                        className="action-btn hover-up"
                        href="shop-compare.html"
                      >
                        <i className="fi-rs-shuffle"></i>
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="best">Best Sell</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Watch</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">Plain Striola Shirts</a>
                    </h2>
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
                      <a
                        aria-label="Add To Cart"
                        className="action-btn hover-up"
                        href="shop-cart.html"
                      >
                        <i className="fi-rs-shopping-bag-add"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pagination-area mt-15 mb-sm-5 mb-lg-0">
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-start">
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      01
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      02
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      03
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link dot" href="#">
                      ...
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      16
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="fi-rs-angle-double-small-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-lg-3 primary-sidebar sticky-sidebar">
            <div className="widget-category mb-30">
              <h5 className="section-title style-1 mb-30 wow fadeIn animated">
                Category
              </h5>
              <ul className="categories">
                <li>
                  <a href="shop-grid-right.html">Shoes & Bags</a>
                </li>
                <li>
                  <a href="shop-grid-right.html">Blouses & Shirts</a>
                </li>
                <li>
                  <a href="shop-grid-right.html">Dresses</a>
                </li>
                <li>
                  <a href="shop-grid-right.html">Swimwear</a>
                </li>
                <li>
                  <a href="shop-grid-right.html">Beauty</a>
                </li>
                <li>
                  <a href="shop-grid-right.html">Jewelry & Watch</a>
                </li>
                <li>
                  <a href="shop-grid-right.html">Accessories</a>
                </li>
              </ul>
            </div>
            <div className="sidebar-widget price_range range mb-30">
              <div className="widget-header position-relative mb-20 pb-10">
                <h5 className="widget-title mb-10">Fill by price</h5>
                <div className="bt-1 border-color-1"></div>
              </div>
              <div className="price-filter">
                <div className="price-filter-inner">
                  <div id="slider-range"></div>
                  <div className="price_slider_amount">
                    <div className="label-input">
                      <span>Range:</span>
                      <input
                        type="text"
                        id="amount"
                        name="price"
                        placeholder="Add Your Price"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="list-group">
                <div className="list-group-item mb-10 mt-10">
                  <label className="fw-900">Color</label>
                  <div className="custome-checkbox">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="checkbox"
                      id="exampleCheckbox1"
                      value=""
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleCheckbox1"
                    >
                      <span>Red (56)</span>
                    </label>
                    <br />
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="checkbox"
                      id="exampleCheckbox2"
                      value=""
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleCheckbox2"
                    >
                      <span>Green (78)</span>
                    </label>
                    <br />
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="checkbox"
                      id="exampleCheckbox3"
                      value=""
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleCheckbox3"
                    >
                      <span>Blue (54)</span>
                    </label>
                  </div>
                  <label className="fw-900 mt-15">Item Condition</label>
                  <div className="custome-checkbox">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="checkbox"
                      id="exampleCheckbox11"
                      value=""
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleCheckbox11"
                    >
                      <span>New (1506)</span>
                    </label>
                    <br />
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="checkbox"
                      id="exampleCheckbox21"
                      value=""
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleCheckbox21"
                    >
                      <span>Refurbished (27)</span>
                    </label>
                    <br />
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="checkbox"
                      id="exampleCheckbox31"
                      value=""
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleCheckbox31"
                    >
                      <span>Used (45)</span>
                    </label>
                  </div>
                </div>
              </div>
              <a href="shop-grid-right.html" className="btn btn-sm btn-default">
                <i className="fi-rs-filter mr-5"></i> Fillter
              </a>
            </div>

            <div className="sidebar-widget product-sidebar  mb-30 p-30 bg-grey border-radius-10">
              <div className="widget-header position-relative mb-20 pb-10">
                <h5 className="widget-title mb-10">New products</h5>
                <div className="bt-1 border-color-1"></div>
              </div>
              <div className="single-post clearfix">
                <div className="image">
                  <img src="images/thumbnail-3.jpg" alt="#" />
                </div>
                <div className="content pt-10">
                  <h5>
                    <a href="shop-product-detail.html">Chen Cardigan</a>
                  </h5>
                  <p className="price mb-0 mt-5">$99.50</p>
                  <div className="product-rate">
                    <div
                      className="product-rating"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="single-post clearfix">
                <div className="image">
                  <img src="images/thumbnail-4.jpg" alt="#" />
                </div>
                <div className="content pt-10">
                  <h6>
                    <a href="shop-product-detail.html">Chen Sweater</a>
                  </h6>
                  <p className="price mb-0 mt-5">$89.50</p>
                  <div className="product-rate">
                    <div
                      className="product-rating"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="single-post clearfix">
                <div className="image">
                  <img src="images/thumbnail-5.jpg" alt="#" />
                </div>
                <div className="content pt-10">
                  <h6>
                    <a href="shop-product-detail.html">Colorful Jacket</a>
                  </h6>
                  <p className="price mb-0 mt-5">$25</p>
                  <div className="product-rate">
                    <div
                      className="product-rating"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="banner-img wow fadeIn mb-45 animated d-lg-block d-none">
              <img src="images/banner-11.jpg" alt="" />
              <div className="banner-text">
                <span>Women Zone</span>
                <h4>
                  Save 17% on <br />
                  Office Dress
                </h4>
                <a href="shop-grid-right.html">
                  Shop Now <i className="fi-rs-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let req = context.req;

  await pageLib.get(req, "", PageTypeId.Blogs, false);

  let blog = (
    await postService.getOne({
      langId: req.appData.languageId,
      typeId: PostTypeId.Blog,
      url: (context.params?.url ?? "") as string,
      statusId: StatusId.Active,
    })
  ).data;

  if (blog) {
    req.themeData.blog = blog;

    await viewLib.set(req, blog._id, blog.typeId);

    req.themeData.categories = (
      await postTermService.getMany({
        langId: req.appData.languageId,
        postTypeId: PostTypeId.Blog,
        typeId: [PostTermTypeId.Category],
        statusId: StatusId.Active,
        withPostCount: true,
      })
    ).data;
  }

  return {
    props: pageLib.getReturnData(req),
  };
}
