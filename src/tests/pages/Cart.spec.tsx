import { render, screen } from "@testing-library/react";
import Cart from "../../pages/cart";

jest.mock("../../hooks/cart.tsx", () => {
  return {
    useCart() {
      return {
        quantityCart: 2,
      };
    },
  };
});

describe("Cart page", () => {
  test("renders conrrectly", () => {
    render(<Cart />);

    expect(screen.getByText("Total (2 produtos)")).toBeInTheDocument();
  });
});
