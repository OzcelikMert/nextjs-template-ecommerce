import React, {Component} from 'react'

export class ComponentTopBar extends Component {
    render() {
        return (
            <div className="header-top header-top-ptb-1 d-none d-lg-block">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-3 col-lg-4">
                            <div className="header-info">
                                <ul>
                                    <li><i className="fi-rs-smartphone"></i> <a href="#">(+01) - 2345 - 6789</a></li>
                                    <li><i className="fi-rs-marker"></i><a href="page-contact.html">Our location</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-4">
                            <div className="text-center">
                                <div id="news-flash" className="d-inline-block">
                                    <ul>
                                        <li>Get great devices up to 50% off <a href="shop-grid-right.html">View
                                            details</a></li>
                                        <li>Supper Value Deals - Save more with coupons</li>
                                        <li>Trendy 25silver jewelry, save up 35% off today <a
                                            href="shop-grid-right.html">Shop now</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4">
                            <div className="header-info header-info-right">
                                <ul>
                                    <li>
                                        <a className="language-dropdown-active" href="#"> <i
                                            className="fi-rs-world"></i> English <i
                                            className="fi-rs-angle-small-down"></i></a>
                                        <ul className="language-dropdown">
                                            <li><a href="#"><img src="images/flag-fr.png" />Français</a></li>
                                            <li><a href="#"><img src="images/flag-dt.png" />Deutsch</a></li>
                                            <li><a href="#"><img src="images/flag-ru.png" />Pусский</a></li>
                                        </ul>
                                    </li>
                                    <li><i className="fi-rs-user"></i><a href="page-login-register.html">Log In / Sign
                                        Up</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ComponentTopBar
