"use client";
import clsx from "clsx";
import { Trash2Icon } from "lucide-react";

type DeletePostButtonProps = {
  id: string;
  title: string;
};

export function DeletePostButton({ id, title }: DeletePostButtonProps) {
  function hendleCLick() {
    alert("Deseja Deleter" + id);
  }

  return (
    <button
      className={clsx(
        "cursor-pointer",
        "[&_svg]:w-4",
        "[&_svg]:text-red-800",
        "transition",
        "hover:scale-120"
      )}
      aria-label={`Deletar post: ${title}`}
      title={`Deletar post: ${title}`}
      onClick={hendleCLick}
    >
      <Trash2Icon />
      <span className="sr-only">{`Deletar post ${title}`}</span>
    </button>
  );
}
