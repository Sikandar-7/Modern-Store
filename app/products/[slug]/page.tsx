import { Metadata } from "next";
import { notFound } from "next/navigation";
import products from "@/lib/data/products.json";
import ProductView from "@/components/product/ProductView";

interface PageProps {
    params: Promise<{ slug: string }>;
}

// Generate Metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const product = products.find((p) => p.slug === slug || p.id === slug);

    if (!product) {
        return {
            title: "Product Not Found | Love & Joy",
        };
    }

    return {
        title: `${product.name} - Premium Soft Toy | Love & Joy`,
        description: product.seoDescription || product.description.slice(0, 160),
        alternates: {
            canonical: `/products/${product.slug || product.id}`,
        },
        openGraph: {
            title: `${product.name} | Love & Joy`,
            description: product.seoDescription || product.description,
            images: [
                {
                    url: product.images[0],
                    width: 800,
                    height: 800,
                    alt: product.name,
                },
            ],
        },
    };
}

// JSON-LD Schema Generator
function generateJsonLd(product: any) {
    return {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "image": product.images[0], // Assuming fully qualified URL or processed by next/image
        "description": product.seoDescription || product.description,
        "brand": {
            "@type": "Brand",
            "name": "Love & Joy"
        },
        "offers": {
            "@type": "Offer",
            "priceCurrency": "PKR",
            "price": product.price,
            "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
            "url": `https://loveandjoy.vercel.app/products/${product.slug || product.id}`
        }
    };
}

export default async function ProductPage({ params }: PageProps) {
    const { slug } = await params;

    // Find product by slug with fallback to ID
    const product = products.find((p) => p.slug === slug || p.id === slug);

    if (!product) {
        notFound();
    }

    // Filter related products
    const relatedProducts = products
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateJsonLd(product)) }}
            />
            <ProductView product={product} relatedProducts={relatedProducts} />
        </>
    );
}

// Generate Static Params for SSG (Optional but recommended)
export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug || product.id,
    }));
}
