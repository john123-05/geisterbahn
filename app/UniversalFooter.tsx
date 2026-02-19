import Link from "next/link";

export default function UniversalFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0b1220] text-[#cbd5e1]">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="font-heading text-lg font-bold text-white">Schaustellerbetrieb Schneider</p>
          <p className="mt-3 text-sm text-[#94a3b8]">
            Demo-Footer für alle Seiten der Website.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#e2e8f0]">Navigation</p>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <Link href="/" className="transition hover:text-white">Startseite</Link>
            <Link href="/pirates-adventure" className="transition hover:text-white">Pirates Adventure</Link>
            <Link href="/geister-express" className="transition hover:text-white">Geister Express</Link>
            <Link href="/kontakt" className="transition hover:text-white">Kontakt</Link>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#e2e8f0]">Rechtliches</p>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <a href="#" className="transition hover:text-white">Impressum</a>
            <a href="#" className="transition hover:text-white">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
