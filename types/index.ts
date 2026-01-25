export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    images: string[];
    category: string;
    inStock: boolean;
    featured?: boolean;
}

export interface CartItem extends Product {
    quantity: number;
}

export interface CheckoutFormData {
    name: string;
    phone: string;
    address: string;
    city: string;
    notes?: string;
}
