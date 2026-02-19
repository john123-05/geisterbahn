import Link from "next/link";
import headerBackgroundImage from "../assets/bild18.jpg";
import Image from "next/image";
import sampleImageA from "../assets/pirates-adventure.jpg";
import sampleImageB from "../assets/DSC_0008.jpeg";
import sampleImageC from "../assets/GEISTEREXPRESS_SchneiderbyHM2025.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#eef2f7] text-[#0f172a]">
      <main>
        <section
          className="relative border-b border-[#e2e8f0]"
          style={{
            backgroundImage: `url(${headerBackgroundImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.82)_0%,rgba(255,255,255,0.74)_100%)]" />
          <div className="mx-auto grid min-h-[52vh] w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div className="relative z-10 space-y-4">
              <h1 className="font-heading text-4xl font-bold tracking-tight text-[#0f172a] sm:text-5xl">
                Schaustellerbetrieb Schneider
              </h1>
              <p className="max-w-xl text-sm text-[#334155] sm:text-base">
                Hier könnte ein kurzer Einleitungstext über den Schaustellerbetrieb Schneider stehen.
              </p>
              <div className="flex gap-3 pt-2">
                <Link
                  href="/kontakt"
                  className="inline-flex h-10 w-48 items-center justify-center border border-[#0f172a] bg-[#0f172a] pl-1 text-xs font-semibold uppercase tracking-[0.12em] text-white"
                >
                  Kontakt aufnehmen
                </Link>
                <Link
                  href="/pirates-adventure"
                  className="inline-flex h-10 w-40 items-center justify-center border border-[#b88a2e] bg-[#fff9ec] text-xs font-semibold uppercase tracking-[0.12em] text-[#7c5a1c]"
                >
                  Unser Angebot
                </Link>
              </div>
            </div>
            <div className="relative z-10" />
          </div>
        </section>

        <section className="border-y border-[#cad3df] bg-[#f8fafc]">
          <div className="mx-auto grid min-h-[42vh] w-full max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
            <div className="border border-[#c0cad8] bg-white p-6 shadow-[0_8px_0_rgba(184,138,46,0.16)]">
              <h2 className="font-heading text-xl font-bold text-[#111827]">Über uns</h2>
              <p className="mt-3 text-sm text-[#475569]">
                Hier könnte ein Text über uns hin.
              </p>
              <div className="relative mt-4 h-36 overflow-hidden border border-[#bfc8d6]">
                <Image src={sampleImageA} alt="Platzhalterbild Über uns" fill className="object-cover" />
              </div>
            </div>
            <div className="border border-[#c0cad8] bg-white p-6 shadow-[0_8px_0_rgba(184,138,46,0.16)]">
              <h2 className="font-heading text-xl font-bold text-[#111827]">Unsere Attraktionen</h2>
              <p className="mt-3 text-sm text-[#475569]">
                Hier könnte ein Text zu den Attraktionen hin.
              </p>
              <div className="relative mt-4 h-36 overflow-hidden border border-[#bfc8d6]">
                <Image src={sampleImageB} alt="Platzhalterbild Attraktionen" fill className="object-cover" />
              </div>
            </div>
            <div className="border border-[#c0cad8] bg-white p-6 shadow-[0_8px_0_rgba(184,138,46,0.16)]">
              <h2 className="font-heading text-xl font-bold text-[#111827]">Termine & Planung</h2>
              <p className="mt-3 text-sm text-[#475569]">
                Hier könnte ein Text zu Tourdaten und Planung hin.
              </p>
              <div className="relative mt-4 h-36 overflow-hidden border border-[#bfc8d6]">
                <Image src={sampleImageC} alt="Platzhalterbild Termine" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#cad3df] bg-[linear-gradient(180deg,#f2f5fa_0%,#e7edf6_100%)]">
          <div className="mx-auto min-h-[34vh] w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-4 lg:grid-cols-2">
              <Link
                href="/pirates-adventure"
                className="border border-[#bac5d5] bg-white p-6 shadow-[0_8px_0_rgba(184,138,46,0.16)]"
              >
                <h3 className="font-heading text-xl font-bold text-[#1e293b]">Pirates Adventure</h3>
                <p className="mt-3 text-sm text-[#475569]">
                  Hier könnte ein kurzer Teasertext zu Pirates Adventure hin.
                </p>
              </Link>
              <Link
                href="/geister-express"
                className="border border-[#bac5d5] bg-white p-6 shadow-[0_8px_0_rgba(184,138,46,0.16)]"
              >
                <h3 className="font-heading text-xl font-bold text-[#1e293b]">Geister Express</h3>
                <p className="mt-3 text-sm text-[#475569]">
                  Hier könnte ein kurzer Teasertext zu Geister Express hin.
                </p>
              </Link>
            </div>

            <div className="mt-8 border border-[#bac5d5] bg-white p-6 shadow-[0_8px_0_rgba(184,138,46,0.16)] sm:p-8">
              <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-[#1e293b] sm:text-3xl">
                    Die Entstehungsgeschichte
                  </h3>
                  <p className="mt-4 text-sm text-[#475569] sm:text-base">
                    Hier könnte ein Text hin. Hier könnte ein Text hin. Hier könnte ein Text hin.
                  </p>
                  <p className="mt-3 text-sm text-[#475569] sm:text-base">
                    Hier könnte ein Text hin. Hier könnte ein Text hin. Hier könnte ein Text hin.
                  </p>
                </div>
                <div className="relative h-64 overflow-hidden border border-[#bfc8d6]">
                  <Image src={sampleImageA} alt="Platzhalterbild Entstehungsgeschichte" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
