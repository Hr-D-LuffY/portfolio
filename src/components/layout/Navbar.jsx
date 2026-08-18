import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import { cn } from "../../lib/utils";

const NAV_LINKS = [
	{ label: "About", href: "/#about" },
	{ label: "Skills", href: "/#skills" },
	{ label: "Projects", href: "/#projects" },
	{ label: "Education", href: "/#education" },
	{ label: "Contact", href: "/#contact" },
];

const SOCIALS = [
	{ label: "GitHub", href: "https://github.com/Hr-D-LuffY", Icon: SiGithub },
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/md-habib-ur-rahman/",
		Icon: FaLinkedin,
	},
];

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => setOpen(false), [location.pathname, location.hash]);

	return (
		<header
			className={cn(
				"sticky top-0 z-50 border-b transition-colors duration-300",
				scrolled ?
					"border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur-md"
				:	"border-transparent bg-transparent",
			)}
		>
			<nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
				<Link
					to="/"
					className="group flex items-center gap-2 font-mono text-sm text-[var(--text)]"
				>
					<span className="relative flex h-2 w-2">
						<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-60" />
						<span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
					</span>
					<span className="text-[var(--text-muted)]">habibur@dev</span>
					<span className="text-[var(--accent)]">:~$</span>
				</Link>

				<div className="hidden items-center gap-8 md:flex">
					{NAV_LINKS.map((item) => (
						<a
							key={item.label}
							href={item.href}
							className="font-mono text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
						>
							{item.label}
						</a>
					))}
				</div>

				<div className="hidden items-center gap-3 md:flex">
					{SOCIALS.map(({ label, href, Icon }) => (
						<a
							key={label}
							href={href}
							target="_blank"
							rel="noreferrer"
							aria-label={label}
							className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border)] text-[var(--text-muted)] transition-colors hover:border-[var(--accent)]/50 hover:text-[var(--accent)]"
						>
							<Icon className="h-4 w-4" aria-hidden="true" />
						</a>
					))}
					<ThemeToggle />
				</div>

				<div className="flex items-center gap-2 md:hidden">
					<ThemeToggle />
					<button
						type="button"
						onClick={() => setOpen((v) => !v)}
						aria-label={open ? "Close menu" : "Open menu"}
						aria-expanded={open}
						className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border)] text-[var(--text)]"
					>
						{open ?
							<X className="h-4 w-4" />
						:	<Menu className="h-4 w-4" />}
					</button>
				</div>
			</nav>

			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.25, ease: "easeInOut" }}
						className="overflow-hidden border-t border-[var(--border)] bg-[var(--bg)] md:hidden"
					>
						<div className="flex flex-col gap-1 px-5 py-4">
							{NAV_LINKS.map((item) => (
								<a
									key={item.label}
									href={item.href}
									className="rounded-md px-3 py-2.5 font-mono text-sm text-[var(--text-muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--accent)]"
								>
									{item.label}
								</a>
							))}
							<div className="mt-2 flex gap-3 px-3 pt-2">
								{SOCIALS.map(({ label, href, Icon }) => (
									<a
										key={label}
										href={href}
										target="_blank"
										rel="noreferrer"
										aria-label={label}
										className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border)] text-[var(--text-muted)] transition-colors hover:border-[var(--accent)]/50 hover:text-[var(--accent)]"
									>
										<Icon className="h-4 w-4" aria-hidden="true" />
									</a>
								))}
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
