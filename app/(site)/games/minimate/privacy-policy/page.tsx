import { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../../../../components/ui/PageHeader";
import FadeIn from "../../../../components/animations/FadeIn";
import StaggerContainer, { StaggerItem } from "../../../../components/animations/StaggerContainer";
import { ShieldCheckIcon, EyeSlashIcon, WifiIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
    title: "MiniMate — Privacy Policy | Ariverse Studio",
    description: "MiniMate collects no personal data, requires no account, and works fully offline. Your privacy is completely intact.",
};

const highlights = [
    {
        icon: <ShieldCheckIcon className="w-8 h-8" />,
        title: "No Data Collected",
        content: "Minimate does not collect, store, or transmit any personal information. We have no servers receiving your data because there is nothing to send."
    },
    {
        icon: <EyeSlashIcon className="w-8 h-8" />,
        title: "No Account Required",
        content: "You do not need to register, log in, or provide an email address to play Minimate. Open the app and play — that's it."
    },
    {
        icon: <WifiIcon className="w-8 h-8" />,
        title: "Fully Offline",
        content: "Minimate works entirely without an internet connection. No analytics pings, no ad requests, no background network calls — ever."
    }
];

export default function MinimatePolicePage() {
    return (
        <div className="pb-40">
            <PageHeader
                title="Minimate — Privacy Policy"
                description="Short version: we collect nothing. Long version: keep reading."
                breadcrumbs={[
                    { label: "Games", href: "/games" },
                    { label: "Minimate", href: "/games/minimate" },
                    { label: "Privacy Policy", href: "/games/minimate/privacy-policy" }
                ]}
            />

            <div className="max-w-360 mx-auto px-4 md:px-6">

                {/* Intro */}
                <section className="mt-32 max-w-4xl">
                    <FadeIn>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-[#E2494B]/10 border border-[#E2494B]/20 flex items-center justify-center text-[#E2494B]">
                                <ShieldCheckIcon className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl font-bold text-[#FCEBD7] tracking-tight uppercase">Privacy First, Always</h2>
                        </div>
                        <p className="text-xl text-[#FCEBD7]/60 leading-relaxed">
                            Minimate was built around one simple principle: your phone is yours. We designed the game from the ground up to need nothing from you — no name, no email, no device ID, no location. Last updated: May 2026.
                        </p>
                    </FadeIn>
                </section>

                {/* Highlights */}
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 py-20">
                    {highlights.map((item, i) => (
                        <StaggerItem key={i} className="bg-[#250804] border border-[#61422D]/20 rounded-3xl p-10 hover:border-[#E2494B]/50 transition-all duration-500">
                            <div className="text-[#E2494B] mb-6">{item.icon}</div>
                            <h3 className="text-xl font-bold text-[#FCEBD7] mb-4 uppercase tracking-tight">{item.title}</h3>
                            <p className="text-[#FCEBD7]/50 text-sm leading-relaxed">{item.content}</p>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/* Full policy text */}
                <section className="max-w-4xl py-10">
                    <FadeIn className="space-y-12">
                        <div className="space-y-4">
                            <h3 className="text-[#FCEBD7] font-bold text-2xl uppercase tracking-tight">1. Information We Collect</h3>
                            <p className="text-[#FCEBD7]/60 leading-relaxed">
                                None. Minimate does not collect any personally identifiable information (PII), usage statistics, crash reports, or analytics data of any kind. All game progress is stored locally on your device using the operating system's standard local storage.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-[#FCEBD7] font-bold text-2xl uppercase tracking-tight">2. Third-Party Services</h3>
                            <p className="text-[#FCEBD7]/60 leading-relaxed">
                                Minimate does not integrate any third-party SDKs for advertising, analytics, social login, or crash reporting. There are no trackers embedded in the application.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-[#FCEBD7] font-bold text-2xl uppercase tracking-tight">3. Permissions</h3>
                            <p className="text-[#FCEBD7]/60 leading-relaxed">
                                Minimate only requests the minimum device permissions required to run as a mobile application. We do not request access to your camera, microphone, contacts, location, or any other sensitive system resource.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-[#FCEBD7] font-bold text-2xl uppercase tracking-tight">4. Children's Privacy</h3>
                            <p className="text-[#FCEBD7]/60 leading-relaxed">
                                Because Minimate collects no data whatsoever, it is safe for users of all ages, including children. We comply fully with COPPA (Children's Online Privacy Protection Act) and applicable international regulations.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-[#FCEBD7] font-bold text-2xl uppercase tracking-tight">5. Changes to This Policy</h3>
                            <p className="text-[#FCEBD7]/60 leading-relaxed">
                                If we ever update this policy, we will post the revised version here with an updated date. We will never introduce data collection without clearly disclosing it and obtaining your consent first.
                            </p>
                        </div>

                        <div className="space-y-4 border-t border-[#61422D]/20 pt-12">
                            <h3 className="text-[#E2494B] font-bold text-xl uppercase tracking-widest">Questions?</h3>
                            <p className="text-[#FCEBD7]/60">
                                If you have any questions about this privacy policy, feel free to reach out to us at:
                            </p>
                            <p className="text-[#FCEBD7] font-black tracking-widest text-lg">contact@ariversestudio.com</p>
                            <p className="text-[#FCEBD7]/40 text-sm mt-4">
                                Or visit the{" "}
                                <Link href="/games/minimate" className="text-[#E2494B] hover:underline">Minimate game page</Link>
                                {" "}to learn more about the game.
                            </p>
                        </div>
                    </FadeIn>
                </section>

            </div>
        </div>
    );
}
