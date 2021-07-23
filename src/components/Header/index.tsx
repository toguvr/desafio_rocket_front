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
import { useGetAllProductsByName } from "../../graphql/querys";
import { useState } from "react";
import { IProduct } from "../../dtos";
import { useEffect } from "react";
import Loader from "react-loader-spinner";
import ClickAwayListener from "react-click-away-listener";
import { useCallback } from "react";
import Image from "next/image";

export function Header() {
  const { quantityCart } = useCart();
  const [value, setValue] = useState("");
  const [searchProducts, setSearchProducts] = useState([] as IProduct[]);
  const [loading, setLoading] = useState(false);
  const { refetch } = useGetAllProductsByName(value);

  const getProducts = useCallback(async () => {
    setLoading(true);

    try {
      const { data } = await refetch();

      setSearchProducts(data.allProducts);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  }, []);

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
          <ClickAwayListener
            onClickAway={() => {
              setValue("");
            }}
          >
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
                <ResultsContent>
                  {searchProducts.map((product) => (
                    <Link key={product.id} href={`/product/${product.id}`}>
                      <div onClick={() => setSearchProducts([])}>
                        <Image
                          width="40px"
                          height="40px"
                          src={product.image_url}
                          alt={"Imagem" + product.name}
                        />
                        <p>{product.name}</p>
                      </div>
                    </Link>
                  ))}
                </ResultsContent>
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
          </ClickAwayListener>
          <Link href="/cart">
            <BagContainer data-cy="cart-button">
              <SvgComponent cursor="pointer" type="loja" />
              {quantityCart > 0 && <div>{quantityCart}</div>}
            </BagContainer>
          </Link>
        </div>
      </div>
    </Container>
  );
}
