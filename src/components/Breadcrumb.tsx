import Link from 'next/link';

const Breadcrumb = ({ items }: { items: { label: string; href?: string }[] }) => {
    return (
        <nav
            aria-label="breadcrumb"
            itemScope
            itemType="https://schema.org/BreadcrumbList"
            className="text-xs tracking-[0.3em] uppercase text-gray-500"
        >
            <ol className="flex flex-wrap items-center gap-2">
                {items.map((item, index) => (
                    <li
                        key={item.href ?? item.label}
                        itemProp="itemListElement"
                        itemScope
                        itemType="https://schema.org/ListItem"
                        className="flex items-center gap-2"
                    >
                        {item.href ? (
                            <Link href={item.href} itemProp="item">
                                <span itemProp="name">{item.label}</span>
                            </Link>
                        ) : (
                            <span itemProp="name">{item.label}</span>
                        )}
                        <meta itemProp="position" content={(index + 1).toString()} />
                        {index < items.length - 1 ? (
                            <span aria-hidden="true">/</span>
                        ) : null}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
