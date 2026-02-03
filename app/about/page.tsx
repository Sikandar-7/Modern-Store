import PageContainer from "@/components/layout/PageContainer";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "About Us | Love & Joy",
    description: "Learn more about Love & Joy, our mission to provide the best teddy bears in Pakistan, and our values.",
    openGraph: {
        title: "About Us | Love & Joy",
        description: "Spreading smiles, one bear at a time. Read our story and mission.",
        images: ["/images/products/large-1.jpeg"],
        type: "website",
    },
    alternates: {
        canonical: "/about",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Love & Joy",
    "url": "https://loveandjoy.vercel.app",
    "logo": "https://loveandjoy.vercel.app/logo-v3.webp",
    "sameAs": [
        "https://www.facebook.com/profile.php?id=61587101492750",
        "https://www.instagram.com/loveandjoy.pk/?hl=en",
        "https://www.youtube.com/@LoveandJoy_pk",
        "https://www.tiktok.com/@loveandjoy.store"
    ],
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+92-326-4379003",
        "contactType": "Customer Service",
        "areaServed": "PK",
        "availableLanguage": "English"
    }
};

export default function AboutPage() {
    return (
        <PageContainer title="About Us">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="space-y-8">
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-8 border border-white/10">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    {/* Placeholder image - reusing a product image for now implies brand vibe */}
                    <Image
                        src="/images/products/large-1.jpeg"
                        alt="Love & Joy Brand"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute bottom-6 left-6 z-20">
                        <h2 className="text-3xl font-bold text-white">Spreading Smiles, One Bear at a Time</h2>
                    </div>
                </div>

                <p className="text-xl text-gray-200">
                    Welcome to <strong>Love & Joy</strong>, your number one source for premium quality plush toys and gifts in Pakistan. We're dedicated to giving you the very best of products, with a focus on quality, customer service, and uniqueness.
                </p>

                <div className="grid md:grid-cols-3 gap-6 my-12">
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                        <p className="text-sm">To provide high-quality, lovable products that bring joy to people's lives and help them express their feelings perfectly.</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <h3 className="text-xl font-bold text-white mb-2">Quality First</h3>
                        <p className="text-sm">We believe that a gift should last forever. That's why we use only the finest materials and craftsmanship in our products.</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <h3 className="text-xl font-bold text-white mb-2">Customer Love</h3>
                        <p className="text-sm">Your happiness is our priority. From smooth ordering to fast delivery, we ensure a premium experience.</p>
                    </div>
                </div>

                <p>
                    Founded in 2024, Love & Joy has come a long way from its beginnings. When we first started out, our passion for "gifts that matter" drove us to start this business so that Love & Joy can offer you the world's most huggable teddy bears. We now serve customers all over Pakistan and are thrilled that we're able to turn our passion into our own website.
                </p>

                <p>
                    I hope you enjoy our products as much as I enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
                </p>

                <p className="font-bold text-white mt-8">
                    Sincerely,<br />
                    The Love & Joy Team
                </p>
            </div>
        </PageContainer>
    );
}
