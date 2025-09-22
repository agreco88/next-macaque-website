import Footer from "./footer/footer";
import Header from "./header/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-dvh overflow-x-clip">
      <Header />

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
}
