import { Container, BackContainer, ItemContainer } from "../../styles/Product";
import { gql } from "@apollo/client";
import client from "../../services/apollo-client";
import { convertMoney } from "../../utils/money";
import { IProduct } from "../../dtos";
import { GetStaticPaths, GetStaticProps } from "next";
import { Params } from "next/dist/next-server/server/router";
import Image from "next/image";
import SvgComponent from "../../components/SvgComponent";
import Link from "next/link";
import SEO from "../../components/SEO";
import { toast } from "react-toastify";
import { useCart } from "../../hooks/cart";
import { useCallback } from "react";

interface StaticProps {
  product: IProduct;
}

export default function ProductPage({ product }: StaticProps) {
  const { addToCart } = useCart();

  const addItemToCart = useCallback(() => {
    addToCart(product);
    toast.success(`${product?.name} adicionado ao carrinho!`);
  }, []);

  return (
    <Container>
      <SEO
        title={`capputeeno | ${product?.name}`}
        description={`capputeeno, página de detalhes do produto ${product?.name}`}
        image="/assets/capputeeno.png"
      />
      <div>
        <Link href="/">
          <BackContainer>
            <SvgComponent cursor="pointer" type="voltar" />
            <p>Voltar</p>
          </BackContainer>
        </Link>
        <ItemContainer>
          <Image
            width="100%"
            height="580px"
            src={
              product?.image_url ||
              "https://geminus.com.br/template_base/icones_svg/erro404.svg"
            }
            alt={`imagem ${product?.name}`}
          />
          <div>
            <p className="category">
              {product?.category === "t-shirts" ? "Camiseta" : "Caneca"}
            </p>
            <h1>{product?.name}</h1>
            <h2>{product?.convertedPrice}</h2>
            <small>
              *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
              R$900,00.
            </small>
            <p className="description-title">DESCRIÇÃO</p>
            <span>{product?.description}</span>

            <button onClick={addItemToCart}>
              <SvgComponent cursor="pointer" color="#F5F5FA" type="loja" />
              ADICIONAR AO CARRINHO
            </button>
          </div>
        </ItemContainer>
      </div>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query GetAllProductsIds {
        allProducts {
          id
        }
      }
    `,
  });

  const paths = data.allProducts.map((product: IProduct) => {
    return {
      params: { product_id: product.id },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<StaticProps> = async ({
  params,
}: Params) => {
  const { product_id } = params;

  const { data } = await client.query({
    query: gql`
      query GetProductById($productId: ID!) {
        Product(id: $productId) {
          name
          description
          image_url
          category
          id
          price
        }
      }
    `,
    variables: { productId: product_id },
  });

  const newProductWithConvertedPrice = {
    ...data.Product,
    convertedPrice: convertMoney(Number(data.Product?.price)),
  };

  if (!newProductWithConvertedPrice.id) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  return {
    props: {
      product: newProductWithConvertedPrice,
    },
    revalidate: 60 * 30, //30 min
  };
};
