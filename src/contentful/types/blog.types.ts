import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeBlogFields {
    image?: EntryFieldTypes.AssetLink;
    category?: EntryFieldTypes.Symbol;
    summary?: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    slug?: EntryFieldTypes.Symbol;
    bodyone?: EntryFieldTypes.Symbol;
    bodytwo?: EntryFieldTypes.Symbol;
    bodythree?: EntryFieldTypes.Symbol;
    bodyfour?: EntryFieldTypes.Symbol;
    bodyfive?: EntryFieldTypes.Symbol;
    bodysix?: EntryFieldTypes.Symbol;
    bodyseven?: EntryFieldTypes.Symbol;
    bodyeight?: EntryFieldTypes.Symbol;
    bodynine?: EntryFieldTypes.Symbol;
    bodyten?: EntryFieldTypes.Symbol;
    bodyevelen?: EntryFieldTypes.Symbol;
    bodytwelve?: EntryFieldTypes.Symbol;
    bodythirteen?: EntryFieldTypes.Symbol;
    bodyfourteen?: EntryFieldTypes.Symbol;
    bodyfifteen?: EntryFieldTypes.Symbol;
    bodysixteen?: EntryFieldTypes.Symbol;
    bodyseventeen?: EntryFieldTypes.Symbol;
    bodyeightteen?: EntryFieldTypes.Symbol;
    bodynineteen?: EntryFieldTypes.Symbol;
    bodytwenty?: EntryFieldTypes.Symbol;
    bodytwentyone?: EntryFieldTypes.Symbol;
    bodytwentytwo?: EntryFieldTypes.Symbol;
}


export interface IContentfulAsset {
    sys:{id:string},
    fields:{
        file:{
            url:string,
            detail?:string,
            filename?:string,
            contentType?:string
        }
    }
}

export type TypeBlogSkeleton = EntrySkeletonType<TypeBlogFields, "blog">;
export type TypeBlog<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeBlogSkeleton, Modifiers, Locales>;