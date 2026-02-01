"use client";

import { useState } from "react";
import { Instagram, Facebook, Play } from "lucide-react"; // Using Play for TikTok as Lucide might not have TikTok icon, or standard SVG.
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Mock Data
const instagramPosts = [
    { id: 1, image: "/images/products/large-1.jpeg", type: "reel", link: "https://www.instagram.com/loveandjoy.pk/?hl=en" },
    { id: 2, image: "/images/products/large-2.jpeg", type: "post", link: "https://www.instagram.com/loveandjoy.pk/?hl=en" },
    { id: 3, image: "/images/products/medium-1.jpeg", type: "post", link: "https://www.instagram.com/loveandjoy.pk/?hl=en" },
    { id: 4, image: "/images/products/medium-2.jpeg", type: "reel", link: "https://www.instagram.com/loveandjoy.pk/?hl=en" },
];

const tiktokPosts = [
    { id: 1, image: "/images/products/large-2.jpeg", type: "video", link: "https://www.tiktok.com/@loveandjoy.store?_r=1&_t=ZS-93Y4nlaQqDx" },
    { id: 2, image: "/images/products/medium-2.jpeg", type: "video", link: "https://www.tiktok.com/@loveandjoy.store?_r=1&_t=ZS-93Y4nlaQqDx" },
    { id: 3, image: "/images/products/large-1.jpeg", type: "video", link: "https://www.tiktok.com/@loveandjoy.store?_r=1&_t=ZS-93Y4nlaQqDx" },
    { id: 4, image: "/images/products/medium-1.jpeg", type: "video", link: "https://www.tiktok.com/@loveandjoy.store?_r=1&_t=ZS-93Y4nlaQqDx" },
];

const facebookPosts = [
    { id: 1, image: "/images/products/medium-1.jpeg", type: "post", link: "https://www.facebook.com/profile.php?id=61587101492750" },
    { id: 2, image: "/images/products/large-1.jpeg", type: "video", link: "https://www.facebook.com/profile.php?id=61587101492750" },
    { id: 3, image: "/images/products/large-2.jpeg", type: "post", link: "https://www.facebook.com/profile.php?id=61587101492750" },
    { id: 4, image: "/images/products/medium-2.jpeg", type: "video", link: "https://www.facebook.com/profile.php?id=61587101492750" },
];

type Platform = "instagram" | "tiktok" | "facebook";

export default function SocialMediaFeed() {
    const [activeTab, setActiveTab] = useState<Platform>("instagram");

    const getActiveData = () => {
        switch (activeTab) {
            case "instagram": return { posts: instagramPosts, label: "Follow us on Instagram", handle: "@loveandjoy.pk", link: "https://www.instagram.com/loveandjoy.pk/?hl=en", icon: <Instagram className="h-6 w-6" /> };
            case "tiktok": return { posts: tiktokPosts, label: "Follow us on TikTok", handle: "@loveandjoy.store", link: "https://www.tiktok.com/@loveandjoy.store?_r=1&_t=ZS-93Y4nlaQqDx", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg> };
            case "facebook": return { posts: facebookPosts, label: "Follow us on Facebook", handle: "Love & Joy", link: "https://www.facebook.com/profile.php?id=61587101492750", icon: <Facebook className="h-6 w-6" /> };
        }
    };

    const { posts, label, handle, link, icon } = getActiveData();

    return (
        <section className="py-16 bg-muted/10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center mb-10 space-y-6">

                    {/* Tabs */}
                    <div className="flex items-center gap-4 bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-sm">
                        <button
                            onClick={() => setActiveTab("instagram")}
                            className={cn(
                                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                                activeTab === "instagram" ? "bg-white text-black shadow-sm" : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            Instagram
                        </button>
                        <button
                            onClick={() => setActiveTab("tiktok")}
                            className={cn(
                                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                                activeTab === "tiktok" ? "bg-white text-black shadow-sm" : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            TikTok
                        </button>
                        <button
                            onClick={() => setActiveTab("facebook")}
                            className={cn(
                                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                                activeTab === "facebook" ? "bg-white text-black shadow-sm" : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            Facebook
                        </button>
                    </div>

                    <div className="flex flex-col items-center space-y-2">
                        <div className={cn("h-12 w-12 rounded-full flex items-center justify-center transition-colors mb-2",
                            activeTab === "instagram" ? "bg-pink-100 text-pink-600" :
                                activeTab === "tiktok" ? "bg-black text-white" : "bg-blue-100 text-blue-600"
                        )}>
                            {icon}
                        </div>
                        <h2 className="text-3xl font-bold heading-border">{label}</h2>
                        {/* Removed the "Join our community..." text as requested */}
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground font-medium hover:text-primary transition-colors"
                        >
                            {handle}
                        </a>
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button variant="outline" className="mt-2">
                                Follow Us
                            </Button>
                        </a>
                    </div>

                </div>

                <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-4 gap-4 pb-4 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                    {posts.map((post) => (
                        <a
                            key={post.id}
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative aspect-[9/16] md:aspect-square flex-shrink-0 w-[85vw] md:w-auto snap-center overflow-hidden rounded-xl bg-gray-100 cursor-pointer block"
                        >
                            <Image
                                src={post.image}
                                alt={`${activeTab} Post`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {(post.type === "reel" || post.type === "video") && (
                                <div className="absolute top-2 right-2 bg-black/50 p-1.5 rounded-full backdrop-blur-sm">
                                    <Play className="w-4 h-4 text-white fill-current" />
                                </div>
                            )}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
                                    {icon}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
