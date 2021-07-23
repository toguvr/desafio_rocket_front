import React from "react";

import {
  Container,
  Logo,
  SearchContainer,
  BagContainer,
  SearchContent,
  ResultsContent,
} from "./styles";
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
import ClickAwayListener from "react-click-away-listener";

export function Header() {
  const { quantityCart } = useCart();
  const [value, setValue] = useState("");
  const [searchProducts, setSearchProducts] = useState([] as IProduct[]);
  const [loading, setLoading] = useState(false);
  // const { setProducts, setCountProducts } = useProducts();
  const { refetch } = useGetAllProductsByName(value);
  // const { refetch: refetchAll } = useGetAllProductsByPage(1, 12, "all", "", "");
  // const router = useRouter();

  const getProducts = async () => {
    setLoading(true);

    try {
      const { data } = await refetch();

      console.log(data.allProducts);

      setSearchProducts(data.allProducts);
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
    }
  }, [value]);

  return (
    <Container>
      <div>
        <Link href="/">
          <Logo>capputeeno</Logo>
        </Link>
        <div>
          <SearchContainer>
            <SearchContent>
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
            </SearchContent>
            {searchProducts.length > 0 && value && (
              <ClickAwayListener
                onClickAway={() => {
                  setValue("");
                }}
              >
                <ResultsContent>
                  {searchProducts.map((product) => (
                    <Link key={product.id} href={`/product/${product.id}`}>
                      <div onClick={() => setSearchProducts([])}>
                        <img
                          src={product.image_url}
                          alt={"Imagem" + product.name}
                        />
                        <p>{product.name}</p>
                      </div>
                    </Link>
                  ))}
                </ResultsContent>
              </ClickAwayListener>
            )}
            {searchProducts.length === 0 && value && !loading && (
              <ClickAwayListener
                onClickAway={() => {
                  setValue("");
                }}
              >
                <ResultsContent>
                  <div>
                    <p>Nenhum produto encontrado com este nome</p>
                  </div>
                </ResultsContent>
              </ClickAwayListener>
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
