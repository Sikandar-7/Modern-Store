"use client";

import { useState } from "react";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, ShoppingCart, ArrowLeft, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import WhatsAppButton from "@/components/whatsapp/WhatsAppButton";
import ProductCard from "@/components/product/ProductCard";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import products from "@/lib/data/products.json";

export default function ProductDetailPage() {
    const params = useParams();
    const id = typeof params?.id === 'string' ? params.id : '';
    const product = products.find((p) => p.id === id);
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedColor, setSelectedColor] = useState<string | undefined>(
        product?.colors?.[0]
    );
    const [showCheckout, setShowCheckout] = useState(false);
    const [isImageHovered, setIsImageHovered] = useState(false);
    const { addToCart } = useCart();

    if (!product) {
        notFound();
    }

    const relatedProducts = products
        .filter((p) => p.category === product.category && p.id !== id)
        .slice(0, 4);

    const handleAddToCart = () => {
        addToCart(product, quantity, selectedColor);
        setShowCheckout(true);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Back Button - Desktop */}
            <Link href="/products" className="hidden md:inline-block">
                <Button variant="ghost" className="mb-6">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Products
                </Button>
            </Link>

            {/* Back Button - Mobile (Sticky) */}
            <Link href="/products" className="md:hidden">
                <Button
                    variant="ghost"
                    className="mb-4 w-full justify-start bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20"
                >
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    <span className="font-semibold">Back to Products</span>
                </Button>
            </Link>

            {/* Product Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                {/* Images */}
                <div className="space-y-4">
                    <div
                        className="relative aspect-square rounded-lg overflow-hidden bg-muted cursor-pointer"
                        onClick={() => setIsImageHovered(true)}
                    >
                        <Image
                            src={product.images[selectedImage]}
                            alt={product.name}
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />

                        {/* Click Popup - Full Image */}
                        {isImageHovered && (
                            <div
                                className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
                                onClick={() => setIsImageHovered(false)}
                            >
                                {/* Close Button */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsImageHovered(false);
                                    }}
                                    className="absolute top-4 right-4 z-[60] bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full p-3 transition-colors"
                                    aria-label="Close"
                                >
                                    <X className="h-6 w-6 text-white" />
                                </button>

                                <div
                                    className="relative w-[90vw] h-[90vh] max-w-6xl"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Image
                                        src={product.images[selectedImage]}
                                        alt={product.name}
                                        fill
                                        className="object-contain"
                                        sizes="90vw"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                    {product.images.length > 1 && (
                        <div className="grid grid-cols-4 gap-4">
                            {product.images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`relative aspect-square rounded-md overflow-hidden bg-muted border-2 transition-all hover:scale-105 ${selectedImage === index
                                        ? "border-primary ring-2 ring-primary ring-offset-2"
                                        : "border-transparent hover:border-primary/50"
                                        }`}
                                >
                                    <Image
                                        src={image}
                                        alt={`${product.name} ${index + 1}`}
                                        fill
                                        className="object-cover"
                                        sizes="150px"
                                    />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Product Info */}
                <div className="space-y-6">
                    <div>
                        <Badge variant="secondary" className="mb-3">
                            {product.category}
                        </Badge>
                        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                        <p className="text-3xl font-bold mb-4">
                            {formatPrice(product.price)}
                        </p>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                            Cash on Delivery Available
                        </Badge>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-2">Description</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {product.description}
                        </p>
                    </div>

                    {/* Color Selector */}
                    {product.colors && product.colors.length > 0 && (
                        <div className="space-y-3">
                            <h3 className="font-semibold">Select Color: <span className="text-primary">{selectedColor}</span></h3>
                            <div className="flex flex-wrap gap-2">
                                {product.colors.map((color) => (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`px-4 py-2 rounded-md border text-sm font-medium transition-all ${selectedColor === color
                                            ? "border-primary bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2"
                                            : "border-input bg-background hover:bg-accent hover:text-accent-foreground"
                                            }`}
                                    >
                                        {color}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Quantity Selector */}
                    <div className="space-y-3">
                        <h3 className="font-semibold">Quantity</h3>
                        <div className="flex items-center gap-4">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                disabled={!product.inStock}
                            >
                                <Minus className="h-4 w-4" />
                            </Button>
                            <span className="text-xl font-semibold w-12 text-center">
                                {quantity}
                            </span>
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => setQuantity(quantity + 1)}
                                disabled={!product.inStock}
                            >
                                <Plus className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3 pt-4">
                        <Button
                            onClick={handleAddToCart}
                            disabled={!product.inStock}
                            size="lg"
                            className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white"
                        >
                            <ShoppingCart className="mr-2 h-5 w-5" />
                            Add to Cart
                        </Button>
                        {showCheckout && (
                            <Link href="/checkout">
                                <Button
                                    size="lg"
                                    className="w-full bg-green-500/20 hover:bg-green-500/30 backdrop-blur-md border border-green-500/30 text-green-400"
                                >
                                    Proceed to Checkout
                                </Button>
                            </Link>
                        )}
                        <WhatsAppButton
                            product={product}
                            quantity={quantity}
                            selectedColor={selectedColor}
                            variant="outline"
                            className="w-full"
                        />
                    </div>

                    {!product.inStock && (
                        <Badge variant="destructive" className="w-full justify-center py-2">
                            Out of Stock
                        </Badge>
                    )}
                </div>
            </div>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
                <div>
                    <h2 className="text-3xl font-bold mb-6">Related Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {relatedProducts.map((relatedProduct) => (
                            <ProductCard key={relatedProduct.id} product={relatedProduct} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
