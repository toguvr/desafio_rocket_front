import { render, screen } from "@testing-library/react";
import { mocked } from "ts-jest/utils";
import Home, { getStaticProps } from "../../pages";
import client from "../../services/apollo-client";

jest.mock("../../pages", () => {
  return {
    globalState() {
      return {
        sort: "",
        order: "",
      };
    },
  };
});

describe("show items on page", () => {
  // test("renders conrrectly", () => {
  //   render(
  //     <Home
  //       allProducts={[
  //         {
  //           name: "string",
  //           price: "80.00",
  //           id: "string",
  //           image_url: "string",
  //           convertedPrice: "R$ 80,00",
  //           category: "string",
  //           description: "stri",
  //         },
  //       ]}
  //       totalProducts={1}
  //     />
  //   );

  //   expect(screen.getByText("R$ 80,00")).toBeInTheDocument();
  // });

  it("loads initial data", async () => {
    const clientGraphQlMocked = mocked(client.query);
    clientGraphQlMocked.mockResolvedValueOnce({
      data: {
        allProducts: [
          {
            name: "string",
            price: "80.00",
            id: "string",
            image_url: "string",
            convertedPrice: "R$ 80,00",
            category: "string",
            description: "stri",
          },
        ],
        _allProductsMeta: { count: 1 },
      },
    } as any);

    const response = await getStaticProps({});

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          allProducts: [
            {
              name: "string",
              price: "80.00",
              id: "string",
              image_url: "string",
              convertedPrice: "R$ 80,00",
              category: "string",
              description: "stri",
            },
          ],
          _allProductsMeta: { count: 1 },
        },
      })
    );
  });
});
