"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, CheckCircle, ShoppingBag } from "lucide-react";
import { CartItem } from "@/types";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface AddToCartPopupProps {
    isOpen: boolean;
    onClose: () => void;
    item: CartItem | null;
}

export default function AddToCartPopup({ isOpen, onClose, item }: AddToCartPopupProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            const timer = setTimeout(() => {
                setIsVisible(false);
                setTimeout(onClose, 300); // Wait for animation to finish
            }, 3000); // Show for 3 seconds
            return () => clearTimeout(timer);
        }
    }, [isOpen, onClose]);

    if (!item && !isVisible) return null;

    return (
        <div
            className={`fixed top-24 right-4 z-50 w-full max-w-sm transform transition-all duration-300 ease-in-out ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                }`}
        >
            <div className="bg-black/80 backdrop-blur-md border border-[#8cfc03]/30 rounded-xl shadow-2xl p-4 overflow-hidden">
                {/* Progress bar */}
                <div className={`absolute bottom-0 left-0 h-1 bg-[#8cfc03] transition-all duration-[3000ms] linear ${isVisible ? 'w-full' : 'w-0'}`} />

                <div className="flex items-start gap-4">
                    {/* Product Image */}
                    <div className="relative h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden bg-white/5 border border-white/10">
                        {item?.images && item.images.length > 0 ? (
                            <Image
                                src={item.images[0]}
                                alt={item.name}
                                fill
                                className="object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gray-800 text-gray-400">
                                <ShoppingBag size={24} />
                            </div>
                        )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                            <div>
                                <h4 className="font-semibold text-white leading-tight mb-1 truncate pr-2">
                                    {item?.name}
                                </h4>
                                <p className="text-sm text-gray-300 mb-1">
                                    {item?.selectedColor && (
                                        <span className="inline-block mr-2 text-xs bg-white/10 px-2 py-0.5 rounded-full">
                                            {item.selectedColor}
                                        </span>
                                    )}
                                </p>
                            </div>
                            <button
                                onClick={() => { setIsVisible(false); setTimeout(onClose, 300); }}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center text-[#8cfc03] text-sm font-medium">
                                <CheckCircle size={14} className="mr-1" />
                                Added to Cart
                            </div>
                            <Link href="/cart">
                                <Button
                                    variant="link"
                                    className="text-white p-0 h-auto text-xs hover:text-[#8cfc03] underline-offset-4"
                                >
                                    View Cart
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
