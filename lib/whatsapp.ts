import { Product } from "@/types";

export function generateWhatsAppLink(
    phone: string,
    product: Product,
    quantity: number
): string {
    const message = `Hi! I'd like to order:

Product: ${product.name}
Price: $${product.price}
Quantity: ${quantity}
Total: $${(product.price * quantity).toFixed(2)}

Payment: Cash on Delivery (COD)`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function generateWhatsAppLinkForCart(
    phone: string,
    cartItems: Array<{ product: Product; quantity: number }>,
    total: number
): string {
    const itemsList = cartItems
        .map(
            ({ product, quantity }) =>
                `- ${product.name} x${quantity} = $${(product.price * quantity).toFixed(2)}`
        )
        .join("\n");

    const message = `Hi! I'd like to place an order:

${itemsList}

Total: $${total.toFixed(2)}

Payment: Cash on Delivery (COD)

Please confirm my order. Thank you!`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
