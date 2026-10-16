"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Link from "next/link";
import type { BlogPreview } from "./Blogs";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 4,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const BlogCarousel: React.FC<{ posts: BlogPreview[] }> = ({ posts }) => {
    useEffect(() => {
        AOS.init({ once: true, duration: 700 });
    }, []);

    if (!posts.length) return null;

    return (
        <Carousel
            className="double-background"
            ssr
            deviceType="mobile"
            infinite
            autoPlay
            containerClass="carousel-container"
            itemClass="carousel-image-item"
            autoPlaySpeed={6000}
            responsive={responsive}
            arrows={false}
        >
            {posts.map((post) => (
                <div
                    key={post.slug}
                    className="blog p-2 bg-white"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <Link
                        href={`/blogs/${post.slug}`}
                        className="block image-link rounded-[20px] overflow-hidden"
                    >
                        <div className="image-container relative w-full h-[260px]">
                            <Image
                                src={post.imageUrl}
                                alt={post.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover"
                            />
                        </div>
                    </Link>
                    <div className="title-description pb-5 mt-4">
                        <Link
                            href={`/blogs/${post.slug}`}
                            className="block title text-[18px] font-semibold text-[#1f1f1f] hover:text-[#F48B3A]"
                        >
                            {post.title}
                        </Link>
                        <p className="mt-3 text-[14px] text-gray-600 min-h-[64px]">
                            {post.excerpt}
                        </p>
                        <Link
                            href={`/blogs/${post.slug}`}
                            className="inline-flex items-center gap-2 mt-4 text-[13px] uppercase tracking-[0.2em] text-[#F48B3A]"
                        >
                            Read Article
                            <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default BlogCarousel;
