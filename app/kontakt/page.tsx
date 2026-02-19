export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-[#e8edf4] text-[#0b1220]">
      <section className="border-b border-[#cad3df] bg-[linear-gradient(165deg,#ffffff_0%,#eef2f7_100%)]">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-[#0f172a] sm:text-5xl">
            Kontakt
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-[#334155] sm:text-base">
            Sende uns deine Anfrage oder buche direkt eine unserer Attraktionen.
          </p>
        </div>
      </section>

      <section className="border-t border-[#cad3df] bg-[#f8fafc]">
        <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="border border-[#9fb0c6] bg-white p-6 shadow-[0_10px_0_rgba(184,138,46,0.2)] sm:p-8">
            <form className="grid gap-5 lg:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.12em] text-[#1f2937]">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-2 w-full border border-[#9fb0c6] bg-white px-3 py-2 text-sm text-[#0f172a] outline-none transition focus:border-[#9a7429]"
                />
              </div>

              <div>
                <label htmlFor="company" className="text-xs font-semibold uppercase tracking-[0.12em] text-[#1f2937]">
                  Firma / Veranstalter
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="mt-2 w-full border border-[#9fb0c6] bg-white px-3 py-2 text-sm text-[#0f172a] outline-none transition focus:border-[#9a7429]"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.12em] text-[#1f2937]">
                  E-Mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full border border-[#9fb0c6] bg-white px-3 py-2 text-sm text-[#0f172a] outline-none transition focus:border-[#9a7429]"
                />
              </div>

              <div>
                <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-[0.12em] text-[#1f2937]">
                  Telefon
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="mt-2 w-full border border-[#9fb0c6] bg-white px-3 py-2 text-sm text-[#0f172a] outline-none transition focus:border-[#9a7429]"
                />
              </div>

              <div>
                <label htmlFor="attraction" className="text-xs font-semibold uppercase tracking-[0.12em] text-[#1f2937]">
                  Attraktion
                </label>
                <select
                  id="attraction"
                  name="attraction"
                  className="mt-2 w-full border border-[#9fb0c6] bg-white px-3 py-2 text-sm text-[#0f172a] outline-none transition focus:border-[#9a7429]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Bitte wählen
                  </option>
                  <option value="pirates-adventure">Pirates Adventure</option>
                  <option value="geister-express">Geister Express</option>
                  <option value="crepes">Crepes</option>
                </select>
              </div>

              <div>
                <label htmlFor="date" className="text-xs font-semibold uppercase tracking-[0.12em] text-[#1f2937]">
                  Gewünschter Zeitraum
                </label>
                <input
                  id="date"
                  name="date"
                  type="text"
                  placeholder="z. B. August 2026"
                  className="mt-2 w-full border border-[#9fb0c6] bg-white px-3 py-2 text-sm text-[#0f172a] outline-none transition focus:border-[#9a7429]"
                />
              </div>

              <div className="lg:col-span-2">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.12em] text-[#1f2937]">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="mt-2 w-full border border-[#9fb0c6] bg-white px-3 py-2 text-sm text-[#0f172a] outline-none transition focus:border-[#9a7429]"
                />
              </div>

              <div className="lg:col-span-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center border border-[#b88a2e] bg-[#fff4dd] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#7c5a1c] transition hover:bg-[#f6e7c8]"
                >
                  Anfrage senden
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
