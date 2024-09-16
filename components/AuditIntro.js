"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import * as Select from '@radix-ui/react-select';
import * as Progress from '@radix-ui/react-progress';
import * as Dialog from '@radix-ui/react-dialog';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import EvaluationDemo from "@/components/EvaluationDemo";

const llms = [
  {
    name: "GPT-4o",
  },
  {
    name: "GPT-4o-mini",
  },
  {
    name: "GPT-4",
  },
  {
    name: "GPT-3.5-turbo",
  },
  {
    name: "Claude-3.5-Sonnet",
  },
];

const AuditIntro = () => {
  const [selectedLLM, setSelectedLLM] = useState(llms[0].name);
  const [progress, setProgress] = useState(0);
  const [showDialog, setShowDialog] = useState(false);
  const [isEvaluationComplete, setIsEvaluationComplete] = useState(false);

  useEffect(() => {
    let interval;
    if (showDialog && !isEvaluationComplete) {
      const totalTime = Math.floor(Math.random() * (5 - 1 + 1) + 1) * 1000; // Random time between 1-5 seconds
      // const totalTime = Math.floor(Math.random() * (20 - 10 + 1) + 10) * 1000; // Random time between 10-20 seconds
      const steps = 100; // Total steps for progress
      const stepTime = totalTime / steps;

      interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval);
            setIsEvaluationComplete(true);
            return 100;
          }
          return prevProgress + 1;
        });
      }, stepTime);
    }
    return () => clearInterval(interval);
  }, [showDialog, isEvaluationComplete]);

  const onClick = () => {
    setProgress(0);
    setIsEvaluationComplete(false);
    setShowDialog(true);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4 flex flex-col gap-y-8 items-center">
        <h2 className="text-3xl font-bold text-center">Identify Potential Risks</h2>
        <p className="text-xl text-gray-500">
          Your selected agents will inspect your AI products and identify potential risks proactively, giving you comprehensive insights into the content and behavior of your AI products. You can click the evaluate button to check out how our agents work and get a demo report.
        </p>

        <div className="flex flex-col w-full items-center gap-y-4">
          <div className="flex items-center gap-x-4">
            <label htmlFor="llm-select" className="text-lg font-medium text-gray-700">Select an LLM:</label>
            <Select.Root value={selectedLLM} onValueChange={setSelectedLLM}>
              <Select.Trigger id="llm-select" className="inline-flex items-center justify-center rounded px-4 py-2 text-lg leading-none gap-1 bg-white text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black">
                <Select.Value placeholder="Choose LLM" />
                <Select.Icon>
                  <ChevronDownIcon />
                </Select.Icon>
              </Select.Trigger>

              <Select.Portal>
                <Select.Content className="overflow-hidden bg-white rounded-md shadow-lg">
                  <Select.ScrollUpButton className="flex items-center justify-center h-6 bg-white text-gray-700 cursor-default">
                    <ChevronUpIcon />
                  </Select.ScrollUpButton>
                  <Select.Viewport className="p-1">
                    {llms.map((llm) => (
                      <Select.Item key={llm.name} value={llm.name} className="relative flex items-center h-8 px-8 rounded-md text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none select-none">
                        <Select.ItemText>{llm.name}</Select.ItemText>
                      </Select.Item>
                    ))}
                  </Select.Viewport>
                  <Select.ScrollDownButton className="flex items-center justify-center h-6 bg-white text-gray-700 cursor-default">
                    <ChevronDownIcon />
                  </Select.ScrollDownButton>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>
          <p className="text-sm text-gray-500">
            We will inspect the selected LLM with all the agents and give you an AI-generated report.
          </p>
          <p className="text-sm text-gray-500">
            To inspect your AI products, you need to provide the API keys of your AI products.
          </p>
        </div>
        <Button className="bg-black hover:bg-gray-800 text-white text-md px-4 py-2 rounded-md transition-colors duration-300" onClick={onClick}>Evaluate</Button>

        <Dialog.Root open={showDialog} onOpenChange={setShowDialog}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 z-50" />
            <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-96 z-50">
              <Dialog.Title className="text-xl font-bold mb-4">
                {isEvaluationComplete ? "Evaluation Result" : "Evaluating..."}
              </Dialog.Title>
              {!isEvaluationComplete && (
                <>
                  <Progress.Root className="w-full h-4 overflow-hidden bg-gray-200 rounded-full mb-4">
                    <Progress.Indicator
                      className="h-full bg-black transition-all duration-500 ease-out"
                      style={{ width: `${progress}%` }}
                    />
                  </Progress.Root>
                  <p className="text-center">{progress}% Complete</p>
                </>
              )}
              {isEvaluationComplete && (
                <div className="w-full h-full flex flex-col gap-y-4">
                  <EvaluationDemo name={selectedLLM} />
                  <div className="flex justify-end space-x-2">
                    <Button variant="secondary" onClick={() => console.log("Download PDF")}>Download Analysis PDF</Button>
                    <Dialog.Close asChild>
                      <Button variant="default" onClick={() => setShowDialog(false)}>Close</Button>
                    </Dialog.Close>
                  </div>
                </div>
              )}
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </section>
  );
};

export default AuditIntro;