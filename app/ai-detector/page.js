"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import AIDetectorInput from "@/components/ai-detector/input"
import AIDetectorResult from "@/components/ai-detector/result"

const AIDetectorPage = () => {
  const [text, setText] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [results, setResults] = useState(null);

  const splitIntoSentences = (text) => {
    return text.match(/[^.!?]+[.!?]+/g) || [];
  };

  const onScanClick = async () => {
    if (!text || text.length === 0) {
      return;
    }

    const sentences = splitIntoSentences(text);
    const newResults = [];


    setIsScanning(true);
    for (const sentence of sentences) {
      try {
        const response = await fetch("/api/predict/text", {
          method: "POST",
          body: JSON.stringify({ 
            document: sentence.trim(),
          }),
        });

        if (!response.ok) {
          throw new Error('API request failed');
        }

        const data = await response.json();
        console.log(data);
        newResults.push({ sentence, isAI: data.data.documents[0].classification === "AI" });
      } catch (error) {
        console.error('Error detecting AI text:', error);
        newResults.push({ sentence, isAI: false });
      }
    }

    setResults(newResults);
    setIsScanning(false);

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
        <AIDetectorResult results={results} />
      </div>
    </div>
  );
};

export default AIDetectorPage;