import messages from "@/messages.json";

const FOOTER = messages.Footer;

export default function Footer() {
  return (
    <footer id="contact" className="px-6 md:px-12 py-32 md:py-44">
      <div className="border-t border-cream-dim/20 pt-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <p className="font-mono text-xs text-cream-dim tracking-[0.3em] uppercase">
              (get in touch)
            </p>
            <a
              href={`mailto:${FOOTER.email}`}
              className="font-mono text-lg md:text-xl text-cream hover:text-accent transition-colors"
            >
              {FOOTER.email}
            </a>
          </div>

          <div className="flex gap-8">
            {FOOTER.items.map((item) => (
              <a
                key={item.label}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-cream-dim hover:text-cream transition-colors tracking-wide uppercase"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <p className="mt-16 font-mono text-xs text-cream-dim/50 tracking-wide">
          &copy; {new Date().getFullYear()} Pasquale Junior Mont&ograve;
        </p>
      </div>
    </footer>
  );
}
