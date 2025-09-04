import Footer from "./footer/footer";
import Header from "./header/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-dvh min-w-dvw mx-auto container overflow-scroll overflow-x-hidden justify-between">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
