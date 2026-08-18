import { Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-elevated)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <p className="font-mono text-xs text-[var(--text-dim)]">
          © {YEAR} Md. Habibur Rahman 
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Hr-D-LuffY"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
          >
            <SiGithub className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/md-habib-ur-rahman/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
          >
            <FaLinkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:hrhabib1711@email.com"
            aria-label="Email"
            className="text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
