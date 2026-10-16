"use client";

import { useRouter } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string; // Example: "/admin/tag" or "/admin/blog"
}

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  const router = useRouter();

  const handlePageChange = (newPage: number) => {
    router.push(`${basePath}?page=${newPage}`);
  };

  return (
    <div className="table-pagination">
      <div className="flex items-center justify-between">
        <div className="buttons">
          {currentPage > 1 && (
            <button onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
          )}
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={currentPage === i + 1 ? "active" : ""}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          {currentPage < totalPages && (
            <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
          )}
        </div>
        <small>Page {currentPage} of {totalPages || 1}</small>
      </div>
    </div>
  );
}
