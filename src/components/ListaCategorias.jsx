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
    <StyledCategoria className="gap-4">
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
  justify-content: space-evenly;
  margin: 1rem 0;
  align-items: center;
  flex-wrap: wrap;

  button {
    text-transform: capitalize;

    background-color: var(--cor-secundaria-fundo);
    color: #f7f7f7;

    &.ativo {
      background-color: #1515a2;
    }
  }

  .limpar {
    background-color: #ab1212;
    &:hover {
      background-color: #ff1900;
    }
    &::before {
      content: " 🧹";
    }
  }
`;
