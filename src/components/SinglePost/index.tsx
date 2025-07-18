import { findPublicPostBySlugCached } from "@/lib/post/queries/public";
import Image from "next/image";
import { PostHeading } from "../PostHeading";
import { PostDate } from "../PostDate";
import { SafeMarkdown } from "../SafeMarkdown";

type SinglePostProps = {
  slug: string;
};

export async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPublicPostBySlugCached(slug);

  return (
    <article>
      <section className="group flex flex-col gap-4 mb-4">
        <Image
          className="w-full h-auto rounded-2xl"
          src={post.coverImageUrl}
          width={1200}
          height={720}
          alt={post.title}
          priority
        />
        <PostHeading url={`/post/${post.slug}`}>{post.title}</PostHeading>
        <p>
          {post.author} | <PostDate dateTime={post.createdAt}></PostDate>
        </p>
      </section>
      <p className="mb-8 text-xl text-slate-600">{post.excerpt}</p>
      <SafeMarkdown markdown={post.content} />
    </article>
  );
}
