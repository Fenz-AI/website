"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import AIDetectorInput from "@/components/ai-detector/input"
import AIDetectorResult from "@/components/ai-detector/result"

const AIDetectorPage = () => {
  const [text, setText] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState(null);
  const onScanClick = async () => {
    if (!text || text.length === 0) {
      return;
    }
    setIsScanning(true);
    try {
      const response = await fetch("/api/predict/text", {
        method: "POST",
        body: JSON.stringify({ 
          document: text,
        }),
      });
      const data = await response.json();
      console.log(data.data);
      const results = data.data.documents.map((doc) => doc.classification);
      setResult(results.includes("AI") && results.includes("Human") ? "Mixed" : results.includes("AI") ? "AI" : "Human");
      setIsScanning(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">AI Detector</h1>
          <p className="text-gray-600 mb-6">Detect AI generated content</p>
        </div>
        <Link href="/">
          <Button variant="outline">Back to Home</Button>
        </Link>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
        <AIDetectorInput onScanClick={onScanClick} text={text} setText={setText} isScanning={isScanning} />
        <AIDetectorResult result={result} />
      </div>
    </div>
  );
};

export default AIDetectorPage;