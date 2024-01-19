import Head from "next/head";
import styled from "styled-components";

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre - PetShop</title>
        <meta
          name="description"
          content="Saiba mais sobre a história do nosso pet shop, nossa paixão por animais e nosso compromisso em proporcionar serviços e produtos de alta qualidade. Descubra por que somos a escolha ideal para cuidar do bem-estar dos seus pets."
        />
        <meta
          name="keywords"
          content="história do pet shop, compromisso com animais, equipe dedicada, paixão por pets, cuidado animal, qualidade no atendimento, valores do pet shop"
        />
      </Head>
      <StyledSobre>
        <h2>Sobre nosso PetShop</h2>

        <h3>Missão</h3>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
          necessitatibus rerum dolorum, molestiae id officia? Eveniet
          repudiandae perferendis animi iste deleniti asperiores nemo voluptatem
          fuga! Unde repellendus cum earum rerum.
        </p>

        <h3>Visão</h3>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
          necessitatibus rerum dolorum, molestiae id officia? Eveniet
          repudiandae perferendis animi iste deleniti asperiores nemo voluptatem
          fuga! Unde repellendus cum earum rerum. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eligendi officia amet modi natus non
          alias sapiente fugit, odit nisi voluptatibus?
        </p>

        <h3>Valores</h3>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
          necessitatibus rerum dolorum, molestiae id officia? Eveniet
          repudiandae perferendis animi iste deleniti asperiores nemo voluptatem
          fuga! Unde repellendus cum earum rerum.
        </p>
      </StyledSobre>
    </>
  );
}

const StyledSobre = styled.section`
  h2::before {
    content: "💡 ";
  }
`;
