import ErrorMessage from "@/components/ErrorMessage";

export default function NotFound() {
  return (
    <>
      <ErrorMessage
        pageTitle="Erro [ 404 ] Pagina Não Encontrada"
        contentTitle="Erro 404:"
        content="sA página que você está tentando acessar não existe ou foi movida."
      />
    </>
  );
}
