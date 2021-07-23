import {
  Container,
  BackContainer,
  ItemContainer,
  CartItems,
  Resume,
  CartItemsList,
  CheckoutContainer,
} from "../../styles/Cart";
import SvgComponent from "../../components/SvgComponent";
import Link from "next/link";
import SEO from "../../components/SEO";
import { CartProduct } from "../../components/CartProduct";
import { useCart } from "../../hooks/cart";
import { convertMoney } from "../../utils/money";
import { useState } from "react";
import { Dialog } from "../../components/Dialog";
import { useCallback } from "react";

export default function Cart() {
  const { products, quantityCart, totalPrice, cleanCart } = useCart();
  const [openDialog, setDialog] = useState(false);

  const checkout = useCallback(() => {
    cleanCart();
    setDialog(false);
  }, []);

  return (
    <>
      <Dialog open={openDialog}>
        <CheckoutContainer>
          <h2>Compra realizada com sucesso</h2>
          <p>
            Seu pedido é o número:{" "}
            <strong>
              #{Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000}
            </strong>{" "}
          </p>
          <p>Seu carrinho será esvaziado.</p>

          <button onClick={checkout}>Continuar</button>
        </CheckoutContainer>
      </Dialog>
      <Container>
        <SEO
          title={`capputeeno | Carrinho`}
          description={`capputeeno, carrinho de compras`}
          image="/assets/capputeeno.png"
        />
        <div>
          <ItemContainer>
            <Link href="/">
              <BackContainer>
                <SvgComponent cursor="pointer" type="voltar" />
                <p>Voltar</p>
              </BackContainer>
            </Link>
            <CartItems>
              <h1>SEU CARRINHO</h1>
              <p>
                Total ({quantityCart}{" "}
                {quantityCart === 1 ? "produto" : "produtos"}){" "}
                <strong>{convertMoney(Number(totalPrice))}</strong>
              </p>
              <CartItemsList>
                {Array.isArray(products) && products.length > 0 ? (
                  products.map((product) => (
                    <CartProduct
                      key={product.id}
                      imageUrl={product.image_url}
                      description={product.description}
                      id={product.id}
                      name={product.name}
                      price={product.price}
                      quantity={product.quantity}
                    />
                  ))
                ) : (
                  <span>Carrinho vazio</span>
                )}
              </CartItemsList>
            </CartItems>
          </ItemContainer>
          <Resume>
            <h1>Resumo do pedido</h1>
            <div className="resume-price">
              <p>Subtotal de produtos</p>
              <p>{convertMoney(totalPrice)}</p>
            </div>
            <div className="resume-price">
              <p>Entrega</p>
              <p>R$ 40,00</p>
            </div>
            <div className="total-price">
              <strong>Total</strong>
              <strong>{convertMoney(Number(totalPrice) + 40)}</strong>
            </div>
            <button onClick={() => setDialog(true)}>Finalizar a compra</button>
            <a
              className="first-link"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ajuda
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              reembolsos
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              entregas e frete
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              trocas e devoluções
            </a>
          </Resume>
        </div>
      </Container>
    </>
  );
}
