import type { ReactNode } from "react";
import { Eye } from "lucide-react";
import { GridCardCorners } from "./grid-card-corners";
// import { BicepsFlexed } from "lucide-react"; // or your custom icon

type GridCardProps = {
  href: string;
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  video?: boolean;
  readTime: string;
  src: string; // bg image url
  description?: string | ReactNode;
  children?: ReactNode; // 👈 new
  className?: string; // optional pass-through
};

export const GridCard = ({
  href,
  title,
  subtitle,
  readTime,
  src,
  description,
  children,
  className = "",
  video = false,
}: GridCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={`group relative flex h-56 flex-col justify-end overflow-hidden p-6 transition-colors hover:bg-neutral-950 md:h-80 md:p-9 ${className}`}
    >
      {/* Meta (top-left) */}
      <div className="absolute left-8 top-5 z-10 flex items-center gap-1.5 text-xs uppercase text-neutral-400 transition-colors duration-500 group-hover:text-neutral-50">
        {/* <BicepsFlexed className="text-base" /> */}
        <span>{readTime}</span>
      </div>

      {/* Title */}
      <h2 className="relative font-light uppercase z-10 text-3xl leading-tight tracking-tighter transition-transform duration-500 group-hover:-translate-y-1.5">
        {title}
      </h2>

      {subtitle && (
        <h3 className="relative font-thin uppercase text-orange-400 z-10 text-3xl leading-tight tracking-tighter transition-transform duration-500 group-hover:-translate-y-1.5">
          {subtitle}
        </h3>
      )}

      {/* Optional description */}
      {description && (
        <p className="relative z-10 mt-2 max-w-prose text-sm text-neutral-400 transition-all duration-500 group-hover:text-neutral-300 group-hover:-translate-y-1.5 line-clamp-2">
          {description}
        </p>
      )}

      {/* 👇 Children slot (custom content like AnimateNumber, chips, etc.) */}
      {children && <div className="relative z-10 mt-3">{children}</div>}

      {/* Eye icon */}
      <Eye className="absolute right-4 top-4 z-10 text-2xl text-neutral-400 transition-colors group-hover:text-neutral-50" />

      {/* BG image */}
      {video ? (
        <video
          src="/video/video-card-ingredients.mp4"
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-15"
          playsInline
          muted
          loop
          autoPlay
        />
      ) : (
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-15"
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}

      <GridCardCorners />
    </a>
  );
};
