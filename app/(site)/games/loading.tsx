import { GameCardSkeleton } from "../../components/ui/Skeleton";
import PageHeader from "../../components/ui/PageHeader";

export default function GamesLoading() {
    return (
        <div className="pb-40">
            <PageHeader
                title="Our Games"
                description="Dive into unique worlds crafted with passion and precision."
                breadcrumbs={[{ label: "Games", href: "/games" }]}
                backgroundImage="/images/placeholders/games-header.jpg"
            />
            <div className="max-w-[1440px] mx-auto px-4 md:px-6 mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <GameCardSkeleton key={i} />
                    ))}
                </div>
            </div>
        </div>
    );
}
