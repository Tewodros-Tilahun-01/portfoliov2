import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#resume", label: "Resume" },
  { href: "#stacks", label: "Stacks" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 md:hidden bg-black">
      <div className="mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#about" className="text-lg font-semibold text-primary">
          Teddy
        </a>
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="size-10 grid place-items-center rounded-full bg-tertiary text-primary"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="mx-4 mb-3 rounded-2xl bg-secondary border border-custom overflow-hidden">
          <ul className="py-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-primary hover:bg-accent hover:text-accent-secondary transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
