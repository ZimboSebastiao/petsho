import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { usePagination, PaginationItemType } from "@nextui-org/react";
import { ChevronIcon } from "./ChevronIcon";
import cn from "classnames";

export default function ListaProdutos() {
  const list = [
    {
      title: "Kit Limpeza",
      img: "/images/kit.png",
      price: "R$75.50",
    },
    {
      title: "Adeus Bafo",
      img: "/images/kit-casa.png",
      price: "R$87.00",
    },
    {
      title: "Ração",
      img: "/images/food.png",
      price: "R$50.00",
    },
    {
      title: "Ração",
      img: "/images/food2.png",
      price: "R$50.30",
    },
    {
      title: "Saquinho",
      img: "/images/saquinho.png",
      price: "R$25.70",
    },
    {
      title: "Cama Pet",
      img: "/images/cama-pet-envelope.jpg",
      price: "R$88.00",
    },
    {
      title: "Tapete",
      img: "/images/tapete-de-alimentacao.jpeg",
      price: "R$47.50",
    },
    {
      title: "Kit Tossa",
      img: "/images/tosa.png",
      price: "R$82.20",
    },
    {
      title: "Kit Limpeza",
      img: "/images/kit.png",
      price: "R$75.50",
    },
    {
      title: "Adeus Bafo",
      img: "/images/kit-casa.png",
      price: "R$87.00",
    },
    {
      title: "Ração",
      img: "/images/food.png",
      price: "R$50.00",
    },
    {
      title: "Ração",
      img: "/images/food2.png",
      price: "R$50.30",
    },
    {
      title: "Saquinho",
      img: "/images/saquinho.png",
      price: "R$25.70",
    },
    {
      title: "Cama Pet",
      img: "/images/cama-pet-envelope.jpg",
      price: "R$88.00",
    },
    {
      title: "Tapete",
      img: "/images/tapete-de-alimentacao.jpeg",
      price: "R$47.50",
    },
    {
      title: "Kit Tossa",
      img: "/images/tosa.png",
      price: "R$82.20",
    },
    {
      title: "Kit Limpeza",
      img: "/images/kit.png",
      price: "R$75.50",
    },
    {
      title: "Adeus Bafo",
      img: "/images/kit-casa.png",
      price: "R$87.00",
    },
    {
      title: "Ração",
      img: "/images/food.png",
      price: "R$50.00",
    },
    {
      title: "Ração",
      img: "/images/food2.png",
      price: "R$50.30",
    },
    {
      title: "Saquinho",
      img: "/images/saquinho.png",
      price: "R$25.70",
    },
    {
      title: "Cama Pet",
      img: "/images/cama-pet-envelope.jpg",
      price: "R$88.00",
    },
    {
      title: "Tapete",
      img: "/images/tapete-de-alimentacao.jpeg",
      price: "R$47.50",
    },
    {
      title: "Kit Tossa",
      img: "/images/tosa.png",
      price: "R$82.20",
    },
    {
      title: "Kit Limpeza",
      img: "/images/kit.png",
      price: "R$75.50",
    },
    {
      title: "Adeus Bafo",
      img: "/images/kit-casa.png",
      price: "R$87.00",
    },
    {
      title: "Ração",
      img: "/images/food.png",
      price: "R$50.00",
    },
    {
      title: "Ração",
      img: "/images/food2.png",
      price: "R$50.30",
    },
    {
      title: "Saquinho",
      img: "/images/saquinho.png",
      price: "R$25.70",
    },
    {
      title: "Cama Pet",
      img: "/images/cama-pet-envelope.jpg",
      price: "R$88.00",
    },
    {
      title: "Tapete",
      img: "/images/tapete-de-alimentacao.jpeg",
      price: "R$47.50",
    },
    {
      title: "Kit Tossa",
      img: "/images/tosa.png",
      price: "R$82.20",
    },
    {
      title: "Kit Limpeza",
      img: "/images/kit.png",
      price: "R$75.50",
    },
    {
      title: "Adeus Bafo",
      img: "/images/kit-casa.png",
      price: "R$87.00",
    },
    {
      title: "Ração",
      img: "/images/food.png",
      price: "R$50.00",
    },
    {
      title: "Ração",
      img: "/images/food2.png",
      price: "R$50.30",
    },
    {
      title: "Saquinho",
      img: "/images/saquinho.png",
      price: "R$25.70",
    },
    {
      title: "Cama Pet",
      img: "/images/cama-pet-envelope.jpg",
      price: "R$88.00",
    },
    {
      title: "Tapete",
      img: "/images/tapete-de-alimentacao.jpeg",
      price: "R$47.50",
    },
    {
      title: "Kit Tossa",
      img: "/images/tosa.png",
      price: "R$82.20",
    },
    {
      title: "Kit Limpeza",
      img: "/images/kit.png",
      price: "R$75.50",
    },
    {
      title: "Adeus Bafo",
      img: "/images/kit-casa.png",
      price: "R$87.00",
    },
    {
      title: "Ração",
      img: "/images/food.png",
      price: "R$50.00",
    },
    {
      title: "Ração",
      img: "/images/food2.png",
      price: "R$50.30",
    },
    {
      title: "Saquinho",
      img: "/images/saquinho.png",
      price: "R$25.70",
    },
    {
      title: "Cama Pet",
      img: "/images/cama-pet-envelope.jpg",
      price: "R$88.00",
    },
    {
      title: "Tapete",
      img: "/images/tapete-de-alimentacao.jpeg",
      price: "R$47.50",
    },
    {
      title: "Kit Tossa",
      img: "/images/tosa.png",
      price: "R$82.20",
    },
    {
      title: "Kit Limpeza",
      img: "/images/kit.png",
      price: "R$75.50",
    },
    {
      title: "Adeus Bafo",
      img: "/images/kit-casa.png",
      price: "R$87.00",
    },
    {
      title: "Ração",
      img: "/images/food.png",
      price: "R$50.00",
    },
    {
      title: "Ração",
      img: "/images/food2.png",
      price: "R$50.30",
    },
    {
      title: "Saquinho",
      img: "/images/saquinho.png",
      price: "R$25.70",
    },
    {
      title: "Cama Pet",
      img: "/images/cama-pet-envelope.jpg",
      price: "R$88.00",
    },
    {
      title: "Tapete",
      img: "/images/tapete-de-alimentacao.jpeg",
      price: "R$47.50",
    },
    {
      title: "Kit Tossa",
      img: "/images/tosa.png",
      price: "R$82.20",
    },
    {
      title: "Kit Limpeza",
      img: "/images/kit.png",
      price: "R$75.50",
    },
    {
      title: "Adeus Bafo",
      img: "/images/kit-casa.png",
      price: "R$87.00",
    },
    {
      title: "Ração",
      img: "/images/food.png",
      price: "R$50.00",
    },
    {
      title: "Ração",
      img: "/images/food2.png",
      price: "R$50.30",
    },
    {
      title: "Saquinho",
      img: "/images/saquinho.png",
      price: "R$25.70",
    },
    {
      title: "Cama Pet",
      img: "/images/cama-pet-envelope.jpg",
      price: "R$88.00",
    },
    {
      title: "Tapete",
      img: "/images/tapete-de-alimentacao.jpeg",
      price: "R$47.50",
    },
    {
      title: "Kit Tossa",
      img: "/images/tosa.png",
      price: "R$82.20",
    },
  ];

  const itensPorPagina = 12; // Número de itens por página

  // Calcular o número total de páginas
  const totalPaginas = Math.ceil(list.length / itensPorPagina);
  const { activePage, range, setPage, onNext, onPrevious } = usePagination({
    total: totalPaginas,
    showControls: true,
    siblings: 1,
    boundaries: 1,
  });

  // Calcular índices dos cards para a página atual
  const startIndex = (activePage - 1) * itensPorPagina;
  const endIndex = startIndex + itensPorPagina;

  return (
    <>
      <div className="gap-4 grid grid-cols-2 sm:grid-cols-4">
        {list.slice(startIndex, endIndex).map((item, index) => (
          <Card
            shadow="sm"
            key={index + startIndex}
            isPressable
            onPress={() => console.log("item pressed")}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                isZoomed
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-[160px]"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
              <p className="text-default-500">{item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <p>Página: {activePage}</p>
        <ul className="flex gap-2 items-center">
          {range.map((page) => {
            if (page === PaginationItemType.NEXT) {
              return (
                <li key={page} aria-label="next page" className="w-4 h-4">
                  <button
                    className="w-full h-full bg-default-200 rounded-full"
                    onClick={() => {
                      onNext();
                      setPage(activePage + 1);
                    }}
                  >
                    <ChevronIcon className="rotate-180" />
                  </button>
                </li>
              );
            }

            if (page === PaginationItemType.PREV) {
              return (
                <li key={page} aria-label="previous page" className="w-4 h-4">
                  <button
                    className="w-full h-full bg-default-200 rounded-full"
                    onClick={() => {
                      onPrevious();
                      setPage(activePage - 1);
                    }}
                  >
                    <ChevronIcon />
                  </button>
                </li>
              );
            }

            if (page === PaginationItemType.DOTS) {
              return (
                <li key={page} className="w-4 h-4">
                  ...
                </li>
              );
            }

            return (
              <li key={page} aria-label={`page ${page}`} className="w-4 h-4">
                <button
                  className={cn(
                    "w-full h-full rounded-full bg-default-300",
                    activePage === page ? "bg-blue-500" : ""
                  )}
                  style={{
                    backgroundColor: activePage === page ? "#338EF7" : "",
                  }}
                  onClick={() => setPage(page)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
