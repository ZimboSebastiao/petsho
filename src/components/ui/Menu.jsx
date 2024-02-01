import Link from "next/link";
import styled from "styled-components";
import { usePathname } from "next/navigation";

export default function Menu() {
  const pathname = usePathname();
  const isActive = (path) => (pathname === path ? "active" : "");
  return (
    <StyledNav>
      <Link className={isActive("/")} href="/">
        Blog{" "}
      </Link>
      <Link className={isActive("/produtos")} href="/produtos">
        Produtos
      </Link>
      <Link className={isActive("/sobre")} href="/sobre">
        Sobre
      </Link>
      <Link className={isActive("/contato")} href="/contato">
        Contato
      </Link>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    background-color: var(--cor-primaria-fundo);
    color: var(--cor-primaria);
    padding: 0.8rem 1rem;

    &:first-child {
      border-top-left-radius: var(--borda-arredondada);
      border-bottom-left-radius: var(--borda-arredondada);
    }

    &:last-child {
      border-top-right-radius: var(--borda-arredondada);
      border-bottom-right-radius: var(--borda-arredondada);
    }

    &:hover,
    &:focus {
      background-color: var(--cor-primaria-fundo-hover);
    }

    @media screen and (min-width: 700px) {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
  a.active {
    background-color: #152298;
  }
`;
