import { GraduationCap } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import StatusTag from "../components/ui/StatusTag";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-20 border-t border-[var(--border)] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading command="cat education.md" title="Education" />

        <Reveal delay={0.05} className="mt-10">
          <div className="flex flex-col gap-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 sm:flex-row sm:items-start sm:gap-8 sm:p-9">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--accent)]/25 bg-[var(--accent-soft)]">
              <GraduationCap className="h-6 w-6 text-[var(--accent)]" />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-display text-xl font-semibold text-[var(--text)] sm:text-2xl">
                  B.Sc. in Computer Science and Engineering
                </h3>
                <StatusTag label="graduated" tone="deployed" pulse={false} />
              </div>
              <p className="mt-1.5 font-mono text-sm text-[var(--text-muted)]">BRAC University</p>

              <div className="mt-6 border-l-2 border-[var(--accent)]/40 pl-5">
                <p className="font-mono text-[11px] uppercase tracking-wide text-[var(--text-dim)]">
                  Thesis
                </p>
                <p className="mt-2 max-w-2xl text-base leading-relaxed text-[var(--text)]">
                  A Security Evaluation Framework for Distributed Retrieval-Augmented Generation
                  Systems
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
