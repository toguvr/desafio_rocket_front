import React from "react";

import { Container } from "./styles";
import Image from "next/image";
import Link from "next/link";
import SvgComponent from "../SvgComponent";
import { convertMoney } from "../../utils/money";
import { useCart } from "../../hooks/cart";

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
  const { removeFromCart } = useCart();
  return (
    <Container>
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
            onClick={() => removeFromCart(id)}
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
