import clsx from "clsx";
import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

type SafeMarkdownProps = {
  markdown: string;
};

export function SafeMarkdown({ markdown }: SafeMarkdownProps) {
  return (
    <div
      className={clsx(
        "prose prose-slate lg:prose-lg break-words w-full max-w-full",
        "overflow-x-hidden",
        "prose-img:mx-auto",
        "prose-code:break-words prose-code:overflow-x-auto",
        "prose-a:transition prose-a:no-underline",
        "prose-a:text-blue-500 prose-a:hover:text-blue-700 prose-a:hover:underline",
        "prose-code:break-all"
      )}
    >
      <ReactMarkdown
        rehypePlugins={[rehypeSanitize]}
        remarkPlugins={[remarkGfm]}
        components={{
          table: ({ node, ...props }) => {
            if (!node?.children) return "";
            return (
              <div>
                <table {...props} />
              </div>
            );
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
