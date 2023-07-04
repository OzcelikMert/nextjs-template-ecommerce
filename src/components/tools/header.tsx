import React, {Component} from 'react'
import Image from "next/image";
import imageSourceUtil from "utils/imageSource.util";
import {PagePropCommonDocument} from "types/pageProps";

type PageState = {};

type PageProps = {} & PagePropCommonDocument<{}>;

export default class ComponentHeader extends Component<PageProps, PageState> {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 text-start">
                        <Image
                            style={{filter: "drop-shadow(1px 0.5px 0.5px #fff)"}}
                            src={imageSourceUtil.getUploadedImageSrc(this.props.appData.settings.logoTwo)}
                            alt={this.props.appData.settings.seoContents?.title || ""}
                            height={75}
                            width={150}
                        />
                    </div>
                    <div className="col-lg-6 text-center">
                        <div className="input-group mb-3">
                            <input type="search" className="form-control" placeholder="Arama" />
                                <span className="input-group-text bg-primary text-light"><i className="mdi mdi-search-web"></i></span>
                        </div>
                    </div>
                    <div className="col-lg-4 pe-5 text-end">
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
