import React from "react";

import { Container, OptionPage } from "./styles";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useMemo } from "react";
import { useCallback } from "react";

interface PaginationProps {
  totalProducts: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export function Pagination({
  totalProducts,
  currentPage,
  setCurrentPage,
}: PaginationProps) {
  const totalPages = useMemo(() => {
    return Math.ceil(totalProducts / 12);
  }, [totalProducts]);

  const allPages = useMemo(() => {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }, [totalPages]);

  const changePage = useCallback(
    (status: "up" | "down") => {
      if (status === "up") {
        if (currentPage < totalPages) {
          return setCurrentPage(currentPage + 1);
        }
        return;
      } else {
        if (totalPages > 0 && currentPage > 1) {
          return setCurrentPage(currentPage - 1);
        }
        return;
      }
    },
    [currentPage, totalPages, setCurrentPage]
  );

  return (
    <Container>
      {allPages.map((page) => {
        return (
          <OptionPage
            aria-label="Page Option"
            key={page}
            onClick={() => setCurrentPage(page)}
            selected={currentPage === page}
          >
            {page}
          </OptionPage>
        );
      })}

      <OptionPage
        aria-label="Left Align"
        onClick={() => changePage("down")}
        style={{ marginLeft: "8px" }}
        selected={false}
      >
        <FiChevronLeft />
      </OptionPage>
      <OptionPage
        aria-label="Right Align"
        onClick={() => changePage("up")}
        selected={false}
      >
        <FiChevronRight />
      </OptionPage>
    </Container>
  );
}
