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

export default class PageBlogURL extends Component<PageProps, PageState> {
  constructor(props: PageProps) {
    super(props);
  }

  render() {
    if (!this.props.themeData.blog) {
      return <ComponentError404 appData={this.props.appData} />;
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="product-detail accordion-detail">
              <div className="row mb-50">
                <div className="col-md-6 col-sm-12 col-xs-12">
                  <div className="detail-gallery">
                    <span className="zoom-icon">
                      <i className="fi-rs-search"></i>
                    </span>
                    <div className="product-image-slider">
                      <figure className="border-radius-10">
                        <img
                          src="images/product-16-2.jpg"
                          alt="product image"
                        />
                      </figure>
                      <figure className="border-radius-10">
                        <img
                          src="images/product-16-1.jpg"
                          alt="product image"
                        />
                      </figure>
                      <figure className="border-radius-10">
                        <img
                          src="images/product-16-3.jpg"
                          alt="product image"
                        />
                      </figure>
                      <figure className="border-radius-10">
                        <img
                          src="images/product-16-4.jpg"
                          alt="product image"
                        />
                      </figure>
                      <figure className="border-radius-10">
                        <img
                          src="images/product-16-5.jpg"
                          alt="product image"
                        />
                      </figure>
                      <figure className="border-radius-10">
                        <img
                          src="images/product-16-6.jpg"
                          alt="product image"
                        />
                      </figure>
                      <figure className="border-radius-10">
                        <img
                          src="images/product-16-7.jpg"
                          alt="product image"
                        />
                      </figure>
                    </div>
                    <div className="slider-nav-thumbnails pl-15 pr-15">
                      <div>
                        <img src="images/thumbnail-3.jpg" alt="product image" />
                      </div>
                      <div>
                        <img src="images/thumbnail-4.jpg" alt="product image" />
                      </div>
                      <div>
                        <img src="images/thumbnail-5.jpg" alt="product image" />
                      </div>
                      <div>
                        <img src="images/thumbnail-6.jpg" alt="product image" />
                      </div>
                      <div>
                        <img src="images/thumbnail-7.jpg" alt="product image" />
                      </div>
                      <div>
                        <img src="images/thumbnail-8.jpg" alt="product image" />
                      </div>
                      <div>
                        <img src="images/thumbnail-9.jpg" alt="product image" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12">
                  <div className="detail-info">
                    <h2 className="title-detail">
                      Colorful Pattern Shirts HD450
                    </h2>
                    <div className="product-detail-rating">
                      <div className="pro-details-brand">
                        <span>
                          {" "}
                          Brands: <a href="shop-grid-right.html">Bootstrap</a>
                        </span>
                      </div>
                      <div className="product-rate-cover text-end">
                        <div className="product-rate d-inline-block">
                          <div
                            className="product-rating"
                            style={{ width: "90%;" }}
                          ></div>
                        </div>
                        <span className="font-small ml-5 text-muted">
                          {" "}
                          (25 reviews)
                        </span>
                      </div>
                    </div>
                    <div className="clearfix product-price-cover">
                      <div className="product-price primary-color float-left">
                        <ins>
                          <span className="text-brand">$120.00</span>
                        </ins>
                        <ins>
                          <span className="old-price font-md ml-15">
                            $200.00
                          </span>
                        </ins>
                        <span className="save-price  font-md color3 ml-15">
                          25% Off
                        </span>
                      </div>
                    </div>
                    <div className="bt-1 border-color-1 mt-15 mb-15"></div>
                    <div className="short-desc mb-30">
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Aliquam rem officia, corrupti reiciendis minima
                        nisi modi, quasi, odio minus dolore impedit fuga eum
                        eligendi? Officia doloremque facere quia. Voluptatum,
                        accusantium!
                      </p>
                    </div>
                    <div className="product_sort_info font-xs mb-30">
                      <ul>
                        <li className="mb-10">
                          <i className="fi-rs-crown mr-5"></i> 1 Year AL Jazeera
                          Brand Warranty
                        </li>
                        <li className="mb-10">
                          <i className="fi-rs-refresh mr-5"></i> 30 Day Return
                          Policy
                        </li>
                        <li>
                          <i className="fi-rs-credit-card mr-5"></i> Cash on
                          Delivery available
                        </li>
                      </ul>
                    </div>
                    <div className="attr-detail attr-color mb-15">
                      <strong className="mr-10">Color</strong>
                      <ul className="list-filter color-filter">
                        <li>
                          <a href="#" data-color="Red">
                            <span className="product-color-red"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#" data-color="Yellow">
                            <span className="product-color-yellow"></span>
                          </a>
                        </li>
                        <li className="active">
                          <a href="#" data-color="White">
                            <span className="product-color-white"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#" data-color="Orange">
                            <span className="product-color-orange"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#" data-color="Cyan">
                            <span className="product-color-cyan"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#" data-color="Green">
                            <span className="product-color-green"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#" data-color="Purple">
                            <span className="product-color-purple"></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="attr-detail attr-size">
                      <strong className="mr-10">Size</strong>
                      <ul className="list-filter size-filter font-small">
                        <li>
                          <a href="#">S</a>
                        </li>
                        <li className="active">
                          <a href="#">M</a>
                        </li>
                        <li>
                          <a href="#">L</a>
                        </li>
                        <li>
                          <a href="#">XL</a>
                        </li>
                        <li>
                          <a href="#">XXL</a>
                        </li>
                      </ul>
                    </div>
                    <div className="bt-1 border-color-1 mt-30 mb-30"></div>
                    <div className="detail-extralink">
                      <div className="detail-qty border radius">
                        <a href="#" className="qty-down">
                          <i className="fi-rs-angle-small-down"></i>
                        </a>
                        <span className="qty-val">1</span>
                        <a href="#" className="qty-up">
                          <i className="fi-rs-angle-small-up"></i>
                        </a>
                      </div>
                      <div className="product-extra-link2">
                        <button
                          type="submit"
                          className="button button-add-to-cart"
                        >
                          Add to cart
                        </button>
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
                    <ul className="product-meta font-xs color-grey mt-50">
                      <li className="mb-5">
                        SKU: <a href="#">FWM15VKT</a>
                      </li>
                      <li className="mb-5">
                        Tags:{" "}
                        <a href="#" rel="tag">
                          Cloth
                        </a>
                        ,{" "}
                        <a href="#" rel="tag">
                          Women
                        </a>
                        ,{" "}
                        <a href="#" rel="tag">
                          Dress
                        </a>{" "}
                      </li>
                      <li>
                        Availability:
                        <span className="in-stock text-success ml-5">
                          8 Items In Stock
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-10 m-auto entry-main-content">
                  <h2 className="section-title style-1 mb-30">Description</h2>
                  <div className="description mb-50">
                    <p>
                      Uninhibited carnally hired played in whimpered dear
                      gorilla koala depending and much yikes off far quetzal
                      goodness and from for grimaced goodness unaccountably and
                      meadowlark near unblushingly crucial scallop tightly
                      neurotic hungrily some and dear furiously this apart.
                    </p>
                    <p>
                      Spluttered narrowly yikes left moth in yikes bowed this
                      that grizzly much hello on spoon-fed that alas rethought
                      much decently richly and wow against the frequent fluidly
                      at formidable acceptably flapped besides and much circa
                      far over the bucolically hey precarious goldfinch mastodon
                      goodness gnashed a jellyfish and one however because.
                    </p>
                    <ul className="product-more-infor mt-30">
                      <li>
                        <span>Type Of Packing</span> Bottle
                      </li>
                      <li>
                        <span>Color</span> Green, Pink, Powder Blue, Purple
                      </li>
                      <li>
                        <span>Quantity Per Case</span> 100ml
                      </li>
                      <li>
                        <span>Ethyl Alcohol</span> 70%
                      </li>
                      <li>
                        <span>Piece In One</span> Carton
                      </li>
                    </ul>
                    <hr className="wp-block-separator is-style-dots" />
                    <p>
                      Laconic overheard dear woodchuck wow this outrageously
                      taut beaver hey hello far meadowlark imitatively
                      egregiously hugged that yikes minimally unanimous pouted
                      flirtatiously as beaver beheld above forward energetic
                      across this jeepers beneficently cockily less a the
                      raucously that magic upheld far so the this where crud
                      then below after jeez enchanting drunkenly more much wow
                      callously irrespective limpet.
                    </p>
                    <h4 className="mt-30">Packaging & Delivery</h4>
                    <hr className="wp-block-separator is-style-wide" />
                    <p>
                      Less lion goodness that euphemistically robin
                      expeditiously bluebird smugly scratched far while thus
                      cackled sheepishly rigid after due one assenting regarding
                      censorious while occasional or this more crane went more
                      as this less much amid overhung anathematic because much
                      held one exuberantly sheep goodness so where rat wry well
                      concomitantly.
                    </p>
                    <p>
                      Scallop or far crud plain remarkably far by thus far
                      iguana lewd precociously and and less rattlesnake contrary
                      caustic wow this near alas and next and pled the yikes
                      articulate about as less cackled dalmatian in much less
                      well jeering for the thanks blindly sentimental whimpered
                      less across objectively fanciful grimaced wildly some wow
                      and rose jeepers outgrew lugubrious luridly irrationally
                      attractively dachshund.
                    </p>
                  </div>
                  <h3 className="section-title style-1 mb-30">
                    Additional info
                  </h3>
                  <table className="font-md mb-30">
                    <tbody>
                      <tr className="stand-up">
                        <th>Stand Up</th>
                        <td>
                          <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                        </td>
                      </tr>
                      <tr className="folded-wo-wheels">
                        <th>Folded (w/o wheels)</th>
                        <td>
                          <p>32.5″L x 18.5″W x 16.5″H</p>
                        </td>
                      </tr>
                      <tr className="folded-w-wheels">
                        <th>Folded (w/ wheels)</th>
                        <td>
                          <p>32.5″L x 24″W x 18.5″H</p>
                        </td>
                      </tr>
                      <tr className="door-pass-through">
                        <th>Door Pass Through</th>
                        <td>
                          <p>24</p>
                        </td>
                      </tr>
                      <tr className="frame">
                        <th>Frame</th>
                        <td>
                          <p>Aluminum</p>
                        </td>
                      </tr>
                      <tr className="weight-wo-wheels">
                        <th>Weight (w/o wheels)</th>
                        <td>
                          <p>20 LBS</p>
                        </td>
                      </tr>
                      <tr className="weight-capacity">
                        <th>Weight Capacity</th>
                        <td>
                          <p>60 LBS</p>
                        </td>
                      </tr>
                      <tr className="width">
                        <th>Width</th>
                        <td>
                          <p>24″</p>
                        </td>
                      </tr>
                      <tr className="handle-height-ground-to-handle">
                        <th>Handle height (ground to handle)</th>
                        <td>
                          <p>37-45″</p>
                        </td>
                      </tr>
                      <tr className="wheels">
                        <th>Wheels</th>
                        <td>
                          <p>12″ air / wide track slick tread</p>
                        </td>
                      </tr>
                      <tr className="seat-back-height">
                        <th>Seat back height</th>
                        <td>
                          <p>21.5″</p>
                        </td>
                      </tr>
                      <tr className="head-room-inside-canopy">
                        <th>Head room (inside canopy)</th>
                        <td>
                          <p>25″</p>
                        </td>
                      </tr>
                      <tr className="pa_color">
                        <th>Color</th>
                        <td>
                          <p>Black, Blue, Red, White</p>
                        </td>
                      </tr>
                      <tr className="pa_size">
                        <th>Size</th>
                        <td>
                          <p>M, S</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="social-icons single-share">
                    <ul className="text-grey-5 d-inline-block">
                      <li>
                        <strong className="mr-10">Share this:</strong>
                      </li>
                      <li className="social-facebook">
                        <a href="#">
                          <img src="fonts/icon-facebook.svg" alt="" />
                        </a>
                      </li>
                      <li className="social-twitter">
                        {" "}
                        <a href="#">
                          <img src="fonts/icon-twitter.svg" alt="" />
                        </a>
                      </li>
                      <li className="social-instagram">
                        <a href="#">
                          <img src="fonts/icon-instagram.svg" alt="" />
                        </a>
                      </li>
                      <li className="social-linkedin">
                        <a href="#">
                          <img src="fonts/icon-pinterest.svg" alt="" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="section-title style-1 mb-30 mt-30">
                    Reviews (3)
                  </h3>
                  <div className="comments-area style-2">
                    <div className="row">
                      <div className="col-lg-8">
                        <h4 className="mb-30">Customer questions & answers</h4>
                        <div className="comment-list">
                          <div className="single-comment justify-content-between d-flex">
                            <div className="user justify-content-between d-flex">
                              <div className="thumb text-center">
                                <img src="images/avatar-6.jpg" alt="" />
                                <h6>
                                  <a href="#">Jacky Chan</a>
                                </h6>
                                <p className="font-xxs">Since 2012</p>
                              </div>
                              <div className="desc">
                                <div className="product-rate d-inline-block">
                                  <div
                                    className="product-rating"
                                    style={{ width: "90%;" }}
                                  ></div>
                                </div>
                                <p>
                                  Thank you very fast shipping from Poland only
                                  3days.
                                </p>
                                <div className="d-flex justify-content-between">
                                  <div className="d-flex align-items-center">
                                    <p className="font-xs mr-30">
                                      December 4, 2020 at 3:12 pm{" "}
                                    </p>
                                    <a
                                      href="#"
                                      className="text-brand btn-reply"
                                    >
                                      Reply{" "}
                                      <i className="fi-rs-arrow-right"></i>{" "}
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="single-comment justify-content-between d-flex">
                            <div className="user justify-content-between d-flex">
                              <div className="thumb text-center">
                                <img src="images/avatar-7.jpg" alt="" />
                                <h6>
                                  <a href="#">Ana Rosie</a>
                                </h6>
                                <p className="font-xxs">Since 2008</p>
                              </div>
                              <div className="desc">
                                <div className="product-rate d-inline-block">
                                  <div
                                    className="product-rating"
                                    style={{ width: "90%;" }}
                                  ></div>
                                </div>
                                <p>Great low price and works well.</p>
                                <div className="d-flex justify-content-between">
                                  <div className="d-flex align-items-center">
                                    <p className="font-xs mr-30">
                                      December 4, 2020 at 3:12 pm{" "}
                                    </p>
                                    <a
                                      href="#"
                                      className="text-brand btn-reply"
                                    >
                                      Reply{" "}
                                      <i className="fi-rs-arrow-right"></i>{" "}
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="single-comment justify-content-between d-flex">
                            <div className="user justify-content-between d-flex">
                              <div className="thumb text-center">
                                <img src="images/avatar-8.jpg" alt="" />
                                <h6>
                                  <a href="#">Steven Keny</a>
                                </h6>
                                <p className="font-xxs">Since 2010</p>
                              </div>
                              <div className="desc">
                                <div className="product-rate d-inline-block">
                                  <div
                                    className="product-rating"
                                    style={{ width: "90%;" }}
                                  ></div>
                                </div>
                                <p>
                                  Authentic and Beautiful, Love these way more
                                  than ever expected They are Great earphones
                                </p>
                                <div className="d-flex justify-content-between">
                                  <div className="d-flex align-items-center">
                                    <p className="font-xs mr-30">
                                      December 4, 2020 at 3:12 pm{" "}
                                    </p>
                                    <a
                                      href="#"
                                      className="text-brand btn-reply"
                                    >
                                      Reply{" "}
                                      <i className="fi-rs-arrow-right"></i>{" "}
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <h4 className="mb-30">Customer reviews</h4>
                        <div className="d-flex mb-30">
                          <div className="product-rate d-inline-block mr-15">
                            <div
                              className="product-rating"
                              style={{ width: "90%;" }}
                            ></div>
                          </div>
                          <h6>4.8 out of 5</h6>
                        </div>
                        <div className="progress">
                          <span>5 star</span>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "50%;" }}
                            aria-valuenow={50}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            50%
                          </div>
                        </div>
                        <div className="progress">
                          <span>4 star</span>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "25%;" }}
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            25%
                          </div>
                        </div>
                        <div className="progress">
                          <span>3 star</span>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "45%;" }}
                            aria-valuenow={45}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            45%
                          </div>
                        </div>
                        <div className="progress">
                          <span>2 star</span>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "65%;" }}
                            aria-valuenow={65}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            65%
                          </div>
                        </div>
                        <div className="progress mb-30">
                          <span>1 star</span>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "85%;" }}
                            aria-valuenow={85}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            85%
                          </div>
                        </div>
                        <a href="#" className="font-xs text-muted">
                          How are ratings calculated?
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="comment-form">
                    <h4 className="mb-15">Add a review</h4>
                    <div className="product-rate d-inline-block mb-30"></div>
                    <div className="row">
                      <div className="col-lg-8 col-md-12">
                        <form
                          className="form-contact comment_form"
                          action="#"
                          id="commentForm"
                        >
                          <div className="row">
                            <div className="col-12">
                              <div className="form-group">
                                <textarea
                                  className="form-control w-100"
                                  name="comment"
                                  id="comment"
                                  cols={30}
                                  rows={9}
                                  placeholder="Write Comment"
                                ></textarea>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">
                                <input
                                  className="form-control"
                                  name="name"
                                  id="name"
                                  type="text"
                                  placeholder="Name"
                                />
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">
                                <input
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  type="email"
                                  placeholder="Email"
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group">
                                <input
                                  className="form-control"
                                  name="website"
                                  id="website"
                                  type="text"
                                  placeholder="Website"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <button
                              type="submit"
                              className="button button-contactForm"
                            >
                              Submit Review
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-60">
                <div className="col-12">
                  <h3 className="section-title style-1 mb-30">
                    Related products
                  </h3>
                </div>
                <div className="col-12">
                  <div className="row related-products">
                    <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                      <div className="product-cart-wrap small hover-up">
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <a href="shop-product-right.html" tabIndex={0}>
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
                              className="action-btn small hover-up"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="fi-rs-search"></i>
                            </a>
                            <a
                              aria-label="Add To Wishlist"
                              className="action-btn small hover-up"
                              href="shop-wishlist.html"
                              tabIndex={0}
                            >
                              <i className="fi-rs-heart"></i>
                            </a>
                            <a
                              aria-label="Compare"
                              className="action-btn small hover-up"
                              href="shop-compare.html"
                              tabIndex={0}
                            >
                              <i className="fi-rs-shuffle"></i>
                            </a>
                          </div>
                          <div className="product-badges product-badges-position product-badges-mrg">
                            <span className="hot">Hot</span>
                          </div>
                        </div>
                        <div className="product-content-wrap">
                          <h2>
                            <a href="shop-product-right.html" tabIndex={0}>
                              Ulstra Bass Headphone
                            </a>
                          </h2>
                          <div className="rating-result" title="90%">
                            <span></span>
                          </div>
                          <div className="product-price">
                            <span>$238.85 </span>
                            <span className="old-price">$245.8</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                      <div className="product-cart-wrap small hover-up">
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <a href="shop-product-right.html" tabIndex={0}>
                              <img
                                className="default-img"
                                src="images/product-3-1.jpg"
                                alt=""
                              />
                              <img
                                className="hover-img"
                                src="images/product-4-2.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="product-action-1">
                            <a
                              aria-label="Quick view"
                              className="action-btn small hover-up"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal
"
                            >
                              <i className="fi-rs-search"></i>
                            </a>
                            <a
                              aria-label="Add To Wishlist"
                              className="action-btn small hover-up"
                              href="shop-wishlist.html"
                              tabIndex={0}
                            >
                              <i className="fi-rs-heart"></i>
                            </a>
                            <a
                              aria-label="Compare"
                              className="action-btn small hover-up"
                              href="shop-compare.html"
                              tabIndex={0}
                            >
                              <i className="fi-rs-shuffle"></i>
                            </a>
                          </div>
                          <div className="product-badges product-badges-position product-badges-mrg">
                            <span className="sale">-12%</span>
                          </div>
                        </div>
                        <div className="product-content-wrap">
                          <h2>
                            <a href="shop-product-right.html" tabIndex={0}>
                              Smart Bluetooth Speaker
                            </a>
                          </h2>
                          <div className="rating-result" title="90%">
                            <span></span>
                          </div>
                          <div className="product-price">
                            <span>$138.85 </span>
                            <span className="old-price">$145.8</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                      <div className="product-cart-wrap small hover-up">
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <a href="shop-product-right.html" tabIndex={0}>
                              <img
                                className="default-img"
                                src="images/product-4-1.jpg"
                                alt=""
                              />
                              <img
                                className="hover-img"
                                src="images/product-4-2.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="product-action-1">
                            <a
                              aria-label="Quick view"
                              className="action-btn small hover-up"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal
"
                            >
                              <i className="fi-rs-search"></i>
                            </a>
                            <a
                              aria-label="Add To Wishlist"
                              className="action-btn small hover-up"
                              href="shop-wishlist.html"
                              tabIndex={0}
                            >
                              <i className="fi-rs-heart"></i>
                            </a>
                            <a
                              aria-label="Compare"
                              className="action-btn small hover-up"
                              href="shop-compare.html"
                              tabIndex={0}
                            >
                              <i className="fi-rs-shuffle"></i>
                            </a>
                          </div>
                          <div className="product-badges product-badges-position product-badges-mrg">
                            <span className="new">New</span>
                          </div>
                        </div>
                        <div className="product-content-wrap">
                          <h2>
                            <a href="shop-product-right.html" tabIndex={0}>
                              HomeSpeak 12UEA Goole
                            </a>
                          </h2>
                          <div className="rating-result" title="90%">
                            <span></span>
                          </div>
                          <div className="product-price">
                            <span>$738.85 </span>
                            <span className="old-price">$1245.8</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                      <div className="product-cart-wrap small hover-up mb-0">
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <a href="shop-product-right.html" tabIndex={0}>
                              <img
                                className="default-img"
                                src="images/product-5-1.jpg"
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
                              className="action-btn small hover-up"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal
"
                            >
                              <i className="fi-rs-search"></i>
                            </a>
                            <a
                              aria-label="Add To Wishlist"
                              className="action-btn small hover-up"
                              href="shop-wishlist.html"
                              tabIndex={0}
                            >
                              <i className="fi-rs-heart"></i>
                            </a>
                            <a
                              aria-label="Compare"
                              className="action-btn small hover-up"
                              href="shop-compare.html"
                              tabIndex={0}
                            >
                              <i className="fi-rs-shuffle"></i>
                            </a>
                          </div>
                          <div className="product-badges product-badges-position product-badges-mrg">
                            <span className="hot">Hot</span>
                          </div>
                        </div>
                        <div className="product-content-wrap">
                          <h2>
                            <a href="shop-product-right.html" tabIndex={0}>
                              Dadua Camera 4K 2022EF
                            </a>
                          </h2>
                          <div className="rating-result" title="90%">
                            <span></span>
                          </div>
                          <div className="product-price">
                            <span>$89.8 </span>
                            <span className="old-price">$98.8</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="banner-img banner-big wow fadeIn f-none animated mt-50">
                <img
                  className="border-radius-10"
                  src="images/banner-4.png"
                  alt=""
                />
                <div className="banner-text">
                  <h4 className="mb-15 mt-40">Repair Services</h4>
                  <h2 className="fw-600 mb-20">
                    We're an Apple <br />
                    Authorised Service Provider
                  </h2>
                </div>
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
