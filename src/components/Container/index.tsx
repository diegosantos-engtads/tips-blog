import clsx from "clsx";

type ContainerProps = {
  children: React.ReactNode;
};
export function Container({ children }: ContainerProps) {
  return <div className={clsx("container mx-auto px-8")}>{children}</div>;
}
