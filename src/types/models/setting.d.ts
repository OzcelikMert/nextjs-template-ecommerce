import {CurrencyId} from "constants/currencyTypes";

export interface SettingDocument {
    defaultLangId: string
    icon?: string
    logo?: string
    logoTwo?: string
    head?: string
    script?: string
    seoContents: SettingSeoContentDocument,
    contact?: SettingContactDocument
    contactForms: SettingContactFormDocument[],
    staticLanguages: SettingStaticLanguageDocument[]
    socialMedia: SettingSocialMediaDocument[]
    eCommerce?: SettingECommerceDocument
}

export interface SettingECommerceDocument {
    currencyId: CurrencyId
}

export interface SettingContactDocument {
    email?: string,
    phone?: string,
    address?: string,
    addressMap?: string
}

export interface SettingSocialMediaDocument {
    _id?: string
    elementId: string
    title: string
    url: string
}

export interface SettingContactFormDocument {
    _id?: string
    name: string
    key: string
    outGoingEmail: string
    email: string
    password?: string
    outGoingServer: string
    inComingServer: string
    port: number
}

export interface SettingSeoContentDocument {
    _id?: string
    langId: string
    title?: string,
    content?: string,
    tags?: string[]
}

export interface SettingStaticLanguageDocument {
    _id?: string
    langKey: string,
    contents: SettingStaticLanguageContentDocument
}

export interface SettingStaticLanguageContentDocument {
    _id?: string
    langId: string
    content?: string,
}