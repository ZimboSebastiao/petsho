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
      </StyledSobre>
    </>
  );
}

const StyledSobre = styled.section`
  h2::before {
    content: "💡 ";
  }
`;
