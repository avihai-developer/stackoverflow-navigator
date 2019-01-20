export enum ContentTypes {
    LINK = 'LINK'
}

export interface Content {
    title: string;
    value: string;
    type?: ContentTypes;
}
