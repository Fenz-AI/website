import localFont from "next/font/local";
import "@/globals.css";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "GPTDAO Guardrails",
  description: "Evaluate your AI products and LLMs for safety and societal impact.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 text-gray-900 flex flex-col min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
