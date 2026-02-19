"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import headerImage from "../../assets/bild17.png";
import laneSideImage from "../../assets/bild10.png";
import heroBackgroundImage from "../../assets/d3eabef4-072c-44ca-9029-d8472e38df44.jpeg.avif";
import geisterbahnCarImage from "../../assets/geisterbahn.png";
import dscImage from "../../assets/DSC_0008.jpeg";
import traditionImage from "../../assets/GEISTEREXPRESS_SchneiderbyHM2025.jpg";
import warumImage from "../../assets/GBN5FG3SPVC47BZY44SOXGFMSI.jpg";

export default function GeisterExpressPage() {
  const horizontalRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: horizontalRef,
    offset: ["start start", "end end"],
  });
  const trackX = useTransform(scrollYProgress, [0, 1], ["0vw", "-200vw"]);
  const carX = useTransform(scrollYProgress, [0.08, 0.92], ["16vw", "72vw"]);

  return (
    <div className="relative overflow-x-clip bg-[#030304] text-[#d4d4d8]">
      <div className="pointer-events-none absolute top-[2vh] left-[18%] z-10 h-[44vh] w-20 -translate-x-1/2 opacity-80 md:hidden">
        <Image src={laneSideImage} alt="Dekor links mobil" fill className="object-contain object-top" priority />
      </div>
      <div className="pointer-events-none absolute top-[2vh] right-[18%] z-10 h-[44vh] w-20 translate-x-1/2 opacity-80 md:hidden">
        <Image
          src={laneSideImage}
          alt="Dekor rechts mobil"
          fill
          className="object-contain object-top scale-x-[-1]"
          priority
        />
      </div>
      <div className="pointer-events-none absolute top-[2vh] left-[18%] z-10 hidden h-[50vh] w-24 -translate-x-1/2 opacity-95 md:block md:left-[22%] md:w-28 lg:left-[26%] lg:w-32">
        <Image src={laneSideImage} alt="Dekor links" fill className="object-contain object-top" priority />
      </div>
      <div className="pointer-events-none absolute top-[2vh] right-[18%] z-10 hidden h-[50vh] w-24 translate-x-1/2 opacity-95 md:block md:right-[22%] md:w-28 lg:right-[26%] lg:w-32">
        <Image
          src={laneSideImage}
          alt="Dekor rechts"
          fill
          className="object-contain object-top scale-x-[-1]"
          priority
        />
      </div>

      <main>
        <section
          className="relative min-h-[62vh] border-b border-white/10 md:min-h-screen"
          style={{
            backgroundImage: `url(${heroBackgroundImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(165deg,rgba(8,2,4,0.78)_0%,rgba(37,4,9,0.72)_35%,rgba(90,7,18,0.58)_58%,rgba(18,3,6,0.78)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(150,12,26,0.28)_0%,transparent_34%),radial-gradient(circle_at_78%_68%,rgba(120,8,20,0.24)_0%,transparent_36%),radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.42)_0%,rgba(0,0,0,0.56)_100%)]" />
          <div className="absolute left-[10%] top-[16%] h-40 w-40 rounded-full border border-[#8f1019]/30 bg-[#8f1019]/10 blur-2xl" />
          <div className="absolute right-[10%] bottom-[18%] h-48 w-48 rounded-full border border-white/10 bg-white/5 blur-2xl" />
          <div className="absolute inset-x-0 top-[2%] z-20 md:hidden">
            <div className="mx-auto w-[98vw] max-w-[760px]">
            <div className="relative h-[40vh] min-h-[260px] max-h-[380px]">
                <div className="pointer-events-none absolute left-[12%] top-[-34%] h-[38%] w-[2px] bg-[linear-gradient(180deg,#a6adb6_0%,#5f6670_100%)] opacity-80" />
                <div className="pointer-events-none absolute right-[12%] top-[-34%] h-[38%] w-[2px] bg-[linear-gradient(180deg,#a6adb6_0%,#5f6670_100%)] opacity-80" />
                <Image
                  src={headerImage}
                  alt="Geister Express Frontmotiv"
                  fill
                  className="object-contain object-center"
                  priority
                />
                <div className="absolute inset-x-0 top-[36%] text-center">
                  <h1 className="font-heading text-5xl font-bold tracking-tight text-[#f1f5f9] drop-shadow-[0_6px_14px_rgba(0,0,0,0.85)]">
                    Geister
                  </h1>
                  <h2 className="-mt-2 font-heading text-5xl font-bold tracking-tight text-[#d71923] drop-shadow-[0_6px_14px_rgba(0,0,0,0.85)]">
                    Express
                  </h2>
                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-black">
                    Geisterbahn von Louis Schneider
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute left-1/2 top-[28%] z-20 hidden h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 md:block lg:h-[85vh] lg:w-[85vh]">
            <Image
              src={headerImage}
              alt="Geister Express Frontmotiv"
              fill
              className="object-contain object-center"
              priority
            />
            <div className="absolute inset-x-0 top-[38%] z-30 text-center">
              <h1 className="font-heading text-5xl font-bold tracking-tight text-[#f1f5f9] drop-shadow-[0_6px_14px_rgba(0,0,0,0.85)] lg:text-7xl">
                Geister
              </h1>
              <h2 className="-mt-2 font-heading text-5xl font-bold tracking-tight text-[#d71923] drop-shadow-[0_6px_14px_rgba(0,0,0,0.85)] lg:text-7xl">
                Express
              </h2>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-black lg:text-sm">
                Geisterbahn von Louis Schneider
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[#040406] md:hidden">
          <div className="space-y-6 px-4 py-10">
            <article className="border border-[#8c96a3]/45 bg-gradient-to-b from-[#8e98a5] via-[#646d79] to-[#49515d] p-6 text-[#eef2f7]">
              <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-white">
                Traust du dich einzusteigen?
              </h2>
              <p className="mt-5 text-sm leading-7 text-[#eef2f7]">
                „Wenn das Quietschen der Schienen das einzige Geräusch in der Dunkelheit ist und kalte Schauer über deinen Rücken laufen, dann bist du im Geister Express angekommen. Louis Schneider lädt dich ein auf eine Reise zwischen Diesseits und Jenseits. Erlebe Spezialeffekte, die deine Sinne täuschen, und begegne Gestalten, die eigentlich nur in deinen Albträumen existieren.
              </p>
              <p className="mt-4 text-sm leading-7 text-[#eef2f7]">
                Der Geister Express ist nicht nur eine Fahrt – es ist eine Mutprobe für die ganze Familie. Schnall dich an, halte dich fest und... vergiss nicht zu atmen.“
              </p>
            </article>
            <div className="relative h-64 overflow-hidden border border-[#8c96a3]/40">
              <Image src={dscImage} alt="Geister Express Szene" fill className="object-cover object-center" />
            </div>

            <article className="border border-[#5b6472]/55 bg-[linear-gradient(145deg,rgba(24,28,36,0.95)_0%,rgba(48,56,68,0.92)_48%,rgba(20,24,31,0.96)_100%)] p-6 text-[#e6edf6]">
              <h2 className="font-heading text-2xl font-bold leading-tight tracking-tight text-[#f3f7fc]">
                Tradition trifft auf modernen Grusel: Die Geschichte des Geister Express
              </h2>
              <p className="mt-5 text-sm leading-7 text-[#e6edf6]">
                Der Geister Express ist eine Institution auf den deutschen Festplätzen und wird von der renommierten Schaustellerfamilie Louis Schneider betrieben. Die Bahn blickt auf eine jahrzehntelange Tradition zurück, hat sich aber über die Jahre immer wieder neu erfunden.
              </p>
              <p className="mt-4 text-sm leading-7 text-[#e6edf6]">
                Ein zeitloser Klassiker: Seit vielen Jahren begeistert (und erschreckt) der Geister Express Generationen von Kirmesbesuchern. Ursprünglich unter anderen Namen und Aufmachungen bekannt, wurde das Geschäft unter Louis Schneider stetig modernisiert, um den hohen Erwartungen an zeitgemäßen Grusel gerecht zu werden.
              </p>
              <p className="mt-4 text-sm leading-7 text-[#e6edf6]">
                Das Erlebnis: Auf zwei Etagen (oder einer weitläufigen Ebene, je nach Aufbau-Variante) führt die Fahrt durch tiefste Dunkelheit. Was den Geister Express auszeichnet, ist die gelungene Mischung aus klassischen Animatronics, lebensnahen Figuren und modernen Licht- sowie Soundeffekten.
              </p>
            </article>
            <div className="relative h-64 overflow-hidden border border-[#5b6472]/45">
              <Image src={traditionImage} alt="Geister Express Tradition" fill className="object-cover object-center" />
            </div>

            <article className="border border-[#6a7381]/45 bg-[linear-gradient(160deg,rgba(18,21,28,0.94)_0%,rgba(41,47,58,0.9)_55%,rgba(16,19,25,0.95)_100%)] p-6 text-[#e7edf5]">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-[#f4f8ff]">
                Warum der Geister Express?
              </h2>
              <p className="mt-5 text-sm leading-7 text-[#e7edf5]">
                Weil hier Herzblut in jedem Detail steckt. Die Familie Schneider versteht es, die klassische Jahrmarkt-Nostalgie mit der Gänsehaut eines modernen Horrorfilms zu verknüpfen. Ein Muss für jeden, der das Kribbeln im Bauch liebt!
              </p>
            </article>
            <div className="relative h-64 overflow-hidden border border-[#6a7381]/45">
              <Image src={warumImage} alt="Warum der Geister Express" fill className="object-cover object-center" />
            </div>

            <div className="relative mt-1 h-2 border-y border-[#c7ced8]/30 bg-[linear-gradient(90deg,rgba(70,76,84,0.9)_0%,rgba(170,178,188,0.95)_22%,rgba(96,104,114,0.95)_50%,rgba(176,184,194,0.95)_78%,rgba(66,72,80,0.9)_100%)]" />
            <div className="relative -mt-4 -ml-6 h-64 w-64">
              <Image src={geisterbahnCarImage} alt="Geisterbahn Wagen" fill className="object-contain object-center" />
            </div>
          </div>
        </section>

        <section ref={horizontalRef} className="relative hidden h-[300vh] border-b border-white/10 bg-[#040406] md:block">
          <div className="sticky top-0 h-screen overflow-hidden">
            <motion.div
              style={{ x: carX }}
              className="pointer-events-none absolute -bottom-6 z-40 h-24 w-24 sm:-bottom-10 sm:h-56 sm:w-56 lg:-bottom-20 lg:h-[20rem] lg:w-[20rem]"
            >
              <Image
                src={geisterbahnCarImage}
                alt="Geisterbahn Wagen"
                fill
                className="object-contain object-center"
                priority
              />
            </motion.div>
            <motion.div style={{ x: trackX }} className="relative flex h-full w-[300vw]">
              <div
                aria-hidden
                className="pointer-events-none absolute right-0 bottom-18 left-0 z-30 h-2 border-y border-[#c7ced8]/30"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgba(70,76,84,0.9) 0%, rgba(170,178,188,0.95) 22%, rgba(96,104,114,0.95) 50%, rgba(176,184,194,0.95) 78%, rgba(66,72,80,0.9) 100%)",
                }}
              />
              <div className="relative h-full w-screen border-r border-white/10 bg-[radial-gradient(circle_at_30%_40%,#1a1a22_0%,#07070a_60%,#030305_100%)]">
                <motion.div
                  initial={{ x: -90, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                  className="pointer-events-none absolute top-[22%] left-[61%] z-10 hidden h-[320px] w-[250px] overflow-hidden border border-[#8c96a3]/40 shadow-[0_14px_30px_rgba(0,0,0,0.45)] md:block lg:h-[420px] lg:w-[320px]"
                >
                  <Image
                    src={dscImage}
                    alt="Geister Express Szene"
                    fill
                    className="object-cover object-center"
                  />
                </motion.div>
                <article className="absolute left-[8%] top-[16%] z-20 max-w-2xl border border-[#8c96a3]/45 bg-gradient-to-b from-[#8e98a5] via-[#646d79] to-[#49515d] p-6 text-[#eef2f7] shadow-[0_16px_34px_rgba(0,0,0,0.45)] sm:p-8">
                  <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                    Traust du dich einzusteigen?
                  </h2>
                  <p className="mt-5 text-sm leading-7 text-[#eef2f7] sm:text-base">
                    „Wenn das Quietschen der Schienen das einzige Geräusch in der Dunkelheit ist und kalte Schauer über deinen Rücken laufen, dann bist du im Geister Express angekommen. Louis Schneider lädt dich ein auf eine Reise zwischen Diesseits und Jenseits. Erlebe Spezialeffekte, die deine Sinne täuschen, und begegne Gestalten, die eigentlich nur in deinen Albträumen existieren.
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[#eef2f7] sm:text-base">
                    Der Geister Express ist nicht nur eine Fahrt – es ist eine Mutprobe für die ganze Familie. Schnall dich an, halte dich fest und... vergiss nicht zu atmen.“
                  </p>
                </article>
              </div>

              <div className="relative h-full w-screen border-r border-white/10 bg-[radial-gradient(circle_at_20%_25%,rgba(153,8,22,0.58)_0%,transparent_34%),radial-gradient(circle_at_78%_62%,rgba(128,6,18,0.5)_0%,transparent_38%),linear-gradient(165deg,#120206_0%,#2a040d_32%,#5a0715_58%,#2c030b_78%,#0d0104_100%)]">
                <motion.div
                  initial={{ x: -90, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                  className="pointer-events-none absolute top-[20%] left-[70%] z-10 hidden h-[300px] w-[230px] overflow-hidden border border-[#5b6472]/45 shadow-[0_14px_30px_rgba(0,0,0,0.45)] md:block lg:h-[400px] lg:w-[300px]"
                >
                  <Image
                    src={traditionImage}
                    alt="Geister Express Tradition"
                    fill
                    className="object-cover object-center"
                  />
                </motion.div>
                <article className="absolute left-[12%] top-[12%] z-20 max-w-3xl border border-[#5b6472]/55 bg-[linear-gradient(145deg,rgba(24,28,36,0.95)_0%,rgba(48,56,68,0.92)_48%,rgba(20,24,31,0.96)_100%)] p-6 text-[#e6edf6] shadow-[0_18px_38px_rgba(0,0,0,0.48)] sm:p-8">
                  <h2 className="font-heading text-2xl font-bold leading-tight tracking-tight text-[#f3f7fc] sm:text-3xl">
                    Tradition trifft auf modernen Grusel: Die Geschichte des Geister Express
                  </h2>
                  <p className="mt-5 text-sm leading-7 text-[#e6edf6] sm:text-base">
                    Der Geister Express ist eine Institution auf den deutschen Festplätzen und wird von der renommierten Schaustellerfamilie Louis Schneider betrieben. Die Bahn blickt auf eine jahrzehntelange Tradition zurück, hat sich aber über die Jahre immer wieder neu erfunden.
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[#e6edf6] sm:text-base">
                    Ein zeitloser Klassiker: Seit vielen Jahren begeistert (und erschreckt) der Geister Express Generationen von Kirmesbesuchern. Ursprünglich unter anderen Namen und Aufmachungen bekannt, wurde das Geschäft unter Louis Schneider stetig modernisiert, um den hohen Erwartungen an zeitgemäßen Grusel gerecht zu werden.
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[#e6edf6] sm:text-base">
                    Das Erlebnis: Auf zwei Etagen (oder einer weitläufigen Ebene, je nach Aufbau-Variante) führt die Fahrt durch tiefste Dunkelheit. Was den Geister Express auszeichnet, ist die gelungene Mischung aus klassischen Animatronics, lebensnahen Figuren und modernen Licht- sowie Soundeffekten.
                  </p>
                </article>
              </div>

              <div className="relative h-full w-screen bg-[radial-gradient(circle_at_70%_30%,#241118_0%,#090a0f_55%,#040406_100%)]">
                <motion.div
                  initial={{ x: -90, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                  className="pointer-events-none absolute top-[22%] left-[64%] z-10 hidden h-[300px] w-[230px] overflow-hidden border border-[#6a7381]/45 shadow-[0_14px_30px_rgba(0,0,0,0.45)] md:block lg:h-[400px] lg:w-[300px]"
                >
                  <Image
                    src={warumImage}
                    alt="Warum der Geister Express"
                    fill
                    className="object-cover object-center"
                  />
                </motion.div>
                <article className="absolute left-[10%] top-[16%] z-20 w-[82%] max-w-2xl border border-[#6a7381]/45 bg-[linear-gradient(160deg,rgba(18,21,28,0.94)_0%,rgba(41,47,58,0.9)_55%,rgba(16,19,25,0.95)_100%)] p-7 text-[#e7edf5] shadow-[0_18px_40px_rgba(0,0,0,0.5)] sm:p-8">
                  <h2 className="font-heading text-3xl font-bold tracking-tight text-[#f4f8ff] sm:text-4xl">
                    Warum der Geister Express?
                  </h2>
                  <p className="mt-5 text-sm leading-7 text-[#e7edf5] sm:text-base">
                    Weil hier Herzblut in jedem Detail steckt. Die Familie Schneider versteht es, die klassische Jahrmarkt-Nostalgie mit der Gänsehaut eines modernen Horrorfilms zu verknüpfen. Ein Muss für jeden, der das Kribbeln im Bauch liebt!
                  </p>
                </article>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative min-h-screen py-10 md:py-0 bg-[linear-gradient(180deg,#040406_0%,#0c0d12_60%,#020203_100%)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(159,18,27,0.22)_0%,transparent_60%)]" />
          <div className="absolute left-[15%] top-[20%] h-44 w-44 rounded-full border border-white/15" />
          <div className="absolute right-[14%] bottom-[20%] h-64 w-64 border border-[#9f121b]/35" />
          <article className="relative z-20 mx-auto w-[92%] max-w-5xl border border-[#6b7482]/45 bg-[linear-gradient(160deg,rgba(16,19,26,0.95)_0%,rgba(33,39,49,0.92)_52%,rgba(12,15,21,0.96)_100%)] p-6 text-[#e8edf5] shadow-[0_18px_40px_rgba(0,0,0,0.5)] sm:p-8 lg:p-10 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-[#f4f8ff] sm:text-4xl">
              💀 Häufig gestellte Fragen (FAQ)
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#dce3ee] sm:text-base">
              Hier findest du alles, was du wissen musst, bevor du den Geister Express betrittst.
            </p>

            <div className="mt-8 space-y-5 sm:hidden">
              <details className="group border border-[#6b7482]/40 bg-white/[0.03] p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-heading text-xl font-bold text-[#f2f6fc]">
                  <span>Ab welchem Alter ist die Fahrt geeignet?</span>
                  <span className="text-lg leading-none transition-transform group-open:rotate-180">▾</span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-[#dce3ee]">
                  Der Geister Express ist ein Familiengeschäft. Wir legen Wert auf einen „wohligen Grusel“, der für Kinder in Begleitung ihrer Eltern meist ab dem Grundschulalter gut machbar ist. Da jedes Kind anders auf Dunkelheit und Effekte reagiert, liegt die Entscheidung letztlich bei den Erziehungsberechtigten.
                </p>
              </details>

              <details className="group border border-[#6b7482]/40 bg-white/[0.03] p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-heading text-xl font-bold text-[#f2f6fc]">
                  <span>Wie lange dauert eine Fahrt?</span>
                  <span className="text-lg leading-none transition-transform group-open:rotate-180">▾</span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-[#dce3ee]">
                  Die Reise durch das Reich der Schatten dauert etwa 2 bis 3 Minuten. Genug Zeit, um ordentlich Gänsehaut zu bekommen, aber kurz genug, um danach direkt wieder festen Boden unter den Füßen zu haben!
                </p>
              </details>

              <details className="group border border-[#6b7482]/40 bg-white/[0.03] p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-heading text-xl font-bold text-[#f2f6fc]">
                  <span>Ist die Bahn sicher?</span>
                  <span className="text-lg leading-none transition-transform group-open:rotate-180">▾</span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-[#dce3ee]">
                  Absolut. Die Sicherheit unserer Fahrgäste hat oberste Priorität. Der Geister Express wird regelmäßig vom TÜV geprüft und entspricht modernsten Sicherheitsstandards. Während der Fahrt sorgen Rückhaltesysteme in den Gondeln dafür, dass du sicher an deinem Platz bleibst.
                </p>
              </details>

              <details className="group border border-[#6b7482]/40 bg-white/[0.03] p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-heading text-xl font-bold text-[#f2f6fc]">
                  <span>Gibt es Live-Erschrecker?</span>
                  <span className="text-lg leading-none transition-transform group-open:rotate-180">▾</span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-[#dce3ee]">
                  Um das Erlebnis dynamisch zu halten, setzen wir auf eine Mischung aus modernster Animatronik und – je nach Veranstaltung und Kapazität – gelegentlichen Live-Erschreckern. Man weiß also nie genau, was (oder wer) hinter der nächsten Ecke wartet!
                </p>
              </details>
            </div>

            <div className="mt-8 hidden space-y-5 sm:block">
              <section className="border border-[#6b7482]/40 bg-white/[0.03] p-4 sm:p-5">
                <h3 className="font-heading text-xl font-bold text-[#f2f6fc]">
                  Ab welchem Alter ist die Fahrt geeignet?
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#dce3ee] sm:text-base">
                  Der Geister Express ist ein Familiengeschäft. Wir legen Wert auf einen „wohligen Grusel“, der für Kinder in Begleitung ihrer Eltern meist ab dem Grundschulalter gut machbar ist. Da jedes Kind anders auf Dunkelheit und Effekte reagiert, liegt die Entscheidung letztlich bei den Erziehungsberechtigten.
                </p>
              </section>

              <section className="border border-[#6b7482]/40 bg-white/[0.03] p-4 sm:p-5">
                <h3 className="font-heading text-xl font-bold text-[#f2f6fc]">
                  Wie lange dauert eine Fahrt?
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#dce3ee] sm:text-base">
                  Die Reise durch das Reich der Schatten dauert etwa 2 bis 3 Minuten. Genug Zeit, um ordentlich Gänsehaut zu bekommen, aber kurz genug, um danach direkt wieder festen Boden unter den Füßen zu haben!
                </p>
              </section>

              <section className="border border-[#6b7482]/40 bg-white/[0.03] p-4 sm:p-5">
                <h3 className="font-heading text-xl font-bold text-[#f2f6fc]">
                  Ist die Bahn sicher?
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#dce3ee] sm:text-base">
                  Absolut. Die Sicherheit unserer Fahrgäste hat oberste Priorität. Der Geister Express wird regelmäßig vom TÜV geprüft und entspricht modernsten Sicherheitsstandards. Während der Fahrt sorgen Rückhaltesysteme in den Gondeln dafür, dass du sicher an deinem Platz bleibst.
                </p>
              </section>

              <section className="border border-[#6b7482]/40 bg-white/[0.03] p-4 sm:p-5">
                <h3 className="font-heading text-xl font-bold text-[#f2f6fc]">
                  Gibt es Live-Erschrecker?
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#dce3ee] sm:text-base">
                  Um das Erlebnis dynamisch zu halten, setzen wir auf eine Mischung aus modernster Animatronik und – je nach Veranstaltung und Kapazität – gelegentlichen Live-Erschreckern. Man weiß also nie genau, was (oder wer) hinter der nächsten Ecke wartet!
                </p>
              </section>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
