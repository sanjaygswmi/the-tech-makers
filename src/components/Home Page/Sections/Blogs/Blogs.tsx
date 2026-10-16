import Link from "next/link";
import BlogCarousel from "./BlogCarousel";
import { getBlogs, getBlogsByServiceSlug } from "@/src/database/blogs";
import { getFrontendBaseUrl, normalizeImageUrl } from "@/src/utils/urls";

const BLOG_SECTION_LIMIT = 4;

export type BlogPreview = {
    slug: string;
    title: string;
    excerpt: string;
    imageUrl: string;
};

const stripHtml = (value?: string) => {
    if (!value) return "";
    return value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
};

const getExcerpt = (value: string, length = 170) => {
    if (!value) return "";
    if (value.length <= length) return value;
    return `${value.slice(0, length).trim()}...`;
};

type RawBlog = {
    slug: string;
    title: string;
    short_desc?: string;
    image?: string;
};

const isRawBlog = (value: unknown): value is RawBlog => {
    if (!value || typeof value !== "object") return false;
    const blog = value as Record<string, unknown>;
    return typeof blog.slug === "string" && typeof blog.title === "string";
};

const fetchBlogs = async (serviceSlug?: string): Promise<BlogPreview[]> => {
    try {
        const baseUrl = getFrontendBaseUrl();
        const normalizedServiceSlug = serviceSlug?.toLowerCase();
        const { blogs } =
            normalizedServiceSlug
                ? await getBlogsByServiceSlug(normalizedServiceSlug, 1, BLOG_SECTION_LIMIT)
                : await getBlogs(1, BLOG_SECTION_LIMIT);
        return blogs.filter(isRawBlog).map((blog) => {
            const cleanedDescription = stripHtml(blog.short_desc);
            return {
                slug: blog.slug,
                title: blog.title,
                excerpt: getExcerpt(cleanedDescription, 160),
                imageUrl: normalizeImageUrl(blog.image, baseUrl),
            };
        });
    } catch (error) {
        console.error("Failed to fetch blogs for the home page section:", error);
        return [];
    }
};

const BlogsSection = async ({ serviceSlug, serviceTitle }: { serviceSlug?: string; serviceTitle?: string }) => {
    const blogs = await fetchBlogs(serviceSlug);

    return (
        <section className="mx-auto max-w-screen-xl px-5 py-14" aria-labelledby="service-articles-heading">
            <div className="mb-7 text-center">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#E05A32]">Insights</p>
                <h2 id="service-articles-heading" className="mt-2 text-2xl font-bold md:text-3xl">
                    {serviceTitle ? `Latest ${serviceTitle} articles` : "Latest Blogs"}
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-gray-600">
                    {serviceTitle ? "Practical ideas, guidance, and updates related to this service." : "Practical ideas, guidance, and updates from our team."}
                </p>
            </div>
            {blogs.length ? (
                <>
                    <BlogCarousel posts={blogs} />
                    <div className="mt-7 text-center">
                        <Link href={serviceSlug ? `/blogs?service=${encodeURIComponent(serviceSlug)}` : "/blogs"} className="inline-flex font-semibold text-[#E05A32] underline-offset-4 hover:underline">
                            View all related articles <span aria-hidden="true" className="ml-2">→</span>
                        </Link>
                    </div>
                </>
            ) : (
                <p className="mx-auto max-w-2xl rounded-lg border border-dashed border-gray-300 px-5 py-8 text-center text-gray-600">
                    We’re preparing more articles for this service. In the meantime, contact us to discuss your requirements.
                </p>
            )}
        </section>
    );
};

export default BlogsSection;
