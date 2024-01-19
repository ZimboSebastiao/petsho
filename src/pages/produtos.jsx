import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";

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
          <article>
            <h3>Banho</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              delectus dicta voluptate nesciunt cum animi amet quis veniam
              velit. Magnam labore similique praesentium nulla? Quas id tempora
              aliquid eaque dolore!
            </p>
          </article>

          <article>
            <h3>Castração</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              delectus dicta voluptate nesciunt cum animi amet quis veniam
              velit. Magnam labore similique praesentium nulla? Quas id tempora
              aliquid eaque dolore!
            </p>
          </article>

          <article>
            <h3>Tosa</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              delectus dicta voluptate nesciunt cum animi amet quis veniam
              velit. Magnam labore similique praesentium nulla? Quas id tempora
              aliquid eaque dolore!
            </p>
          </article>
        </Container>
      </StyledProduto>
    </>
  );
}

const StyledProduto = styled.section`
  h2::before {
    content: "🎁 ";
  }
`;
