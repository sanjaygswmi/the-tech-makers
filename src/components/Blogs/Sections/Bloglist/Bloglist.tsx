import Image from 'next/image';
import Link from 'next/link';
import { unstable_noStore as noStore } from 'next/cache';
import { getBlogs, getBlogsByServiceSlug } from '@/src/database/blogs';
import { getFrontendBaseUrl, normalizeImageUrl } from '@/src/utils/urls';

const BLOGS_LIMIT = 12;

const sanitizeExcerpt = (value?: string, length: number = 250) => {
    if (!value) {
        return '';
    }

    const plainText = value.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    if (plainText.length <= length) {
        return plainText;
    }

    return `${plainText.slice(0, length).trim()}...`;
};

type BlogItem = {
    id?: string;
    _id?: string;
    slug: string;
    title: string;
    short_desc?: string;
    content?: string;
    image?: string;
    category?: unknown;
    tag?: unknown;
    metaTitle?: string;
    metaDescription?: string;
    metaKeyword?: string[];
    headerScripts?: string;
    bodyScripts?: string;
    status?: string;
    createdAt?: string;
    updatedAt?: string;
    excerpt: string;
    imageUrl: string;
};

const isBlogRecord = (
    value: unknown
): value is Omit<BlogItem, 'excerpt' | 'imageUrl'> => {
    if (!value || typeof value !== 'object') {
        return false;
    }

    const blog = value as Record<string, unknown>;
    return typeof blog.slug === 'string' && typeof blog.title === 'string';
};

const fetchBlogPreviews = async (serviceSlug?: string, page: number = 1): Promise<{ previews: BlogItem[]; totalBlogs: number }> => {
    try {
        noStore();
        const baseUrl = getFrontendBaseUrl();
        const { blogs, totalBlogs } = serviceSlug
            ? await getBlogsByServiceSlug(serviceSlug, page, BLOGS_LIMIT)
            : await getBlogs(page, BLOGS_LIMIT);
        const previews: BlogItem[] = [];
        for (const blog of blogs) {
            if (!isBlogRecord(blog)) {
                continue;
            }

            previews.push({
                ...blog,
                id: blog._id ? String(blog._id) : blog.id,
                excerpt: sanitizeExcerpt(blog.short_desc),
                imageUrl: normalizeImageUrl(blog.image, baseUrl),
            });
        }

        return { previews, totalBlogs };
    } catch (error) {
        console.error('Unable to fetch blog previews:', error);
        return { previews: [], totalBlogs: 0 };
    }
};

const Bloglist = async ({ serviceSlug, serviceTitle, page = 1 }: { serviceSlug?: string; serviceTitle?: string; page?: number }) => {
    const { previews: posts, totalBlogs } = await fetchBlogPreviews(serviceSlug, page);
    const totalPages = Math.max(1, Math.ceil(totalBlogs / BLOGS_LIMIT));
    const pageHref = (targetPage: number) => {
        const params = new URLSearchParams();
        if (serviceSlug) params.set('service', serviceSlug);
        if (targetPage > 1) params.set('page', String(targetPage));
        const query = params.toString();
        return query ? `/blogs?${query}` : '/blogs';
    };

    if (!posts.length) {
        return (
            <div>
                {serviceTitle && <header className='mx-auto max-w-screen-xl px-5 pt-8 text-center'><p className='text-sm font-semibold uppercase tracking-wide text-[#F48B3A]'>Service insights</p><h1 className='mt-2 text-3xl font-bold'>{serviceTitle} articles</h1><p className='mt-3 text-gray-600'>Articles specifically assigned to {serviceTitle}.</p></header>}
                <div className='mx-auto max-w-3xl px-5 py-12 text-center'><h2 className='text-2xl font-bold'>{serviceTitle ? `No ${serviceTitle} articles published yet` : 'No blog posts available at the moment'}</h2><p className='mt-3 text-gray-600'>{serviceTitle ? 'We are preparing relevant articles for this service. Please check back soon.' : 'Please check back soon for new articles.'}</p>{serviceSlug && <Link href='/blogs' className='mt-5 inline-flex font-semibold text-[#F48B3A] underline'>Browse all articles</Link>}</div>
            </div>
        );
    }

    return (
        <section
            className='mx-auto map-data'
            itemScope
            itemType='https://schema.org/Blog'
        >
            {serviceTitle && <header className='mx-auto max-w-screen-xl px-5 py-8'><p className='text-sm font-semibold uppercase tracking-wide text-[#F48B3A]'>Service insights</p><h1 className='mt-2 text-3xl font-bold'>{serviceTitle} articles</h1><p className='mt-3 max-w-2xl text-gray-600'>Articles specifically assigned to {serviceTitle}.</p><Link href='/services' className='mt-4 inline-flex font-semibold text-[#F48B3A] underline'>Explore all services</Link></header>}
            {posts.map((post) => (
                <article
                    key={post.id ?? post.slug}
                    className='md:flex relative space-x-10 px-3 max-w-screen-xl md:mx-28 mt-5 mx-auto'
                    itemProp='blogPost'
                    itemScope
                    itemType='https://schema.org/BlogPosting'
                >
                    <Link
                        href={`/blogs/${post.slug}`}
                        className='blog-image md:w-1/2 mx-auto block'
                        aria-label={`Read more about ${post.title}`}
                        itemProp='url'
                    >
                        <Image
                            width={500}
                            height={500}
                            className='mx-auto w-full h-auto'
                            src={post.imageUrl}
                            alt={post.title || 'Blog post image'}
                        />
                    </Link>
                    <meta itemProp='image' content={post.imageUrl} />
                    <div className='blog_text_side md:w-1/2'>
                        <Link href={`/blogs/${post.slug}`} className='block'>
                            <h2
                                className='font-bold text-[25px] hover:text-[#F48B3A]'
                                itemProp='headline'
                            >
                                {post.title}
                            </h2>
                        </Link>
                        <p
                            className='mt-5 text-gray-600 leading-snug'
                            itemProp='description'
                        >
                            {post.excerpt}
                        </p>
                        <Link
                            href={`/blogs/${post.slug}`}
                            className='inline-flex mt-4 text-sm font-semibold text-[#F48B3A]'
                            itemProp='url'
                        >
                            View Full Article
                        </Link>
                    </div>
                </article>
            ))}
            {totalPages > 1 && (
                <nav aria-label='Blog pagination' className='mx-auto mt-16 mb-10 flex max-w-screen-xl items-center justify-center gap-4 px-4'>
                    {page > 1 ? (
                        <Link href={pageHref(page - 1)} rel='prev' className='rounded border border-gray-300 px-4 py-2 font-medium hover:bg-gray-50'>Previous</Link>
                    ) : (
                        <span aria-disabled='true' className='rounded border border-gray-200 px-4 py-2 text-gray-400'>Previous</span>
                    )}
                    <span className='text-sm text-gray-600' aria-current='page'>Page {page} of {totalPages}</span>
                    {page < totalPages ? (
                        <Link href={pageHref(page + 1)} rel='next' className='rounded bg-orange-500 px-4 py-2 font-medium text-white hover:opacity-90'>Next articles</Link>
                    ) : (
                        <span aria-disabled='true' className='rounded border border-gray-200 px-4 py-2 text-gray-400'>Next articles</span>
                    )}
                </nav>
            )}
        </section>
    );
};

export default Bloglist;
