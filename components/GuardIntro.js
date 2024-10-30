import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import ChatDemo from "@/components/ChatDemo";

const GuardIntro = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Protect Your AI Products</h2>
        <ChatDemo />
      </div>
    </section>
  );
};

export default GuardIntro;