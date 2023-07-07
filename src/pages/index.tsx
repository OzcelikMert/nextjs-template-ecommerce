import {PagePropCommonDocument} from "types/pageProps";
import React, {Component} from "react";
import {GetServerSidePropsContext} from 'next'
import "styles/pages/home.module.scss";
import SelectedComponents from "components/selectedComponents";
import postService from "services/post.service";
import {PageTypeId, PostTypeId, StatusId} from "constants/index";
import {PostGetManyResultDocument} from "types/services/post";
import pageLib from "lib/page.lib";

import ComponentThemeFeatures from "components/theme/features";
import ComponentThemeProductTabs from "components/theme/productTabs";
import ComponentThemeBannerOne from "components/theme/bannerOne";
import ComponentThemePopularCategories from "components/theme/popularCategories";
import ComponentThemeDeals from "components/theme/deals";
import ComponentThemeFeaturedBrands from "components/theme/featuredBrands";
import ComponentThemeMonthlyBestSell from "components/theme/monthlyBestSell";
import ComponentThemeBannerTwo from "components/theme/bannerTwo";
import ComponentThemeTopProducts from "components/theme/topProducts";
import ComponentThemeNewArrivals from "components/theme/newArrivals";
import ComponentCarousel from "components/theme/carousel";
import ComponentThemeBannerThree from "components/theme/bannerThree";

type PageState = {};

type PageProps = {
    components: any[]
} & PagePropCommonDocument<{ sliders: PostGetManyResultDocument[] }>;

export default class PageHome extends Component<PageProps, PageState> {
    constructor(props: PageProps) {
        super(props);
    }

    render() {
        //<SelectedComponents {...this.props} />
                return (
                <div className="page page-home">
                    <ComponentCarousel {...this.props} />
                    <ComponentThemeFeatures {...this.props} />
                    <ComponentThemeProductTabs {...this.props} />
                    <ComponentThemeBannerOne {...this.props} />
                    <ComponentThemePopularCategories {...this.props} />
                    <ComponentThemeBannerThree {...this.props} />
                    <ComponentThemeNewArrivals {...this.props} />
                    <ComponentThemeDeals {...this.props} />
                    <ComponentThemeFeaturedBrands {...this.props} />
                    <ComponentThemeMonthlyBestSell {...this.props} />
                    <ComponentThemeBannerTwo {...this.props} />
                    <ComponentThemeTopProducts {...this.props} />
                </div>
        );
    }
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    let req = context.req;

    await pageLib.get(req, "", PageTypeId.HomePage)

    req.themeData.sliders = (await postService.getMany({
        langId: req.appData.languageId,
        typeId: [PostTypeId.Slider],
        statusId: StatusId.Active
    })).data;

    return {
        props: pageLib.getReturnData(req),
    };
}