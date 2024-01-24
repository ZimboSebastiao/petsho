import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import ListaPosts from "@/components/ListaPosts";
import { useEffect, useState } from "react";
import serverApi from "./api/server";
import { Button } from "@nextui-org/react";

export async function getStaticProps() {
  try {
    const resposta = await fetch(`${serverApi}/posts`);
    const dados = await resposta.json();
    if (!resposta.ok) {
      throw new Error(`Error: ${resposta.status} - ${resposta.statusText}`);
    }

    const categorias = dados.map((post) => post.categoria);

    const categoriaUnicas = [...new Set(categorias)];

    return {
      props: {
        posts: dados,
        categorias: categoriaUnicas,
      },
    };
  } catch (error) {
    console.error("Erro ao carregar dados: " + error.message);
    return {
      notFound: true,
    };
  }
}

export default function Home({ posts, categorias }) {
  // console.log(categorias);
  const [listaPosts, setPosts] = useState(posts);

  const filtrar = (event) => {
    const categoriaEscolhida = event.currentTarget.innerText;
    console.log(categoriaEscolhida);
  };

  // const categoriaFiltradas = categorias.filter((fill) => {
  //   return fill.categoria === categorias || categorias === null;
  // });

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

        <StyledCategoria>
          {categorias.map((categoria, index) => {
            return (
              <Button
                key={index}
                variant="shadow"
                color="primary"
                type="button"
                onClick={filtrar}
              >
                {categoria}
              </Button>
            );
          })}
        </StyledCategoria>

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

const StyledCategoria = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1rem 0;
  align-items: center;
  flex-wrap: wrap;
`;
