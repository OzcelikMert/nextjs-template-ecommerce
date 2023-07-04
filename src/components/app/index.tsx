import {PagePropCommonDocument} from "types/pageProps";
import React, {Component} from "react";
import Head from "next/head";
import imageSourceUtil from "utils/imageSource.util";
import ProviderNoFound from "components/providers/noFound";
import ComponentHead from "components/head";
import ComponentNavbar from "components/tools/navbar";
import ComponentBackToTop from "components/tools/backToTop";
import ComponentFooter from "components/tools/footer";
import ComponentTopBar from "components/tools/topBar";
import ComponentHeader from "components/tools/header";

type PageState = {};

type PageProps = {
    Component: any
} & PagePropCommonDocument<{}>;

class ComponentApp extends Component<PageProps, PageState> {
    constructor(props: PageProps) {
        super(props);
    }

    render() {
        const commonProps: PagePropCommonDocument<{}> = {
            router: this.props.router,
            themeData: this.props.themeData,
            appData: this.props.appData,
            pageData: this.props.pageData
        };

        return (
            <div>
                <Head>
                    <link rel="shortcut icon"
                          href={imageSourceUtil.getUploadedImageSrc(commonProps.appData.settings.icon, commonProps.appData.apiPath.uploads)}/>
                    <link rel="canonical" href={commonProps.appData.apiPath.website.full}/>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                    <meta name="author" content="Özçelik Software" />
                </Head>
                <ProviderNoFound {...commonProps}>
                    <ComponentHead {...commonProps} />
                    <header className="header-area header-style-1 header-height-2">
                        <ComponentTopBar {...commonProps} />
                        <ComponentHeader {...commonProps} />
                        <ComponentNavbar {...commonProps} />
                    </header>
                    <ComponentBackToTop {...commonProps} />
                    <div className="page-content">
                        <this.props.Component {...commonProps} />
                    </div>
                    <ComponentFooter {...commonProps} />
                </ProviderNoFound>
            </div>
        );
    }
}


export function withCustomProps(Component: any) {
    function ComponentWithCustomProps(props: any) {
        return (
            <Component
                {...props}
            />
        );
    }

    return ComponentWithCustomProps;
}

export default withCustomProps(ComponentApp);