import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import serverApi from "./api/server";
import { useRouter } from "next/router";

export default function Contato() {
  const colors = ["primary"];

  let router = useRouter();

  const { register, handleSubmit } = useForm();
  const enviarContato = async (dados) => {
    const { nome, email, mensagem } = dados;
    const opcoes = {
      method: "POST",
      body: JSON.stringify({ nome, email, mensagem }),
      headers: {
        "Content-type": "application/json; charset-UTF-8",
      },
    };

    try {
      await fetch(`${serverApi}/contatos.json`, opcoes);
      alert("Dados enviados");
      router.push("/");
    } catch (error) {
      console.error("Erro ao enviar formulário: " + error.message);
    }
  };
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
          <div className="imagem-fundo"></div>
          <form
            action=""
            method="post"
            onSubmit={handleSubmit((dados) => {
              enviarContato(dados);
            })}
          >
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              {colors.map((color) => (
                <Input
                  {...register("nome")}
                  key={color}
                  color={color}
                  required
                  type="text"
                  label="Nome"
                />
              ))}
            </div>

            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              {colors.map((color) => (
                <Input
                  {...register("email")}
                  key={color}
                  color={color}
                  required
                  type="email"
                  label="Email"
                />
              ))}
            </div>

            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              {colors.map((color) => (
                <Textarea
                  {...register("mensagem")}
                  key={color}
                  color={color}
                  required
                  label="Mensagem"
                />
              ))}
            </div>

            <div>
              <Button
                className="flex w-full flex-wrap md:flex-nowrap gap-4"
                type="submit"
              >
                Enviar mensagem
              </Button>
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
    padding: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  button {
    background-color: #ffa666;
    box-shadow: var(--sombra-box);
    padding: 0.7rem;
    color: white;
  }

  img {
    display: none;
  }

  @media screen and (min-width: 700px) {
    form {
      /* background-color: red; */
      div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: start;
        /* background-color: red; */
      }
      width: 50%;
    }

    img {
      display: block;
    }
    .imagem-fundo {
      background-image: url("/images/dog.png");
      background-size: cover;
      background-repeat: no-repeat;
      width: 380px;
      height: 480px;
    }
  }
`;
