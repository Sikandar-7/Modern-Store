import { MetadataRoute } from 'next';
import products from "@/lib/data/products.json";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://loveandjoy.pk';

    // Static pages
    const routes = [
        '',
        '/products',
        '/cart',
        '/contact',
        '/faq',
        '/shipping',
        '/returns',
        '/track-order',
        '/about',
        '/story',
        '/careers',
        '/privacy',
        '/terms',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 1,
    }));

    // Dynamic product pages
    const productRoutes = products.map((product) => ({
        url: `${baseUrl}/products/${product.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    return [...routes, ...productRoutes];
}
