import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

const llms = [
  {
    name: "GPT-4o",
  },
  {
    name: "GPT-4o-mini",
  },
  {
    name: "GPT-3.5-turbo",
  },
  {
    name: "Claude 3.5 Sonnet",
  },
];

const GuardIntro = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4 flex flex-col gap-y-8 items-center">
        <h2 className="text-3xl font-bold text-center">Identify Potential Risks</h2>
        <p className="text-xl text-gray-500">
          Your selected agents will inspect your AI products and identify potential risks proactively, giving you comprehensive insights into the content and behavior of your AI products. You can click the evaluate button to check out how our agents work and get a demo report.
        </p>

        <div className="flex flex-col w-full items-center gap-y-4">
          <div className="flex items-center gap-x-2">
            <label htmlFor="llm-select" className="text-sm font-medium text-gray-700">Select an LLM:</label>
            <Select.Root>
              <Select.Trigger id="llm-select" className="inline-flex items-center justify-center rounded px-4 py-2 text-sm leading-none gap-1 bg-white text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black">
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
            We will inspect the selected LLM with all the agents and give you a report.
          </p>
        </div>
        <Button className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-md transition-colors duration-300">Evaluate</Button>
      </div>
    </section>
  );
};

export default GuardIntro;