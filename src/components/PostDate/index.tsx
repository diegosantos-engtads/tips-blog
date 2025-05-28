import { formatDatetime } from "@/utils/format-datetime";
import clsx from "clsx";

type PostDateProps = {
  dateTime: string;
};

export function PostDate({ dateTime }: PostDateProps) {
  return (
    <time
      className={clsx("text-slate-600 text-sm/tight")}
      dateTime={dateTime}
      title={dateTime}
    >
      {formatDatetime(dateTime)}
    </time>
  );
}
