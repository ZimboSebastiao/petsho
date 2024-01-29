import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import ListaPosts from "@/components/ListaPosts";
import { useEffect, useState } from "react";
import serverApi from "./api/server";
import { Button } from "@nextui-org/react";
import ListaCategorias from "@/components/ListaCategorias";

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
  const [filtroAtivo, setFiltroAtivo] = useState(false);
  const [listaPosts, setPosts] = useState(posts);
  const [categoriaAtiva, setCategoriaAtiva] = useState("");

  const filtrar = (event) => {
    const categoriaEscolhida = event.currentTarget.textContent;
    // console.log(categoriaEscolhida);
    const novaListaPost = posts.filter(
      (post) => post.categoria == categoriaEscolhida
    );
    setFiltroAtivo(true);
    setPosts(novaListaPost);

    // Sinalizando o state com o texto/categoria escolhida
    setCategoriaAtiva(categoriaEscolhida);
  };

  const limparFiltro = () => {
    setFiltroAtivo(false);
    setPosts(posts);

    // Atualizando o state da actegoria ativa para vazio ""
    setCategoriaAtiva("");
  };

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

        <ListaCategorias
          categorias={categorias}
          categoriaAtiva={categoriaAtiva}
          onFiltrar={filtrar}
          filtroAtivo={filtroAtivo}
          onLimparFiltro={limparFiltro}
        />
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
