export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    colors?: string[];
    images: string[];
    category: string;
    inStock: boolean;
    featured?: boolean;
}

export interface CartItem extends Product {
    quantity: number;
    selectedColor?: string;
}

export interface CheckoutFormData {
    name: string;
    phone: string;
    address: string;
    city: string;
    notes?: string;
}
