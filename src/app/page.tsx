import { PostList } from "@/components/PostList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { PostFeatured } from "@/components/PostFeatured";

export default function HomePage() {
  return (
    <Main>
      <Header />

      <Container>
        <PostFeatured />

        <Suspense fallback={<SpinLoader />}>
          <PostList />
        </Suspense>
      </Container>

      <Footer>
        <h3>Aqui é a Footer</h3>
        <h2>dssadsad</h2>
      </Footer>
    </Main>
  );
}
