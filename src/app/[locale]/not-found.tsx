import Link from "next/link";

//NOTE: Import layout here to only 404 the content area.

export default function NotFound() {
	return (
		<div className="flex flex-col gap-2 place-content-center flex-grow h-screen items-center">
			<h2>404: Not Found</h2>
			<p>Could not find requested route</p>
			<Link href="/">Return Home</Link>
		</div>
	);
}
