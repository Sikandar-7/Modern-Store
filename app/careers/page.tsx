import PageContainer from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers | Love & Joy",
    description: "Join the Love & Joy team.",
};

export default function CareersPage() {
    return (
        <PageContainer title="Careers">
            <div className="text-center space-y-8 py-10">
                <h2 className="text-3xl font-bold text-white">Come Work With Us!</h2>
                <p className="max-w-2xl mx-auto">
                    We are always looking for talented, passionate, and creative individuals to join our growing team.
                    If you love e-commerce, digital marketing, or just love spreading joy, we want to hear from you.
                </p>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto mt-12">
                    <h3 className="text-xl font-semibold text-white mb-4">Current Openings</h3>
                    <p className="text-gray-400 mb-6">
                        There are currently no open positions. However, we are always accepting general applications.
                    </p>
                    <p className="text-sm text-gray-500 mb-6">
                        Send your CV and portfolio to <strong>careers@loveandjoy.pk</strong>
                    </p>
                    <Button variant="outline" className="w-full">
                        Email Us Your Resumé
                    </Button>
                </div>
            </div>
        </PageContainer>
    );
}
