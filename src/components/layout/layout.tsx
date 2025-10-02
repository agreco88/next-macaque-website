// layout.tsx
import Aurora from "../Aurora";
import Footer from "./footer/footer";
import Header from "./header/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-dvh overflow-x-clip bg-neutral-950">
      <Header />

      <main className="flex-1">{children}</main>

      <div className="relative overflow-hidden bg-gradient-to-b from-neutral-950 to-black/50">
        {/* Aurora background */}
        <Aurora
          colorStops={["#eb5a0d", "#eb5d3d", "#eb5a0d"]}
          blend={0.5}
          amplitude={0.5}
          speed={0.7}
        />

        <div className="relative z-10">
          <Footer />
        </div>
      </div>
    </div>
  );
}
