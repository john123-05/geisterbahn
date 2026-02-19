"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Pirates Adventure", href: "/pirates-adventure" },
  { label: "Geister Express", href: "/geister-express" },
  { label: "Crepes", href: "/crepes" },
];

export default function UniversalNavbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-[100] border-b border-[#e6dcc3] bg-white/95 backdrop-blur-md">
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#b88a2e] via-[#f0d38c] to-[#b88a2e]" />
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-heading text-base font-bold tracking-tight text-[#1f2937] sm:text-lg">
          Schaustellerbetrieb Schneider
        </Link>

        <nav className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-[0.14em] md:flex">
          {navLinks.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={active ? "text-[#8a6220]" : "text-[#4b5563] transition hover:text-[#8a6220]"}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/kontakt"
          className="inline-flex items-center justify-center rounded border border-[#d4b06a] bg-[#fff8ea] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#8a6220]"
        >
          Kontakt aufnehmen
        </Link>
      </div>
    </header>
  );
}
