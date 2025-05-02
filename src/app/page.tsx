import { PostList } from "@/components/PostList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";
import { PostFeatured } from "@/components/PostFeatured";

export default function HomePage() {
  throw new Error("Erro HOme");

  return (
    <>
      <Suspense fallback={<SpinLoader />}>
        <PostFeatured />
        <PostList />
      </Suspense>
    </>
  );
}
