"use client";

import { Menu, X } from "lucide-react";

type Props = {
	isOpen: boolean;
	onToggle: () => void;
};

export default function HeaderMobileToggle({ isOpen, onToggle }: Props) {
	return (
		<div className="md:hidden flex">
			<button onClick={onToggle} aria-label="Toggle Menu">
				{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
			</button>
		</div>
	);
}
