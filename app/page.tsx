"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import FadeIn from "./components/animations/FadeIn";
import StaggerContainer, { StaggerItem } from "./components/animations/StaggerContainer";
import { services } from "./data/services";
import CTA from "./components/ui/CTA";
import { motion } from "framer-motion";
import {
  MagnifyingGlassIcon,
  PencilSquareIcon,
  CpuChipIcon,
  RocketLaunchIcon,
  Square3Stack3DIcon,
  TrophyIcon,
  CubeTransparentIcon,
  AcademicCapIcon,
  CommandLineIcon,
  GlobeAltIcon,
  BeakerIcon
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 pb-20">

      {/* 1. Hero Carousel */}
      <FadeIn className="relative w-full max-w-[1382px] mx-auto mt-4 px-4 h-[500px] md:h-[722px] rounded-2xl overflow-hidden group">
        {/* Placeholder for Carousel Logic */}
        <div className="absolute inset-0 bg-[#61422D]/20">
          {/* Background Image Placeholder */}
          <div className="w-full h-full bg-gradient-to-br from-[#250804] to-[#61422D] flex items-center justify-center">
            <h2 className="text-4xl md:text-6xl font-bold text-[#FCEBD7] animate-pulse">FEATURED GAME</h2>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-8 flex flex-col md:flex-row items-end justify-between">
          <FadeIn delay={0.2} direction="up">
            <h3 className="text-3xl md:text-5xl font-bold text-[#FCEBD7] mb-2">GALACTIC ODYSSEY</h3>
            <div className="flex gap-4 mb-4 md:mb-0">
              <span className="text-[#FCEBD7]/80 text-sm border border-[#FCEBD7]/30 px-2 py-1 rounded">PC</span>
              <span className="text-[#FCEBD7]/80 text-sm border border-[#FCEBD7]/30 px-2 py-1 rounded">PS5</span>
              <span className="text-[#FCEBD7]/80 text-sm border border-[#FCEBD7]/30 px-2 py-1 rounded">XBOX</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.4} direction="left">
            <button className="flex items-center gap-2 bg-[#96191A] text-[#FCEBD7] px-6 py-3 rounded-full font-bold hover:bg-[#96191A]/80 transition-all">
              <Play fill="currentColor" size={16} /> WATCH TRAILER
            </button>
          </FadeIn>
        </div>
      </FadeIn>

      {/* 2. About Highlight (Cinematic Version) */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-6 py-32 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text Content */}
          <div className="relative z-10 text-left lg:pr-12">
            <FadeIn>
              <div className="inline-block mb-8 px-4 py-1 rounded-full border border-[#E2494B]/30 bg-[#E2494B]/5 backdrop-blur-sm">
                <span className="text-[#E2494B] text-xs font-bold tracking-[0.3em] uppercase">The Studio</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-bold text-[#FCEBD7] tracking-tighter leading-[0.9] mb-8 uppercase">
                Crafted with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E2494B] to-[#FCEBD7]/50">Heart of Explorer.</span>
              </h2>

              <p className="text-xl text-[#FCEBD7]/60 leading-relaxed mb-12 max-w-xl">
                We blur the lines between imagination and reality, building digital universes that inspire and connect human emotions through the frontier of interactive technology.
              </p>

              {/* Milestones / Stats */}
              <div className="grid grid-cols-3 gap-8 mb-12 py-8 border-y border-[#61422D]/20">
                {[
                  { label: "Years Exp", value: "5+" },
                  { label: "Projects", value: "24" },
                  { label: "Passion", value: "100%" }
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-black text-[#FCEBD7] mb-1">{stat.value}</div>
                    <div className="text-[10px] text-[#E2494B] font-bold tracking-widest uppercase">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link href="/about" className="group relative inline-flex items-center gap-4 text-[#FCEBD7] font-bold tracking-widest text-sm py-4 px-8 border border-[#FCEBD7]/20 rounded-full hover:border-[#E2494B]/50 transition-all duration-500 overflow-hidden">
                <span className="relative z-10 transition-colors group-hover:text-[#FCEBD7]">READ OUR STORY</span>
                <span className="relative z-10 transform group-hover:translate-x-2 transition-transform duration-500">→</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#E2494B] to-transparent opacity-0 group-hover:opacity-20 transition-opacity" />
              </Link>
            </FadeIn>
          </div>

          {/* Right: Visual Logic Core */}
          <div className="relative flex justify-center items-center h-[500px] lg:h-[600px]">
            {/* Main Orb / Core */}
            <motion.div
              className="relative w-64 h-64 rounded-full bg-gradient-to-br from-[#E2494B] to-[#250804] shadow-[0_0_80px_rgba(226,73,75,0.3)] flex items-center justify-center overflow-hidden"
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: ["0 0 80px rgba(226,73,75,0.3)", "0 0 120px rgba(226,73,75,0.5)", "0 0 80px rgba(226,73,75,0.3)"]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
              <GlobeAltIcon className="w-32 h-32 text-[#FCEBD7]/20 animate-pulse" />
            </motion.div>

            {/* Orbiting Elements */}
            {[
              { icon: <CommandLineIcon />, delay: 0, radius: 180, duration: 20 },
              { icon: <RocketLaunchIcon />, delay: -5, radius: 220, duration: 25 },
              { icon: <BeakerIcon />, delay: -10, radius: 150, duration: 18 }
            ].map((orbit, i) => (
              <motion.div
                key={i}
                className="absolute text-[#E2494B]/40"
                style={{ width: 40, height: 40 }}
                animate={{
                  rotate: 360,
                }}
                transition={{ duration: orbit.duration, repeat: Infinity, ease: "linear", delay: orbit.delay }}
              >
                <div
                  className="w-12 h-12 bg-[#250804] border border-[#E2494B]/20 rounded-xl flex items-center justify-center backdrop-blur-md shadow-2xl"
                  style={{ transform: `translateY(-${orbit.radius}px)` }}
                >
                  <div className="w-6 h-6">{orbit.icon}</div>
                </div>
              </motion.div>
            ))}

            {/* Background Decorative Rings */}
            <div className="absolute w-[400px] h-[400px] border border-[#61422D]/10 rounded-full -z-10" />
            <div className="absolute w-[500px] h-[500px] border border-[#61422D]/5 rounded-full -z-10" />
          </div>
        </div>
      </section>

      {/* 3. Our Services (Overview) */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-6 py-32">
        <FadeIn className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 text-center md:text-left">
          <div>
            <div className="inline-block mb-4 px-4 py-1 rounded-full border border-[#E2494B]/30 bg-[#E2494B]/5 backdrop-blur-sm">
              <span className="text-[#E2494B] text-xs font-bold tracking-[0.3em] uppercase">Expertise</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#FCEBD7] tracking-tight uppercase">Our Services</h2>
          </div>
          <Link href="/services" className="mt-8 md:mt-0 text-[#E2494B] hover:text-[#FCEBD7] transition-colors font-medium hover-underline-animation">VIEW ALL SERVICES</Link>
        </FadeIn>
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
                  {/* Glowing Background Accent */}
                  <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#E2494B]/5 rounded-full blur-3xl group-hover:bg-[#E2494B]/10 transition-colors duration-500" />

                  {/* Icon Container */}
                  <div className="relative mb-10">
                    <div className="w-16 h-16 rounded-2xl bg-[#250804] border border-[#61422D]/30 flex items-center justify-center text-[#FCEBD7] group-hover:border-[#E2494B] group-hover:text-[#E2494B] group-hover:bg-[#E2494B]/5 transition-all duration-500">
                      {service.icon}
                    </div>
                    {/* Floating Decorative Dot */}
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#E2494B] border-4 border-[#250804] scale-0 group-hover:scale-100 transition-transform duration-500 delay-100" />
                  </div>

                  {/* Text Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-[#FCEBD7] mb-4 group-hover:text-[#E2494B] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-[#FCEBD7]/50 text-sm leading-relaxed mb-10 group-hover:text-[#FCEBD7]/80 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  {/* "Learn More" Animated Footer */}
                  <div className="mt-auto flex items-center gap-2 text-[#E2494B] text-xs font-bold tracking-widest uppercase opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    EXPLORE SERVICE
                    <span className="text-xl">→</span>
                  </div>

                  {/* Subtle Border Glow (Bottom) */}
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#E2494B]/0 to-transparent group-hover:via-[#E2494B]/50 transition-all duration-700" />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* 4. Working Process */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-6 py-32 relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E2494B]/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <FadeIn className="text-center mb-32">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-[#E2494B]/30 bg-[#E2494B]/5 backdrop-blur-sm">
            <span className="text-[#E2494B] text-xs font-bold tracking-[0.3em] uppercase">The Roadmap</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#FCEBD7] tracking-tighter uppercase">Our Process</h2>
        </FadeIn>

        <div className="relative max-w-6xl mx-auto">
          {/* Central Animated Line (Desktop) */}
          <div className="hidden md:block absolute top-[45px] left-0 w-full h-[1px] bg-[#61422D]/30 -z-10">
            <motion.div
              className="h-full bg-[#E2494B] relative"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <motion.div
                className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#E2494B] shadow-[0_0_15px_#E2494B]"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4">
            {[
              {
                step: "01",
                title: 'Discovery',
                desc: 'Unearthing the core essence and goals of your project.',
                icon: <MagnifyingGlassIcon className="w-8 h-8" />
              },
              {
                step: "02",
                title: 'Design',
                desc: 'Architecting immersive visuals and user experiences.',
                icon: <PencilSquareIcon className="w-8 h-8" />
              },
              {
                step: "03",
                title: 'Development',
                desc: 'Forging robust code and interactive mechanics.',
                icon: <CpuChipIcon className="w-8 h-8" />
              },
              {
                step: "04",
                title: 'Launch',
                desc: 'Deploying your universe to the digital frontier.',
                icon: <RocketLaunchIcon className="w-8 h-8" />
              }
            ].map((item, index) => (
              <StaggerItem key={item.step} className="relative group">
                <div className="flex flex-col items-center text-center px-4 transition-transform duration-500 group-hover:-translate-y-2">
                  {/* Huge Ghost Number Background */}
                  <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-8xl font-black text-[#FCEBD7]/5 select-none transition-all duration-700 group-hover:text-[#E2494B]/10 group-hover:-top-16">
                    {item.step}
                  </span>

                  {/* Icon Node */}
                  <div className="relative mb-10">
                    <div className="w-24 h-24 rounded-[2rem] bg-[#250804]/80 backdrop-blur-xl border border-[#61422D]/30 flex items-center justify-center text-[#FCEBD7] group-hover:border-[#E2494B] group-hover:text-[#E2494B] group-hover:shadow-[0_0_30px_rgba(226,73,75,0.2)] transition-all duration-500 z-10 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#E2494B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                        {item.icon}
                      </div>
                    </div>
                    {/* Step Number Badge - Fixed Z-Index */}
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-xl bg-[#E2494B] text-[#FCEBD7] text-sm font-black flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.5)] transform rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-all duration-500 z-20">
                      {item.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-[#FCEBD7] mb-3 tracking-wide uppercase transition-colors group-hover:text-[#E2494B]">
                      {item.title}
                    </h3>
                    <p className="text-[#FCEBD7]/40 text-sm leading-relaxed max-w-[200px] group-hover:text-[#FCEBD7]/70 transition-colors mx-auto">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom Glow */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#E2494B] opacity-0 group-hover:opacity-100 group-hover:w-20 transition-all duration-500 rounded-full" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 5. Our Teams ("The Astronauts") */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-6 py-32">
        <FadeIn className="text-center md:text-left mb-16">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-[#E2494B]/30 bg-[#E2494B]/5 backdrop-blur-sm">
            <span className="text-[#E2494B] text-xs font-bold tracking-[0.3em] uppercase">The Crew</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#FCEBD7] tracking-tight uppercase">THE ASTRONAUTS</h2>
        </FadeIn>
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <StaggerItem key={i} className="group text-center">
              <div className="w-full aspect-square bg-[#61422D] rounded-2xl mb-4 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                {/* Avatar Placeholder */}
              </div>
              <h3 className="text-[#FCEBD7] font-bold text-lg">Crew Member {i}</h3>
              <p className="text-[#96191A] text-sm">Valid Role</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* 6. Our Awards */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-6">
        <FadeIn className="border-t border-b border-[#61422D]/30 py-12 flex flex-wrap justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="text-2xl font-bold text-[#FCEBD7]">AWARD LOGO</div>
          <div className="text-2xl font-bold text-[#FCEBD7]">RECOGNITION</div>
          <div className="text-2xl font-bold text-[#FCEBD7]">BEST INDIE</div>
          <div className="text-2xl font-bold text-[#FCEBD7]">TOP STUDIO</div>
        </FadeIn>
      </section>

      {/* 7. CTA Section */}
      <CTA />

    </div>
  );
}
