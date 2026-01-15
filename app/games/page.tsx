import { games } from "../data/games";
import FadeIn from "../components/animations/FadeIn";
import StaggerContainer, { StaggerItem } from "../components/animations/StaggerContainer";
import Link from "next/link";

export default function GamesPage() {
    return (
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-20 pb-40">
            {/* Header */}
            <FadeIn>
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h1 className="text-sm font-bold tracking-widest text-[#E2494B] mb-4 uppercase">Exploration Center</h1>
                    <h2 className="text-4xl md:text-6xl font-bold text-[#FCEBD7] mb-6">Our Games</h2>
                    <p className="text-xl text-[#FCEBD7]/70">
                        Dive into unique worlds crafted with passion and precision.
                    </p>
                </div>
            </FadeIn>

            {/* Games Grid */}
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {games.map((game, index) => (
                    <StaggerItem key={index} className="group cursor-pointer">
                        <Link href={`/games/${game.slug}`}>
                            <div className="relative aspect-video overflow-hidden rounded-3xl border border-[#61422D]/30 bg-[#250804] mb-6">
                                {/* Placeholder for Game Image */}
                                <div
                                    className="w-full h-full opacity-60 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url('${game.image}')`,
                                        backgroundColor: '#250804'
                                    }}
                                ></div>

                                {/* Overlay Badges */}
                                <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                                    {game.platforms.map(p => (
                                        <span key={p} className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] md:text-xs font-bold text-[#FCEBD7] border border-[#FCEBD7]/10 uppercase tracking-wider">
                                            {p}
                                        </span>
                                    ))}
                                </div>

                                <div className="absolute top-6 right-6">
                                    <span className="px-3 py-1 bg-[#E2494B] rounded-full text-[10px] md:text-xs font-bold text-[#FCEBD7] uppercase tracking-wider shadow-lg">
                                        {game.engine}
                                    </span>
                                </div>
                            </div>

                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-[#FCEBD7] mb-2 group-hover:text-[#E2494B] transition-colors uppercase tracking-tight">
                                        {game.title}
                                    </h3>
                                    <p className="text-[#FCEBD7]/60 line-clamp-2 max-w-md">
                                        {game.description}
                                    </p>
                                </div>
                                <div className="text-[#E2494B] text-2xl transform group-hover:translate-x-2 transition-transform pt-1">
                                    →
                                </div>
                            </div>
                        </Link>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </div>
    );
}
