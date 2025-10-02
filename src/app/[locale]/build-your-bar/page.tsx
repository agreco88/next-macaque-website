import DesktopView from "@/components/pages/build-your-bar/build-your-bar-desktop-view";
import MobileView from "@/components/pages/build-your-bar/build-your-bar-mobile-view";

export default async function BuildYourBarPage() {
  return (
    <section className="bg-gradient-to-t from-neutral-950 via-neutral-950 to-neutral-900 min-h-screen w-full text-neutral-50 content-center lg:pt-24">
      {/* Mobile */}
      <div className="block md:hidden">
        <MobileView />
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <DesktopView />
      </div>
    </section>
  );
}
