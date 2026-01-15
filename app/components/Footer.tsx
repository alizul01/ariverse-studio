import Link from "next/link";
import { Twitter, Linkedin, Youtube, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#1a0502] border-t border-[#61422D] py-12">
            <div className="max-w-[1440px] mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold tracking-tighter text-[#FCEBD7]">ARIVERSE</h3>
                        <p className="text-sm text-[#FCEBD7]/70">
                            Crafting immersive digital experiences across the universe.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-[#FCEBD7]">Explore</h4>
                        <ul className="space-y-2 text-sm text-[#FCEBD7]/70">
                            <li><Link href="/games" className="hover:text-[#96191A]">Games</Link></li>
                            <li><Link href="/services" className="hover:text-[#96191A]">Services</Link></li>
                            <li><Link href="/careers" className="hover:text-[#96191A]">Careers</Link></li>
                            <li><Link href="/presskit" className="hover:text-[#96191A]">Presskit</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-[#FCEBD7]">Company</h4>
                        <ul className="space-y-2 text-sm text-[#FCEBD7]/70">
                            <li><Link href="/about" className="hover:text-[#96191A]">About Us</Link></li>
                            <li><Link href="/blog" className="hover:text-[#96191A]">Blog</Link></li>
                            <li><Link href="/privacy-policy" className="hover:text-[#96191A]">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-[#FCEBD7]">Connect</h4>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-[#61422D]/30 rounded-full hover:bg-[#96191A] transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="p-2 bg-[#61422D]/30 rounded-full hover:bg-[#96191A] transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="p-2 bg-[#61422D]/30 rounded-full hover:bg-[#96191A] transition-colors"><Youtube size={20} /></a>
                            <a href="#" className="p-2 bg-[#61422D]/30 rounded-full hover:bg-[#96191A] transition-colors"><Mail size={20} /></a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-[#61422D]/30 pt-8 text-center text-sm text-[#FCEBD7]/50">
                    © {new Date().getFullYear()} Ariverse Studio. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
