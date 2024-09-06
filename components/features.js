import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "AI Product Inspection & Audit",
    description: "Comprehensive evaluation of your AI agents and LLMs for safety and societal impact. Our detailed reports cover a wide range of topics to ensure your products meet the highest standards.",
    icon: "/images/inspect.svg"
  },
  {
    title: "Conversation Safety Protection",
    description: "Safeguard interactions between your AI products and users. Our advanced filters ensure all conversations remain healthy, appropriate, and secure.",
    icon: "/images/security.svg"
  },
  {
    title: "Easy Integration & Customization",
    description: "Focus on your core product development while we handle content moderation. Our guardrails seamlessly integrate to filter inappropriate content, allowing you to maintain a safe user environment.",
    icon: "/images/good.svg"
  },
  {
    title: "Flexible Pricing Plans",
    description: "Tailor our services to your specific needs with customizable plans at competitive prices. Scale your AI safety measures alongside your business growth.",
    icon: "/images/price.svg"
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center space-x-4">
                <Image src={feature.icon} alt={feature.title} width={40} height={40} />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;