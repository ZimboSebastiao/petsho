import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Image } from "@nextui-org/react";

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre - PetShop</title>
        <meta
          name="description"
          content="Saiba mais sobre a história do nosso pet shop, nossa paixão por animais e nosso compromisso em proporcionar serviços e produtos de alta qualidade. Descubra por que somos a escolha ideal para cuidar do bem-estar dos seus pets."
        />
        <meta
          name="keywords"
          content="história do pet shop, compromisso com animais, equipe dedicada, paixão por pets, cuidado animal, qualidade no atendimento, valores do pet shop"
        />
      </Head>
      <StyledSobre>
        <h2 className="class-h2">Sobre nosso PetShop</h2>
        <Container>
          <article>
            <div className="img-fundo"></div>

            <Accordion className="accor-formt">
              <AccordionItem key="1" aria-label="Missão" title="Missão">
                <p>
                  Oferecer produtos e serviços de alta qualidade, promovendo o
                  amor, a saúde e a felicidade dos pets, enquanto cultivamos
                  relações duradouras com nossos clientes. Buscamos
                  constantemente inovações e práticas sustentáveis para
                  contribuir positivamente para a comunidade e o meio ambiente.
                </p>
              </AccordionItem>

              <AccordionItem key="2" aria-label="Visão" title="Visão">
                <p>
                  Ser reconhecido como o petshop referência em cuidado,
                  bem-estar e inovação, proporcionando experiências excepcionais
                  para clientes e seus animais de estimação.
                </p>
              </AccordionItem>
              <AccordionItem key="3" aria-label="Valores" title="Valores">
                <p>
                  {" "}
                  <b>Amor pelos Animais:</b> Comprometemo-nos a tratar cada
                  animal com respeito, carinho e atenção, assegurando que cada
                  visita ao PetShop Fofurinha seja uma experiência positiva para
                  os pets.
                </p>
                <p>
                  <b>Excelência no Atendimento: </b>
                  Buscamos a satisfação total do cliente, garantindo um
                  atendimento personalizado, eficiente e amigável. Acreditamos
                  que a dedicação ao cliente é a chave para o nosso sucesso.
                </p>
                <p>
                  <b>Responsabilidade Ambiental: </b>
                  Adotamos práticas sustentáveis em nossas operações, promovendo
                  a conscientização ambiental e procurando constantemente
                  maneiras de reduzir nosso impacto no meio ambiente.
                </p>
              </AccordionItem>
            </Accordion>
          </article>
        </Container>
      </StyledSobre>
    </>
  );
}

const StyledSobre = styled.section`
  .class-h2::before {
    content: "💡 ";
  }

  img {
    display: none;
  }

  @media screen and (min-width: 700px) {
    img {
      display: block;
    }
    .img-fundo {
      background-image: url("/images/puppies.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      width: 360px;
      height: 240px;
      border-radius: 4rem;
      padding-right: 2rem;
    }
    article {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .accor-formt {
      width: 50%;
    }
  }
`;
