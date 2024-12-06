export type Highlight = {
	title: string;
	subtitle: string;
};

type HeroData = {
	headline: {
		top: string;
		bottom: string;
	};
	shortText: string;
	buttonText: string;
	highlights: Highlight[];
};

export const HERO_DATA: HeroData = {
	headline: {
		top: "Ariverse Studio",
		bottom: "Turn Ordinary into Extraordinary",
	},
	shortText:
		"We turn ordinary into extraordinary, through immersive storytelling, engaging gameplay, and unique experiences. Our mission is to create games that not only entertain but also leave a lasting impact on players.",
	buttonText: "Get Started",
	highlights: [
		{ title: "10+", subtitle: "years of activities" },
		{ title: "100+", subtitle: "active members" },
		{ title: "4", subtitle: "miniclass" },
	],
};