import PageContainer from "@/components/layout/PageContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Love & Joy",
    description: "How we collect, use, and protect your data.",
};

export default function PrivacyPage() {
    return (
        <PageContainer title="Privacy Policy">
            <div className="space-y-6 text-sm md:text-base">
                <p className="text-gray-400 mb-6">Last Updated: February 2026</p>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
                    <p>Love & Joy ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">2. Data We Collect</h2>
                    <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li><strong>Identity Data:</strong> name, username or similar identifier.</li>
                        <li><strong>Contact Data:</strong> billing address, delivery address, email address and telephone numbers.</li>
                        <li><strong>Transaction Data:</strong> details about payments to and from you and other details of products you have purchased from us.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Data</h2>
                    <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., delivering your order).</li>
                        <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">4. Data Security</h2>
                    <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.</p>
                </section>
            </div>
        </PageContainer>
    );
}
