import { render, screen } from "@testing-library/react";
import { mocked } from "ts-jest/utils";
import { IProduct } from "../../dtos";
import Home from "../../pages";
import ProductPage, {
  getStaticPaths,
  getStaticProps,
} from "../../pages/product/[product_id]";
import client from "../../services/apollo-client";

// jest.mock("../../pages", () => {
//   return {
//     globalState() {
//       return {
//         sort: "",
//         order: "",
//       };
//     },
//   };
// });

jest.mock("../../services/apollo-client.ts");

jest.mock("../../hooks/cart.tsx", () => {
  return {
    useCart() {
      return {
        quantityCart: 2,
      };
    },
  };
});

describe("Product page", () => {
  // test("renders conrrectly", () => {
  //   render(
  //     <ProductPage
  //       product={{
  //         name: "teste",
  //         price: "80.00",
  //         id: "123",
  //         image_url:
  //           "https://geminus.com.br/template_base/icones_svg/erro404.svg",
  //         convertedPrice: "R$ 80,00",
  //         category: "mugs",
  //         description: "teste description",
  //       }}
  //     />
  //   );

  //   expect(screen.getByText("R$ 80,00")).toBeInTheDocument();
  // });

  it("loads initial data", async () => {
    const clientGraphQlMockedPaths = mocked(client.query);

    clientGraphQlMockedPaths.mockResolvedValueOnce({
      data: {
        allProducts: [{ id: "123" }],
      },
    } as any);

    const paths = await getStaticPaths({});

    const clientGraphQlMocked = mocked(client.query);

    clientGraphQlMocked.mockResolvedValueOnce({
      data: {
        Product: {
          name: "teste",
          price: "80.00",
          id: "123",
          image_url: "string",
          convertedPrice: "R$ 80,00",
          category: "mugs",
          description: "teste description",
        },
      },
    } as any);

    const response = (await getStaticProps({
      params: { product_id: "123" },
    })) as { props: { product: IProduct } };

    expect(response.props.product.id).toEqual("123");
  });
});
