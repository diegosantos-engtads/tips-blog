import clsx from "clsx";
import { Container } from "../Container";

type FooterProps = {
  children: React.ReactNode;
};

export function Footer({ children }: FooterProps) {
  return (
    <footer className={clsx("bg-[#235]")}>
      <Container>{children}</Container>{" "}
    </footer>
  );
}
