import Link from 'next/link';

export default function About(): JSX.Element {
	return (
		<div>
			About Page
			<br />
			<br />
			<Link href="/">
				<a>Go Back</a>
			</Link>
		</div>
	);
}
