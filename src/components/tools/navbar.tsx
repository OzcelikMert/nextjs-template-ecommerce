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

export default class ComponentNavbar extends Component<PageProps, PageState> {
    constructor(props: PageProps) {
        super(props);
        this.state = {
            isNavbarSticky: false,
            navbarLinks: this.props.themeData.navigations.map((navigation) =>
                <this.NavLink nav={navigation}/>),
            languages: (<this.Languages/>)
        };
    }

    componentDidMount() {
        this.setEvents();
    }

    componentWillUnmount() {
        this.clearEvents();
    }

    setEvents() {
        window.addEventListener("scroll", () => this.handleScroll());
    }

    clearEvents() {
        window.removeEventListener("scroll", () => this.handleScroll());
    }

    handleScroll() {
        if (window.scrollY > 300) {
            if (!this.state.isNavbarSticky) {
                this.setState({
                    isNavbarSticky: true,
                });
            }
        } else {
            if (this.state.isNavbarSticky) {
                this.setState({
                    isNavbarSticky: false,
                });
            }
        }
    }

    NavLink = (props: { nav: NavigationGetResultDocument, mainId?: string }) => {
        let self = this;
        if (props.nav.mainId?._id != props.mainId) return null;
        let subNavs = this.props.themeData.navigations.findMulti("mainId._id", props.nav._id);

        function DropDown() {
            function Item(dropDownItemProps: NavigationGetResultDocument) {
                let dropDownSubNavs = self.props.themeData.navigations.findMulti("mainId._id", dropDownItemProps._id);
                return dropDownSubNavs.length > 0
                    ? <self.NavLink nav={dropDownItemProps} mainId={props.nav._id}/>
                    :
                    <NavDropdown.Item href={LinkUtil.target(self.props.appData, dropDownItemProps.contents?.url || "")}>
                        {dropDownItemProps.contents?.title}
                    </NavDropdown.Item>

            }

            return (
                <NavDropdown title={props.nav.contents?.title} id={props.nav._id} drop={props.mainId ? "end" : "down"}>
                    {
                        subNavs.map(subNav => <Item {...subNav} />)
                    }
                </NavDropdown>
            );
        }

        function Link() {
            return (<Nav.Link
                href={LinkUtil.target(self.props.appData, props.nav.contents?.url || "")}>{props.nav.contents?.title}</Nav.Link>)
        }

        return subNavs.length > 0
            ? <DropDown/>
            : <Link/>;
    };

    Languages = () => {
        let self = this;
        let current = this.props.appData.languages.findSingle("_id", this.props.appData.languageId);

        function Item(props: LanguageGetResultDocument) {
            return (
                <div>
                    <div className="d-inline-block">
                        <Image
                            className="img-fluid flag-size"
                            src={self.props.appData.apiPath.uploads.flags + props.image}
                            alt={props.title}
                            width={35}
                            height={35}
                        />
                    </div>
                    <div className="d-inline-block ms-1">
                        <span>{props.title}</span>
                    </div>
                </div>
            );
        }


        return current ? (
            <NavDropdown title={<Item {...current} />} id="languages">
                {
                    this.props.appData.languages.map((lang) =>
                        this.props.appData.languageId != lang._id
                            ? (<NavDropdown.Item href={LinkUtil.changeLanguage(this.props.appData, lang)}>
                                {
                                    <Item {...lang}/>
                                }
                            </NavDropdown.Item>) : null
                    )
                }
            </NavDropdown>
        ) : null;
    };

    render() {
        return (
            <div className="header-bottom header-bottom-bg-color sticky-bar">
                <div className="container">
                    <div className="header-wrap header-space-between position-relative">
                        <div className="logo logo-width-1 d-block d-lg-none">
                            <a href="index.html"><img src="fonts/logo.svg" alt="logo"/></a>
                        </div>
                        <div className="header-nav d-none d-lg-flex">
                            <div className="main-categori-wrap d-none d-lg-block">
                                <a className="categori-button-active" href="#">
                                    <span className="fi-rs-apps"></span> Browse Categories
                                </a>
                                <div className="categori-dropdown-wrap categori-dropdown-active-large">
                                    <ul>
                                        <li className="has-children">
                                            <a href="shop-grid-right.html"><i className="evara-font-dress"></i>Women's
                                                Clothing</a>
                                            <div className="dropdown-menu">
                                                <ul className="mega-menu d-lg-flex">
                                                    <li className="mega-menu-col col-lg-7">
                                                        <ul className="d-lg-flex">
                                                            <li className="mega-menu-col col-lg-6">
                                                                <ul>
                                                                    <li><span
                                                                        className="submenu-title">Hot & Trending</span>
                                                                    </li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Dresses</a></li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Blouses & Shirts</a></li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Hoodies & Sweatshirts</a></li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Women's Sets</a></li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Suits & Blazers</a></li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Bodysuits</a></li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Tanks & Camis</a></li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Coats & Jackets</a></li>
                                                                </ul>
                                                            </li>
                                                            <li className="mega-menu-col col-lg-6">
                                                                <ul>
                                                                    <li><span className="submenu-title">Bottoms</span>
                                                                    </li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Leggings</a></li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Skirts</a></li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Shorts</a></li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Jeans</a></li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Pants & Capris</a></li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Bikini Sets</a></li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Cover-Ups</a></li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Swimwear</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="mega-menu-col col-lg-5">
                                                        <div className="header-banner2">
                                                            <img src="images/menu-banner-2.jpg" alt="menu_banner1"/>
                                                                <div className="banne_info">
                                                                    <h6>10% Off</h6>
                                                                    <h4>New Arrival</h4>
                                                                    <a href="#">Shop now</a>
                                                                </div>
                                                        </div>
                                                        <div className="header-banner2">
                                                            <img src="images/menu-banner-3.jpg" alt="menu_banner2" />
                                                                <div className="banne_info">
                                                                    <h6>15% Off</h6>
                                                                    <h4>Hot Deals</h4>
                                                                    <a href="#">Shop now</a>
                                                                </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="has-children">
                                            <a href="shop-grid-right.html"><i className="evara-font-tshirt"></i>Men's
                                                Clothing</a>
                                            <div className="dropdown-menu">
                                                <ul className="mega-menu d-lg-flex">
                                                    <li className="mega-menu-col col-lg-7">
                                                        <ul className="d-lg-flex">
                                                            <li className="mega-menu-col col-lg-6">
                                                                <ul>
                                                                    <li><span
                                                                        className="submenu-title">Jackets & Coats</span>
                                                                    </li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Down Jackets</a></li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Jackets</a></li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Parkas</a></li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Faux Leather Coats</a></li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Trench</a></li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Wool & Blends</a></li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Vests & Waistcoats</a></li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Leather Coats</a></li>
                                                                </ul>
                                                            </li>
                                                            <li className="mega-menu-col col-lg-6">
                                                                <ul>
                                                                    <li><span
                                                                        className="submenu-title">Suits & Blazers</span>
                                                                    </li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Blazers</a></li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Suit Jackets</a></li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Suit Pants</a></li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Suits</a></li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Vests</a></li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Tailor-made Suits</a></li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Cover-Ups</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="mega-menu-col col-lg-5">
                                                        <div className="header-banner2">
                                                            <img src="images/menu-banner-4.jpg" alt="menu_banner1"/>
                                                                <div className="banne_info">
                                                                    <h6>10% Off</h6>
                                                                    <h4>New Arrival</h4>
                                                                    <a href="#">Shop now</a>
                                                                </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="has-children">
                                            <a href="shop-grid-right.html"><i
                                                className="evara-font-smartphone"></i> Cellphones</a>
                                            <div className="dropdown-menu">
                                                <ul className="mega-menu d-lg-flex">
                                                    <li className="mega-menu-col col-lg-7">
                                                        <ul className="d-lg-flex">
                                                            <li className="mega-menu-col col-lg-6">
                                                                <ul>
                                                                    <li><span
                                                                        className="submenu-title">Hot & Trending</span>
                                                                    </li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Cellphones</a></li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">iPhones</a></li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Refurbished Phones</a></li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Mobile Phone</a></li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Mobile Phone Parts</a></li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Phone Bags & Cases</a></li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Communication Equipments</a></li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Walkie Talkie</a></li>
                                                                </ul>
                                                            </li>
                                                            <li className="mega-menu-col col-lg-6">
                                                                <ul>
                                                                    <li><span
                                                                        className="submenu-title">Accessories</span>
                                                                    </li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Screen Protectors</a></li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Wire Chargers</a></li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Wireless Chargers</a></li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Car Chargers</a></li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Power Bank</a></li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Armbands</a></li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Dust Plug</a></li>
                                                                    <li><a className="dropdown-item nav-link nav_item"
                                                                           href="#">Signal Boosters</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="mega-menu-col col-lg-5">
                                                        <div className="header-banner2">
                                                            <img src="images/menu-banner-5.jpg" alt="menu_banner1"/>
                                                                <div className="banne_info">
                                                                    <h6>10% Off</h6>
                                                                    <h4>New Arrival</h4>
                                                                    <a href="#">Shop now</a>
                                                                </div>
                                                        </div>
                                                        <div className="header-banner2">
                                                            <img src="images/menu-banner-6.jpg" alt="menu_banner2"/>
                                                                <div className="banne_info">
                                                                    <h6>15% Off</h6>
                                                                    <h4>Hot Deals</h4>
                                                                    <a href="#">Shop now</a>
                                                                </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li><a href="shop-grid-right.html"><i className="evara-font-desktop"></i>Computer
                                            & Office</a></li>
                                        <li><a href="shop-grid-right.html"><i className="evara-font-cpu"></i>Consumer
                                            Electronics</a></li>
                                        <li><a href="shop-grid-right.html"><i className="evara-font-diamond"></i>Jewelry
                                            & Accessories</a></li>
                                        <li><a href="shop-grid-right.html"><i className="evara-font-home"></i>Home &
                                            Garden</a></li>
                                        <li><a href="shop-grid-right.html"><i className="evara-font-high-heels"></i>Shoes</a>
                                        </li>
                                        <li><a href="shop-grid-right.html"><i className="evara-font-teddy-bear"></i>Mother
                                            & Kids</a></li>
                                        <li><a href="shop-grid-right.html"><i className="evara-font-kite"></i>Outdoor
                                            fun</a></li>
                                        <li>
                                            <ul className="more_slide_open" style={{display: "none"}}>
                                                <li><a href="shop-grid-right.html"><i
                                                    className="evara-font-desktop"></i>Beauty, Health</a></li>
                                                <li><a href="shop-grid-right.html"><i className="evara-font-cpu"></i>Bags
                                                    and Shoes</a></li>
                                                <li><a href="shop-grid-right.html"><i
                                                    className="evara-font-diamond"></i>Consumer Electronics</a></li>
                                                <li><a href="shop-grid-right.html"><i className="evara-font-home"></i>Automobiles
                                                    & Motorcycles</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <div className="more_categories">Show more...</div>
                                </div>
                            </div>
                            <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block">
                                <nav>
                                    <ul>
                                        <li><a className="active" href="index.html">Home <i
                                            className="fi-rs-angle-down"></i></a>
                                            <ul className="sub-menu">
                                                <li><a href="index.html">Home 1</a></li>
                                                <li><a href="index-2.html">Home 2</a></li>
                                                <li><a href="index-3.html">Home 3</a></li>
                                                <li><a href="index-4.html">Home 4</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="page-about.html">About</a>
                                        </li>
                                        <li><a href="shop-grid-right.html">Shop <i className="fi-rs-angle-down"></i></a>
                                            <ul className="sub-menu">
                                                <li><a href="shop-grid-right.html">Shop Grid – Right Sidebar</a></li>
                                                <li><a href="shop-grid-left.html">Shop Grid – Left Sidebar</a></li>
                                                <li><a href="shop-list-right.html">Shop List – Right Sidebar</a></li>
                                                <li><a href="shop-list-left.html">Shop List – Left Sidebar</a></li>
                                                <li><a href="shop-fullwidth.html">Shop - Wide</a></li>
                                                <li><a href="#">Single Product <i className="fi-rs-angle-right"></i></a>
                                                    <ul className="level-menu">
                                                        <li><a href="shop-product-right.html">Product – Right
                                                            Sidebar</a></li>
                                                        <li><a href="shop-product-left.html">Product – Left Sidebar</a>
                                                        </li>
                                                        <li><a href="shop-product-full.html">Product – No sidebar</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li><a href="shop-filter.html">Shop – Filter</a></li>
                                                <li><a href="shop-wishlist.html">Shop – Wishlist</a></li>
                                                <li><a href="shop-cart.html">Shop – Cart</a></li>
                                                <li><a href="shop-checkout.html">Shop – Checkout</a></li>
                                                <li><a href="shop-compare.html">Shop – Compare</a></li>
                                            </ul>
                                        </li>
                                        <li className="position-static"><a href="#">Mega menu <i
                                            className="fi-rs-angle-down"></i></a>
                                            <ul className="mega-menu">
                                                <li className="sub-mega-menu sub-mega-menu-width-22">
                                                    <a className="menu-title" href="#">Women's Fashion</a>
                                                    <ul>
                                                        <li><a href="shop-product-right.html">Dresses</a></li>
                                                        <li><a href="shop-product-right.html">Blouses & Shirts</a></li>
                                                        <li><a href="shop-product-right.html">Hoodies & Sweatshirts</a>
                                                        </li>
                                                        <li><a href="shop-product-right.html">Wedding Dresses</a></li>
                                                        <li><a href="shop-product-right.html">Prom Dresses</a></li>
                                                        <li><a href="shop-product-right.html">Cosplay Costumes</a></li>
                                                    </ul>
                                                </li>
                                                <li className="sub-mega-menu sub-mega-menu-width-22">
                                                    <a className="menu-title" href="#">Men's Fashion</a>
                                                    <ul>
                                                        <li><a href="shop-product-right.html">Jackets</a></li>
                                                        <li><a href="shop-product-right.html">Casual Faux Leather</a>
                                                        </li>
                                                        <li><a href="shop-product-right.html">Genuine Leather</a></li>
                                                        <li><a href="shop-product-right.html">Casual Pants</a></li>
                                                        <li><a href="shop-product-right.html">Sweatpants</a></li>
                                                        <li><a href="shop-product-right.html">Harem Pants</a></li>
                                                    </ul>
                                                </li>
                                                <li className="sub-mega-menu sub-mega-menu-width-22">
                                                    <a className="menu-title" href="#">Technology</a>
                                                    <ul>
                                                        <li><a href="shop-product-right.html">Gaming Laptops</a></li>
                                                        <li><a href="shop-product-right.html">Ultraslim Laptops</a></li>
                                                        <li><a href="shop-product-right.html">Tablets</a></li>
                                                        <li><a href="shop-product-right.html">Laptop Accessories</a>
                                                        </li>
                                                        <li><a href="shop-product-right.html">Tablet Accessories</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="sub-mega-menu sub-mega-menu-width-34">
                                                    <div className="menu-banner-wrap">
                                                        <a href="shop-product-right.html"><img
                                                            src="images/menu-banner.jpg" alt="Evara"/></a>
                                                        <div className="menu-banner-content">
                                                            <h4>Hot deals</h4>
                                                            <h3>Don't miss<br/> Trending</h3>
                                                            <div className="menu-banner-price">
                                                                <span
                                                                    className="new-price text-success">Save to 50%</span>
                                                            </div>
                                                            <div className="menu-banner-btn">
                                                                <a href="shop-product-right.html">Shop now</a>
                                                            </div>
                                                        </div>
                                                        <div className="menu-banner-discount">
                                                            <h3>
                                                                <span>35%</span>
                                                                off
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="blog-category-grid.html">Blog <i className="fi-rs-angle-down"></i></a>
                                            <ul className="sub-menu">
                                                <li><a href="blog-category-grid.html">Blog Category Grid</a></li>
                                                <li><a href="blog-category-list.html">Blog Category List</a></li>
                                                <li><a href="blog-category-big.html">Blog Category Big</a></li>
                                                <li><a href="blog-category-fullwidth.html">Blog Category Wide</a></li>
                                                <li><a href="#">Single Post <i className="fi-rs-angle-right"></i></a>
                                                    <ul className="level-menu level-menu-modify">
                                                        <li><a href="blog-post-left.html">Left Sidebar</a></li>
                                                        <li><a href="blog-post-right.html">Right Sidebar</a></li>
                                                        <li><a href="blog-post-fullwidth.html">No Sidebar</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Pages <i className="fi-rs-angle-down"></i></a>
                                            <ul className="sub-menu">
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
                                        <li>
                                            <a href="page-contact.html">Contact</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="hotline d-none d-lg-block">
                            <p><i className="fi-rs-headset"></i><span>Hotline</span> 1900 - 888 </p>
                        </div>
                        <p className="mobile-promotion">Happy <span className="text-brand">Mother's Day</span>. Big Sale
                            Up to 40%</p>
                        <div className="header-action-right d-block d-lg-none">
                            <div className="header-action-2">
                                <div className="header-action-icon-2">
                                    <a href="shop-wishlist.html">
                                        <img alt="Evara" src="fonts/icon-heart.svg"/>
                                            <span className="pro-count white">4</span>
                                    </a>
                                </div>
                                <div className="header-action-icon-2">
                                    <a className="mini-cart-icon" href="shop-cart.html">
                                        <img alt="Evara" src="fonts/icon-cart.svg"/>
                                            <span className="pro-count white">2</span>
                                    </a>
                                    <div className="cart-dropdown-wrap cart-dropdown-hm2">
                                        <ul>
                                            <li>
                                                <div className="shopping-cart-img">
                                                    <a href="shop-product-right.html"><img alt="Evara"
                                                                                           src="images/thumbnail-3.jpg"/></a>
                                                </div>
                                                <div className="shopping-cart-title">
                                                    <h4><a href="shop-product-right.html">Plain Striola Shirts</a></h4>
                                                    <h3><span>1 × </span>$800.00</h3>
                                                </div>
                                                <div className="shopping-cart-delete">
                                                    <a href="#"><i className="fi-rs-cross-small"></i></a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="shopping-cart-img">
                                                    <a href="shop-product-right.html"><img alt="Evara"
                                                                                           src="images/thumbnail-4.jpg"/></a>
                                                </div>
                                                <div className="shopping-cart-title">
                                                    <h4><a href="shop-product-right.html">Macbook Pro 2022</a></h4>
                                                    <h3><span>1 × </span>$3500.00</h3>
                                                </div>
                                                <div className="shopping-cart-delete">
                                                    <a href="#"><i className="fi-rs-cross-small"></i></a>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="shopping-cart-footer">
                                            <div className="shopping-cart-total">
                                                <h4>Total <span>$383.00</span></h4>
                                            </div>
                                            <div className="shopping-cart-button">
                                                <a href="shop-cart.html">View cart</a>
                                                <a href="shop-checkout.html">Checkout</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="header-action-icon-2 d-block d-lg-none">
                                    <div className="burger-icon burger-icon-white">
                                        <span className="burger-icon-top"></span>
                                        <span className="burger-icon-mid"></span>
                                        <span className="burger-icon-bottom"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}