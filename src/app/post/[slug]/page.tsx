import { SinglePost } from "@/components/SinglePost";
import { SpinLoader } from "@/components/SpinLoader";
import { findPublicPostBySlugCached } from "@/lib/post/queries/public";
import { truncateText } from "@/utils/truncate-text";
import { Metadata } from "next";
import { Suspense } from "react";

export const dynamic = "force-static";

type PostSlugProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PostSlugProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await findPublicPostBySlugCached(slug);

  const maxTitleLength = 65;
  const maxDescriptionLength = 255;

  return {
    title: truncateText(post.title, maxTitleLength),
    description: truncateText(post.excerpt, maxDescriptionLength),
  };
}

// export async function generateStaticParams() {
//   const posts = await findAllPublicPostsCached();
//   const params = posts.map((post) => {
//     return {
//       slug: post.slug,
//     };
//   });
//   console.log(params);
//   return params;
// }

export default async function PostSlug({ params }: PostSlugProps) {
  const { slug } = await params;
  return (
    <Suspense fallback={<SpinLoader />}>
      <SinglePost slug={slug} />
    </Suspense>
  );
}
