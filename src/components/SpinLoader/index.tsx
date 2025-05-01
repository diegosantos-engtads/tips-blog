import clsx from "clsx";

type SpinLoaderProps = {
  className?: string;
};
export function SpinLoader({ className = "" }: SpinLoaderProps) {
  const classes = clsx(
    "fixed inset-0 flex",
    "items-center",
    "justify-center",
    className
  );
  return (
    <div className={classes}>
      <div
        className={clsx(
          "w-10 h-10 border-5 border-[#123] border-t-transparent rounded-full animate-spin"
        )}
      ></div>
    </div>
  );
}
