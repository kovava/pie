import { IPageStrapi } from "./interfaces/page.strapi";
import { IResponseStrapi } from "./interfaces/response.strapi";

export async function fetchAPI<T>(endpoint: string): Promise<IResponseStrapi<T>> {
  const baseUrl = process.env.STRAPI_URL;
  const token = process.env.STRAPI_TOKEN;

  if (!baseUrl || !token) {
    throw new Error('STRAPI_URL and STRAPI_TOKEN must be defined in environment variables');
  }

  const response = await fetch(`${baseUrl}/api${endpoint}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data from Strapi: ${response.statusText}`);
  }

  return response.json() as Promise<IResponseStrapi<T>>;
}

export async function getPages() {
  const response = await fetchAPI<Array<IPageStrapi>>('/pages');
  return response.data;
}

export async function getPageBySlug(slug: string) {
  const response = await fetchAPI<Array<IPageStrapi>>(`/pages?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=content&populate=content.image`);
  return response.data[0];
}
