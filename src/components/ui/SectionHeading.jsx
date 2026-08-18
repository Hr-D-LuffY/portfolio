import Reveal from "./Reveal";

export default function SectionHeading({
	command,
	title,
	description,
	align = "left",
}) {
	const isCenter = align === "center";
	return (
		<Reveal className={isCenter ? "text-center" : "text-left"}>
			<p className="font-mono text-sm text-[var(--accent)]">
				<span className="text-[var(--text-dim)]">habibur@dev:~$</span> {command}
			</p>
			<h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
				{title}
			</h2>
			{description && (
				<p
					className={
						"mt-3 max-w-2xl text-[var(--text-muted)]" +
						(isCenter ? " mx-auto" : "")
					}
				>
					{description}
				</p>
			)}
		</Reveal>
	);
}
