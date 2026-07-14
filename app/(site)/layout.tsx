import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { SearchProvider } from "@/components/site/search-provider";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <SearchProvider>
      <Header />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 sm:py-14">
        {children}
      </main>
      <Footer />
    </SearchProvider>
  );
}
