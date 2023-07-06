import React, {Component} from "react";
import {PagePropCommonDocument} from "types/pageProps";
import Image from "next/image";
import LinkUtil from "utils/link.util";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import imageSourceUtil from "utils/imageSource.util";
import {LanguageGetResultDocument} from "types/services/language";
import {NavigationGetResultDocument} from "types/services/navigation";

type PageState = {
    isNavbarSticky: boolean;
    navbarLinks: React.ReactNode
    languages: React.ReactNode
};

type PageProps = {} & PagePropCommonDocument<{}>;

export default class ComponentMobileNavbar extends Component<PageProps, PageState> {
    render() {
        return (
            <div className="mobile-header-active mobile-header-wrapper-style">
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-top">
                        <div className="mobile-header-logo">
                            <a href="index.html"><img src="assets/fonts/logo.svg" alt="logo"/></a>
                        </div>
                        <div className="mobile-menu-close close-style-wrap close-style-position-inherit">
                            <button className="close-style search-close">
                                <i className="icon-top"></i>
                                <i className="icon-bottom"></i>
                            </button>
                        </div>
                    </div>
                    <div className="mobile-header-content-area">
                        <div className="mobile-search search-style-3 mobile-header-border">
                            <form action="#">
                                <input type="text" placeholder="Search for items…"/>
                                    <button type="submit"><i className="fi-rs-search"></i></button>
                            </form>
                        </div>
                        <div className="mobile-menu-wrap mobile-header-border">
                            <div className="main-categori-wrap mobile-header-border">
                                <a className="categori-button-active-2" href="#">
                                    <span className="fi-rs-apps"></span> Browse Categories
                                </a>
                                <div className="categori-dropdown-wrap categori-dropdown-active-small">
                                    <ul>
                                        <li><a href="shop-grid-right.html"><i className="evara-font-dress"></i>Women's
                                            Clothing</a></li>
                                        <li><a href="shop-grid-right.html"><i className="evara-font-tshirt"></i>Men's
                                            Clothing</a></li>
                                        <li><a href="shop-grid-right.html"><i
                                            className="evara-font-smartphone"></i> Cellphones</a></li>
                                        <li><a href="shop-grid-right.html"><i className="evara-font-desktop"></i>Computer
                                            & Office</a></li>
                                        <li><a href="shop-grid-right.html"><i className="evara-font-cpu"></i>Consumer
                                            Electronics</a></li>
                                        <li><a href="shop-grid-right.html"><i className="evara-font-home"></i>Home &
                                            Garden</a></li>
                                        <li><a href="shop-grid-right.html"><i className="evara-font-high-heels"></i>Shoes</a>
                                        </li>
                                        <li><a href="shop-grid-right.html"><i className="evara-font-teddy-bear"></i>Mother
                                            & Kids</a></li>
                                        <li><a href="shop-grid-right.html"><i className="evara-font-kite"></i>Outdoor
                                            fun</a></li>
                                    </ul>
                                </div>
                            </div>
                            <nav>
                                <ul className="mobile-menu">
                                    <li className="menu-item-has-children"><span className="menu-expand"></span><a
                                        href="index.html">Home</a>
                                        <ul className="dropdown">
                                            <li><a href="index.html">Home 1</a></li>
                                            <li><a href="index-2.html">Home 2</a></li>
                                            <li><a href="index-3.html">Home 3</a></li>
                                            <li><a href="index-4.html">Home 4</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children"><span className="menu-expand"></span><a
                                        href="shop-grid-right.html">shop</a>
                                        <ul className="dropdown">
                                            <li><a href="shop-grid-right.html">Shop Grid – Right Sidebar</a></li>
                                            <li><a href="shop-grid-left.html">Shop Grid – Left Sidebar</a></li>
                                            <li><a href="shop-list-right.html">Shop List – Right Sidebar</a></li>
                                            <li><a href="shop-list-left.html">Shop List – Left Sidebar</a></li>
                                            <li><a href="shop-fullwidth.html">Shop - Wide</a></li>
                                            <li className="menu-item-has-children"><span className="menu-expand"></span><a
                                                href="#">Single Product</a>
                                                <ul className="dropdown">
                                                    <li><a href="shop-product-right.html">Product – Right Sidebar</a>
                                                    </li>
                                                    <li><a href="shop-product-left.html">Product – Left Sidebar</a></li>
                                                    <li><a href="shop-product-full.html">Product – No sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="shop-filter.html">Shop – Filter</a></li>
                                            <li><a href="shop-wishlist.html">Shop – Wishlist</a></li>
                                            <li><a href="shop-cart.html">Shop – Cart</a></li>
                                            <li><a href="shop-checkout.html">Shop – Checkout</a></li>
                                            <li><a href="shop-compare.html">Shop – Compare</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children"><span className="menu-expand"></span><a
                                        href="#">Mega menu</a>
                                        <ul className="dropdown">
                                            <li className="menu-item-has-children"><span className="menu-expand"></span><a
                                                href="#">Women's Fashion</a>
                                                <ul className="dropdown">
                                                    <li><a href="shop-product-right.html">Dresses</a></li>
                                                    <li><a href="shop-product-right.html">Blouses & Shirts</a></li>
                                                    <li><a href="shop-product-right.html">Hoodies & Sweatshirts</a></li>
                                                    <li><a href="shop-product-right.html">Women's Sets</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children"><span className="menu-expand"></span><a
                                                href="#">Men's Fashion</a>
                                                <ul className="dropdown">
                                                    <li><a href="shop-product-right.html">Jackets</a></li>
                                                    <li><a href="shop-product-right.html">Casual Faux Leather</a></li>
                                                    <li><a href="shop-product-right.html">Genuine Leather</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children"><span className="menu-expand"></span><a
                                                href="#">Technology</a>
                                                <ul className="dropdown">
                                                    <li><a href="shop-product-right.html">Gaming Laptops</a></li>
                                                    <li><a href="shop-product-right.html">Ultraslim Laptops</a></li>
                                                    <li><a href="shop-product-right.html">Tablets</a></li>
                                                    <li><a href="shop-product-right.html">Laptop Accessories</a></li>
                                                    <li><a href="shop-product-right.html">Tablet Accessories</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children"><span className="menu-expand"></span><a
                                        href="blog-category-fullwidth.html">Blog</a>
                                        <ul className="dropdown">
                                            <li><a href="blog-category-grid.html">Blog Category Grid</a></li>
                                            <li><a href="blog-category-list.html">Blog Category List</a></li>
                                            <li><a href="blog-category-big.html">Blog Category Big</a></li>
                                            <li><a href="blog-category-fullwidth.html">Blog Category Wide</a></li>
                                            <li className="menu-item-has-children"><span className="menu-expand"></span><a
                                                href="#">Single Product Layout</a>
                                                <ul className="dropdown">
                                                    <li><a href="blog-post-left.html">Left Sidebar</a></li>
                                                    <li><a href="blog-post-right.html">Right Sidebar</a></li>
                                                    <li><a href="blog-post-fullwidth.html">No Sidebar</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children"><span className="menu-expand"></span><a
                                        href="#">Pages</a>
                                        <ul className="dropdown">
                                            <li><a href="page-about.html">About Us</a></li>
                                            <li><a href="page-contact.html">Contact</a></li>
                                            <li><a href="page-account.html">My Account</a></li>
                                            <li><a href="page-login-register.html">login/register</a></li>
                                            <li><a href="page-purchase-guide.html">Purchase Guide</a></li>
                                            <li><a href="page-privacy-policy.html">Privacy Policy</a></li>
                                            <li><a href="page-terms.html">Terms of Service</a></li>
                                            <li><a href="page-404.html">404 Page</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children"><span className="menu-expand"></span><a
                                        href="#">Language</a>
                                        <ul className="dropdown">
                                            <li><a href="#">English</a></li>
                                            <li><a href="#">French</a></li>
                                            <li><a href="#">German</a></li>
                                            <li><a href="#">Spanish</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="mobile-header-info-wrap mobile-header-border">
                            <div className="single-mobile-header-info mt-30">
                                <a href="page-contact.html"> Our location </a>
                            </div>
                            <div className="single-mobile-header-info">
                                <a href="page-login-register.html">Log In / Sign Up </a>
                            </div>
                            <div className="single-mobile-header-info">
                                <a href="#">(+01) - 2345 - 6789 </a>
                            </div>
                        </div>
                        <div className="mobile-social-icon">
                            <h5 className="mb-15 text-grey-4">Follow Us</h5>
                            <a href="#"><img src="assets/fonts/icon-facebook.svg" /></a>
                            <a href="#"><img src="assets/fonts/icon-twitter.svg" /></a>
                            <a href="#"><img src="assets/fonts/icon-instagram.svg" /></a>
                            <a href="#"><img src="assets/fonts/icon-pinterest.svg" /></a>
                            <a href="#"><img src="assets/fonts/icon-youtube.svg" /></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}