import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/src/components/Header/Header';
import Footer from '@/src/components/Footer2/Footer';
import Breadcrumb from '@/src/components/Breadcrumb';
import { getBlog } from '@/src/database/blogs';
import { getFrontendBaseUrl, normalizeImageUrl } from '@/src/utils/urls';
import { servicedata } from '@/src/components/Services Page/servicedata';

const fetchBlogDetail = async (slug: string) => {
    try {
        return await getBlog(slug);
    } catch (error) {
        if (error instanceof Error && error.message === 'Blog not found') {
            return null;
        }
        throw error;
    }
};

type BlogDetail = {
    _id?: string;
    slug: string;
    title: string;
    short_desc?: string;
    content?: string;
    image?: string;
    category?: CategoryItem[];
    tag?: unknown;
    serviceSlugs?: string[];
    metaTitle?: string;
    metaDescription?: string;
    metaKeyword?: string[];
    headerScripts?: string;
    bodyScripts?: string;
    status?: string;
    createdAt?: string;
    updatedAt?: string;
    author?: {
        name?: string;
        username?: string;
        title?: string;
    };
};

const isBlogDetail = (value: unknown): value is BlogDetail => {
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
        return false;
    }
    const blog = value as Record<string, unknown>;
    return typeof blog.slug === 'string' && typeof blog.title === 'string';
};

type BlogRouteParams = {
    blogs?: string;
};

type BlogDetailPageProps = {
    params?: Promise<BlogRouteParams>;
};

type CategoryItem = string | { title?: string; name?: string; slug?: string; _id?: string };

export async function generateMetadata({ params }: BlogDetailPageProps) {
    const resolvedParams = await params;
    const slug = resolvedParams?.blogs;
    if (!slug) notFound();

    const blog = await fetchBlogDetail(slug);
    if (!isBlogDetail(blog)) notFound();

    return {
        title: blog.metaTitle || blog.title,
        description: blog.metaDescription || blog.short_desc || '',
        alternates: { canonical: `/blogs/${slug}` },
        robots: { index: true, follow: true },
    };
}

const BlogDetailPage = async ({ params }: BlogDetailPageProps) => {
    const resolvedParams = await params;
    const slug = resolvedParams?.blogs;

    if (!slug) notFound();

    const blog = await fetchBlogDetail(slug);

    if (!isBlogDetail(blog)) notFound();

    const baseUrl = getFrontendBaseUrl();
    const heroImage = normalizeImageUrl(blog.image, baseUrl);
    const publishedAt = blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : '';
    const publishedAtISO = blog.createdAt ? new Date(blog.createdAt).toISOString() : '';
    const modifiedAtISO = blog.updatedAt
        ? new Date(blog.updatedAt).toISOString()
        : publishedAtISO;

    const resolveCategoryLabel = (categoryItem?: CategoryItem): string => {
        if (!categoryItem) return 'Blog';
        if (typeof categoryItem === 'string') return categoryItem;

        if (typeof categoryItem === 'object') {
            return (
                categoryItem.title ||
                categoryItem.name ||
                categoryItem.slug ||
                categoryItem._id ||
                'Blog'
            );
        }
        return 'Blog';
    };

    const heroCategory =
        Array.isArray(blog.category) && blog.category.length > 0
            ? resolveCategoryLabel(blog.category[0])
            : 'Blog';

    const authorName =
        blog.author?.name ||
        blog.author?.username ||
        blog.author?.title ||
        'The Tech Makers';
    const frontendUrl =
        getFrontendBaseUrl() ||
        process.env.NEXT_PUBLIC_FRONTEND_URL?.replace(/\/$/, '') ||
        process.env.NEXT_PUBLIC_API_URL?.replace(/\/api\/?$/, '') ||
        'https://www.thetechmakers.com';
    const buildAbsoluteUrl = (value: string) => {
        if (!value) return frontendUrl;
        const normalized = value.startsWith('http')
            ? value
            : `${frontendUrl.replace(/\/$/, '')}/${value.replace(/^\/+/, '')}`;
        try {
            return new URL(normalized).toString();
        } catch {
            return encodeURI(normalized);
        }
    };
    const heroImageAbsolute = buildAbsoluteUrl(heroImage);
    const authorUrl = buildAbsoluteUrl(`/blogs/${slug}`);

    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Blogs', href: '/blogs' },
        { label: blog.title, href: '' },
    ];

    return (
        <div className="blog-detail-page">
            <Header />
            <main
                className="max-w-screen-xl mx-auto px-4 pb-16"
                itemScope
                itemType="https://schema.org/BlogPosting"
                itemProp="mainEntity"
            >

                <section className="mt-16 space-y-6">
                    <div className="overflow-hidden">
                        <div className="relative h-[420px] w-full">
                            <Image
                                src={heroImage}
                                alt={blog.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 1200px"
                                className="object-cover"
                                unoptimized
                                quality={100}
                                priority
                                style={{ objectPosition: "center" }}
                                itemProp="image"
                            />
              <meta itemProp="image" content={heroImageAbsolute} />
                        </div>

                        <Breadcrumb items={breadcrumbItems} />
                    </div>

                    <div className="prose prose-lg text-[#1f1f1f]">
                        <p className="text-sm uppercase tracking-[0.3em] text-[#F48B3A]">
                            {heroCategory}
                        </p>
                        <h1
                            className="text-[38px] font-semibold text-[#0e0e0e]"
                            itemProp="headline"
                        >
                            {blog.title}
                        </h1>
                        <p className="text-sm text-gray-500 mb-1">
                            By{' '}
              <span itemScope itemType="https://schema.org/Person" itemProp="author">
                <meta itemProp="name" content={authorName} />
                <meta itemProp="url" content={authorUrl} />
                <span>{authorName}</span>
              </span>
                        </p>
                        <blockquote className="text-gray-500 text-base">
                            {blog.metaDescription || blog.short_desc}
                        </blockquote>
                        {publishedAt && (
                            <p className="text-xs text-gray-500">Updated {publishedAt}</p>
                        )}
                        <meta itemProp="datePublished" content={publishedAtISO} />
                        <meta itemProp="dateModified" content={modifiedAtISO} />
                        {blog.author?.name && (
                            <meta itemProp="author" content={blog.author.name} />
                        )}
                    </div>
                </section>

                <article
                    className="mt-8 space-y-8 text-lg leading-relaxed text-gray-700"
                    dangerouslySetInnerHTML={{ __html: blog.content || blog.short_desc || '' }}
                    itemProp="articleBody"
                />
                {Array.isArray(blog.serviceSlugs) && blog.serviceSlugs.length > 0 && (
                    <nav aria-label="Related services" className="mt-12 rounded-xl border border-gray-200 p-6">
                        <h2 className="text-xl font-bold">Explore related services</h2>
                        <p className="mt-2 text-gray-600">Learn how we can help put these ideas into practice.</p>
                        <div className="mt-4 flex flex-wrap gap-3">
                            {blog.serviceSlugs
                                .map((serviceSlug) => servicedata.find((service) => service.slug === serviceSlug))
                                .filter((service): service is (typeof servicedata)[number] => service !== undefined)
                                .map((service) => (
                                    <Link key={service.slug} href={`/services/${service.slug}`} className="rounded-md border border-gray-200 px-4 py-2 font-medium text-[#F48B3A] hover:bg-gray-50">
                                        {service.title}
                                    </Link>
                                ))}
                        </div>
                    </nav>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default BlogDetailPage;

