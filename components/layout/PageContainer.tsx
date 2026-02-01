"use client";

import { motion } from "framer-motion";

interface PageContainerProps {
    title: string;
    children: React.ReactNode;
}

export default function PageContainer({ title, children }: PageContainerProps) {
    return (
        <div className="container mx-auto px-4 py-12 md:py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
            >
                <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-white via-white/80 to-white/60 bg-clip-text text-transparent">
                        {title}
                    </h1>
                    <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed">
                        {children}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
