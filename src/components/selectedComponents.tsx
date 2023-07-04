import React, { Component } from "react";

import {PagePropCommonDocument} from "types/pageProps";
import ComponentError404 from "components/error/404";

type PageState = {};

type PageProps = {} & PagePropCommonDocument<{}>;

class SelectedComponents extends Component<PageProps, PageState> {
    constructor(props: PageProps) {
        super(props);
    }

    getComponent = (elementId: string) => {
        let element = (<div></div>);

        switch (elementId) {
            case "notFound":
                element = (<ComponentError404 {...this.props} />);
                break;
        }

        return element;
    }

    render() {
        return this.props.pageData?.components?.map(component => this.getComponent(component.elementId))
    }
}

export default SelectedComponents;
