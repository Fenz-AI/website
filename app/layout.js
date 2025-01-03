import localFont from "next/font/local";
import Script from "next/script";
import "@/globals.css";
import Header from "@/components/Header";

/*
const geistSans = localFont({
  src: "@/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "@/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
*/

export const metadata = {
  title: "Fenz AI | AI Safety Guardrails",
  description:
    "Evaluate your AI products and LLMs for safety and societal impact.",
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
      <body className="antialiased bg-gray-100 text-gray-900 flex flex-col min-h-screen">
        <Header />
        {children}
      </body>
    </html>
  );
}
