import PageContainer from "@/components/layout/PageContainer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQs | Love & Joy",
    description: "Frequently Asked Questions about shipping, delivery, and products.",
    openGraph: {
        title: "FAQs | Love & Joy",
        description: "Frequently Asked Questions about shipping, delivery, and products.",
        type: "website",
    },
    alternates: {
        canonical: "/faq",
    },
};

const faqs = [
    {
        question: "How long does shipping take?",
        answer: "We typically deliver within 3-5 business days across Pakistan. Orders placed in Lahore may arrive sooner, usually within 24-48 hours."
    },
    {
        question: "What is your return policy?",
        answer: "We offer a 7-day return policy for defective or damaged items. If you receive a damaged product, please contact us immediately on WhatsApp with photos/videos."
    },
    {
        question: "Do you offer Cash on Delivery (COD)?",
        answer: "Yes! We offer Cash on Delivery (COD) valid all over Pakistan. You can pay when the rider delivers your parcel."
    },
    {
        question: "Are the teddy bears washable?",
        answer: "Yes, our teddy bears are made with premium washable fabric. We recommend gentle hand washing or spot cleaning for best results."
    },
    {
        question: "Can I send this as a gift?",
        answer: "Absolutely! Our products are perfect for gifting. We ensure premium packaging. You can also add a gift note in the order remarks."
    }
];

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
        }
    }))
};

export default function FAQPage() {
    return (
        <PageContainer title="Frequently Asked Questions">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border border-white/10 bg-white/5 rounded-xl px-4">
                        <AccordionTrigger className="text-left font-medium hover:no-underline hover:text-primary transition-colors">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-400">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </PageContainer>
    );
}
