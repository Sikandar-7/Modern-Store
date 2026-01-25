"use client";

import { Button } from "@/components/ui/button";
import { Product } from "@/types";
import { MessageCircle } from "lucide-react"; // Assuming MessageCircle comes from lucide-react

interface WhatsAppButtonProps {
    product: Product;
    quantity: number;
    selectedColor?: string;
    className?: string;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

export default function WhatsAppButton({
    product,
    quantity,
    selectedColor,
    className,
    variant = "default",
}: WhatsAppButtonProps) {
    const message = `Hi! I'd like to order:

Product: ${product.name}
Price: Rs. ${product.price}
Quantity: ${quantity}
${selectedColor ? `Color: ${selectedColor}` : ''}
Total: Rs. ${(product.price * quantity).toFixed(0)}

Payment: Cash on Delivery (COD)`;

    const whatsappUrl = `https://wa.me/923264379003?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
        >
            <Button variant={variant} className="w-full gap-2 bg-green-500 hover:bg-green-600 text-white">
                <MessageCircle className="h-4 w-4" />
                Order on WhatsApp
            </Button>
        </a>
    );
}
