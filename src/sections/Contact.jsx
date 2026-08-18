import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";

const FORMSPREE_FORM_ID = "xrpzlooa";
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_FORM_ID}`;

const CONTACT_LINKS = [
	{
		label: "Email",
		value: "hrhabib1711@email.com",
		href: "mailto:hrhabib1711@email.com",
		Icon: Mail,
	},
	{
		label: "Phone",
		value: "+880 1533-961467",
		href: "tel:+8801533961467",
		Icon: Phone,
	},
	{
		label: "Location",
		value: "Mirpur, Dhaka, Bangladesh",
		href: null,
		Icon: MapPin,
	},
	{
		label: "GitHub",
		value: "Hr-D-LuffY",
		href: "https://github.com/Hr-D-LuffY",
		Icon: SiGithub,
	},
	{
		label: "LinkedIn",
		value: "md-habib-ur-rahman",
		href: "https://www.linkedin.com/in/md-habib-ur-rahman/",
		Icon: FaLinkedin,
	},
];

const FIELDS = [
	{ name: "name", label: "name", type: "text", placeholder: "Jane Doe" },
	{
		name: "email",
		label: "email",
		type: "email",
		placeholder: "jane@company.com",
	},
];

// idle → submitting → success | error
export default function Contact() {
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [status, setStatus] = useState("idle");

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((f) => ({ ...f, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus("submitting");

		try {
			const res = await fetch(FORMSPREE_ENDPOINT, {
				method: "POST",
				headers: { Accept: "application/json" },
				body: new FormData(e.target),
			});

			if (res.ok) {
				setStatus("success");
				setForm({ name: "", email: "", message: "" });
			} else {
				setStatus("error");
			}
		} catch {
			setStatus("error");
		}
	};

	return (
		<section
			id="contact"
			className="scroll-mt-20 border-t border-[var(--border)] py-24 sm:py-32"
		>
			<div className="mx-auto max-w-6xl px-5 sm:px-8">
				<SectionHeading
					command="curl contact --init"
					title="Let's talk"
					description="Open to Junior Full Stack Developer roles and interesting end-to-end problems. Send a message below, or reach out directly."
				/>

				<div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
					<Reveal delay={0.05}>
						<form
							onSubmit={handleSubmit}
							className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8"
						>
							{/* Honeypot — invisible to real visitors, catches basic spam bots */}
							<input
								type="text"
								name="_gotcha"
								className="hidden"
								tabIndex="-1"
								autoComplete="off"
							/>

							<div className="grid gap-5 sm:grid-cols-2">
								{FIELDS.map((field) => (
									<label key={field.name} className="block">
										<span className="font-mono text-xs text-[var(--text-dim)]">
											<span className="text-[var(--accent)]">&gt;</span>{" "}
											{field.label}
										</span>
										<input
											required
											type={field.type}
											name={field.name}
											value={form[field.name]}
											onChange={handleChange}
											placeholder={field.placeholder}
											disabled={status === "submitting"}
											className="mt-2 w-full rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] px-3.5 py-2.5 text-sm text-[var(--text)] outline-none transition-colors placeholder:text-[var(--text-dim)] focus:border-[var(--accent)]/60 disabled:opacity-60"
										/>
									</label>
								))}
							</div>

							<label className="mt-5 block">
								<span className="font-mono text-xs text-[var(--text-dim)]">
									<span className="text-[var(--accent)]">&gt;</span> message
								</span>
								<textarea
									required
									name="message"
									rows={5}
									value={form.message}
									onChange={handleChange}
									placeholder="What are you building?"
									disabled={status === "submitting"}
									className="mt-2 w-full resize-none rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] px-3.5 py-2.5 text-sm text-[var(--text)] outline-none transition-colors placeholder:text-[var(--text-dim)] focus:border-[var(--accent)]/60 disabled:opacity-60"
								/>
							</label>

							<motion.button
								type="submit"
								disabled={status === "submitting"}
								whileHover={status === "submitting" ? {} : { y: -2 }}
								whileTap={status === "submitting" ? {} : { scale: 0.98 }}
								className="mt-6 inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-5 py-3 font-mono text-sm font-medium text-[#06120f] disabled:opacity-70"
							>
								{status === "submitting" ?
									<Loader2 className="h-4 w-4 animate-spin" />
								:	<Send className="h-4 w-4" />}
								{status === "submitting" ? "Sending…" : "Send message"}
							</motion.button>

							{status === "success" && (
								<p className="mt-4 font-mono text-xs text-[var(--accent)]">
									✓ message sent — I'll get back to you soon.
								</p>
							)}
							{status === "error" && (
								<p className="mt-4 font-mono text-xs text-[var(--warm)]">
									✗ something went wrong — email me directly at{" "}
									<a href="mailto:hrhabib1711@email.com" className="underline">
										hrhabib1711@email.com
									</a>
									.
								</p>
							)}
						</form>
					</Reveal>

					<Reveal delay={0.1}>
						<div className="grid gap-3">
							{CONTACT_LINKS.map(({ label, value, href, Icon }) => {
								const Wrapper = href ? "a" : "div";
								return (
									<Wrapper
										key={label}
										{...(href ?
											{
												href,
												target: href.startsWith("http") ? "_blank" : undefined,
												rel: "noreferrer",
											}
										:	{})}
										className="group flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 transition-colors hover:border-[var(--accent)]/40"
									>
										<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--text-muted)] transition-colors group-hover:text-[var(--accent)]">
											<Icon className="h-4 w-4" />
										</div>
										<div className="min-w-0">
											<p className="font-mono text-[11px] uppercase tracking-wide text-[var(--text-dim)]">
												{label}
											</p>
											<p className="truncate text-sm text-[var(--text)]">
												{value}
											</p>
										</div>
									</Wrapper>
								);
							})}
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
}
