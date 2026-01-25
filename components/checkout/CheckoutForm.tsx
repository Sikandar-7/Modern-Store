"use client";

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
    phone: z.string().min(10, "Please enter a valid phone number"),
    address: z.string().min(10, "Address must be at least 10 characters"),
    city: z.string().min(2, "City is required"),
    notes: z.string().optional(),
});

interface CheckoutFormProps {
    onSubmit: (data: CheckoutFormData) => void;
}

export default function CheckoutForm({ onSubmit }: CheckoutFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CheckoutFormData>({
        resolver: zodResolver(checkoutSchema),
    });

    return (
        <Card className="bg-white/5 backdrop-blur-md border-white/10">
            <CardHeader>
                <CardTitle>Delivery Information</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name" className="text-white">Full Name *</Label>
                        <Input
                            id="name"
                            {...register("name")}
                            placeholder="John Doe"
                        />
                        {errors.name && (
                            <p className="text-sm text-destructive">{errors.name.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="phone" className="text-white">Phone Number *</Label>
                        <Input
                            id="phone"
                            type="tel"
                            {...register("phone")}
                            placeholder="+1234567890"
                        />
                        {errors.phone && (
                            <p className="text-sm text-destructive">{errors.phone.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="address" className="text-white">Delivery Address *</Label>
                        <Input
                            id="address"
                            {...register("address")}
                            placeholder="123 Main Street, Apartment 4B"
                        />
                        {errors.address && (
                            <p className="text-sm text-destructive">
                                {errors.address.message}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="city" className="text-white">City *</Label>
                        <Input
                            id="city"
                            {...register("city")}
                            placeholder="New York"
                        />
                        {errors.city && (
                            <p className="text-sm text-destructive">{errors.city.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="notes" className="text-white">Order Notes (Optional)</Label>
                        <Input
                            id="notes"
                            {...register("notes")}
                            placeholder="Any special instructions..."
                        />
                    </div>

                    <div className="bg-muted p-4 rounded-lg">
                        <p className="text-sm font-medium mb-2">Payment Method</p>
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 rounded-full bg-[#8cfc03] animate-pulse-slow"></div>
                            <span className="font-semibold">Cash on Delivery (COD)</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                            Pay when you receive your order at your doorstep
                        </p>
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                        Place Order via WhatsApp
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
