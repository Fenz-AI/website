import React, { useState, useEffect } from 'react';

const TextResult = ({ results }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [aiRate, setAiRate] = useState(0);

  useEffect(() => {
    if (!results || results.length === 0) {
      setDisplayedText('');
      setAiRate(0);
      return;
    }

    let totalLength = 0;
    let aiCount = 0;
    let displayText = '';

    const animateText = async () => {
      for (const result of results) {
        for (let i = 0; i < result.substring.length; i++) {
          displayText += result.substring[i];
          setDisplayedText(displayText);
          await new Promise(resolve => setTimeout(resolve, 20)); // Adjust speed here
        }
        totalLength += result.substring.length;
        if (result.isAI) {
          aiCount += result.substring.length;
        }
        setAiRate((aiCount / totalLength) * 100);
      }
    };

    animateText();
  }, [results]);

  if (!results) {
    return null;
  }

  return (
    <div className="h-full flex flex-col text-lg">
      <div className="flex-grow overflow-y-auto whitespace-pre-wrap">
        {displayedText.split('').map((char, index) => {
          const resultIndex = results.findIndex(result => 
            index < result.substring.length + (results.slice(0, results.indexOf(result)).reduce((sum, r) => sum + r.substring.length, 0))
          );
          const isAI = results[resultIndex]?.isAI;
          return (
            <span key={index} className={`${isAI ? 'bg-red-200' : 'bg-green-200'}`}>
              {char}
            </span>
          );
        })}
      </div>
      <div className="text-right font-bold mt-2">
        AI Rate: {aiRate.toFixed(2)}%
      </div>
    </div>
  );
}

export default TextResult;