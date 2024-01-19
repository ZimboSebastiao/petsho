import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";

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
          {/* <div>
            <Image
              src="/images/cat.png"
              width={380}
              height={480}
              alt="Patinha dentro de um coração"
            />
          </div> */}
          <form action="" method="post">
            <div>
              <input
                placeholder="Nome"
                required
                type="text"
                name="id"
                id="id"
              />
            </div>

            <div>
              <input placeholder="E-mail" required type="email" />
            </div>

            <div>
              <textarea
                placeholder="Mensagem"
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
  div {
    padding: 0.6rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  input {
    box-shadow: var(--sombra-box);
    border-radius: var(--borda-arredondada);
    padding: 0.8rem;
  }

  textarea {
    box-shadow: var(--sombra-box);
    border-radius: var(--borda-arredondada);
    padding: 0.5rem;
  }
  button {
    background-color: #ffa666;
    box-shadow: var(--sombra-box);
    border-radius: var(--borda-arredondada);
    padding: 0.5rem;
  }
  form {
    background-color: blue;
    display: flex;
    flex-direction: column;
    align-items: start;
  }
`;
