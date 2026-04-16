import Link from "next/link";
import Image from "next/image";
import FadeIn from "../components/animations/FadeIn";
import CTA from "../components/ui/CTA";
import { reader } from "../../lib/keystatic";
import GameShowcase from "../components/home/GameShowcase";
import HeroSection from "../components/home/HeroSection";
import AboutVisuals from "../components/home/AboutVisuals";
import PressCoverage from "../components/home/PressCoverage";
import CrewSelect from "../components/home/CrewSelect";

export default async function Home() {
  const gamesData = await reader.collections.games.all();
  const games = gamesData.map((game) => ({
    title: game.entry.title,
    description: game.entry.description,
    platforms: game.entry.platforms,
    slug: game.slug,
    image: game.entry.coverImage || "/images/placeholder.jpg",
  }));

  const servicesData = await reader.collections.services.all();
  const services = servicesData.map((s) => ({
    slug: s.slug,
    title: s.entry.title,
    description: s.entry.description,
    capabilities: s.entry.capabilities,
  }));

  const crewData = await reader.collections.crew.all();
  const crew = crewData
    .map((member) => ({
      name: member.entry.name,
      order: member.entry.order,
      role: member.entry.role,
      photo: member.entry.photo,
    }))
    .sort((a, b) => a.order - b.order);

  const steps = [
    { step: "01", title: "Initiation", desc: "Ideas, target audience, and the core concept." },
    { step: "02", title: "Pre-Production", desc: "GDD, art style direction, and prototyping." },
    { step: "03", title: "Production", desc: "Assets, code, audio — everything gets built." },
    { step: "04", title: "Testing", desc: "Internal alpha: bugs get squashed, stability checked." },
    { step: "05", title: "Beta", desc: "Limited release for real feedback from real players." },
    { step: "06", title: "Launch", desc: "Ship it. Then keep improving." },
  ];

  return (
    <div className="flex flex-col pb-20">

      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Who We Are */}
      <div className="relative w-full py-16 md:py-20">

        {/* Grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(150,25,26,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(150,25,26,0.06) 1px, transparent 1px)`,
            backgroundSize: "72px 72px",
          }}
        />

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* Left: copy */}
            <FadeIn>
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-10">
                <span className="w-8 h-px bg-accent" />
                <span className="text-accent text-xs font-bold tracking-[0.35em] uppercase">Who We Are</span>
              </div>

              {/* Headline */}
              <h2 className="text-5xl md:text-6xl xl:text-7xl font-black text-foreground tracking-tighter leading-[0.92] mb-7 uppercase">
                Built in Indonesia,
                <br />
                <span
                  className="text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(135deg, #96191A 0%, #E2494B 55%, #96191A 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                  }}
                >
                  Made for
                </span>{" "}
                <span className="text-foreground/30">the World.</span>
              </h2>

              {/* Description */}
              <p className="text-lg text-foreground/55 leading-relaxed mb-12 max-w-lg">
                Ariverse Studio is an indie game studio from Malang, Indonesia.
                We make games rooted in local culture — stories that feel
                familiar to locals and intriguing to the world.
              </p>

              {/* Stats row — no boxes, just dividers */}
              <div className="flex items-stretch divide-x divide-foreground/10 mb-12">
                {[
                  { num: "2024", label: "Founded" },
                  { num: "Malang", label: "Based In" },
                  { num: "Horror", label: "Genre" },
                ].map((s, i) => (
                  <div key={s.label} className={`flex flex-col gap-1.5 ${i === 0 ? "pr-8" : "px-8"}`}>
                    <span className="text-foreground font-black text-xl tracking-tight leading-none">{s.num}</span>
                    <span className="text-foreground/30 text-[9px] tracking-[0.3em] uppercase font-bold">{s.label}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 text-foreground font-bold tracking-widest text-xs py-3.5 px-7 border border-foreground/15 rounded-full hover:border-accent/50 hover:text-accent transition-all duration-300"
              >
                MEET THE TEAM
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </FadeIn>

            {/* Right: editorial quote */}
            <AboutVisuals />

          </div>
        </div>
      </div>

      {/* 3. Game Showcase */}
      <GameShowcase games={games} />

      {/* 3. Services — card grid */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-6 py-20 w-full">
        <FadeIn className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <div className="inline-flex items-stretch mb-4 rounded-xl border border-foreground/10 overflow-hidden">
              <div className="flex items-center justify-center px-3 py-2 bg-foreground/5">
                <Image src="/emoticon/stary%20eyes.png" alt="" width={24} height={24} className="object-contain" />
              </div>
              <div className="flex items-center px-4 py-2 bg-foreground/[0.03]">
                <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase">What We Do</span>
              </div>
            </div>
            <Link href="/services" className="text-4xl md:text-5xl font-black text-foreground tracking-tight uppercase hover:text-accent transition-colors">Our Services</Link>
            <p className="text-foreground/45 mt-3 max-w-md text-sm leading-relaxed">
              From concept to launch — we bring games and interactive experiences to life.
            </p>
          </div>
          <Link
            href="/services"
            className="text-foreground/40 hover:text-accent transition-colors text-sm font-bold tracking-widest uppercase shrink-0"
          >
            All Services →
          </Link>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <FadeIn key={service.slug} delay={i * 0.08}>
              <Link href={`/services/${service.slug}`} className="block h-full">
                <div className="group relative h-full border border-foreground/10 rounded-2xl p-8 hover:border-accent/40 hover:bg-accent/[0.03] transition-all duration-300 overflow-hidden">
                  {/* Watermark number */}
                  <span className="absolute top-5 right-6 text-8xl font-black text-foreground/[0.04] leading-none select-none pointer-events-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="relative z-10">
                    <h3 className="text-xl md:text-2xl font-black text-foreground group-hover:text-accent transition-colors duration-200 uppercase tracking-tight mb-3">
                      {service.title}
                    </h3>
                    <p className="text-foreground/50 text-sm leading-relaxed mb-6 max-w-sm">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.capabilities.map((cap) => (
                        <span
                          key={cap}
                          className="text-[10px] font-bold tracking-widest uppercase text-foreground/40 border border-foreground/10 px-3 py-1 rounded-full group-hover:border-accent/25 group-hover:text-accent/70 transition-colors"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                    <span className="text-accent font-bold text-sm inline-block transform group-hover:translate-x-1.5 transition-transform duration-200">→</span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 4. Process — timeline */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-6 py-20 w-full">
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-5 h-px bg-accent" />
              <span className="text-accent text-[10px] font-black tracking-[0.35em] uppercase">How We Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tighter uppercase leading-none">
              How We<br />Make Games
            </h2>
          </div>
          <p className="text-foreground/35 text-sm max-w-[220px] leading-relaxed md:text-right">
            A structured orbit from raw idea to shipped product.
          </p>
        </FadeIn>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block">
          {/* Top connector line */}
          <div className="relative mb-0">
            <div className="absolute top-[10px] left-[10px] right-[10px] h-px bg-foreground/10" />
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-0">
              {steps.map((item, i) => (
                <FadeIn key={item.step} delay={i * 0.08}>
                  <div className="group relative pt-0 pr-8 lg:pr-6 xl:pr-8">
                    {/* Timeline dot */}
                    <div className="w-5 h-5 rounded-full border-2 border-foreground/15 bg-background group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300 mb-7 relative z-10 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground/20 group-hover:bg-accent transition-colors duration-300" />
                    </div>
                    <span className="text-[9px] font-black font-mono tracking-[0.25em] text-accent/60 block mb-2">
                      {item.step}
                    </span>
                    <h3 className="text-[13px] font-black uppercase tracking-tight text-foreground mb-2 group-hover:text-accent transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-foreground/40 leading-relaxed">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden relative pl-8">
          <div className="absolute left-[9px] top-2 bottom-2 w-px bg-foreground/10" />
          {steps.map((item, i) => (
            <FadeIn key={item.step} delay={i * 0.06}>
              <div className="group relative mb-9 last:mb-0">
                <div className="absolute -left-[27px] top-0.5 w-[18px] h-[18px] rounded-full border-2 border-foreground/15 bg-background flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/20" />
                </div>
                <span className="text-[9px] font-black font-mono tracking-[0.25em] text-accent/60 block mb-1">
                  {item.step}
                </span>
                <h3 className="text-base font-black uppercase tracking-tight text-foreground mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-foreground/40 leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 5. Crew */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-6 py-20 w-full">
        <FadeIn className="mb-12">
          <div className="inline-flex items-stretch mb-4 rounded-xl border border-[#61422D]/40 overflow-hidden">
            <div className="flex items-center justify-center px-3 py-2 bg-[#61422D]/30">
              <Image src="/emoticon/blink.png" alt="" width={24} height={24} className="object-contain" />
            </div>
            <div className="flex items-center px-4 py-2 bg-[#61422D]/10">
              <span className="text-[#E2494B] text-xs font-bold tracking-[0.3em] uppercase">The Crew</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight uppercase">The Astronauts</h2>
        </FadeIn>

        <FadeIn>
          <CrewSelect crew={crew} />
        </FadeIn>
      </section>

      {/* 6. Press */}
      <PressCoverage />

      {/* 7. CTA */}
      <CTA />

    </div>
  );
}
