import { renderHook, act } from "@testing-library/react-hooks";
import { useCart, CartProvider } from "./cart";

describe("Cart hook", () => {
  it("should be able to add to cart", async () => {
    jest.spyOn(Storage.prototype, "setItem");

    const { result } = renderHook(() => useCart(), {
      wrapper: CartProvider,
    });
    act(() => {
      result.current.addToCart({
        id: "123456",
        name: "Teste",
        price: "80.00",
      });
    });

    expect(result.current.products[0].id).toEqual("123456");
  });

  it("should restore saved cart data from storage", () => {
    jest.spyOn(Storage.prototype, "getItem").mockImplementation((key) => {
      switch (key) {
        case "@Mycart":
          return JSON.stringify([
            {
              id: "123456",
              name: "Teste",
              price: "80.00",
            },
          ]);
        default:
          return null;
      }
    });

    const { result } = renderHook(() => useCart(), {
      wrapper: CartProvider,
    });

    act(() => {
      result.current.addToCart({
        id: "123456",
        name: "Teste",
        price: "80.00",
      });
    });

    expect(result.current.products[0].id).toEqual("123456");
  });

  it("should be able to clean cart", async () => {
    jest.spyOn(Storage.prototype, "getItem").mockImplementation((key) => {
      switch (key) {
        case "@Mycart":
          return JSON.stringify([
            {
              id: "user-123",
              name: "Augusto",
              email: "augusto@teste.com",
            },
          ]);
        default:
          return null;
      }
    });

    const { result } = renderHook(() => useCart(), {
      wrapper: CartProvider,
    });

    act(() => {
      result.current.cleanCart();
    });

    expect(result.current.products).toEqual([]);
  });
});
