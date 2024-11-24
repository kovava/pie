import { getPageBySlug } from '@/lib/strapi';
import { notFound } from 'next/navigation';
import styles from "./page.module.scss";
import { HOME_PAGE_TEMPLATE } from '@/lib/interfaces/home-page.template.strapi';
import HomePageTemplate from '@/lib/components/home-page-template/home-page-template';

interface IPageParams {
  slug: Array<string>;
}

export default async function Page({ params }: { params: Promise<IPageParams> }) {
  const { slug } = await params;
  const page = await getPageBySlug(slug[0]);

  if (!page) {
    notFound();
  }

  return (
    <main className={styles.root}>
      {page.content?.length && page.content[0].__component  === HOME_PAGE_TEMPLATE && <HomePageTemplate page={page.content[0]} currentRoute={page.slug} />}
    </main>
  );
}