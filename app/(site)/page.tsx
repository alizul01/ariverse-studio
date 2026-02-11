import Link from "next/link";
import Image from "next/image";
import FadeIn from "../components/animations/FadeIn";
import StaggerContainer, { StaggerItem } from "../components/animations/StaggerContainer";
import { services } from "../data/services";
import CTA from "../components/ui/CTA";
import {
  MagnifyingGlassIcon,
  PencilSquareIcon,
  CpuChipIcon,
  RocketLaunchIcon,
  Square3Stack3DIcon,
  TrophyIcon,
  CubeTransparentIcon,
  AcademicCapIcon,
  LightBulbIcon,
  DocumentTextIcon,
  BugAntIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { reader } from "../../lib/keystatic";
import GameShowcase from "../components/home/GameShowcase";
import AboutVisuals from "../components/home/AboutVisuals";
import ProcessTimeline from "../components/home/ProcessTimeline";
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

  return (
    <div className="flex flex-col gap-16 md:gap-24 pb-20">

      {/* 1. Hero Carousel */}
      <GameShowcase games={games} />

      {/* 2. About Highlight */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-6 py-32 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text Content */}
          <div className="relative z-10 text-left lg:pr-12">
            <FadeIn>
              <div className="inline-block mb-8 px-4 py-1 rounded-full border border-[#E2494B]/30 bg-[#E2494B]/5 backdrop-blur-sm">
                <span className="text-[#E2494B] text-xs font-bold tracking-[0.3em] uppercase">Who We Are</span>
              </div>

              {/* Copywriting: Lebih direct dan powerful */}
              <h2 className="text-5xl md:text-7xl font-bold text-[#FCEBD7] tracking-tighter leading-[0.9] mb-8 uppercase">
                We Build Worlds, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E2494B] to-[#FCEBD7]/50">You Play the Story.</span>
              </h2>

              {/* Copywriting: Bahasa natural, tidak terlalu "AI poetry" */}
              <p className="text-xl text-[#FCEBD7]/60 leading-relaxed mb-12 max-w-xl">
                Ariverse Studio is where creative chaos meets technical precision. We are a team of developers and artists dedicated to crafting immersive gaming experiences that stay with you long after the game is over.
              </p>

              {/* Milestones / Stats - Label lebih realistis */}
              <div className="grid grid-cols-3 gap-8 mb-12 py-8 border-y border-[#61422D]/20">
                {[
                  { label: "Years Active", value: "3+" },
                  { label: "Shipped Games", value: "12+" },
                  { label: "Studio Vibes", value: "100%" } // "Passion" diganti Vibes biar lebih fun
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-black text-[#FCEBD7] mb-1">{stat.value}</div>
                    <div className="text-[10px] text-[#E2494B] font-bold tracking-widest uppercase">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link href="/about" className="group relative inline-flex items-center gap-4 text-[#FCEBD7] font-bold tracking-widest text-sm py-4 px-8 border border-[#FCEBD7]/20 rounded-full hover:border-[#E2494B]/50 transition-all duration-500 overflow-hidden">
                <span className="relative z-10 transition-colors group-hover:text-[#FCEBD7]">MEET THE TEAM</span>
                <span className="relative z-10 transform group-hover:translate-x-2 transition-transform duration-500">→</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#E2494B] to-transparent opacity-0 group-hover:opacity-20 transition-opacity" />
              </Link>
            </FadeIn>
          </div>

          {/* Right: Visual Logic Core */}
          <AboutVisuals />
        </div>
      </section>

      {/* 3. Our Services (Overview) */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-6 py-32">
        <FadeIn className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 text-center md:text-left">
          <div>
            <div className="inline-block mb-4 px-4 py-1 rounded-full border border-[#E2494B]/30 bg-[#E2494B]/5 backdrop-blur-sm">
              <span className="text-[#E2494B] text-xs font-bold tracking-[0.3em] uppercase">What We Do</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#FCEBD7] tracking-tight uppercase">Our Services</h2>
          </div>
          <Link href="/services" className="mt-8 md:mt-0 text-[#E2494B] hover:text-[#FCEBD7] transition-colors font-medium hover-underline-animation">
            EXPLORE ALL SERVICES
          </Link>
        </FadeIn>

        {/* Note: Pastikan description di file data/services.ts juga sudah tidak kaku ya */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { ...services[0], icon: <Square3Stack3DIcon className="w-8 h-8" /> },
            { ...services[1], icon: <TrophyIcon className="w-8 h-8" /> },
            { ...services[2], icon: <CubeTransparentIcon className="w-8 h-8" /> },
            { ...services[3], icon: <AcademicCapIcon className="w-8 h-8" /> },
          ].map((service, index) => (
            <StaggerItem key={index}>
              <Link href={`/services/${service.slug}`} className="block h-full">
                <div className="group relative h-full bg-[#61422D]/10 border border-[#61422D]/20 p-10 rounded-[2.5rem] backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-[#E2494B]/50 hover:shadow-[0_20px_50px_rgba(226,73,75,0.1)] hover:-translate-y-2">
                  <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#E2494B]/5 rounded-full blur-3xl group-hover:bg-[#E2494B]/10 transition-colors duration-500" />

                  <div className="relative mb-10">
                    <div className="w-16 h-16 rounded-2xl bg-[#250804] border border-[#61422D]/30 flex items-center justify-center text-[#FCEBD7] group-hover:border-[#E2494B] group-hover:text-[#E2494B] group-hover:bg-[#E2494B]/5 transition-all duration-500">
                      {service.icon}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#E2494B] border-4 border-[#250804] scale-0 group-hover:scale-100 transition-transform duration-500 delay-100" />
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-[#FCEBD7] mb-4 group-hover:text-[#E2494B] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-[#FCEBD7]/50 text-sm leading-relaxed mb-10 group-hover:text-[#FCEBD7]/80 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-auto flex items-center gap-2 text-[#E2494B] text-xs font-bold tracking-widest uppercase opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    LEARN MORE <span className="text-xl">→</span>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#E2494B]/0 to-transparent group-hover:via-[#E2494B]/50 transition-all duration-700" />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* 4. Working Process */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-6 py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E2494B]/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <FadeIn className="text-center mb-32">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-[#E2494B]/30 bg-[#E2494B]/5 backdrop-blur-sm">
            <span className="text-[#E2494B] text-xs font-bold tracking-[0.3em] uppercase">How We Work</span>
          </div>
          <h2 className="te xt-4xl md:text-6xl lg:text-7xl font-bold text-[#FCEBD7] tracking-tighter uppercase">Our Process</h2>
        </FadeIn>

        <div className="relative max-w-6xl mx-auto">
          <ProcessTimeline />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              {
                step: "01",
                title: 'Initiation',
                desc: 'Initializing ideas, identifying target audiences, and creating the core concept.',
                icon: <LightBulbIcon className="w-8 h-8" />
              },
              {
                step: "02",
                title: 'Pre-Production',
                desc: 'Designing mechanics (GDD), crafting the art style, and prototyping.',
                icon: <DocumentTextIcon className="w-8 h-8" />
              },
              {
                step: "03",
                title: 'Production',
                desc: 'The core phase: building assets, writing code, and integrating everything.',
                icon: <CpuChipIcon className="w-8 h-8" />
              },
              {
                step: "04",
                title: 'Testing',
                desc: 'Rigorous internal alpha testing to squash bugs and ensure stability.',
                icon: <BugAntIcon className="w-8 h-8" />
              },
              {
                step: "05",
                title: 'Beta Release',
                desc: 'Releasing to a limited audience for feedback and refining the experience.',
                icon: <UserGroupIcon className="w-8 h-8" />
              },
              {
                step: "06",
                title: 'Launch',
                desc: 'Finalizing the product and releasing it to the world.',
                icon: <RocketLaunchIcon className="w-8 h-8" />
              }
            ].map((item, index) => (
              <StaggerItem key={item.step} className="relative group">
                <div className="flex flex-col items-center text-center px-4 transition-transform duration-500 group-hover:-translate-y-2">
                  <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-8xl font-black text-[#FCEBD7]/5 select-none transition-all duration-700 group-hover:text-[#E2494B]/10 group-hover:-top-16">
                    {item.step}
                  </span>

                  <div className="relative mb-10">
                    <div className="w-24 h-24 rounded-[2rem] bg-[#250804]/80 backdrop-blur-xl border border-[#61422D]/30 flex items-center justify-center text-[#FCEBD7] group-hover:border-[#E2494B] group-hover:text-[#E2494B] group-hover:shadow-[0_0_30px_rgba(226,73,75,0.2)] transition-all duration-500 z-10 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#E2494B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                        {item.icon}
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-xl bg-[#E2494B] text-[#FCEBD7] text-sm font-black flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.5)] transform rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-all duration-500 z-20">
                      {item.step}
                    </div>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-[#FCEBD7] mb-3 tracking-wide uppercase transition-colors group-hover:text-[#E2494B]">
                      {item.title}
                    </h3>
                    <p className="text-[#FCEBD7]/40 text-sm leading-relaxed max-w-[250px] group-hover:text-[#FCEBD7]/70 transition-colors mx-auto">
                      {item.desc}
                    </p>
                  </div>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#E2494B] opacity-0 group-hover:opacity-100 group-hover:w-20 transition-all duration-500 rounded-full" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 5. Our Teams */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-6 py-32">
        <FadeIn className="text-center md:text-left mb-16">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-[#E2494B]/30 bg-[#E2494B]/5 backdrop-blur-sm">
            <span className="text-[#E2494B] text-xs font-bold tracking-[0.3em] uppercase">The Crew</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#FCEBD7] tracking-tight uppercase">THE ASTRONAUTS</h2>
        </FadeIn>
        {/* Placeholder Teams - Nanti diganti real data */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {crew.map((member, i) => (
            <StaggerItem key={i} className="group text-center">
              <div className="w-full aspect-square bg-[#61422D] rounded-2xl mb-4 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 relative">
                {member.photo && (
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <h3 className="text-[#FCEBD7] font-bold text-lg">{member.name}</h3>
              <p className="text-[#96191A] text-sm">{member.role}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* 6. Press & Media Coverage */}
      <PressCoverage />

      {/* 7. CTA Section */}
      <CTA />

    </div>
  );
}