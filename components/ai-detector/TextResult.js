import React from 'react';

const TextResult = ({ results }) => {
  if (!results) {
    return null;
  }

  const totalLength = results.reduce((sum, result) => sum + result.sentence.length, 0);
  const aiCount = results.filter(result => result.isAI).reduce((sum, result) => sum + result.sentence.length, 0);
  const aiRate = (aiCount / totalLength) * 100;

  return (
    <div className="w-full h-full text-left whitespace-pre-wrap">
      {results.length > 0 && (
        <div className="whitespace-pre-wrap">
          {results.map((result, index) => (
              <span
                key={index}
                className={`${
                  result.isAI ? 'bg-red-200' : 'bg-green-200'
                } inline`}
              >
                {result.sentence}
              </span>
            ))}
        </div>
      )}
      <div className="w-full text-right font-bold">
        AI Rate: {aiRate.toFixed(2)}%
      </div>
    </div>
  );
}

export default TextResult;