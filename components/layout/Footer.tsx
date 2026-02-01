"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const footerLinks = [
    {
        title: "SHOP",
        items: [
            { label: "All Products", href: "/products" },
            { label: "Teddy Bears", href: "/products?category=Teddy%20Bear" },
            { label: "New Arrivals", href: "#" },
            { label: "Best Sellers", href: "#" },
            { label: "Gift Sets", href: "#" },
        ],
    },
    {
        title: "HELP",
        items: [
            { label: "Contact Us", href: "#" },
            { label: "FAQs", href: "#" },
            { label: "Shipping Information", href: "#" },
            { label: "Returns & Exchanges", href: "#" },
            { label: "Track Order", href: "#" },
        ],
    },
    {
        title: "COMPANY",
        items: [
            { label: "About Us", href: "#" },
            { label: "Our Story", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
        ],
    },
];

export default function Footer() {
    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggleSection = (title: string) => {
        setOpenSection(openSection === title ? null : title);
    };

    return (
        <footer className="py-6 md:py-10 bg-transparent">
            <div className="container mx-auto px-4">
                {/* Main Rounded Container */}
                <div className="bg-black/80 backdrop-blur-xl border border-white/10 text-white rounded-[2rem] md:rounded-[3rem] px-6 py-8 md:px-16 md:py-16 overflow-hidden relative shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-12">

                        {/* Dynamic Columns for SHOP, HELP, COMPANY */}
                        {footerLinks.map((section) => (
                            <div key={section.title} className="md:col-span-2 border-b md:border-none border-white/10 md:space-y-4 pb-4 md:pb-0">
                                <button
                                    onClick={() => toggleSection(section.title)}
                                    className="flex items-center justify-between w-full md:w-auto md:cursor-default"
                                >
                                    <h3 className="font-bold text-lg heading-border">
                                        {section.title}<span className="md:hidden inline">+</span><span className="hidden md:inline">+</span>
                                    </h3>
                                    {/* Mobile Toggle Icon - Optional if user wants explicit icon, but they asked for + in text */}
                                    <div className="md:hidden text-white/70">
                                        {openSection === section.title ? (
                                            <Minus className="w-4 h-4" />
                                        ) : (
                                            null // User said "+" is in the heading, so maybe we don't need an extra icon, but standard accordion usually has one. 
                                            // The user specifically said "heading ma + ka jo nashan use hova ha".
                                            // I will stick to their request: + in heading, maybe flip it?
                                            // Let's actually follow the Ronin HTML: "SHOP-" when open, "SHOP+" when closed?
                                            // User said "heading ma + ka jo nashan... wo as a dropdown".
                                            // Let's keep it simple: Text says "SHOP+" on mobile, switches to "SHOP-" functionality implicitly or explicit icon.
                                            // I'll leave the title as is "SHOP+" and use the right-side icon for clarity, or just toggle the text char.
                                            // Let's implement the Right Side Icon toggle for better UX, or just toggle the char.
                                            // Ronin HTML has: <h5><span class="header-text">SHOP</span><span class="sign">-</span></h5>
                                            // So I will replicate that structure.
                                        )}
                                    </div>
                                    <span className="md:hidden font-bold text-xl">
                                        {openSection === section.title ? "-" : "+"}
                                    </span>
                                </button>

                                <AnimatePresence>
                                    {openSection === section.title && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden md:hidden"
                                        >
                                            <ul className="space-y-2 text-sm text-gray-300 pt-2 pb-4">
                                                {section.items.map((link) => (
                                                    <li key={link.label}>
                                                        <Link href={link.href} className="hover:text-primary transition-colors block py-0.5">
                                                            {link.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Desktop View (Static) */}
                                <ul className="hidden md:block space-y-2 text-sm text-gray-300">
                                    {section.items.map((link) => (
                                        <li key={link.label}>
                                            <Link href={link.href} className="hover:text-primary transition-colors">
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {/* Column 4: Branding & Newsletter */}
                        <div className="md:col-span-6 lg:col-span-6 flex flex-col items-start md:items-end text-left md:text-right space-y-6 md:pl-10 pt-8 md:pt-0">
                            {/* Brand Logo */}
                            <Link href="/" className="inline-block">
                                <div className="relative h-12 w-32 md:h-14 md:w-40">
                                    <Image
                                        src="/logo-v3.webp"
                                        alt="Love & Joy"
                                        fill
                                        className="object-contain object-left md:object-right"
                                        priority
                                    />
                                </div>
                            </Link>

                            {/* Social Icons */}
                            <div className="flex gap-4">
                                <a href="https://www.facebook.com/profile.php?id=61587101492750" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors group">
                                    <Facebook className="w-5 h-5 group-hover:text-blue-500 transition-colors" />
                                </a>
                                <a href="https://www.instagram.com/loveandjoy.pk/?hl=en" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors group">
                                    <Instagram className="w-5 h-5 group-hover:text-pink-500 transition-colors" />
                                </a>
                                <a href="https://www.youtube.com/@LoveandJoy_pk" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors group">
                                    <Youtube className="w-5 h-5 group-hover:text-red-500 transition-colors" />
                                </a>
                                <a href="https://www.tiktok.com/@loveandjoy.store?_r=1&_t=ZS-93Y4nlaQqDx" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors group">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 group-hover:text-black transition-colors">
                                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                    </svg>
                                </a>
                            </div>

                            {/* Contact & Newsletter */}
                            <div className="w-full space-y-4">
                                <div className="space-y-1">
                                    <p className="text-gray-300 text-sm">We're here to help.</p>
                                    <p className="font-bold heading-border text-lg">WhatsApp: +92 326 4379003</p>
                                    <p className="font-bold heading-border text-lg">Email: sikandar8sa@gmail.com</p>
                                </div>

                                <div className="pt-4">
                                    <h4 className="font-bold text-lg mb-2">Get exclusive offer and updates</h4>
                                    <div className="flex gap-2 w-full max-w-sm ml-auto md:ml-auto mr-auto md:mr-0">
                                        <Input
                                            type="email"
                                            placeholder="Email Address"
                                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-primary/50 rounded-lg h-12 backdrop-blur-sm"
                                        />
                                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6 rounded-lg font-bold">
                                            Submit
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60 px-4">
                    <p className="text-center md:text-left">&copy; {new Date().getFullYear()} Love & Joy. All Rights Reserved.</p>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        {/* JazzCash Badge */}
                        <div className="flex items-center gap-2 bg-black/40 border border-red-500/30 px-3 py-1.5 rounded-md">
                            <div className="w-4 h-4 rounded-full bg-red-600 flex items-center justify-center text-[10px] font-bold text-white">J</div>
                            <span className="font-bold text-white text-xs">JazzCash</span>
                        </div>

                        {/* EasyPaisa Badge */}
                        <div className="flex items-center gap-2 bg-black/40 border border-green-500/30 px-3 py-1.5 rounded-md">
                            <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-[10px] font-bold text-white">E</div>
                            <span className="font-bold text-white text-xs">EasyPaisa</span>
                        </div>

                        {/* COD Button */}
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-1.5 rounded-full shadow-sm hover:bg-white/20 transition-colors cursor-default">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#8cfc03"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-truck"
                            >
                                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                                <path d="M15 18H9" />
                                <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
                                <circle cx="17" cy="18" r="2" />
                                <circle cx="7" cy="18" r="2" />
                            </svg>
                            <span className="font-bold text-[#8cfc03] text-xs animate-pulse-slow cod-text">
                                COD available
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
