import { render, screen } from "@testing-library/react";
import { Pagination } from ".";

describe("show items on page", () => {
  test("renders correct number of pagination items", async () => {
    render(
      <Pagination
        totalProducts={62}
        setCurrentPage={() => {}}
        currentPage={1}
      />
    );

    expect(screen.getByText("5")).toBeInTheDocument();
  });
});
