import React, {Component} from 'react'

export class ComponentTopBar extends Component {
    render() {
        return (
            <div className="container-fluid bg-dark text-white-50 py-2 px-0 d-none d-lg-block">
                <div className="row gx-0 align-items-center">
                    <div className="col-lg-6 ps-5 text-start">
                        <a className="h-100 d-inline-flex align-items-center me-4 text-light" href="tel:+012 345 6789">
                            <small className="mdi mdi-phone me-2"></small>
                            <small>+012 345 6789</small>
                        </a>
                        <a className="h-100 d-inline-flex align-items-center me-4 text-light" href="mailto:info@example.com">
                            <small className="mdi mdi-email me-2"></small>
                            <small>info@example.com</small>
                        </a>
                        <a className="h-100 d-inline-flex align-items-center me-4 text-light">
                            <small className="mdi mdi-whatsapp me-2"></small>
                            <small>+012 345 6789</small>
                        </a>
                    </div>
                    <div className="col-lg-6 pe-5 text-end">
                        <div className="h-100 d-inline-flex align-items-center">
                            <a className="text-white-50 ms-4" href=""
                            >Kargo Takip</a>
                            <a className="text-white-50 ms-4" href=""
                            >Hakkimizda</a>
                            <a className="text-white-50 ms-4" href=""
                            >Iletisim</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ComponentTopBar
