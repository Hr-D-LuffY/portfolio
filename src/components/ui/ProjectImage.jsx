import { useState } from "react";
import { cn } from "../../lib/utils";

/**
 * Project screenshot with a graceful fallback: projects with no screenshot yet
 * (or an image that fails to load) get a terminal-style placeholder instead of
 * a broken-image icon.
 */
export default function ProjectImage({ project, className, loading }) {
	const [failed, setFailed] = useState(false);

	if (!project.image || failed) {
		return (
			<div
				role="img"
				aria-label={`${project.name} — preview coming soon`}
				className={cn(
					"flex aspect-[2/1] w-full flex-col items-center justify-center gap-2 bg-[var(--bg-elevated)] font-mono",
					className,
				)}
			>
				<span className="text-sm text-[var(--accent)]">
					$ {project.slug} --preview
				</span>
				<span className="text-xs text-[var(--text-dim)]">
					screenshot coming soon
				</span>
			</div>
		);
	}

	return (
		<img
			src={`/images/projects/${project.image}.png`}
			alt={`${project.name} interface preview`}
			className={className}
			loading={loading}
			onError={() => setFailed(true)}
		/>
	);
}
