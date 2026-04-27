import Link from "next/link";
import { Twitter, Linkedin, Youtube, Mail, Instagram, Facebook, Music2 } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { name: "Instagram", icon: Instagram, href: "https://instagram.com/ariversestudio", color: "hover:bg-pink-600 hover:text-white" },
        { name: "Facebook", icon: Facebook, href: "https://facebook.com/ariversestudio", color: "hover:bg-blue-600 hover:text-white" },
        { name: "YouTube", icon: Youtube, href: "https://youtube.com/@ariversestudio", color: "hover:bg-red-600 hover:text-white" },
        { name: "X (Twitter)", icon: Twitter, href: "https://x.com/ariversestudio", color: "hover:bg-slate-700 hover:text-white" },
        { name: "TikTok", icon: Music2, href: "https://tiktok.com/@ariverse.studio", color: "hover:bg-black hover:text-white" },
    ];

    return (
        <footer className="bg-foreground border-t border-foreground/10 py-12">
            <div className="max-w-[1440px] mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold tracking-tighter text-background">ARIVERSE</h3>
                        <p className="text-sm text-background/70">
                            Crafting immersive digital experiences across the universe.
                        </p>
                        <a
                            href="mailto:contact@ariversestudio.com"
                            aria-label="Email us at contact@ariversestudio.com"
                            className="inline-flex items-center gap-2 text-sm text-accent hover:text-background/80 transition-colors"
                        >
                            <Mail className="w-4 h-4" />
                            contact@ariversestudio.com
                        </a>
                    </div>

                    {/* Explore Column */}
                    <div>
                        <h4 className="font-bold mb-4 text-background">Explore</h4>
                        <ul className="space-y-2 text-sm text-background/70">
                            <li><Link href="/games" className="hover:text-accent transition-colors">Games</Link></li>
                            <li><Link href="/services" className="hover:text-accent transition-colors">Services</Link></li>
                            <li><Link href="/presskit" className="hover:text-accent transition-colors">Presskit</Link></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className="font-bold mb-4 text-background">Company</h4>
                        <ul className="space-y-2 text-sm text-background/70">
                            <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                            <li><Link href="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
                            <li><Link href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
                            <li><a href="mailto:contact@ariversestudio.com" className="hover:text-accent transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Connect Column */}
                    <div>
                        <h4 className="font-bold mb-4 text-background">Connect</h4>
                        <div className="flex flex-wrap gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className={`p-2.5 bg-background/10 rounded-full text-background/70 ${social.color} transition-all duration-300 hover:scale-110`}
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                        <p className="mt-4 text-xs text-background/40">
                            Follow us for updates on our latest projects!
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-background/50">
                        © {currentYear} Ariverse Studio. All rights reserved.
                    </p>
                    <p className="text-xs text-background/30">
                        Made with ❤️ in Malang, Indonesia
                    </p>
                </div>
            </div>
        </footer>
    );
}
