import React from "react";

import { Container, Logo, SearchContainer, BagContainer } from "./styles";
import SvgComponent from "../SvgComponent";
import Link from "next/link";
import { useCart } from "../../hooks/cart";
import {
  useGetAllProductsByName,
  useGetAllProductsByPage,
} from "../../graphql/querys";
import { useState } from "react";
import { useProducts } from "../../hooks/products";
import { convertMoney } from "../../utils/money";
import { IProduct } from "../../dtos";
import { useEffect } from "react";
import Loader from "react-loader-spinner";
import { useRouter } from "next/dist/client/router";

export function Header() {
  const { quantityCart } = useCart();
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const { setProducts, setCountProducts } = useProducts();
  const { refetch } = useGetAllProductsByName(value);
  const { refetch: refetchAll } = useGetAllProductsByPage(1, 12, "all", "", "");
  const router = useRouter();

  const getProducts = async () => {
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
  };

  useEffect(() => {
    //vejo se já tem algo digitado para buscar, se já tiver espero até o usuário ficar 1 seg sem digitar nada, para somente ai buscar.
    if (value) {
      const timer = setTimeout(() => {
        getProducts();
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    } else {
      refetchAll();
    }
  }, [value]);

  return (
    <Container>
      <div>
        <Link href="/">
          <Logo>capputeeno</Logo>
        </Link>
        <div>
          <SearchContainer onClick={() => router.push("/")}>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Procurando por algo específico?"
              type="text"
            />
            {loading ? (
              <Loader type="Puff" color="#737380" height={24} width={24} />
            ) : (
              <SvgComponent type="lupa" />
            )}
          </SearchContainer>
          <Link href="/cart">
            <BagContainer>
              <SvgComponent cursor="pointer" type="loja" />
              {quantityCart > 0 && <div>{quantityCart}</div>}
            </BagContainer>
          </Link>
        </div>
      </div>
    </Container>
  );
}
