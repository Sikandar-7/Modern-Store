import type { Metadata } from "next";
import { Space_Mono, Sora, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/providers/SmoothScroll";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://loveandjoy.pk"),
  title: "Love & Joy - Quality Products with Cash on Delivery",
  description:
    "Buy premium quality Teddy Bears at Love & Joy. Available in Small (2.5 feet), Medium (3.5 feet), and Large (5.5 feet). Perfect gifts for loved ones. Cash on Delivery available on all orders.",

  keywords: [
    "Teddy Bears",
    "Soft Toys",
    "Gifts",
    "Love & Joy",
    "cash on delivery",
    "online store pakistan",
    "kids toys",
  ],
  alternates: {
    canonical: "https://loveandjoy.pk",
  },
  openGraph: {
    title: "Love & Joy - Premium Teddy Bears | Small, Medium & Large",
    description:
      "Buy premium quality Teddy Bears at Love & Joy. Available in 3 sizes: Small (2.5 feet), Medium (3.5 feet), Large (5.5 feet). Perfect gifts for loved ones. Cash on Delivery available.",
    type: "website",
    siteName: "Love & Joy",
    images: [
      {
        url: "/logo-v3.webp",
        width: 1200,
        height: 630,
        alt: "Love & Joy - Premium Teddy Bears",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceMono.variable} ${sora.variable} ${robotoCondensed.variable} font-sans antialiased`}>
        <div className="animated-bg"></div>
        <CartProvider>
          <div className="flex min-h-screen flex-col">
            {/* Announcement Bar */}
            <div className="w-full bg-[#8cfc03] text-black text-center py-2 text-sm font-bold tracking-wide font-sora">
              🎉 Free Delivery on all orders above Rs. 6,000! 🚚
            </div>
            <Navbar />
            <SmoothScroll />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
