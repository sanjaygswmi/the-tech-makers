import type { MetadataRoute } from 'next';
import { servicedata } from '@/src/components/Services Page/servicedata';
import { industries_data } from '@/src/components/IndustriDetail/industries_data';
import { getPublishedBlogSlugs } from '@/src/database/blogs';

const siteUrl = 'https://www.thetechmakers.com';

export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/careers',
    '/services',
    '/industries',
    '/products',
    '/blogs',
    '/privacy-policy',
    '/terms-and-conditions',
  ];

  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const blogs = await getPublishedBlogSlugs();
    blogRoutes = blogs.map((blog) => ({
      url: new URL(`/blogs/${blog.slug}`, siteUrl).toString(),
      lastModified: blog.updatedAt ? new Date(blog.updatedAt) : undefined,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    }));
  } catch (error) {
    console.error('Unable to load published blog slugs for sitemap.', error);
  }

  return [
    ...staticRoutes.map((route) => ({
      url: new URL(route, siteUrl).toString(),
      changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const,
      priority: route === '' ? 1 : route === '/services' || route === '/industries' ? 0.8 : 0.6,
    })),
    ...servicedata.map((service) => ({
      url: new URL(`/services/${service.slug}`, siteUrl).toString(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...blogRoutes,
    ...industries_data.map((industry) => ({
      url: new URL(`/industries/${industry.slug}`, siteUrl).toString(),
      changeFrequency: 'monthly' as const,
      priority: 0.65,
    })),
    {
      url: new URL('/products/school-college-erp', siteUrl).toString(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];
}
