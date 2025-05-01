import clsx from "clsx";

type MainProps = {
  children: React.ReactNode;
};

export function Main({ children }: MainProps) {
  return (
    <main
      className={clsx(
        "grid",
        "grid-rows-[auto_1fr_auto]",
        "min-h-screen",
        "w-full"
      )}
    >
      {children}
    </main>
  );
}
