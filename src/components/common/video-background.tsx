// components/VideoBackground.tsx
export default function VideoBackground({ isMobile }: { isMobile: boolean }) {
	return (
		<div className="absolute inset-0 z-0 top-2/3 sm:top-0 left-0 bottom-0">
			{isMobile ? (
				<video
					className="w-full h-full opacity-40 object-cover"
					autoPlay
					muted
					loop
					playsInline
					poster="/video/posters/hero-poster.webp"
				>
					<source src="/video/hero/video-hero-low.mp4" type="video/mp4" />
				</video>
			) : (
				<video
					className="w-full h-full object-cover"
					autoPlay
					muted
					loop
					playsInline
					poster="/video/posters/hero-poster.webp"
				>
					<source src="/video/hero/video-hero-high.mp4" type="video/mp4" />
				</video>
			)}
			{/* Vignette overlay */}
			<div
				className="
          absolute inset-0 pointer-events-none
          bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_40%,rgba(0,0,0,0.5)_65%)]
          md:bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_40%,rgba(0,0,0,1)_125%)]
          2xl:bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_30%,rgba(0,0,0,0.9)_100%)]
        "
			/>
		</div>
	);
}
