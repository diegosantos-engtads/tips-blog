"use client";

import ErrorMessage from "@/components/ErrorMessage";
import { useEffect } from "react";

type RootErrorProps = {
  error: Error;
  reset: () => void;
};

export default function RootError({ error, reset }: RootErrorProps) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <>
      <ErrorMessage
        pageTitle="Slug"
        contentTitle="Erro 404:"
        content={<button onClick={() => reset()}>Clique</button>}
      />
    </>
  );
}
