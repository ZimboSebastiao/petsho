import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";
import ListaProdutos from "@/components/ListaProdutos";

export default function Produtos() {
  return (
    <>
      <Head>
        <title>Produtos - PetShop</title>
        <meta
          name="description"
          content="Descubra uma variedade incrível de produtos para seus animais de estimação. De alimentos premium a brinquedos divertidos e acessórios elegantes, oferecemos o que há de melhor para garantir o conforto e a felicidade de seus amigos peludos."
        />
        <meta
          name="keywords"
          content="produtos para animais, alimentos para pets, brinquedos para animais, acessórios pet, loja de animais, pet shop online, qualidade para pets"
        />
      </Head>
      <StyledProduto>
        <h2>Conheça nossos produtos</h2>
        <Container>
          <ListaProdutos />
        </Container>
      </StyledProduto>
    </>
  );
}

const StyledProduto = styled.section`
  h2::before {
    content: "🎁 ";
  }

  article {
    padding: 1rem;
  }
`;
