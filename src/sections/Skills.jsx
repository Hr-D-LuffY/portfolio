import { motion } from "framer-motion";
import SectionHeading from "../components/ui/SectionHeading";
import { skillGroups } from "../data/skills";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045 } },
};

const item = {
  hidden: { opacity: 0, y: 10, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
};

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-[var(--border)] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading command="ls ./skills" title="Skills" />

        <div className="mt-12 space-y-10">
          {skillGroups.map((group) => (
            <div key={group.group}>
              <p className="font-mono text-xs text-[var(--text-dim)]">
                <span className="text-[var(--text-dim)]">// </span>
                {group.group}
              </p>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="mt-4 flex flex-wrap gap-3"
              >
                {group.items.map(({ name, Icon }) => (
                  <motion.div
                    key={name}
                    variants={item}
                    className="group flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 transition-colors hover:border-[var(--accent)]/40"
                  >
                    <Icon className="h-4 w-4 text-[var(--text-muted)] transition-colors group-hover:text-[var(--accent)]" aria-hidden="true" />
                    <span className="text-sm text-[var(--text)]">{name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
