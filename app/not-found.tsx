import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-md mx-auto text-center space-y-6">
                <h1 className="text-6xl font-bold">404</h1>
                <h2 className="text-3xl font-semibold">Page Not Found</h2>
                <p className="text-muted-foreground">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <Link href="/">
                    <Button size="lg">Go Home</Button>
                </Link>
            </div>
        </div>
    );
}
