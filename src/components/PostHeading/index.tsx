import clsx from "clsx";
import Link from "next/link";

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: "h1" | "h2";
};
export function PostHeading({
  children,
  url,
  as: TagH = "h2",
}: PostHeadingProps) {
  const headingClassesMap = {
    h1: "text-2xl/tight sm:text-4xl",
    h2: "text-2xl/tight",
  };
  const commonClasses = "font-extrabold";
  return (
    <TagH className={clsx(headingClassesMap[TagH], commonClasses)}>
      <Link className="hover:text-[#123] transition" href={url}>
        {children}
      </Link>
    </TagH>
  );
}
