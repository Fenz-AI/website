import Script from "next/script";
import "@/globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export const metadata = {
  title: "Fenz AI | AI Safety Guardrails",
  description: "Evaluate your AI products and LLMs for safety and societal impact.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="lazyOnload"
          src="https://tally.so/widgets/embed.js"
          crossOrigin="anonymous"
        />
        <Script strategy="lazyOnload" id="tally-config">
          {`
          window.TallyConfig = {
            "formId": "nrLkBv",
            "popup": {
              "width": 480,
              "emoji": {
                "text": "👋",
                "animation": "wave"
              },
              "overlay": true
            }
          };
          `}
        </Script>
      </head>
      <body
        className="w-full antialiased bg-gray-100 text-gray-900 flex flex-col min-h-screen items-center"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
