"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle } from "lucide-react";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { CheckoutFormData } from "@/types";
import { generateWhatsAppLinkForCart } from "@/lib/whatsapp";

export default function CheckoutPage() {
    const { cart, getCartTotal, clearCart } = useCart();
    const router = useRouter();
    const [orderPlaced, setOrderPlaced] = useState(false);

    if (cart.length === 0 && !orderPlaced) {
        router.push("/cart");
        return null;
    }

    const total = getCartTotal();

    const handleCheckout = (data: CheckoutFormData) => {
        const whatsappNumber = "923264379003"; // Updated Love & Joy number
        const cartItems = cart.map((item) => ({
            product: item,
            quantity: item.quantity,
        }));

        const message = `Hi! I'd like to place an order:

${cartItems
                .map(
                    ({ product, quantity }) =>
                        `- ${product.name} ${product.selectedColor ? `(${product.selectedColor})` : ''} x${quantity} = ${formatPrice(product.price * quantity)}`
                )
                .join("\n")}

Total: ${formatPrice(total)}

Delivery Information:
Name: ${data.name}
Phone: ${data.phone}
Address: ${data.address}
City: ${data.city}
${data.notes ? `Notes: ${data.notes}` : ""}

Payment: Cash on Delivery (COD)

Please confirm my order. Thank you!`;

        const link = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            message
        )}`;

        window.open(link, "_blank");
        setOrderPlaced(true);
        clearCart();
    };

    if (orderPlaced) {
        return (
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-md mx-auto text-center space-y-6">
                    <div className="h-24 w-24 rounded-full bg-green-100 mx-auto flex items-center justify-center">
                        <CheckCircle className="h-12 w-12 text-green-600" />
                    </div>
                    <h1 className="text-3xl font-bold">Order Sent!</h1>
                    <p className="text-muted-foreground">
                        Your order details have been sent via WhatsApp. Our team will
                        confirm your order shortly.
                    </p>
                    <div className="pt-4">
                        <a
                            href="/"
                            className="text-white hover:underline font-medium"
                        >
                            Continue Shopping
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Checkout</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Checkout Form */}
                <div className="lg:col-span-2">
                    <CheckoutForm onSubmit={handleCheckout} />
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <Card className="sticky top-20 bg-white/5 backdrop-blur-md border-white/10">
                        <CardHeader>
                            <CardTitle>Order Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-3">
                                {cart.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex justify-between text-sm"
                                    >
                                        <span className="text-white">
                                            {item.name} {item.selectedColor ? `(${item.selectedColor})` : ''} x{item.quantity}
                                        </span>
                                        <span className="font-medium text-white">
                                            {formatPrice(item.price * item.quantity)}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t pt-4 space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-white">Subtotal</span>
                                    <span className="font-medium text-white">{formatPrice(total)}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-white">Shipping</span>
                                    <span className="font-medium text-white">FREE</span>
                                </div>
                                <div className="flex justify-between items-center pt-2 border-t">
                                    <span className="text-lg font-semibold text-white">Total</span>
                                    <span className="text-2xl font-bold text-white">
                                        {formatPrice(total)}
                                    </span>
                                </div>
                            </div>

                            <Badge
                                variant="secondary"
                                className="w-full justify-center py-2"
                            >
                                Cash on Delivery
                            </Badge>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
