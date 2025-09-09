import { useEffect, useState } from "react";

export function useMediaQuery(query: string) {
	const [matches, setMatches] = useState(false);
	useEffect(() => {
		if (typeof window === "undefined") return;
		const mql = window.matchMedia(query);
		const onChange = (e: MediaQueryListEvent | MediaQueryList) =>
			setMatches("matches" in e ? e.matches : (e as MediaQueryList).matches);

		setMatches(mql.matches);
		// addEventListener fallback for Safari
		// @ts-ignore
		mql.addEventListener ? mql.addEventListener("change", onChange) : mql.addListener(onChange);
		return () => {
			// @ts-ignore
			mql.removeEventListener ? mql.removeEventListener("change", onChange) : mql.removeListener(onChange);
		};
	}, [query]);
	return matches;
}
