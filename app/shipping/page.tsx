import PageContainer from "@/components/layout/PageContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Shipping Information | Love & Joy",
    description: "Learn about our shipping policies, delivery times (3-5 days), and rates across Pakistan.",
    openGraph: {
        title: "Shipping Information | Love & Joy",
        description: "Fast delivery across Pakistan. Free shipping on eligible orders.",
        type: "website",
    },
    alternates: {
        canonical: "/shipping",
    },
};

export default function ShippingPage() {
    return (
        <PageContainer title="Shipping Information">
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">Delivery Timeline</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Standard Delivery:</strong> 3-5 working days across Pakistan.</li>
                        <li><strong>Lahore:</strong> Same day or next day delivery available for select areas.</li>
                        <li><strong>Processing Time:</strong> Orders are processed within 24 hours of confirmation.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">Shipping Charges</h2>
                    <p>We offer competitive shipping rates tailored to your location. Free shipping may be available on orders above a certain amount (e.g., Rs. 6,000).</p>
                    <p className="mt-2 text-primary">Current Promotion: Free Delivery on orders above Rs. 6,000!</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">Order Tracking</h2>
                    <p>Once your order is dispatched, you will receive a tracking number via SMS or Email. You can use this number to track your parcel on our courier partner's website.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">Cash on Delivery</h2>
                    <p>We strictly follow a Cash on Delivery (COD) policy. Please ensure you have the exact amount ready for the rider to avoid any inconvenience.</p>
                </section>
            </div>
        </PageContainer>
    );
}
