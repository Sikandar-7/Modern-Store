import { Product } from "@/types";

export function generateWhatsAppLink(
    phone: string,
    product: Product,
    quantity: number
): string {
    const message = `Hi! I'd like to order:

Product: ${product.name}
Price: Rs. ${product.price}
Quantity: ${quantity}
Total: Rs. ${(product.price * quantity).toFixed(0)}

Payment: Cash on Delivery (COD)`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function generateWhatsAppLinkForCart(
    phone: string,
    cartItems: Array<Product & { quantity: number; selectedColor?: string }>,
    total: number
): string {
    const itemsList = cartItems
        .map(
            (item) =>
                `- ${item.name} ${item.selectedColor ? `(${item.selectedColor})` : ''} x${item.quantity} = Rs. ${(item.price * item.quantity).toFixed(0)}`
        )
        .join("\n");

    const message = `Hi! I'd like to place an order:

${itemsList}

Total: Rs. ${total.toFixed(0)}

Payment: Cash on Delivery (COD)

Please confirm my order. Thank you!`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
