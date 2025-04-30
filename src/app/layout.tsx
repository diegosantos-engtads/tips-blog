import type { Metadata } from 'next';
import './globals.css';
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Blog",
    template: "%s | Blog",
  },
  description: "Blog informativo",
};

type RootLayoutProps = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-BR">
      <body>
        <Main>
          <Header />
          {children}
          <Footer />
        </Main>
      </body>
    </html>
  );
}
