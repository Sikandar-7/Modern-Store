import PageContainer from "@/components/layout/PageContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Story | Love & Joy",
    description: "The journey of Love & Joy.",
};

export default function StoryPage() {
    return (
        <PageContainer title="Our Story">
            <div className="space-y-6">
                <p className="text-lg italic text-gray-300 border-l-4 border-primary pl-4">
                    "It started with a simple idea: Happiness should be huggable."
                </p>

                <h2 className="text-2xl font-semibold text-white mt-8">The Beginning</h2>
                <p>
                    Love & Joy wasn't built in a boardroom. It was born from a desire to find the perfect gift—something that wasn't just a product, but a feeling. We realized that in a digital world, tangible tokens of affection were becoming rare. We wanted to change that.
                </p>

                <h2 className="text-2xl font-semibold text-white mt-8">Why Teddy Bears?</h2>
                <p>
                    Why not? A teddy bear is timeless. It crosses generations, languages, and cultures. It says "I love you," "I'm sorry," "Congratulations," and "Get well soon" without uttering a single word. But we didn't want just any bears. We wanted the softest, most durable, and most beautifully designed bears in Pakistan.
                </p>

                <h2 className="text-2xl font-semibold text-white mt-8">Looking Ahead</h2>
                <p>
                    Today, we are proud to be a growing name in the gifting industry. But our core mission remains the same: to deliver joy, one parcel at a time. Thank you for being part of our story.
                </p>
            </div>
        </PageContainer>
    );
}
