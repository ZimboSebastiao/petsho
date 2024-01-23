import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";

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

const StyledPost = styled.article``;
