// "use client";

// import { animate, stagger, motion } from "framer-motion";
// import { splitText } from "motion-plus";
// import { useEffect, useRef } from "react";

// export default function SplitText({
//   text = "",
//   className = "",
// }: SplitTextProps) {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     containerRef.current.style.visibility = "visible";

//     const { words } = splitText(
//       containerRef.current.querySelector(".split-target")!
//     );

//     animate(
//       words,
//       { opacity: [0, 1], y: [10, 0] },
//       {
//         type: "spring",
//         duration: 2,
//         bounce: 0,
//         delay: stagger(0.05),
//       }
//     );
//   }, []);

//   return (
//     <motion.span
//       layout
//       ref={containerRef}
//       className={`hidden inline-block will-change-transform-opacity ${className}`}
//     >
//       <span className="split-target block !font-mono">{text}</span>
//     </motion.span>
//   );
// }

"use client";

import { animate, stagger } from "framer-motion";
import { splitText } from "motion-plus";
import { useEffect, useRef } from "react";
type SplitTextProps = {
	text: string | React.ReactNode;
	className?: string;
};
export default function SplitText({ text = "", className = "" }: SplitTextProps) {
	const containerRef = useRef<HTMLDivElement>(null);

	// useEffect(() => {
	//   document.fonts.ready.then(() => {
	//     if (!containerRef.current) return;

	//     // Hide the container until the fonts are loaded
	//     containerRef.current.style.visibility = "visible";

	//     const { words } = splitText(containerRef.current.querySelector("h1")!);

	//     // Animate the words in the h1
	//     animate(
	//       words,
	//       { opacity: [0, 1], y: [10, 0] },
	//       {
	//         type: "spring",
	//         duration: 6,
	//         bounce: 0,
	//         delay: stagger(0.05),
	//       }
	//     );
	//   });
	// }, []);

	useEffect(() => {
		document.fonts.ready.then(() => {
			if (!containerRef.current) return;

			containerRef.current.style.visibility = "visible";

			const target = containerRef.current.querySelector("h1");
			if (!target) return;

			const { words } = splitText(target);

			animate(
				words,
				{ opacity: [0, 1], y: [10, 0] },
				{
					type: "spring",
					duration: 2,
					bounce: 0,
					delay: stagger(0.05),
				}
			);
		});
	}, []);

	return (
		<div ref={containerRef}>
			<h1 className="h1">{text}</h1>
		</div>
	);
}
