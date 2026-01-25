"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus, MessageCircle } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product, 1);
    };

    // Calculate discount percentage if originalPrice exists
    const originalPrice = product.originalPrice || 0;
    const hasDiscount = originalPrice > product.price;
    const discountPercent = hasDiscount
        ? Math.round(((originalPrice - product.price) / originalPrice) * 100)
        : 0;

    // WhatsApp URL generation
    const whatsappMessage = `Hi, I want to order this: ${product.name} - ${formatPrice(product.price)}`;
    const whatsappUrl = `https://wa.me/923264379003?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <Card className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:bg-white/10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col h-full">
            {/* Discount Badge */}
            {hasDiscount && (
                <Badge className="absolute left-3 top-3 z-10 bg-red-500/90 hover:bg-red-600 backdrop-blur-sm border-none px-2.5 py-1 text-white shadow-sm">
                    {discountPercent}% off
                </Badge>
            )}

            {/* COD Badge */}
            <Badge
                variant="secondary"
                className="absolute right-3 top-3 z-10 bg-white/20 backdrop-blur-md text-[#8cfc03] border border-white/10 hover:bg-white/30 cod-text animate-pulse-slow"
            >
                COD
            </Badge>

            {/* Image Container */}
            <Link href={`/products/${product.id}`} className="block relative aspect-square overflow-hidden bg-transparent p-4">
                {/* Apple-like soft glow behind image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-xl"
                />
            </Link>

            {/* Content */}
            <CardContent className="p-5 space-y-3 flex-1">
                <Link href={`/products/${product.id}`}>
                    <h3 className="line-clamp-1 text-lg font-medium transition-colors heading-border border-white/20">
                        {product.name}
                    </h3>
                </Link>
                <p className="line-clamp-2 text-sm text-muted-foreground h-10">
                    {product.description}
                </p>

                <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-foreground">
                        {formatPrice(product.price)}
                    </span>
                    {hasDiscount && (
                        <span className="text-sm text-muted-foreground line-through">
                            {formatPrice(originalPrice)}
                        </span>
                    )}
                </div>
            </CardContent>

            <CardFooter className="p-5 pt-0 gap-2 mt-auto">
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                >
                    <Button className="w-full gap-2 bg-green-500/90 hover:bg-green-600 backdrop-blur-sm text-white border-none h-11 rounded-xl">
                        <MessageCircle className="h-4 w-4" />
                        <span className="text-xs font-semibold">Order on WhatsApp</span>
                    </Button>
                </a>

                <div className="flex gap-2">
                    <Button
                        size="icon"
                        variant="ghost"
                        className="h-11 w-11 rounded-xl bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors"
                        onClick={handleAddToCart}
                        disabled={!product.inStock}
                    >
                        <Plus className="h-5 w-5" />
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}
