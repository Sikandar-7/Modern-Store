import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Love & Joy - Quality Products with Cash on Delivery",
  description:
    "Shop the latest electronics, fashion, and home & living products at Love & Joy. Cash on Delivery available on all orders. Fast shipping and quality guaranteed.",
  keywords: [
    "online store",
    "Love & Joy",
    "cash on delivery",
    "electronics",
    "fashion",
    "home living",
    "COD",
  ],
  openGraph: {
    title: "Love & Joy - Quality Products with Cash on Delivery",
    description:
      "Shop the latest electronics, fashion, and home & living products at Love & Joy. Cash on Delivery available.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <CartProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
