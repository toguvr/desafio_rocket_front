import React, { useState } from "react";

import { Container } from "./styles";
import { FiChevronDown } from "react-icons/fi";
import ClickAwayListener from "react-click-away-listener";
import { useGlobalState } from "../../hooks/globalState";
import { useCallback } from "react";

export function Organize() {
  const [open, setOpen] = useState(false);
  const { setGlobalState } = useGlobalState();

  const handleOrganize = useCallback((sort, order) => {
    setGlobalState({ sort, order });
    setOpen(false);
  }, []);

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <Container>
        <div onClick={() => setOpen(!open)}>
          <p>Organizar por</p>
          <FiChevronDown />
        </div>
        {open && (
          <div className="organizeOptions">
            <p onClick={() => handleOrganize("", "")}>Novidades</p>
            <p onClick={() => handleOrganize("price", "desc")}>
              Preço: Maior - menor
            </p>
            <p onClick={() => handleOrganize("price", "asc")}>
              Preço: Menor - maior
            </p>
            <p onClick={() => handleOrganize("", "")}>Mais vendidos</p>
          </div>
        )}
      </Container>
    </ClickAwayListener>
  );
}
