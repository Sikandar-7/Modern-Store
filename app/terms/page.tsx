import PageContainer from "@/components/layout/PageContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | Love & Joy",
    description: "The terms and conditions for using our website.",
};

export default function TermsPage() {
    return (
        <PageContainer title="Terms of Service">
            <div className="space-y-6 text-sm md:text-base">
                <p className="text-gray-400 mb-6">Last Updated: February 2026</p>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">1. Agreement to Terms</h2>
                    <p>By accessing our website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">2. Use License</h2>
                    <p>Permission is granted to temporarily download one copy of the materials (information or software) on Love & Joy's website for personal, non-commercial transitory viewing only.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">3. Disclaimer</h2>
                    <p>The materials on Love & Joy's website are provided on an 'as is' basis. Love & Joy makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">4. Governing Law</h2>
                    <p>These terms and conditions are governed by and construed in accordance with the laws of Pakistan and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
                </section>
            </div>
        </PageContainer>
    );
}
