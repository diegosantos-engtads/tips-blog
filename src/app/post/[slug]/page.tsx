import { SinglePost } from "@/components/SinglePost";
import { SpinLoader } from "@/components/SpinLoader";
import { findPostBySlugCached } from "@/lib/post/queries";
import { Metadata } from "next";
import { Suspense } from "react";

type PostSlugProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PostSlugProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await findPostBySlugCached(slug);

  const maxTitleLength = 65;
  const maxDescriptionLength = 255;

  const truncatedTitle =
    post.title.length > maxTitleLength
      ? post.title.slice(0, maxTitleLength - 3) + "..."
      : post.title;

  const truncatedDescription =
    post.excerpt.length > maxDescriptionLength
      ? post.excerpt.slice(0, maxDescriptionLength - 3) + "..."
      : post.excerpt;

  return {
    title: truncatedTitle,
    description: truncatedDescription,
  };
}

export default async function PostSlug({ params }: PostSlugProps) {
  const { slug } = await params;
  return (
    <Suspense fallback={<SpinLoader />}>
      <SinglePost slug={slug} />
    </Suspense>
  );
}
