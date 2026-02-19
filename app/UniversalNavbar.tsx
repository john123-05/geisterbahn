"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Pirates Adventure", href: "/pirates-adventure" },
  { label: "Geister Express", href: "/geister-express" },
  { label: "Crepes", href: "/crepes" },
];

export default function UniversalNavbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100] border-b border-[#e6dcc3] bg-white/95 backdrop-blur-md">
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#b88a2e] via-[#f0d38c] to-[#b88a2e]" />
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="max-w-[75%] whitespace-normal font-heading text-[13px] leading-tight font-bold tracking-tight text-[#1f2937] sm:max-w-none sm:text-lg"
        >
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
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/kontakt"
          className="hidden items-center justify-center border border-[#d4b06a] bg-[#fff8ea] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#8a6220] md:inline-flex"
        >
          Kontakt aufnehmen
        </Link>

        <button
          type="button"
          aria-label="Menü öffnen"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center border border-[#d4b06a] bg-[#fff8ea] text-[#8a6220] md:hidden"
        >
          <span className="text-lg leading-none">{mobileOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-[#e8dcc2] bg-white md:hidden">
          <nav className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
            <Link
              href="/"
              className={`border px-3 py-2 text-sm font-semibold uppercase tracking-[0.12em] ${
                pathname === "/"
                  ? "border-[#b88a2e] bg-[#fff5df] text-[#7c5a1c]"
                  : "border-[#d7deea] bg-white text-[#334155]"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              Startseite
            </Link>
            {navLinks.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`border px-3 py-2 text-sm font-semibold uppercase tracking-[0.12em] ${
                    active
                      ? "border-[#b88a2e] bg-[#fff5df] text-[#7c5a1c]"
                      : "border-[#d7deea] bg-white text-[#334155]"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/kontakt"
              className="mt-2 inline-flex items-center justify-center border border-[#d4b06a] bg-[#fff8ea] px-3 py-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#8a6220]"
              onClick={() => setMobileOpen(false)}
            >
              Kontakt aufnehmen
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
