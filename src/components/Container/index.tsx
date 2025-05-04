import clsx from "clsx";

type ContainerProps = {
  children: React.ReactNode;
};
export function Container({ children }: ContainerProps) {
  return (
    <div className={clsx("w-full max-w-screen-xl mx-auto px-6 sm:px-8 ")}>
      {children}
    </div>
  );
}
