import React, { ReactNode } from "react";

import { Container } from "./styles";

interface DialogProps {
  children: ReactNode;
  open: boolean;
}

export function Dialog({ children, open }: DialogProps) {
  return (
    <Container
      style={
        open ? { width: "100vw", padding: "15px" } : { width: "0", padding: 0 }
      }
    >
      {children}
    </Container>
  );
}
