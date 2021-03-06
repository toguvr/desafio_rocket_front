import { useState, useEffect, useCallback } from "react";
import { Organize } from "../components/Organize";
import { Pagination } from "../components/Pagination";
import { ProductCard } from "../components/ProductCard";
import {
  Container,
  FilterContainer,
  CategoryList,
  Category,
  ProductsContainer,
} from "../styles/Home";
import { gql } from "@apollo/client";
import client from "../services/apollo-client";
import { convertMoney } from "../utils/money";
import { IProduct } from "../dtos";
import { useProducts } from "../hooks/products";
import { useGetAllProductsByPage } from "../graphql/querys";
import { useGlobalState } from "../hooks/globalState";
import Loader from "react-loader-spinner";
import Head from "next/head";

interface HomeProps {
  allProducts: IProduct[];
  totalProducts: number;
}

export default function Home({ allProducts, totalProducts }: HomeProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(false);
  const { products, setProducts, countProducts, setCountProducts } =
    useProducts();

  const { globalState } = useGlobalState();

  const { refetch } = useGetAllProductsByPage(
    currentPage - 1,
    12,
    category,
    globalState.sort,
    globalState.order
  );

  const getProducts = useCallback(async () => {
    setLoading(true);

    try {
      const { data } = await refetch();

      const newDataConvertedPrice = data.allProducts.map(
        (product: IProduct) => {
          return {
            ...product,
            convertedPrice: convertMoney(Number(product.price)),
          };
        }
      );

      setProducts(newDataConvertedPrice);
      setCountProducts(data._allProductsMeta.count);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  }, [setCountProducts, setProducts]);

  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  useEffect(() => {
    getProducts();
  }, [category, currentPage, globalState]);

  useEffect(() => {
    setProducts(allProducts);
    setCountProducts(totalProducts);
  }, []);

  return (
    <Container>
      <Head>
        <title>capputeeno | Home</title>
        <meta name="descrition" content="capputeeno, loja online" />
      </Head>
      <div>
        <FilterContainer>
          <CategoryList>
            <Category
              onClick={() => setCategory("all")}
              selected={category === "all"}
            >
              TODOS OS PRODUTOS
            </Category>
            <Category
              onClick={() => setCategory("t-shirts")}
              selected={category === "t-shirts"}
            >
              CAMISETAS
            </Category>
            <Category
              onClick={() => setCategory("mugs")}
              selected={category === "mugs"}
            >
              CANECAS
            </Category>
          </CategoryList>
          <Organize />
        </FilterContainer>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalProducts={countProducts}
        />
        <ProductsContainer>
          {loading ? (
            <>
              <Loader type="Puff" color="#737380" />
              <h1>Carregando...</h1>
            </>
          ) : products.length > 0 ? (
            products.map((product, index) => {
              return (
                <ProductCard
                  cy={"product-item-" + index}
                  key={product.id}
                  id={product.id}
                  imageUrl={product.image_url}
                  name={product.name}
                  price={product.convertedPrice}
                />
              );
            })
          ) : (
            <span>Nenhum item encontrado</span>
          )}
        </ProductsContainer>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalProducts={countProducts}
        />
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query GetAllProducts {
        allProducts(page: 1, perPage: 12) {
          name
          price
          id
          image_url
        }
        _allProductsMeta {
          count
        }
      }
    `,
  });

  const newDataConvertedPrice = data.allProducts.map((product: IProduct) => {
    return { ...product, convertedPrice: convertMoney(Number(product.price)) };
  });

  return {
    props: {
      allProducts: newDataConvertedPrice,
      totalProducts: data._allProductsMeta.count,
    },
  };
}
