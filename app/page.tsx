"use client";

import ProductCard from "@/components/product/ProductCard";
import { Button } from "@/components/ui/button";
import products from "@/lib/data/products.json";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import HeroSection from "@/components/home/HeroSection";
import TrustSection from "@/components/home/TrustSection";
import InstagramFeed from "@/components/home/InstagramFeed";

export default function Home() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Trust Badges */}
      <TrustSection />

      {/* 3. Featured Products */}
      <section className="py-8 md:py-16 bg-muted/5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
              <p className="text-muted-foreground">
                Handpicked items just for you
              </p>
            </div>
            <Link href="/products">
              <Button variant="outline" className="hidden sm:inline-flex">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/products">
              <Button variant="outline" className="w-full">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Instagram Feed */}
      <InstagramFeed />
    </div>
  );
}
