"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const heroProducts = [
    {
        id: 1,
        name: "Limited Edition Collection",
        tagline: "Exclusive Designs for You",
        image: "/images/carousel/slide1.jpeg",
    },
    {
        id: 2,
        name: "New Arrivals",
        tagline: "Discover the Latest Trends",
        image: "/images/carousel/slide2.jpeg",
    },
    {
        id: 3,
        name: "Premium Selection",
        tagline: "Quality You Can Trust",
        image: "/images/carousel/slide3.jpeg",
    },
    {
        id: 4,
        name: "Best Sellers",
        tagline: "Loved by Customers",
        image: "/images/carousel/slide4.jpeg",
    },
    {
        id: 5,
        name: "Special Offer",
        tagline: "Shop Now & Save",
        image: "/images/carousel/slide5.jpeg",
    },
];

export default function HeroSection() {
    return (
        <section className="container mx-auto px-4 py-8 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Column: Text Content */}
                <div className="space-y-6 text-center lg:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight pb-2 bg-[linear-gradient(90deg,#fdeff9,#ec38bc,#7303c0,#03001e)] text-transparent bg-clip-text animate-gradient-x bg-[length:200%_auto]">
                        Welcome to <span className="block mt-2">Love & Joy</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                        Discover quality products with <strong className="text-green-500">Cash on Delivery</strong> available on all orders. Shop with confidence.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                        <Link href="/products">
                            <Button size="lg" className="w-full sm:w-auto text-base h-12 px-8">
                                Shop Now
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <a
                            href="https://wa.me/923264379003"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button variant="outline" size="lg" className="w-full sm:w-auto text-base h-12 px-8 text-green-600 hover:text-green-700">
                                Contact on WhatsApp
                            </Button>
                        </a>
                    </div>
                </div>

                {/* Right Column: Product Carousel */}
                <div className="relative w-full max-w-xl mx-auto lg:ml-auto">
                    <Carousel
                        plugins={[
                            Autoplay({
                                delay: 6000,
                                stopOnMouseEnter: true,
                                stopOnInteraction: false,
                            }),
                            Fade(),
                        ]}
                        className="w-full"
                        opts={{
                            loop: true,
                        }}
                    >
                        <CarouselContent>
                            {heroProducts.map((product) => (
                                <CarouselItem key={product.id}>
                                    <div className="p-1">
                                        <Card className="border-none shadow-xl rounded-3xl overflow-hidden aspect-square relative group bg-black/5">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                                                priority
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white text-left pointer-events-none">
                                                <h2 className="text-2xl font-bold mb-1 heading-border">{product.name}</h2>
                                                <p className="text-white/90 font-medium">{product.tagline}</p>
                                            </div>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>

                    {/* Decorative Elements */}
                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-3xl rounded-full scale-110" />
                </div>
            </div>
        </section>
    );
}
