import styled from "styled-components";
import Link from "next/link";

export default function ListaPosts({ posts }) {
  // Se não houver posts (se estiver vazio), retorne essa condicional
  if (posts.length === 0)
    return (
      <h3 style={{ textAlign: "center", color: "red" }}>Ainda não há posts!</h3>
    );

  return (
    <StyledListaPosts>
      {posts.map((post) => {
        return (
          <article key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <h3>{post.titulo}</h3>
              <p>{post.subtitulo} </p>
            </Link>
          </article>
        );
      })}
    </StyledListaPosts>
  );
}

const StyledListaPosts = styled.div`
  article {
    background-color: #f7f7f7;
    padding: 1rem;
    margin-bottom: 1rem;
    box-shadow: var(--sombra-box);
    border-radius: var(--borda-arredondada);
    transition: transform 200ms;

    & a {
      text-decoration: none;
      color: black;

      &:hover,
      &:focus {
        color: #2525e0d6;
      }
    }
  }

  article:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  @media screen and (min-width: 500px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    article {
      width: 49%;
    }
  }
`;
