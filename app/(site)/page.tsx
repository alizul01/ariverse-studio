import Link from "next/link";
import Image from "next/image";
import FadeIn from "../components/animations/FadeIn";
import StaggerContainer, { StaggerItem } from "../components/animations/StaggerContainer";
import { services } from "../data/services";
import CTA from "../components/ui/CTA";
import { reader } from "../../lib/keystatic";
import GameShowcase from "../components/home/GameShowcase";
import HeroSection from "../components/home/HeroSection";
import AboutVisuals from "../components/home/AboutVisuals";
import PressCoverage from "../components/home/PressCoverage";

export default async function Home() {
  const gamesData = await reader.collections.games.all();
  const games = gamesData.map((game) => ({
    title: game.entry.title,
    description: game.entry.description,
    platforms: game.entry.platforms,
    slug: game.slug,
    image: game.entry.coverImage || "/images/placeholder.jpg",
  }));

  const crewData = await reader.collections.crew.all();
  const crew = crewData.map((member) => ({
    name: member.entry.name,
    role: member.entry.role,
    photo: member.entry.photo,
  }));

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
      <div className="relative w-full py-28">

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
      <div className="py-8">
        <GameShowcase games={games} />
      </div>

      {/* 3. Services — editorial index */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-6 py-20 w-full">
        <FadeIn className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <div className="inline-flex items-stretch mb-4 rounded-xl border border-[#61422D]/40 overflow-hidden">
              <div className="flex items-center justify-center px-3 py-2 bg-[#61422D]/30">
                <Image src="/emoticon/stary%20eyes.png" alt="" width={24} height={24} className="object-contain" />
              </div>
              <div className="flex items-center px-4 py-2 bg-[#61422D]/10">
                <span className="text-[#E2494B] text-xs font-bold tracking-[0.3em] uppercase">What We Do</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#FCEBD7] tracking-tight uppercase">Our Services</h2>
          </div>
          <Link
            href="/services"
            className="text-[#FCEBD7]/40 hover:text-[#E2494B] transition-colors text-sm font-bold tracking-widest uppercase shrink-0"
          >
            All Services →
          </Link>
        </FadeIn>

        <div className="border-t border-[#61422D]/30">
          {[
            { ...services[0], num: "01" },
            { ...services[1], num: "02" },
            { ...services[2], num: "03" },
            { ...services[3], num: "04" },
          ].map((service) => (
            <FadeIn key={service.slug}>
              <Link href={`/services/${service.slug}`}>
                <div className="group flex items-center gap-6 md:gap-10 py-6 border-b border-[#61422D]/30 hover:pl-3 transition-all duration-300">
                  <span className="text-[#FCEBD7]/20 font-mono text-sm w-6 shrink-0">{service.num}</span>
                  <h3 className="text-xl md:text-2xl font-bold text-[#FCEBD7] group-hover:text-[#E2494B] transition-colors duration-200 w-52 shrink-0">
                    {service.title}
                  </h3>
                  <p className="text-[#FCEBD7]/40 text-sm leading-relaxed hidden md:block flex-1">
                    {service.description}
                  </p>
                  <span className="text-[#E2494B] font-bold transform group-hover:translate-x-2 transition-transform duration-300 ml-auto shrink-0">
                    →
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 4. Process — bordered grid */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-6 py-20 w-full">
        <FadeIn className="mb-12">
          <div className="inline-flex items-stretch mb-4 rounded-xl border border-[#61422D]/40 overflow-hidden">
            <div className="flex items-center justify-center px-3 py-2 bg-[#61422D]/30">
              <Image src="/emoticon/confused.png" alt="" width={24} height={24} className="object-contain" />
            </div>
            <div className="flex items-center px-4 py-2 bg-[#61422D]/10">
              <span className="text-[#E2494B] text-xs font-bold tracking-[0.3em] uppercase">How We Work</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#FCEBD7] tracking-tighter uppercase">How We Make Games</h2>
        </FadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-3 border border-[#61422D]/30 rounded-2xl overflow-hidden">
          {steps.map((item, i) => (
            <FadeIn key={item.step} delay={i * 0.07}>
              <div className="group p-8 md:p-10 border-b border-r border-[#61422D]/30 hover:bg-[#61422D]/10 transition-colors duration-300 h-full
                [&:nth-child(2n)]:border-r-0
                lg:[&:nth-child(2n)]:border-r
                lg:[&:nth-child(3n)]:border-r-0
                lg:[&:nth-child(n+4)]:border-b-0
                [&:nth-child(n+5)]:border-b-0">
                <span className="text-[#E2494B] font-mono text-xs tracking-widest block mb-4">{item.step}</span>
                <h3 className="text-lg md:text-xl font-bold text-[#FCEBD7] mb-3 uppercase tracking-wide group-hover:text-[#E2494B] transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-[#FCEBD7]/40 text-sm leading-relaxed">{item.desc}</p>
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
          <h2 className="text-4xl md:text-5xl font-bold text-[#FCEBD7] tracking-tight uppercase">The Astronauts</h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {crew.map((member, i) => (
            <StaggerItem key={i} className="group">
              <div className="w-full aspect-square bg-[#61422D]/20 rounded-2xl mb-4 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 relative border border-[#61422D]/20">
                {member.photo && (
                  <Image src={member.photo} alt={member.name} fill className="object-cover" />
                )}
              </div>
              <h3 className="text-[#FCEBD7] font-bold">{member.name}</h3>
              <p className="text-[#E2494B] text-sm">{member.role}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* 6. Press */}
      <PressCoverage />

      {/* 7. CTA */}
      <CTA />

    </div>
  );
}
