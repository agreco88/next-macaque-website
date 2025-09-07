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

	useEffect(() => {
		if (!containerRef.current) return;

		containerRef.current.style.visibility = "visible";

		const target = containerRef.current.querySelector("span");
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
	}, []);

	return (
		<span ref={containerRef}>
			<span className="h1">{text}</span>
		</span>
	);
}
