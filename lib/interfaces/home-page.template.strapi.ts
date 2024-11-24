import { type BlocksContent } from '@strapi/blocks-react-renderer';

export const HOME_PAGE_TEMPLATE = "page-templates.home-page";

export interface IHomePageTemplateStrapi {
    __component: typeof HOME_PAGE_TEMPLATE;
    subtitle: string;
    title: string;
    description: BlocksContent;
    content: BlocksContent;
    image: {
        url: string;
        alternativeText: string;
        width: number;
        height: number;
    };
}
