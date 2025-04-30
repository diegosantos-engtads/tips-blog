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
        "w-full",
        "bg-[#e6e6e6]"
      )}
    >
      {children}
    </main>
  );
}
