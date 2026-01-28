"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
    const { cart } = useCart();

    if (cart.length === 0) {
        return (
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-md mx-auto text-center space-y-6">
                    <div className="h-24 w-24 rounded-full bg-muted mx-auto flex items-center justify-center">
                        <ShoppingBag className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <h1 className="text-3xl font-bold">Your cart is empty</h1>
                    <p className="text-muted-foreground">
                        Add some products to your cart to get started
                    </p>
                    <Link href="/products">
                        <Button size="lg">Continue Shopping</Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
                        {cart.map((item) => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </div>

                    <Link href="/products">
                        <Button variant="outline" className="w-full sm:w-auto">
                            Continue Shopping
                        </Button>
                    </Link>
                </div>

                {/* Cart Summary */}
                <div className="lg:col-span-1">
                    <CartSummary />
                </div>
            </div>
        </div>
    );
}
