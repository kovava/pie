import { IHomePageTemplateStrapi } from "@/lib/interfaces/home-page.template.strapi";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import styles from "./home-page-template.module.scss";
import Image from "next/image";
import Menu from "../menu/menu";

interface IOwnProps {
    page: IHomePageTemplateStrapi;
    currentRoute: string;
}

const HomePageTemplate = (props: IOwnProps) => {
    return (
        <section className={styles.root}>
            <h2>{props.page.title}</h2>
            <h3>{props.page.subtitle}</h3>
            <div className={styles.description}>
                {props.page.description && <BlocksRenderer content={props.page.description} />}
            </div>
            <div className={styles.main}>
                {props.page.image && (
                    <div className={styles.image}>
                        <Image src={`${process.env.STRAPI_URL}${props.page.image.url}`} alt={props.page.title} width={props.page.image.width} height={props.page.image.height} />
                    </div>
                )}
                <div className={styles.content}>
                    {props.page.content && <BlocksRenderer content={props.page.content} />}
                </div>
                <div className={styles.menu}>
                    <Menu currentRoute={props.currentRoute} />
                </div>
            </div>
        </section>
    );
}

export default HomePageTemplate;