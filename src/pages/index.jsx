import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import ListaPosts from "@/components/ListaPosts";
import { useEffect, useState } from "react";

// Executada do servidor/back-end

/* Função getStaticProps
Utilizada para execução de código server-side (neste caso, fetch na API)
com o onjetivo de gerar props com dados processados.

*/
export async function getStaticProps() {
  console.log("Código de servidor (não aparece no cliente/usuário)");

  try {
    const resposta = await fetch(`http://10.20.46.22:5000/posts`);
    const dados = await resposta.json();
    if (!resposta.ok) {
      throw new Error(`Error: ${resposta.status} - ${resposta.statusText}`);
    }

    /*Após o processamento (desde que não haja erros), a getStaticProps retorna 
    um objeto com uma propriedade chamada "props", e nesta propriedade colocamos 
    um objeto com as props que queremos usar. No caso, usamos ima prop chamada 
    "posts" (pode ter qualquer nome) e é nela que colocamos os dados */
    return {
      props: {
        posts: dados,
      },
    };
  } catch (error) {
    console.error("Erro ao carregar dados: " + error.message);
  }
}

export default function Home({ posts }) {
  const [listaPosts, setPosts] = useState(posts);

  return (
    <>
      <Head>
        <title>PetShop</title>
        <meta
          name="description"
          content="Explore dicas, notícias e artigos relacionados ao cuidado e felicidade dos seus animais de estimação. Descubra novidades, curiosidades e promoções especiais em nosso blog dedicado aos amantes de pets."
        />
        <meta
          name="keywords"
          content="pet shop, animais de estimação, cuidados com animais, dicas para pets, notícias pet, promoções pet, bem-estar animal"
        />
      </Head>
      <StyledHome>
        <h2>Pet Notícias</h2>

        <ListaPosts key={listaPosts.id} posts={listaPosts} />
      </StyledHome>
    </>
  );
}

const StyledHome = styled.section`
  h2::before {
    content: "📰 ";
  }
`;
