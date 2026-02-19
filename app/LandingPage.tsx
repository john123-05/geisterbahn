"use client";

import {
  motion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import Image from "next/image";
import { Facebook, Instagram, Mail } from "lucide-react";
import mastImage from "../assets/bild1.png";
import frontTopImage from "../assets/bild2-opt.webp";
import transitionImage from "../assets/bild5.png";
import laneImage from "../assets/bild10-opt.webp";
import laneHeadImage from "../assets/bild13.png";
import homeBgImage from "../assets/pirates-adventure.jpg";
import onrideImage from "../assets/onride-upic23938@1120.jpeg";

const sectionVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.04,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    filter: "blur(6px)",
  },
  show: (index: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.58,
      delay: index * 0.06,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function LandingPage() {
  const { scrollYProgress } = useScroll();
  const mastY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const deckY = useTransform(scrollYProgress, [0, 1], [0, -95]);
  const laneOffsetY = useTransform(scrollYProgress, [0, 1], [0, -700]);
  const laneOpacity = useTransform(scrollYProgress, [0.18, 0.24, 0.78, 0.82], [0, 1, 1, 0]);
  const laneHeight = useTransform(scrollYProgress, [0.22, 0.78], ["0vh", "360vh"]);
  const mobileLaneOpacity = useTransform(scrollYProgress, [0, 0.74, 0.75], [1, 1, 0]);
  const mobileLaneHeight = useTransform(scrollYProgress, [0.16, 0.74], ["24vh", "380vh"]);

  return (
    <div className="relative isolate overflow-x-clip bg-[#050A18] text-[#f2e4c2]">
      <div className="grain-overlay" aria-hidden />

      <main className="relative z-10">
        <motion.div
          style={{ opacity: mobileLaneOpacity }}
          className="pointer-events-none absolute left-[8%] top-[88vh] z-[90] w-14 -translate-x-1/2 md:hidden"
        >
          <motion.div
            style={{
              height: mobileLaneHeight,
              backgroundImage: `url(${laneImage.src})`,
              backgroundRepeat: "repeat-y",
              backgroundSize: "100% auto",
              backgroundPosition: "center top",
            }}
            className="relative w-full"
          >
            <motion.div
              animate={{ rotate: [-4, 4, -4] }}
              transition={{ duration: 11, ease: "easeInOut", repeat: Infinity }}
              className="pointer-events-none absolute left-1/2 bottom-0 z-[46] h-20 w-20 -translate-x-1/2 translate-y-[78%] origin-top"
            >
              <Image
                src={laneHeadImage}
                alt="Ende der Fortschritts-Lane"
                fill
                sizes="80px"
                className="object-contain object-center"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ opacity: laneOpacity }}
          className="pointer-events-none absolute left-[calc(50%+48vh)] top-[112vh] z-[45] hidden w-28 -translate-x-1/2 md:block lg:w-36"
        >
          <motion.div
            style={{
              height: laneHeight,
              y: laneOffsetY,
              backgroundImage: `url(${laneImage.src})`,
              backgroundRepeat: "repeat-y",
              backgroundSize: "100% auto",
              backgroundPosition: "center top",
            }}
            className="relative w-full"
          >
            <motion.div
              animate={{ rotate: [-4, 4, -4] }}
              transition={{ duration: 11, ease: "easeInOut", repeat: Infinity }}
              className="pointer-events-none absolute left-1/2 bottom-0 z-[46] h-32 w-32 -translate-x-1/2 translate-y-[78%] origin-top lg:h-40 lg:w-40"
            >
              <Image
                src={laneHeadImage}
                alt="Ende der Fortschritts-Lane"
                fill
                sizes="(max-width: 1024px) 128px, 160px"
                className="object-contain object-center"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <section
          id="home"
          className="relative min-h-[44vh] border-t border-white/10 md:min-h-screen"
          style={{
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
            backgroundImage: `url(${homeBgImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="pointer-events-none absolute inset-0 z-0 bg-[#8fd3ff]/35" />
          <div className="relative z-30 mx-auto w-full max-w-7xl px-4 pb-3 pt-4 md:hidden">
            <div className="mx-auto w-[94vw] max-w-[620px] text-center">
              <div className="relative h-[24vh] min-h-[170px] max-h-[250px]">
                <div className="pointer-events-none absolute left-[12%] top-[-34%] h-[38%] w-[2px] bg-[linear-gradient(180deg,#a6adb6_0%,#5f6670_100%)] opacity-80" />
                <div className="pointer-events-none absolute right-[12%] top-[-34%] h-[38%] w-[2px] bg-[linear-gradient(180deg,#a6adb6_0%,#5f6670_100%)] opacity-80" />
                <div className="pointer-events-none absolute left-1/2 top-[34%] z-10 h-36 w-10 -translate-x-1/2 opacity-80">
                  <Image src={mastImage} alt="Mast-Detail mittig" fill sizes="40px" className="object-contain object-bottom" />
                </div>
                <Image
                  src={frontTopImage}
                  alt="Pirates Adventure Frontmotiv"
                  fill
                  sizes="94vw"
                  className="object-contain object-center relative z-40"
                  priority
                />
                <div className="absolute inset-x-0 top-[35%] z-50">
                  <h1 className="font-heading text-5xl font-bold tracking-tight text-black">
                    Pirates
                  </h1>
                  <p className="-mt-1 font-heading text-3xl font-bold text-[#d4af37]">Adventure</p>
                  <p className="mt-0.5 font-heading text-base font-semibold text-[#d4af37]">
                    Come and see!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            custom={4}
            variants={itemVariants}
            style={{ y: mastY }}
            className="pointer-events-none absolute left-1/2 top-[28%] z-40 hidden h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 md:block lg:h-[85vh] lg:w-[85vh]"
          >
            <Image
              src={frontTopImage}
              alt="Piraten-Detail im Vordergrund"
              fill
              sizes="(max-width: 768px) 0px, (max-width: 1280px) 60vw, 45vw"
              className="object-contain object-center"
            />
            <div className="absolute inset-x-0 top-[35%] z-50 text-center">
              <h1 className="font-heading text-5xl font-bold tracking-tight text-black lg:text-7xl">
                Pirates
              </h1>
              <div className="mx-auto mt-1 w-[90%] max-w-[640px]">
                <svg viewBox="0 0 800 220" className="w-full">
                  <defs>
                    <linearGradient id="adventureGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FFD700" />
                      <stop offset="42%" stopColor="#FFC533" />
                      <stop offset="100%" stopColor="#EA580C" />
                    </linearGradient>
                    <path id="adventureCurve" d="M 80 170 Q 400 20 720 170" />
                  </defs>
                  <text
                    fill="url(#adventureGradient)"
                    fontSize="110"
                    fontWeight="700"
                    letterSpacing="-1.5"
                    className="font-heading"
                  >
                    <textPath href="#adventureCurve" startOffset="50%" textAnchor="middle">
                      Adventure
                    </textPath>
                  </text>
                </svg>
              </div>
              <p className="-mt-12 font-heading text-lg font-semibold text-[#d4af37] lg:text-2xl">
                Come and see!
              </p>
            </div>
          </motion.div>

          <motion.div
            custom={2}
            variants={itemVariants}
            style={{ y: mastY }}
            className="pointer-events-none absolute left-1/2 top-1/2 z-30 hidden h-[72vh] w-24 -translate-x-1/2 -translate-y-1/2 md:block lg:w-32"
          >
            <div className="relative h-1/2 w-full overflow-hidden">
              <div className="relative h-[130%] w-full -translate-y-[16%]">
                <Image
                  src={mastImage}
                  alt="Mast des Piratenschiffs"
                  fill
                  sizes="128px"
                  className="object-contain object-center opacity-95"
                />
              </div>
            </div>
            <div className="relative -mt-px h-1/2 w-full overflow-hidden">
              <div className="relative h-[130%] w-full -translate-y-[48%]">
                <Image
                  src={mastImage}
                  alt="Mast des Piratenschiffs"
                  fill
                  sizes="128px"
                  className="object-contain object-center opacity-95"
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            custom={3}
            variants={itemVariants}
            style={{ y: mastY, top: "calc(50% + 36vh)" }}
            className="pointer-events-none absolute left-1/2 z-20 hidden h-[72vh] w-24 -translate-x-1/2 -translate-y-1/2 md:block lg:w-32"
          >
            <div className="relative h-1/2 w-full overflow-hidden">
              <div className="relative h-[130%] w-full -translate-y-[16%]">
                <Image
                  src={mastImage}
                  alt="Mast des Piratenschiffs"
                  fill
                  sizes="128px"
                  className="object-contain object-center opacity-95"
                />
              </div>
            </div>
            <div className="relative -mt-px h-1/2 w-full overflow-hidden">
              <div className="relative h-[130%] w-full -translate-y-[48%]">
                <Image
                  src={mastImage}
                  alt="Mast des Piratenschiffs"
                  fill
                  sizes="128px"
                  className="object-contain object-center opacity-95"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="show"
            className="mx-auto flex min-h-[44vh] w-full max-w-7xl items-start px-4 py-24 sm:px-6 md:min-h-screen lg:px-8"
          />
        </section>

        <section id="ueber-uns" className="relative border-t border-[#a06b2c]/45 bg-[#6b3f1d]">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-20 md:hidden">
            <div className="absolute inset-x-0 top-0 h-3 bg-[linear-gradient(180deg,#e8d9bb_0%,#d5c09a_100%)] opacity-90" />
            <div className="absolute left-[12%] top-0 h-3 w-3 -translate-y-1/2 rounded-full border border-[#6d4b23] bg-[#d4b07a]" />
            <div className="absolute left-[30%] top-0 h-3 w-3 -translate-y-1/2 rounded-full border border-[#6d4b23] bg-[#d4b07a]" />
            <div className="absolute left-[48%] top-0 h-3 w-3 -translate-y-1/2 rounded-full border border-[#6d4b23] bg-[#d4b07a]" />
            <div className="absolute left-[66%] top-0 h-3 w-3 -translate-y-1/2 rounded-full border border-[#6d4b23] bg-[#d4b07a]" />
            <div className="absolute left-[84%] top-0 h-3 w-3 -translate-y-1/2 rounded-full border border-[#6d4b23] bg-[#d4b07a]" />
          </div>

          <div className="pointer-events-none absolute left-1/2 top-0 z-[95] h-[22rem] w-[112vw] -translate-x-1/2 -translate-y-[54%] opacity-100 md:hidden">
            <Image src={transitionImage} alt="Piraten-Detail am Übergang" fill sizes="100vw" className="object-contain object-center" />
          </div>
          <div className="pointer-events-none absolute left-1/2 top-0 z-20 h-[28rem] w-14 -translate-x-1/2 -translate-y-[90%] md:hidden">
            <div className="absolute bottom-0 left-1/2 h-40 w-10 -translate-x-1/2 opacity-95">
              <Image src={mastImage} alt="Mast-Detail Segment 1" fill sizes="56px" className="object-contain object-top" />
            </div>
            <div className="absolute bottom-[32%] left-1/2 h-40 w-10 -translate-x-1/2 opacity-95">
              <Image src={mastImage} alt="Mast-Detail Segment 2" fill sizes="56px" className="object-contain object-top" />
            </div>
            <div className="absolute bottom-[64%] left-1/2 h-40 w-10 -translate-x-1/2 opacity-95">
              <Image src={mastImage} alt="Mast-Detail Segment 3" fill sizes="56px" className="object-contain object-top" />
            </div>
            <div className="absolute bottom-[96%] left-1/2 h-40 w-10 -translate-x-1/2 opacity-95">
              <Image src={mastImage} alt="Mast-Detail Segment 4" fill sizes="56px" className="object-contain object-top" />
            </div>
          </div>


          <motion.div
            custom={5}
            variants={itemVariants}
            style={{ y: deckY }}
            className="pointer-events-none absolute left-1/2 top-0 z-40 hidden h-[90vh] w-[90vh] -translate-x-1/2 -translate-y-1/2 md:block lg:h-[128vh] lg:w-[128vh]"
          >
            <Image
              src={transitionImage}
              alt="Piraten-Detail am Übergang"
              fill
              sizes="(max-width: 768px) 0px, (max-width: 1280px) 90vw, 70vw"
              className="object-contain object-center"
            />
          </motion.div>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="show"
            className="mx-auto min-h-screen w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
          >
            <div className="relative mt-8 sm:mt-32">
              <motion.article
                custom={8}
                variants={itemVariants}
                className="relative z-50 mr-auto max-w-3xl border border-[#7b4e24] bg-gradient-to-b from-[#8b5a2b] via-[#74451f] to-[#5f3416] p-8 text-[#f5dfba] shadow-[0_12px_30px_rgba(0,0,0,0.4)] sm:p-10"
              >
                <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-[#ffe7be] sm:text-4xl">
                  Willkommen an Bord – Bereit für das „Adventure of a Lifetime“?
                </h2>
                <p className="mt-6 text-sm leading-7 text-[#f5dfba] sm:text-base">
                  Seit Generationen steht der Name Schneider für erstklassige Unterhaltung auf den größten Volksfesten Deutschlands. Mit dem Pirates Adventure haben wir eine Erlebniswelt geschaffen, die weit über ein klassisches Laufgeschäft hinausgeht.
                </p>
                <p className="mt-5 text-sm leading-7 text-[#f5dfba] sm:text-base">
                  Tauche ein in eine detailverliebte Piratenkulisse, die dich direkt in das goldene Zeitalter der Freibeuter entführt. Schon seit vielen Jahren begeistern wir kleine und große Abenteurer mit einer Mischung aus modernster Showtechnik, überraschenden Spezialeffekten und handgefertigten Dekorationen.
                </p>
              </motion.article>
              <div className="relative mt-5 h-56 overflow-hidden border border-[#7b4e24]/80 sm:hidden">
                <Image
                  src={onrideImage}
                  alt="Onride Einblick in das Pirates Adventure"
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>

              <motion.div
                initial={{ x: -110, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="pointer-events-none absolute top-4 left-[64%] z-40 hidden h-[300px] w-[220px] overflow-hidden border border-[#7b4e24]/80 shadow-[0_12px_26px_rgba(0,0,0,0.35)] sm:block sm:h-[340px] sm:w-[280px] lg:h-[390px] lg:w-[350px]"
              >
                <Image
                  src={onrideImage}
                  alt="Onride Einblick in das Pirates Adventure"
                  fill
                  sizes="(max-width: 1024px) 280px, 350px"
                  className="object-cover object-center"
                />
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section className="relative border-t border-white/10 bg-[#0d1018]">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="show"
            className="mx-auto min-h-screen w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
          >
            <div className="relative">
              <motion.article
                custom={9}
                variants={itemVariants}
                className="relative z-50 max-w-3xl border border-[#7b4e24] bg-gradient-to-b from-[#8b5a2b] via-[#74451f] to-[#5f3416] p-8 text-[#f5dfba] shadow-[0_12px_30px_rgba(0,0,0,0.4)] sm:p-10"
              >
                <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-[#ffe7be] sm:text-4xl">
                  Was dich erwartet:
                </h2>
                <p className="mt-6 text-sm leading-7 text-[#f5dfba] sm:text-base">
                  In unserem „Pirates Adventure“ durchläufst du mehrere Themenkammern. Von der stürmischen See über mysteriöse Schatzhöhlen bis hin zum legendären Geisterschiff – wir setzen auf echtes Edutainment und Action. Unser Geschäft zeichnet sich durch die hohe Qualität der interaktiven Animatronics und die dichte Atmosphäre aus, die wir über Jahrzehnte hinweg perfektioniert haben.
                </p>
                <p className="mt-5 text-sm leading-7 text-[#f5dfba] sm:text-base">
                  Ob mutiger Landratte oder erfahrener Seebär: Wir laden dich ein, Teil unserer Crew zu werden. Erlebe die Faszination der Weltmeere, so wie es sie nur bei der Schaustellerfamilie Schneider gibt.
                </p>
                <p className="mt-5 text-sm leading-7 text-[#f5dfba] sm:text-base">
                  Klar zum Entern? Wir freuen uns auf deinen Besuch!
                </p>
              </motion.article>
              <div className="relative mt-5 h-64 overflow-hidden border border-[#7b4e24]/80 sm:hidden">
                <Image
                  src={onrideImage}
                  alt="Onride Einblick in das Pirates Adventure"
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>

              <motion.div
                initial={{ x: -110, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="pointer-events-none absolute top-6 left-[66%] z-40 hidden h-[320px] w-[240px] overflow-hidden border border-[#7b4e24]/80 shadow-[0_12px_26px_rgba(0,0,0,0.35)] sm:h-[380px] sm:w-[300px] lg:block lg:h-[460px] lg:w-[360px]"
              >
                <Image
                  src={onrideImage}
                  alt="Onride Einblick in das Pirates Adventure"
                  fill
                  sizes="(max-width: 1024px) 300px, 360px"
                  className="object-cover object-center"
                />
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section className="relative border-t border-white/10 bg-[#071324]">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="show"
            className="mx-auto grid min-h-screen w-full max-w-7xl gap-10 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8"
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="bubble bubble-a" />
              <div className="bubble bubble-b" />
              <div className="bubble bubble-c" />
            </div>
            <div />
          </motion.div>
        </section>

        <section id="faq" className="border-t border-white/10 bg-[#090805] px-4 py-24 sm:px-6 lg:px-8">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="show"
            className="mx-auto min-h-screen w-full max-w-7xl border border-[#d0b57a]/35 bg-[#ead9b0] p-8 text-[#2f2210] sm:p-12"
          >
            <motion.h2
              custom={0}
              variants={itemVariants}
              className="font-heading text-4xl font-bold tracking-tighter sm:text-5xl"
            >
              FAQ
            </motion.h2>

            <motion.div custom={1} variants={itemVariants} className="mt-10 space-y-5 sm:hidden">
              <details className="group border border-[#a48143]/35 bg-[#f2e5c4] p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 pr-1 font-heading text-2xl font-bold tracking-tight">
                  <span>Für welches Alter ist das Pirates Adventure geeignet?</span>
                  <span className="text-xl leading-none transition-transform group-open:rotate-180">▾</span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-[#4c3a1f]">
                  Unser Laufgeschäft ist ein Abenteuer für die ganze Familie.
                  Mutige Piraten ab 6 Jahren können die Schatzsuche alleine
                  wagen, jüngere Entdecker sind in Begleitung ihrer Eltern
                  herzlich willkommen.
                </p>
              </details>

              <details className="group border border-[#a48143]/35 bg-[#f2e5c4] p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 pr-1 font-heading text-2xl font-bold tracking-tight">
                  <span>Wie groß ist die Stellfläche für das Geschäft?</span>
                  <span className="text-xl leading-none transition-transform group-open:rotate-180">▾</span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-[#4c3a1f]">
                  Wir benötigen eine Front von 22 Metern und eine Tiefe von 12
                  Metern. Dank modernster Logistik ist unser Team in kürzester
                  Zeit bereit zum &quot;Ankern&quot;.
                </p>
              </details>

              <details className="group border border-[#a48143]/35 bg-[#f2e5c4] p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 pr-1 font-heading text-2xl font-bold tracking-tight">
                  <span>Welche technischen Voraussetzungen gibt es?</span>
                  <span className="text-xl leading-none transition-transform group-open:rotate-180">▾</span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-[#4c3a1f]">
                  Wir benötigen einen Standard-Stromanschluss (3x 63A). Alles
                  Weitere wie Sound, Special Effects und Beleuchtung bringen wir
                  autark mit.
                </p>
              </details>
            </motion.div>

            <motion.div custom={1} variants={itemVariants} className="mt-10 hidden space-y-5 sm:block">
              <article className="border border-[#a48143]/35 bg-[#f2e5c4] p-6">
                <h3 className="font-heading text-2xl font-bold tracking-tight">
                  Für welches Alter ist das Pirates Adventure geeignet?
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#4c3a1f] sm:text-base">
                  Unser Laufgeschäft ist ein Abenteuer für die ganze Familie.
                  Mutige Piraten ab 6 Jahren können die Schatzsuche alleine
                  wagen, jüngere Entdecker sind in Begleitung ihrer Eltern
                  herzlich willkommen.
                </p>
              </article>

              <article className="border border-[#a48143]/35 bg-[#f2e5c4] p-6">
                <h3 className="font-heading text-2xl font-bold tracking-tight">
                  Wie groß ist die Stellfläche für das Geschäft?
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#4c3a1f] sm:text-base">
                  Wir benötigen eine Front von 22 Metern und eine Tiefe von 12
                  Metern. Dank modernster Logistik ist unser Team in kürzester
                  Zeit bereit zum &quot;Ankern&quot;.
                </p>
              </article>

              <article className="border border-[#a48143]/35 bg-[#f2e5c4] p-6">
                <h3 className="font-heading text-2xl font-bold tracking-tight">
                  Welche technischen Voraussetzungen gibt es?
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#4c3a1f] sm:text-base">
                  Wir benötigen einen Standard-Stromanschluss (3x 63A). Alles
                  Weitere wie Sound, Special Effects und Beleuchtung bringen wir
                  autark mit.
                </p>
              </article>
            </motion.div>

            <motion.footer
              id="kontakt"
              custom={2}
              variants={itemVariants}
              className="mt-12 border-t border-[#a48143]/45 pt-7"
            >
              <div className="flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap gap-5">
                  <a href="#" className="transition hover:text-[#8b621f]">
                    Impressum
                  </a>
                  <a href="#" className="transition hover:text-[#8b621f]">
                    Datenschutz
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    className="inline-flex h-9 w-9 items-center justify-center border border-[#aa8542]/45 bg-[#f3e8ca] transition hover:bg-[#e5d2a2]"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="inline-flex h-9 w-9 items-center justify-center border border-[#aa8542]/45 bg-[#f3e8ca] transition hover:bg-[#e5d2a2]"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="inline-flex h-9 w-9 items-center justify-center border border-[#aa8542]/45 bg-[#f3e8ca] transition hover:bg-[#e5d2a2]"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.footer>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
