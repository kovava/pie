import { IHomePageTemplateStrapi } from "./home-page.template.strapi";

export interface IPageStrapi {
    id: number;
    documentId: string;
    title: string;
    slug: string;
    content?: Array<IHomePageTemplateStrapi>;
}