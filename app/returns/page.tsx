import PageContainer from "@/components/layout/PageContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Returns & Exchanges | Love & Joy",
    description: "Our 7-day return policy for peace of mind. Easy returns and refunds.",
    openGraph: {
        title: "Returns & Exchanges | Love & Joy",
        description: "Shop with confidence. We offer a 7-day return policy on all orders.",
        type: "website",
    },
    alternates: {
        canonical: "/returns",
    },
};

export default function ReturnsPage() {
    return (
        <PageContainer title="Returns & Exchanges">
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">7-Day Return Policy</h2>
                    <p>We want you to love your purchase. If you are not completely satisfied, we offer a 7-day return policy for eligible items.</p>
                    <p className="mt-2">To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">Damaged or Defective Items</h2>
                    <p>Please inspect your order upon reception. If the item is defective, damaged, or if you receive the wrong item:</p>
                    <ol className="list-decimal pl-6 space-y-2 mt-2">
                        <li>Take clear photos of the damage/defect.</li>
                        <li>Contact us immediately on WhatsApp (+92 326 4379003).</li>
                        <li>We will arrange a replacement or refund immediately.</li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">Non-Returnable Items</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Gift cards</li>
                        <li>Personalized items</li>
                        <li>Items damaged by the customer</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">Refund Process</h2>
                    <p>Once your return is received and inspected, we will notify you. If approved, your refund will be processed via Bank Transfer, JazzCash, or EasyPaisa within 5 working days.</p>
                </section>
            </div>
        </PageContainer>
    );
}
