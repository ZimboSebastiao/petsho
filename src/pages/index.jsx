import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

export default function Home() {
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
        <StyledListaPosts>
          <article>
            <Link href="">
              <h3>Título do post</h3>
              <p>Subtítulo do post</p>
            </Link>
          </article>
          <article>
            <Link href="">
              <h3>Título do post</h3>
              <p>Subtítulo do post</p>
            </Link>
          </article>
        </StyledListaPosts>
      </StyledHome>
    </>
  );
}

const StyledHome = styled.section`
  h2::before {
    content: "📰 ";
  }
`;

const StyledListaPosts = styled.div``;
