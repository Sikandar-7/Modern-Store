"use client";

import Image from "next/image";
import { Minus, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartItem as CartItemType } from "@/types";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

interface CartItemProps {
    item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
    const { updateQuantity, removeFromCart } = useCart();

    return (
        <div className="flex gap-4 py-4 border-b">
            <div className="relative w-24 h-24 flex-shrink-0 rounded-md overflow-hidden bg-muted">
                <Image
                    src={item.images?.[0] || '/placeholder.jpg'}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                />
            </div>

            <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-lg mb-1 truncate text-white">{item.name}</h3>
                {item.selectedColor && (
                    <p className="text-sm text-gray-300 mb-1">
                        Color: <span className="font-medium text-white">{item.selectedColor}</span>
                    </p>
                )}
                <p className="text-sm text-gray-300 mb-2">
                    {formatPrice(item.price)}
                </p>

                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1, item.selectedColor)}
                    >
                        <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center font-medium">{item.quantity}</span>
                    <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1, item.selectedColor)}
                    >
                        <Plus className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            <div className="flex flex-col items-end justify-between">
                <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => removeFromCart(item.id, item.selectedColor)}
                >
                    <X className="h-4 w-4" />
                </Button>
                <p className="font-bold text-lg text-white">
                    {formatPrice(item.price * item.quantity)}
                </p>
            </div>
        </div>
    );
}
