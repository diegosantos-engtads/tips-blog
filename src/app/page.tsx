import { PostList } from "@/components/PostList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";
import { PostFeatured } from "@/components/PostFeatured";

export default function HomePage() {
  return (
    <>
      <Suspense fallback={<SpinLoader />}>
        <PostFeatured />
        <PostList />
      </Suspense>
    </>
  );
}
