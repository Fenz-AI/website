"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import AIDetectorInput from "@/components/ai-detector/input"
import AIDetectorResult from "@/components/ai-detector/result"
import splitText from "@/lib/splittext"

const AIDetectorPage = () => {
  const [text, setText] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [results, setResults] = useState(null);

  const onScanClick = async () => {
    if (!text || text.length === 0) {
      return;
    }
    const substrings = splitText(text);
    console.log("substrings", substrings);
    setIsScanning(true);
    
    try {
      const newResults = await Promise.all(substrings.map(async (substring) => {
        try {
          const response = await fetch("/api/predict/text", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
              document: substring.trim(),
            }),
          });
          if (!response.ok) {
            throw new Error('API request failed');
          }
          const data = await response.json();
          console.log("data", data);
          return { substring, isAI: data.data.documents[0].classification === "AI" };
        } catch (error) {
          console.error("Error processing substring:", error);
          return { substring: "An error occurred, please try again later.", isAI: true };
        }
      }));
      
      setResults(newResults);
    } catch (error) {
      console.error("Error in scan process:", error);
    } finally {
      setIsScanning(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">AI Detector</h1>
          <p className="text-gray-600 mb-6">Detect AI generated content</p>
        </div>
        <Link href="/">
          <Button variant="outline" className="opacity-80 hover:opacity-100 transition-all duration-300 text-lg">Go Back</Button>
        </Link>
      </div>
      <div className="flex-grow w-full flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-8">
        <AIDetectorInput onScanClick={onScanClick} text={text} setText={setText} isScanning={isScanning} />
        <AIDetectorResult results={results} />
      </div>
    </div>
  );
};

export default AIDetectorPage;
