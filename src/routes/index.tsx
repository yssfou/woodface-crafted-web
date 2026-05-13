import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Hammer, Leaf, Sparkles, Phone, Instagram, Hash } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import craftImg from "@/assets/craft.jpg";
import { Reveal } from "@/components/Reveal";
import { WhatsAppFab, WA_URL } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "WoodFace — Créations artistiques en bois recyclé" },
      {
        name: "description",
        content:
          "WoodFace produit, à partir du bois récupéré, des créations artistiques uniques pour le confort et le bien-être. Décoration, meubles & art en bois de palette.",
      },
      { property: "og:title", content: "WoodFace — Art du bois recyclé" },
      { property: "og:description", content: "Décoration et créations artistiques en bois récupéré." },
      { property: "og:image", content: heroImg },
    ],
  }),
});

const products = [
  { img: p1, title: "Mosaïque Murale", tag: "Art mural" },
  { img: p2, title: "Table Basse Lumen", tag: "Mobilier" },
  { img: p3, title: "Étagères Origine", tag: "Rangement" },
];

const marqueeWords = ["#bois", "#palette", "#decoration", "#handmade", "#artisanat", "#upcycling"];

function Index() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main className="relative overflow-x-hidden bg-background text-foreground">
      {/* NAV */}
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-background/40 border-b border-border/50"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2 group">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-gradient-to-br from-primary to-accent text-primary-foreground font-display font-bold transition-transform duration-500 group-hover:rotate-12">
              W
            </span>
            <span className="font-display text-xl tracking-tight">
              Wood<span className="text-gradient-ember">Face</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {["Atelier", "Créations", "Histoire", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="relative hover:text-foreground transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-500 hover:after:w-full"
              >
                {l}
              </a>
            ))}
          </div>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-500 hover:bg-accent hover:shadow-[var(--shadow-glow)]"
          >
            Commander
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
          </a>
        </div>
      </motion.nav>

      {/* HERO */}
      <section ref={heroRef} id="top" className="relative h-screen w-full overflow-hidden">
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0">
          <img
            src={heroImg}
            alt="Table basse en bois de palette artisanale WoodFace"
            width={1600}
            height={1200}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background" />
          <div className="absolute inset-0 bg-grain mix-blend-overlay opacity-40" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/90 backdrop-blur"
          >
            <Leaf className="h-3 w-3 text-primary-foreground" />
            Atelier d'art en bois recyclé
          </motion.span>

          <h1 className="max-w-5xl font-display text-6xl leading-[0.95] md:text-8xl lg:text-[9rem] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Le bois
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="block italic text-gradient-ember"
            >
              renaît.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-8 max-w-xl text-base md:text-lg text-white/85"
          >
            À partir de palettes récupérées, nous façonnons des créations artistiques pour le confort
            et le bien‑être de tous.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-10 flex items-center gap-4"
          >
            <a
              href="#créations"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-all duration-500 hover:bg-primary hover:text-primary-foreground"
            >
              Découvrir les créations
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            scroll ↓
          </motion.div>
        </motion.div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border bg-card/30 py-6 overflow-hidden">
        <div className="flex marquee whitespace-nowrap">
          {[...marqueeWords, ...marqueeWords, ...marqueeWords, ...marqueeWords].map((w, i) => (
            <span key={i} className="mx-8 flex items-center gap-3 font-display text-3xl md:text-5xl text-muted-foreground/60">
              <Hash className="h-6 w-6 text-primary/70" />
              {w.replace("#", "")}
            </span>
          ))}
        </div>
      </section>

      {/* ATELIER / VALUES */}
      <section id="atelier" className="relative py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">— Atelier</p>
            <h2 className="font-display text-5xl md:text-7xl max-w-3xl">
              De la palette oubliée<br />
              <span className="italic text-muted-foreground">à l'objet d'art.</span>
            </h2>
          </Reveal>

          <div className="mt-20 grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "Récupération",
                text: "Chaque pièce commence par une seconde vie. Nous sélectionnons les bois rejetés pour leur caractère.",
              },
              {
                icon: Hammer,
                title: "Façonnage",
                text: "Coupe, ponçage, assemblage — fait main, à l'atelier, avec patience et précision.",
              },
              {
                icon: Sparkles,
                title: "Finition",
                text: "Huiles naturelles, finitions soignées : pour le confort et le bien‑être de tous.",
              },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 0.15}>
                <div className="hover-lift group relative h-full rounded-2xl border border-border bg-card p-8">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl mb-3">{v.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{v.text}</p>
                  <div className="mt-6 text-xs text-muted-foreground/60 font-mono">
                    0{i + 1} / 03
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CRÉATIONS */}
      <section id="créations" className="relative py-32 px-6 bg-card/20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">— Créations</p>
              <h2 className="font-display text-5xl md:text-7xl">
                Pièces <span className="italic text-gradient-ember">uniques.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="max-w-md text-muted-foreground">
                Mobilier, décoration murale et objets sculpturaux — chaque création est numérotée et
                façonnée à la commande.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.12}>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-secondary aspect-[4/5]">
                    <motion.img
                      src={p.img}
                      alt={p.title}
                      width={1024}
                      height={1280}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-2 rounded-full bg-primary/90 px-4 py-2 text-xs font-medium text-primary-foreground backdrop-blur">
                        Commander <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                  <div className="mt-5 flex items-baseline justify-between">
                    <h3 className="font-display text-2xl group-hover:text-primary transition-colors duration-300">
                      {p.title}
                    </h3>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">
                      {p.tag}
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HISTOIRE / SPLIT */}
      <section id="histoire" className="relative py-32 px-6">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={craftImg}
                alt="Artisan WoodFace au travail"
                width={1400}
                height={1000}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-border rounded-3xl" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">— Histoire</p>
            <h2 className="font-display text-4xl md:text-6xl mb-6">
              L'âme du bois,<br />
              <span className="italic text-muted-foreground">la main de l'artisan.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">WoodFace</strong> est né d'une conviction simple :
              le beau peut naître de l'oublié. Chaque palette, chaque planche rejetée porte une
              histoire — nous la révélons.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nos créations artistiques sont pensées pour le confort et le bien‑être de tous, à la
              fois fonctionnelles et sculpturales.
            </p>
            <div className="grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                { n: "200+", l: "Pièces créées" },
                { n: "100%", l: "Bois recyclé" },
                { n: "5 ans", l: "D'atelier" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl text-gradient-ember">{s.n}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section id="contact" className="relative py-32 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6">— Contact</p>
            <h2 className="font-display text-5xl md:text-8xl leading-[0.95]">
              Une idée ?<br />
              <span className="italic text-gradient-ember">Parlons‑en.</span>
            </h2>
            <p className="mt-8 max-w-xl mx-auto text-muted-foreground">
              Commande sur mesure, projet de décoration ou simple curiosité — écrivez‑nous
              directement sur WhatsApp.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all duration-500 hover:bg-accent hover:shadow-[var(--shadow-glow)] hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                +216 29 261 022
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </a>
              <a
                href="https://www.instagram.com/woodface.creations/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-4 text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-500"
              >
                <Instagram className="h-4 w-4" /> Instagram
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10 px-6">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2 font-display text-base">
            Wood<span className="text-gradient-ember">Face</span>
            <span className="text-muted-foreground/50">© {new Date().getFullYear()}</span>
          </div>
          <div className="italic">Créé par <span className="text-foreground font-medium not-italic">Ourabi Youssef</span></div>
          <div className="uppercase tracking-[0.25em]">#bois · #palette · #decoration</div>
        </div>
      </footer>

      <WhatsAppFab />
    </main>
  );
}
