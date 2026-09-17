import { socials } from "@/lib/data";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="px-6 py-6 md:px-12 md:py-9">
      <div className="border-t border-cream-dim/20 pt-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-2">
            <p className="font-mono text-xs text-cream-dim tracking-[0.3em] uppercase">
              (get in touch)
            </p>
            <a
              href={`mailto:${socials.email}`}
              className="inline-flex min-h-11 items-center gap-3 font-mono text-base text-cream transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:text-xl"
            >
              <FaEnvelope aria-hidden="true" className="text-base text-accent" />
              {socials.email}
            </a>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 font-mono text-sm text-cream-dim hover:text-cream transition-colors tracking-wide uppercase focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <FaGithub aria-hidden="true" className="text-base" />
              GitHub
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 font-mono text-sm text-cream-dim hover:text-cream transition-colors tracking-wide uppercase focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <FaLinkedinIn aria-hidden="true" className="text-base" />
              LinkedIn
            </a>
            <a
              href={socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 font-mono text-sm text-cream-dim hover:text-cream transition-colors tracking-wide uppercase focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <FaInstagram aria-hidden="true" className="text-base" />
              Instagram
            </a>
          </div>
        </div>

        <p className="mt-6 font-mono text-xs text-cream-dim tracking-wide">
          &copy; {new Date().getFullYear()} Pasquale Junior Mont&ograve;
        </p>
      </div>
    </footer>
  );
}
