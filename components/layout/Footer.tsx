import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t bg-muted/40 mt-auto">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold heading-border">Love & Joy</h3>
                        <p className="text-sm text-muted-foreground">
                            Your trusted online store for quality products with fast delivery
                            and Cash on Delivery options.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold heading-border">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="/products"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    All Products
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/products?category=Electronics"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Electronics
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/products?category=Fashion"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Fashion
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/products?category=Home%20%26%20Living"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Home & Living
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold heading-border">Contact Us</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="https://wa.me/923264379003"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-500 hover:text-green-400 transition-colors flex items-center gap-2"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                    WhatsApp: +92 326 4379003
                                </a>
                            </li>
                            <li className="text-muted-foreground">
                                Email: sikandar8sa@gmail.com
                            </li>
                        </ul>
                    </div>

                    {/* COD Policy */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold heading-border">Payment</h3>
                        <div className="space-y-3 pt-1">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full shadow-sm hover:bg-white/20 transition-colors cursor-default">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#8cfc03" // Parrot Green
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-truck"
                                >
                                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                                    <path d="M15 18H9" />
                                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
                                    <circle cx="17" cy="18" r="2" />
                                    <circle cx="7" cy="18" r="2" />
                                </svg>
                                <span className="font-bold text-[#8cfc03] text-sm animate-pulse-slow cod-text"> {/* Parrot Green + Pulse Animation */}
                                    COD available
                                </span>
                            </div>
                            <p className="text-muted-foreground text-xs pl-1">
                                Pay when you receive your order
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 pt-8 border-t text-center text-sm text-white">
                    <p>
                        &copy; {new Date().getFullYear()} Love & Joy. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
