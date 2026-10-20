"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import FadeIn from "../animations/FadeIn";

interface CompanyProfileVideoProps {
  /** YouTube URL (watch / youtu.be / embed / shorts). Leave empty to show the "coming soon" frame. */
  src?: string;
  /** Optional poster image shown before playback; defaults to the YouTube thumbnail. */
  poster?: string;
}

function getYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/);
  return match ? match[1] : null;
}

export default function CompanyProfileVideo({ src, poster }: CompanyProfileVideoProps) {
  const [playing, setPlaying] = useState(false);
  const youTubeId = src ? getYouTubeId(src) : null;
  const thumbnail = poster ?? (youTubeId ? `https://i.ytimg.com/vi/${youTubeId}/hqdefault.jpg` : undefined);

  return (
    <section className="relative w-full py-16 md:py-20">
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-6">

        {/* Heading */}
        <FadeIn className="flex flex-col items-center text-center mb-10 md:mb-12">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-accent" />
            <span className="text-accent text-xs font-bold tracking-[0.35em] uppercase">Company Profile</span>
            <span className="w-8 h-px bg-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight uppercase">
            Get to Know <span className="text-accent">Ariverse</span>
          </h2>
          <p className="text-foreground/45 mt-3 max-w-md text-sm leading-relaxed">
            A quick look at who we are, how we work, and the worlds we build.
          </p>
        </FadeIn>

        {/* Video frame */}
        <FadeIn delay={0.1}>
          <div className="relative max-w-5xl mx-auto">
            {/* Glow */}
            <div className="absolute inset-x-10 -bottom-6 h-24 rounded-full bg-accent/15 blur-[80px] pointer-events-none" />

            <div className="relative aspect-video rounded-2xl md:rounded-3xl overflow-hidden border border-foreground/10 bg-foreground/[0.03] shadow-[0_20px_60px_rgba(37,8,4,0.12)]">
              {!youTubeId ? (
                <ComingSoonFrame />
              ) : playing ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${youTubeId}?autoplay=1&rel=0`}
                  title="Ariverse Studio Company Profile"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  aria-label="Play company profile video"
                  className="group absolute inset-0 w-full h-full cursor-pointer"
                >
                  {thumbnail && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={thumbnail} alt="" className="absolute inset-0 w-full h-full object-cover" />
                  )}
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors duration-300" />
                  <PlayBadge />
                </button>
              )}
            </div>

            {/* Corner accents */}
            <div className="absolute -top-3 -left-3 w-10 h-10 md:w-14 md:h-14 border-l-2 border-t-2 border-accent/30 rounded-tl-2xl pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-10 h-10 md:w-14 md:h-14 border-r-2 border-b-2 border-accent/30 rounded-br-2xl pointer-events-none" />
          </div>
        </FadeIn>

      </div>
    </section>
  );
}

function PlayBadge({ muted = false }: { muted?: boolean }) {
  return (
    <span className="absolute inset-0 flex items-center justify-center">
      <span
        className={`flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full transition-transform duration-300 ${
          muted
            ? "bg-foreground/5 border border-foreground/15 text-foreground/40"
            : "bg-accent text-white shadow-[0_8px_28px_rgba(150,25,26,0.45)] group-hover:scale-110"
        }`}
      >
        <Play className="w-6 h-6 md:w-8 md:h-8 ml-1" fill="currentColor" />
      </span>
    </span>
  );
}

function ComingSoonFrame() {
  return (
    <div className="absolute inset-0">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(150,25,26,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(150,25,26,0.08) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(150,25,26,0.12) 0%, transparent 70%)" }}
      />
      <PlayBadge muted />
      <span className="absolute bottom-5 md:bottom-8 inset-x-0 text-center text-foreground/35 text-[10px] md:text-xs font-bold tracking-[0.35em] uppercase">
        Video Coming Soon
      </span>
    </div>
  );
}
