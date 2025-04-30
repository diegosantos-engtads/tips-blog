import { PostList } from "@/components/PostList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

import { Container } from "@/components/Container";
import { PostFeatured } from "@/components/PostFeatured";

export default function HomePage() {
  return (
    <>
      <Container>
        <PostFeatured />

        <Suspense fallback={<SpinLoader />}>
          <PostList />
        </Suspense>
      </Container>
    </>
  );
}
