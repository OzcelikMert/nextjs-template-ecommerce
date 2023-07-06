import React, {Component} from 'react'

export class ComponentTopBar extends Component {
    news = [
        "Bu bir haber.",
        "Bu başka bir haber.",
        "Bu da son haber."
    ];

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
                        </div>
                        <div className="col-xl-3 col-lg-4">
                            <div className="header-info header-info-right">
                                <ul>
                                    <li>
                                        <a className="language-dropdown-active" href="#"> <i
                                            className="fi-rs-world"></i> English <i
                                            className="fi-rs-angle-small-down"></i></a>
                                        <ul className="language-dropdown">
                                            <li><a href="#"><img src="assets/images/flag-fr.png" />Français</a></li>
                                            <li><a href="#"><img src="assets/images/flag-dt.png" />Deutsch</a></li>
                                            <li><a href="#"><img src="assets/images/flag-ru.png" />Pусский</a></li>
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
