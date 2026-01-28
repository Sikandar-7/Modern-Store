"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckoutFormData } from "@/types";

const checkoutSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    address: z.string().min(10, "Address must be at least 10 characters"),
    city: z.string().min(2, "City is required"),
    province: z.string().min(2, "Province/State is required"),
    postalCode: z.string().min(4, "Postal code is required"),
    shippingMethod: z.enum(["standard", "express"]),
    notes: z.string().optional(),
});

interface CheckoutFormProps {
    onSubmit: (data: CheckoutFormData) => void;
    onShippingChange?: (method: 'standard' | 'express') => void;
    isFreeShipping: boolean;
}

export default function CheckoutForm({ onSubmit, onShippingChange, isFreeShipping }: CheckoutFormProps) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid },
    } = useForm<CheckoutFormData>({
        resolver: zodResolver(checkoutSchema),
        mode: "onChange",
        defaultValues: {
            shippingMethod: "standard",
        },
    });

    const shippingMethod = watch("shippingMethod");

    useEffect(() => {
        if (onShippingChange) {
            onShippingChange(shippingMethod);
        }
    }, [shippingMethod, onShippingChange]);

    return (
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
                <CardTitle className="text-white">Delivery Information</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Name */}
                    <div className="space-y-2">
                        <Label htmlFor="name" className="text-white">Full Name *</Label>
                        <Input
                            id="name"
                            {...register("name")}
                            placeholder="Sikander"
                            className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                        />
                        {errors.name && (
                            <p className="text-sm text-red-400">{errors.name.message}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-white">Email Address *</Label>
                        <Input
                            id="email"
                            type="email"
                            {...register("email")}
                            placeholder="john@example.com"
                            className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                        />
                        {errors.email && (
                            <p className="text-sm text-red-400">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                        <Label htmlFor="phone" className="text-white">Phone Number *</Label>
                        <Input
                            id="phone"
                            type="tel"
                            {...register("phone")}
                            placeholder="+92 300 1234567"
                            className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                        />
                        {errors.phone && (
                            <p className="text-sm text-red-400">{errors.phone.message}</p>
                        )}
                    </div>

                    {/* Address */}
                    <div className="space-y-2">
                        <Label htmlFor="address" className="text-white">Delivery Address *</Label>
                        <Input
                            id="address"
                            {...register("address")}
                            placeholder="123 Main Street, Apartment 4B"
                            className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                        />
                        {errors.address && (
                            <p className="text-sm text-red-400">
                                {errors.address.message}
                            </p>
                        )}
                    </div>

                    {/* City and Province */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="city" className="text-white">City *</Label>
                            <Input
                                id="city"
                                {...register("city")}
                                placeholder="Lahore"
                                className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                            />
                            {errors.city && (
                                <p className="text-sm text-red-400">{errors.city.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="province" className="text-white">Province/State *</Label>
                            <Input
                                id="province"
                                {...register("province")}
                                placeholder="Punjab"
                                className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                            />
                            {errors.province && (
                                <p className="text-sm text-red-400">{errors.province.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Postal Code */}
                    <div className="space-y-2">
                        <Label htmlFor="postalCode" className="text-white">Postal Code *</Label>
                        <Input
                            id="postalCode"
                            {...register("postalCode")}
                            placeholder="75500"
                            className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                        />
                        {errors.postalCode && (
                            <p className="text-sm text-red-400">{errors.postalCode.message}</p>
                        )}
                    </div>

                    {/* Shipping Method */}
                    <div className="space-y-3">
                        <Label className="text-white">Shipping Method *</Label>
                        <div className="space-y-3">
                            <label
                                className={`flex items-center space-x-3 bg-white/5 border rounded-lg p-4 hover:bg-white/10 transition-colors cursor-pointer ${shippingMethod === 'standard' ? 'border-white/40 bg-white/10' : 'border-white/20'
                                    }`}
                            >
                                <input
                                    type="radio"
                                    value="standard"
                                    {...register("shippingMethod")}
                                    className="w-4 h-4 text-primary"
                                />
                                <div className="flex-1">
                                    <div className="text-white font-semibold">
                                        Standard Shipping {isFreeShipping && <span className="text-[#8cfc03] font-bold text-xs ml-2">(FREE)</span>}
                                    </div>
                                    <p className="text-sm text-gray-300">
                                        {isFreeShipping ? 'Rs. 0' : 'Rs. 250'} - Delivery in 3-5 business days
                                    </p>
                                </div>
                            </label>

                            <label
                                className={`flex items-center space-x-3 bg-white/5 border rounded-lg p-4 hover:bg-white/10 transition-colors cursor-pointer ${shippingMethod === 'express' ? 'border-white/40 bg-white/10' : 'border-white/20'
                                    }`}
                            >
                                <input
                                    type="radio"
                                    value="express"
                                    {...register("shippingMethod")}
                                    className="w-4 h-4 text-primary"
                                />
                                <div className="flex-1">
                                    <div className="text-white font-semibold">Express Shipping</div>
                                    <p className="text-sm text-gray-300">Rs. 500 - Delivery in 1-2 business days</p>
                                </div>
                            </label>
                        </div>
                        {errors.shippingMethod && (
                            <p className="text-sm text-red-400">{errors.shippingMethod.message}</p>
                        )}
                    </div>

                    {/* Order Notes */}
                    <div className="space-y-2">
                        <Label htmlFor="notes" className="text-white">Order Notes (Optional)</Label>
                        <Input
                            id="notes"
                            {...register("notes")}
                            placeholder="Any special instructions..."
                            className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                        />
                    </div>

                    {/* Payment Method Info */}
                    <div className="bg-white/5 border border-white/20 p-4 rounded-lg">
                        <p className="text-sm font-medium mb-2 text-white">Payment Method</p>
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 rounded-full bg-[#8cfc03] animate-pulse-slow"></div>
                            <span className="font-semibold text-white">Cash on Delivery (COD)</span>
                        </div>
                        <p className="text-sm text-gray-300 mt-2">
                            Pay when you receive your order at your doorstep
                        </p>
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        disabled={!isValid}
                    >
                        Place Order via WhatsApp
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
