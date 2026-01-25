"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Plus } from "lucide-react";
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

    return (
        <div className="h-full">
            <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                <Link href={`/products/${product.id}`}>
                    <div className="relative aspect-square overflow-hidden bg-muted">
                        <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        {product.featured && (
                            <Badge className="absolute top-2 right-2" variant="default">
                                Featured
                            </Badge>
                        )}
                        {!product.inStock && (
                            <Badge className="absolute top-2 left-2" variant="destructive">
                                Out of Stock
                            </Badge>
                        )}
                    </div>
                </Link>

                <CardContent className="flex-1 p-4">
                    <Link href={`/products/${product.id}`}>
                        <h3 className="font-semibold text-lg mb-2 line-clamp-2 hover:text-primary transition-colors">
                            {product.name}
                        </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold">
                            {formatPrice(product.price)}
                        </span>
                        <Badge variant="secondary" className="text-xs">
                            COD Available
                        </Badge>
                    </div>
                </CardContent>

                <CardFooter className="p-4 pt-0 gap-2">
                    <Button
                        onClick={handleAddToCart}
                        disabled={!product.inStock}
                        className="flex-1"
                        size="lg"
                    >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                    </Button>
                    <Link href={`/products/${product.id}`} className="flex-1">
                        <Button variant="outline" size="lg" className="w-full">
                            View Details
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
}
