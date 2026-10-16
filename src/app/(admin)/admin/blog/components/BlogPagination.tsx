"use client";

import Link from "next/link";
import { Box, Pagination, PaginationItem, Typography } from "@mui/material";

interface BlogPaginationProps {
    totalPages: number;
    currentPage: number;
    baseParams: string;
    basePath: string;
}

const buildHref = (basePath: string, baseParams: string, page: number) => {
    const params = new URLSearchParams(baseParams);
    params.set("page", page.toString());
    const queryString = params.toString();

    return `${basePath}${queryString ? `?${queryString}` : ""}`;
};

const BlogPagination: React.FC<BlogPaginationProps> = ({
    totalPages,
    currentPage,
    baseParams,
    basePath,
}) => (
    <Box display="flex" justifyContent="space-between" alignItems="center" mt={3}>
        <Typography variant="body2">
            Page {currentPage} of {totalPages}
        </Typography>
        <Pagination
            count={totalPages}
            page={currentPage}
            color="primary"
            renderItem={(item) =>
                item.page ? (
                    <PaginationItem
                        component={Link}
                        href={buildHref(basePath, baseParams, item.page)}
                        {...item}
                    />
                ) : (
                    <PaginationItem {...item} />
                )
            }
        />
    </Box>
);

export default BlogPagination;
