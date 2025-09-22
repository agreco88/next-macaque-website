import { Link } from "@/i18n/navigation";

export function LinkToPricing() {
  return (
    <div className="mt-12 text-center">
      <Link
        href="/pricing"
        className="relative  text-gray-400 hover:text-orange-300 transition-all after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-400 hover:after:w-full after:transition-all after:duration-300"
      >
        View detailed pricing plans
      </Link>
    </div>
  );
}
