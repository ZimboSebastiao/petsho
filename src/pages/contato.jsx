import Container from "@/components/ui/Container";
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
      <StyledContato>
        <h2>Fale conosco</h2>
        <Container>
          <form action="" method="post">
            <div>
              <label htmlFor="nome">Nome: </label>
              <input required type="text" name="id" id="id" />
            </div>

            <div>
              <label htmlFor="email">E-mail: </label>
              <input required type="email" />
            </div>

            <div>
              <label htmlFor="mensagem">Mensagem: </label>
              <textarea
                maxLength={500}
                name="mensagem"
                id="mensagem"
                cols="30"
                rows="8"
              ></textarea>
            </div>

            <div>
              <button type="submit">Enviar mensagem</button>
            </div>
          </form>
        </Container>
      </StyledContato>
    </>
  );
}

const StyledContato = styled.section`
  h2::before {
    content: "💌 ";
  }
`;
