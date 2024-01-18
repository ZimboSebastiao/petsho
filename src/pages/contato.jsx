import Head from "next/head";
import styled from "styled-components";

export default function Contato() {
  return (
    <>
      <Head>
        <title>Contato - PetShop</title>
        <meta
          name="description"
          content="Estamos aqui para ajudar! Entre em contato conosco para esclarecer dúvidas, fazer sugestões ou conhecer melhor nossos serviços. Nossa equipe dedicada está pronta para proporcionar a você e aos seus animais de estimação a melhor experiência possível."
        />
        <meta
          name="keywords"
          content="contato pet shop, suporte ao cliente, esclarecimento de dúvidas, sugestões para pet shop, serviços para animais, atendimento ao cliente, informações de contato"
        />
      </Head>
      <styledContato>
        <h2>Fale conosco</h2>
      </styledContato>
    </>
  );
}

const styledContato = styled.section`
  h2::before {
    content: "💌";
  }
`;
