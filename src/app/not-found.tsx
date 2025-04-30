import Link from "next/link";
import { Container } from "@/components/Container";
import { Frown } from "lucide-react";

export default function NotFound() {
  return (
    <Container>
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <div className="bg-[#123] text-white px-8 py-10 rounded-3xl shadow-xl max-w-xl w-full">
          <div className="flex flex-col items-center gap-4">
            <Frown className="w-12 h-12 text-red-300" />
            <h1 className="text-3xl font-bold">
              Erro [404]: Página não encontrada
            </h1>
            <p className="text-lg text-gray-200">
              A página que você está tentando acessar não existe ou foi movida.
            </p>
            <Link
              href="/"
              className="mt-4 px-6 py-3 rounded-full bg-white text-[#123] font-semibold hover:bg-gray-200 transition-colors duration-500
              after:block after:w-0 after:h-[1px] after:bg-[#123] after:transition-all after:duration-400 after:ease-in-out hover:after:w-full"
            >
              Voltar para a Home
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
