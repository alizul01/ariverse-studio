import Link from "next/link";
import { Twitter, Linkedin, Youtube, Mail, Instagram, Facebook, Music2 } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { name: "Instagram", icon: Instagram, href: "https://instagram.com/ariversestudio", color: "hover:bg-pink-600" },
        { name: "Facebook", icon: Facebook, href: "https://facebook.com/Ariverse Studio", color: "hover:bg-blue-600" },
        { name: "YouTube", icon: Youtube, href: "https://youtube.com/@Ariverse Studio", color: "hover:bg-red-600" },
        { name: "X (Twitter)", icon: Twitter, href: "https://x.com/ariversestudio", color: "hover:bg-slate-700" },
        { name: "TikTok", icon: Music2, href: "https://tiktok.com/@ariverse.studio", color: "hover:bg-black hover:ring-2 hover:ring-white/20" },
    ];

    return (
        <footer className="bg-[#1a0502] border-t border-[#61422D] py-12">
            <div className="max-w-[1440px] mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold tracking-tighter text-[#FCEBD7]">ARIVERSE</h3>
                        <p className="text-sm text-[#FCEBD7]/70">
                            Crafting immersive digital experiences across the universe.
                        </p>
                        {/* Contact Email */}
                        <a
                            href="mailto:hello@ariversestudio.com"
                            aria-label="Email us at hello@ariversestudio.com"
                            className="inline-flex items-center gap-2 text-sm text-[#E2494B] hover:text-[#FCEBD7] transition-colors"
                        >
                            <Mail className="w-4 h-4" />
                            hello@ariversestudio.com
                        </a>
                    </div>

                    {/* Explore Column */}
                    <div>
                        <h4 className="font-bold mb-4 text-[#FCEBD7]">Explore</h4>
                        <ul className="space-y-2 text-sm text-[#FCEBD7]/70">
                            <li><Link href="/games" className="hover:text-[#E2494B] transition-colors">Games</Link></li>
                            <li><Link href="/services" className="hover:text-[#E2494B] transition-colors">Services</Link></li>
                            <li><Link href="/careers" className="hover:text-[#E2494B] transition-colors">Careers</Link></li>
                            <li><Link href="/presskit" className="hover:text-[#E2494B] transition-colors">Presskit</Link></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className="font-bold mb-4 text-[#FCEBD7]">Company</h4>
                        <ul className="space-y-2 text-sm text-[#FCEBD7]/70">
                            <li><Link href="/about" className="hover:text-[#E2494B] transition-colors">About Us</Link></li>
                            <li><Link href="/blog" className="hover:text-[#E2494B] transition-colors">Blog</Link></li>
                            <li><Link href="/privacy-policy" className="hover:text-[#E2494B] transition-colors">Privacy Policy</Link></li>
                            <li><a href="mailto:hello@ariversestudio.com" className="hover:text-[#E2494B] transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Connect Column */}
                    <div>
                        <h4 className="font-bold mb-4 text-[#FCEBD7]">Connect</h4>
                        <div className="flex flex-wrap gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className={`p-2.5 bg-[#61422D]/30 rounded-full text-[#FCEBD7] ${social.color} transition-all duration-300 hover:scale-110`}
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                        <p className="mt-4 text-xs text-[#FCEBD7]/40">
                            Follow us for updates on our latest projects!
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-[#61422D]/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-[#FCEBD7]/50">
                        © {currentYear} Ariverse Studio. All rights reserved.
                    </p>
                    <p className="text-xs text-[#FCEBD7]/30">
                        Made with ❤️ in Malang, Indonesia
                    </p>
                </div>
            </div>
        </footer>
    );
}
