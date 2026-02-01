import PageContainer from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Track Your Order | Love & Joy",
    description: "Track the status of your order in real-time.",
    openGraph: {
        title: "Track Your Order | Love & Joy",
        description: "Where is my order? Enter your Order ID to find out.",
        type: "website",
    },
    alternates: {
        canonical: "/track-order",
    },
};

export default function TrackOrderPage() {
    return (
        <PageContainer title="Track Your Order">
            <div className="max-w-lg mx-auto text-center space-y-8">
                <p>
                    To track your order, please enter your Order ID in the box below and press the "Track" button.
                    This was given to you on your receipt and in the confirmation email/SMS you should have received.
                </p>

                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 space-y-4">
                    <div className="space-y-2 text-left">
                        <label htmlFor="orderId" className="text-sm font-medium text-gray-300">Order ID</label>
                        <Input id="orderId" placeholder="Found in your order confirmation email." className="bg-white/5 border-white/10" />
                    </div>

                    <div className="space-y-2 text-left">
                        <label htmlFor="email" className="text-sm font-medium text-gray-300">Billing Email</label>
                        <Input id="email" type="email" placeholder="Email you used during checkout." className="bg-white/5 border-white/10" />
                    </div>

                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                        Track
                    </Button>
                </div>

                <p className="text-sm text-gray-500">
                    If you're having trouble tracking your order, please contact our support team on WhatsApp.
                </p>
            </div>
        </PageContainer>
    );
}
