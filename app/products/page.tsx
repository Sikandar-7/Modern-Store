"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/product/ProductCard";
import { Button } from "@/components/ui/button";
import products from "@/lib/data/products.json";
import { Loader2 } from "lucide-react";

// Derive categories from products
const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

function ProductList() {
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get("category");

    const [selectedCategory, setSelectedCategory] = useState(
        categoryParam || "All"
    );

    const filteredProducts = useMemo(() => {
        if (selectedCategory === "All") {
            return products;
        }
        return products.filter((p) => p.category === selectedCategory);
    }, [selectedCategory]);

    return (
        <>
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((category) => (
                    <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </Button>
                ))}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                    <p className="text-muted-foreground text-lg">
                        No products found in this category.
                    </p>
                </div>
            )}
        </>
    );
}

export default function ProductsPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-4xl font-bold mb-2">All Products</h1>
                <p className="text-muted-foreground">
                    Browse our complete collection of quality products
                </p>
            </div>

            <Suspense
                fallback={
                    <div className="flex justify-center py-16">
                        <Loader2 className="h-8 w-8 animate-spin" />
                    </div>
                }
            >
                <ProductList />
            </Suspense>
        </div>
    );
}
