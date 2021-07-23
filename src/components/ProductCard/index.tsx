import React from "react";

import { Container } from "./styles";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  imageUrl: string;
  name: string;
  price: string;
  id: string;
  cy: string;
}

export function ProductCard({
  imageUrl,
  name,
  price,
  id,
  cy,
}: ProductCardProps) {
  return (
    <Link href={`/product/${id}`}>
      <Container data-cy={cy}>
        <Image
          width="256px"
          height="300px"
          src={imageUrl}
          alt={`imagem ${name}`}
        />
        <div>
          <p>{name}</p>
          <strong>{price}</strong>
        </div>
      </Container>
    </Link>
  );
}
