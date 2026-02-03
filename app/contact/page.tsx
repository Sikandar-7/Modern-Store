import PageContainer from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Love & Joy",
    description: "Get in touch with Love & Joy. We are here to help with your orders and questions via WhatsApp or Email.",
    openGraph: {
        title: "Contact Us | Love & Joy",
        description: "Need help? Contact our support team via WhatsApp or Email.",
        type: "website",
    },
    alternates: {
        canonical: "/contact",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "Love & Joy",
    "image": "https://loveandjoy.vercel.app/logo-v3.webp",
    "telephone": "+92-326-4379003",
    "email": "contact@loveandjoy.vercel.app",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Street 5, Cavalary Ground",
        "addressLocality": "Lahore",
        "addressRegion": "Punjab",
        "postalCode": "54000",
        "addressCountry": "PK"
    },
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ],
        "opens": "09:00",
        "closes": "21:00"
    },
    "url": "https://loveandjoy.pk/contact"
};

export default function ContactPage() {
    return (
        <PageContainer title="Contact Us">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <p className="text-center mb-12 text-lg">
                Have a question or feedback? We'd love to hear from you.
                Fill out the form below or reach out to us directly.
            </p>

            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-white">Get in Touch</h3>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="bg-white/10 p-3 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            </div>
                            <div>
                                <h4 className="font-medium text-white">Phone & WhatsApp</h4>
                                <p className="text-gray-400">+92 326 4379003</p>
                                <p className="text-sm text-gray-500">Mon-Sat, 9am - 9pm</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-white/10 p-3 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                            </div>
                            <div>
                                <h4 className="font-medium text-white">Email</h4>
                                <p className="text-gray-400">sikandar8sa@gmail.com</p>
                                <p className="text-sm text-gray-500">We respond within 24 hours</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-white/10 p-3 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                            </div>
                            <div>
                                <h4 className="font-medium text-white">Location</h4>
                                <p className="text-gray-400">Lahore, Pakistan</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                                <Input id="name" placeholder="John Doe" className="bg-white/5 border-white/10" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium text-gray-300">Phone</label>
                                <Input id="phone" placeholder="+92..." className="bg-white/5 border-white/10" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                            <Input id="email" type="email" placeholder="john@example.com" className="bg-white/5 border-white/10" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                            <Textarea id="message" placeholder="How can we help you?" className="bg-white/5 border-white/10 min-h-[120px]" />
                        </div>
                        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                            Send Message
                        </Button>
                    </form>
                </div>
            </div>
        </PageContainer>
    );
}
