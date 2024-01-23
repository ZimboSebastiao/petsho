import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";
import serverApi from "../api/server";

export async function getStaticProps({ params }) {
  const { id } = params;
  console.log(id);
  try {
    const resposta = await fetch(`${serverApi}/posts/${id}`);
    if (!resposta.ok) {
      throw new Error(`Error: ${resposta.status} - ${resposta.statusText}`);
    }
    const dados = await resposta.json();

    return {
      props: {
        post: dados,
      },
    };
  } catch (error) {
    console.error("Erro ao carregar dados: " + error.message);
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default function post() {
  return (
    <>
      <Head>
        <title>Titulo - Petshop</title>
        <meta name="description" content="Descrição do post" />
      </Head>

      <StyledPost>
        <h2>titulo do post</h2>

        <Container>
          <h3>Categoria do post</h3>
          <p>Descriçaõ do post</p>
        </Container>
      </StyledPost>
    </>
  );
}

const StyledPost = styled.article`
  h2::before {
    content: "📑 ";
  }
`;
