import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import ListaPosts from "@/components/ListaPosts";
import { useEffect, useState } from "react";
import { Inter } from "next/font/google";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const carregarPosts = async () => {
      try {
        const resposta = await fetch(`http://localhost:5000/posts`);
        const dados = await resposta.json();
        setPosts(dados);
        console.log(dados);
      } catch (error) {
        console.error("Erro ao carregar Posts: " + error);
        const dados = await resposta.json();
      }
    };
    carregarPosts();
  }, []);

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

        <ListaPosts key={posts.id} posts={posts} />
      </StyledHome>
    </>
  );
}

const StyledHome = styled.section`
  h2::before {
    content: "📰 ";
  }
`;
