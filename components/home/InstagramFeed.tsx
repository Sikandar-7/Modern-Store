import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const instagramPosts = [
    { id: 1, image: "/images/products/headphones-2.jpg", type: "reel" },
    { id: 2, image: "/images/products/smartwatch-2.jpg", type: "post" },
    { id: 3, image: "/images/products/bag-2.jpg", type: "post" },
    { id: 4, image: "/images/products/lamp-2.jpg", type: "reel" },
];

export default function InstagramFeed() {
    return (
        <section className="py-16 bg-muted/10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center mb-10 space-y-4">
                    <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                        <Instagram className="h-6 w-6" />
                    </div>
                    <h2 className="text-3xl font-bold heading-border">Follow us on Instagram</h2>
                    <p className="text-muted-foreground max-w-md">
                        Join our community for daily inspiration, new arrivals, and exclusive offers. @loveandjoy
                    </p>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button variant="outline" className="mt-2">
                            Follow Us
                        </Button>
                    </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {instagramPosts.map((post) => (
                        <div
                            key={post.id}
                            className="group relative aspect-square overflow-hidden rounded-xl bg-gray-100 cursor-pointer"
                        >
                            <Image
                                src={post.image}
                                alt="Instagram Post"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {post.type === "reel" && (
                                <div className="absolute top-2 right-2 bg-black/50 p-1.5 rounded-full backdrop-blur-sm">
                                    <svg
                                        className="w-4 h-4 text-white fill-current"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            )}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Instagram className="text-white h-8 w-8" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
