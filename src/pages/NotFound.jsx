import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import GridBackdrop from "../components/ui/GridBackdrop";
import Reveal from "../components/ui/Reveal";
import StatusTag from "../components/ui/StatusTag";

export default function NotFound() {
	return (
		<section className="relative flex min-h-[70vh] items-center overflow-hidden">
			<GridBackdrop />
			<div className="relative mx-auto max-w-xl px-5 text-center sm:px-8">
				<Reveal>
					<StatusTag
						label="404: route not found"
						tone="in progress"
						className="mx-auto"
					/>
					<h1 className="mt-6 font-display text-5xl font-semibold text-[var(--text)] sm:text-6xl">
						404
					</h1>
					<p className="mt-4 font-mono text-sm text-[var(--text-muted)]">
						<span className="text-[var(--text-dim)]">habibur@dev:~$</span> cd{" "}
						{window.location.pathname}
						<br />
						<span className="text-[var(--warm)]">
							bash: no such route in this project
						</span>
					</p>
					<Link
						to="/"
						className="mt-8 inline-flex items-center gap-2 rounded-md border border-[var(--border)] px-5 py-3 font-mono text-sm text-[var(--text)] transition-colors hover:border-[var(--accent)]/50 hover:text-[var(--accent)]"
					>
						<ArrowLeft className="h-4 w-4" />
						cd ~
					</Link>
				</Reveal>
			</div>
		</section>
	);
}
