import React, { useCallback, useState } from "react";

import { AlertContainer, Container } from "./styles";
import Image from "next/image";
import Link from "next/link";
import SvgComponent from "../SvgComponent";
import { convertMoney } from "../../utils/money";
import { useCart } from "../../hooks/cart";

import { Dialog } from "../Dialog";
import ClickAwayListener from "react-click-away-listener";

interface ProductCardProps {
  imageUrl: string;
  name: string;
  description: string;
  price: string;
  id: string;
  quantity: number;
}

export function CartProduct({
  imageUrl,
  name,
  description,
  id,
  price,
  quantity,
}: ProductCardProps) {
  const [openDialog, setDialog] = useState(false);
  const [itemToDelete, setItemToDelete] = useState("");
  const { removeFromCart } = useCart();

  const deleteItem = useCallback(() => {
    removeFromCart(itemToDelete);
    setDialog(false);
  }, [itemToDelete]);

  return (
    <Container>
      <Dialog open={openDialog}>
        <AlertContainer>
          <h2>Tem certeza que deseja excluir?</h2>
          <p>Ao continuar o item será retirado do carrinho de compras.</p>
          <div>
            <button onClick={() => setDialog(false)}>Cancelar</button>
            <button onClick={deleteItem}>Continuar</button>
          </div>
        </AlertContainer>
      </Dialog>
      <div className="image-detail">
        <Image
          layout="responsive"
          height={211}
          width={256}
          src={imageUrl}
          alt={`imagem ${name}`}
        />
      </div>
      <div className="product-detail">
        <div>
          <Link href={`/product/${id}`}>
            <p>{name}</p>
          </Link>
          <SvgComponent
            onClick={() => {
              setDialog(true);
              setItemToDelete(id);
            }}
            type="lixo"
            cursor="pointer"
          />
        </div>
        <p>{description}</p>
        <div>
          <select name="" value={quantity} id="">
            <option value={quantity}>{quantity}</option>
          </select>
          <strong>{convertMoney(Number(price) * quantity)}</strong>
        </div>
      </div>
    </Container>
  );
}
