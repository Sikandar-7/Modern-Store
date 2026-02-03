import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: process.env.NEXT_PUBLIC_BASE_URL
            ? `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`
            : 'https://loveandjoy.vercel.app/sitemap.xml', // Fallback or update with actual domain
    };
}
