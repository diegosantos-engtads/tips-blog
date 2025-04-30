import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex justify-center">
      <small className="my-10 text-center px-8">
        Criado por{" "}
        <Link
          href="https://github.com/diegosantos-engtads"
          className="inline-block text-[#123] font-medium after:block after:w-0 after:h-[1px] after:bg-[#123] after:transition-all after:duration-400 after:ease-in-out hover:after:w-full"
          target="_blank"
        >
          Diego Santos
        </Link>{" "}
        Copyright &copy; {new Date().getFullYear()}{" "}
        <Link
          href="/"
          className="inline-block text-[#123] font-medium after:block after:w-0 after:h-[1px] after:bg-[#123] after:transition-all after:duration-400 after:ease-in-out hover:after:w-full"
        >
          Blog
        </Link>{" "}
        Todos os direitos reservados.
      </small>
    </footer>
  );
}
