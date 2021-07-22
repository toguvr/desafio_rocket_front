import React from "react";

import { Container, OptionPage } from "./styles";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

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
  const totalPages = Math.ceil(totalProducts / 12);

  const allPages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const changePage = (status: "up" | "down") => {
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
  };

  return (
    <Container>
      {allPages.map((page) => {
        return (
          <OptionPage
            key={page}
            onClick={() => setCurrentPage(page)}
            selected={currentPage === page}
          >
            {page}
          </OptionPage>
        );
      })}

      <OptionPage
        onClick={() => changePage("down")}
        style={{ marginLeft: "8px" }}
        selected={false}
      >
        <FiChevronLeft />
      </OptionPage>
      <OptionPage onClick={() => changePage("up")} selected={false}>
        <FiChevronRight />
      </OptionPage>
    </Container>
  );
}
