import styled from "styled-components";
import { Button } from "@nextui-org/react";

export default function ListaCategorias({
  categorias,
  categoriaAtiva,
  onFiltrar,
  onLimparFiltro,
  filtroAtivo,
}) {
  return (
    <StyledCategoria>
      {categorias.map((categoria, index) => {
        return (
          <Button
            key={index}
            variant="shadow"
            color="primary"
            type="button"
            className={categoria === categoriaAtiva ? "ativo" : ""}
            onClick={onFiltrar}
          >
            {categoria}
          </Button>
        );
      })}

      {filtroAtivo && (
        <Button onClick={onLimparFiltro} className="limpar">
          Limpar filtro
        </Button>
      )}
    </StyledCategoria>
  );
}

const StyledCategoria = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1rem 0;
  align-items: center;
  flex-wrap: wrap;

  button {
    text-transform: capitalize;
    &.ativo {
      background-color: #0a0a33;
    }
  }

  .limpar {
    background-color: gray;
    &:hover {
      background-color: slategray;
    }
    &::before {
      content: " 🧹";
    }
  }
`;
