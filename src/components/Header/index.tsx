import clsx from "clsx";
import { Container } from "../Container";
import Link from "next/link";

export function Header() {
  return (
    <header className={clsx(" top-0 flex items-center")}>
      <Container>
        <h1
          className={clsx(
            "text-3xl/normal font-extrabold py-8", //Menor que 640px fica assim
            "sm:text-4xl/normal sm:py-10", //Maior que 640px e até... fica assim
            "md:text-5xl/normal md:py-11", //Maior que 768px e até... fica assim
            "lg:text-7xl/normal md:py-12" //Maior que 1024px fica assim
          )}
        >
          <Link href="/">The Blog</Link>
        </h1>
      </Container>
    </header>
  );
}
