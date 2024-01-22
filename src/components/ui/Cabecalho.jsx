import Link from "next/link.js";
import Menu from "./Menu.jsx";
import Image from "next/image";
import styled from "styled-components";

export default function Cabecalho() {
  return (
    <StyledHeader>
      <div className="limitador">
        <h1>
          <Link href="/">
            <Image
              src="/images/logo.png"
              width={38}
              height={38}
              alt="Patinha dentro de um coração"
            />
            PetShop
          </Link>
        </h1>
        <Menu />
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: #f7f7f7;
  box-shadow: var(--sombra-box);

  h1 a {
    text-decoration: none;
    color: var(--cor-primaria);
    background-color: var(--cor-primaria-fundo);
    padding: 0.5rem 1rem;
    border-radius: var(--borda-arredondada);
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    margin-right: 0.5rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding-bottom: 1rem;
  }

  h1 a:hover,
  h1 a:focus {
    color: #d17171;
  }

  @media screen and (min-width: 700px) {
    div {
      flex-direction: row;

    }

    h1 a {
      font-size: 2rem;
    }
  }
`;
