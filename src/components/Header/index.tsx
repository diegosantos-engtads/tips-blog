import clsx from "clsx";
import { Container } from "../Container";

export function Header() {
  return (
    <header className={clsx(" top-0 flex items-center")}>
      <Container>
        <h1
          className={clsx(
            "text-3xl/normal font-extrabold py-8", //Menor que 640px fica assim
            "sm:text-4xl/normal sm:py-10", //Maior que 640px e até... fica assim
            "md:text-5xl/normal md:py-11", //Maior que 768px e até... fica assim
            "lg:text-6xl/normal md:py-12" //Maior que 1024px fica assim
          )}
        >
          <a href="#">The Blog</a>
        </h1>
      </Container>
    </header>
  );
}
