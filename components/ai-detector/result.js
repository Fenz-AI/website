import * as Tabs from '@radix-ui/react-tabs';
import TextResult from './TextResult';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from '@radix-ui/react-icons';

const AIDetectorResult = ({ results }) => {
  return (
    <div className="flex-grow w-full md:w-1/2 border border-gray-300 rounded-md p-4">
      <Tabs.Root
        className="flex flex-col w-full h-full"
        defaultValue="result"
      >
        <Tabs.List className="flex shrink-0 border-b border-gray-300" aria-label="AI Detection Results">
          <Tabs.Trigger
            className="px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-gray-600 select-none hover:text-gray-900 data-[state=active]:text-indigo-600 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
            value="result"
          >
            Result
          </Tabs.Trigger>
          <Tabs.Trigger
            className="px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-gray-600 select-none hover:text-gray-900 data-[state=active]:text-indigo-600 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
            value="analysis"
          >
            Analysis
          </Tabs.Trigger>
          <Tabs.Trigger
            className="px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-gray-600 select-none hover:text-gray-900 data-[state=active]:text-indigo-600 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
            value="suggestions"
          >
            Suggestions
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content
          className="flex-grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-indigo-600 overflow-auto" // Added flex-grow and overflow-auto
          value="result"
        >
          <TextResult results={results} />
        </Tabs.Content>
        <Tabs.Content
          className="flex-grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-indigo-600 overflow-auto"
          value="analysis"
        >
          <p>This feature is coming soon!</p>
        </Tabs.Content>
        <Tabs.Content
          className="flex-grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-indigo-600 overflow-auto"
          value="suggestions"
        >
          <p>This feature is coming soon!</p>
        </Tabs.Content>
        <div className="mt-4 w-full flex justify-end">
          <Button variant="outline">
            Get Full Report <ArrowRightIcon className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </Tabs.Root>
    </div>
  );
};

export default AIDetectorResult;