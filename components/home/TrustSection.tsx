import { ShoppingBag, Truck, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function TrustSection() {
    return (
        <section className="container mx-auto px-4 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-muted/30 border-none shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="flex flex-col items-center text-center p-6 space-y-3">
                        <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mb-2">
                            <ShoppingBag className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="font-bold text-lg heading-border">Cash on Delivery</h3>
                        <p className="text-sm text-white">
                            Pay securely when your order arrives at your doorstep
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-muted/30 border-none shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="flex flex-col items-center text-center p-6 space-y-3">
                        <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mb-2">
                            <Truck className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="font-bold text-lg heading-border">Fast Delivery</h3>
                        <p className="text-sm text-white">
                            Quick and reliable shipping directly to your location
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-muted/30 border-none shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="flex flex-col items-center text-center p-6 space-y-3">
                        <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mb-2">
                            <Shield className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="font-bold text-lg heading-border">Quality Guaranteed</h3>
                        <p className="text-sm text-white">
                            All products are carefully quality checked before shipping
                        </p>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
