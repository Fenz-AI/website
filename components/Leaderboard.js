import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Tooltip, 
  TooltipTrigger, 
  TooltipContent, 
  TooltipProvider 
} from "@/components/ui/tooltip";
import data from "@/public/data/leaderboard.json";

const Leaderboard = () => {
  return (
    <div className="w-full px-4 py-12 bg-gray-50">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
        AI Safety Leaderboard
      </h1>
      <p className="text-lg text-center mb-12 text-gray-600 dark:text-gray-400">
        Tracking and comparing AI models&apos; ability to handle sensitive content and maintain ethical boundaries. 
        Our comprehensive scoring system evaluates performance across multiple safety metrics including content 
        moderation, harm prevention, and ethical compliance.
      </p>
      <div className="max-w-9xl mx-auto rounded-lg border shadow-sm bg-white dark:bg-gray-950">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50 dark:bg-gray-900">
              <TableHead className="w-[180px] font-bold">
                Company
              </TableHead>
              <TableHead className="font-bold">
                Product
              </TableHead>
              <TableHead className="text-right font-bold">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>Overall Score ⓘ</TooltipTrigger>
                    <TooltipContent>Aggregate safety score across all categories (0-100)</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableHead>
              <TableHead className="text-right">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>Self Harm ⓘ</TooltipTrigger>
                    <TooltipContent>Model's ability to prevent self-harm and suicide-related content</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableHead>
              <TableHead className="text-right">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>CSAM ⓘ</TooltipTrigger>
                    <TooltipContent>Prevention of child exploitation and abuse content</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableHead>
              <TableHead className="text-right">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>Violence ⓘ</TooltipTrigger>
                    <TooltipContent>Handling of violent content and hate speech</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableHead>
              <TableHead className="text-right">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>Weapons ⓘ</TooltipTrigger>
                    <TooltipContent>Prevention of illegal weapons-related content</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableHead>
              <TableHead className="text-right">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>Criminal ⓘ</TooltipTrigger>
                    <TooltipContent>Prevention of criminal planning and illegal activities</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableHead>
              <TableHead className="text-right">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>Sexual ⓘ</TooltipTrigger>
                    <TooltipContent>Handling of inappropriate sexual content</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableHead>
              <TableHead className="text-right">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>Discrimination ⓘ</TooltipTrigger>
                    <TooltipContent>Prevention of discriminatory content and bias</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data
              .sort((a, b) => b.overall_score - a.overall_score)
              .map((item) => (
                <TableRow 
                  key={`${item.company}_${item.product}`}
                  className="hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                >
                  <TableCell className="font-medium">
                    <a
                      href={item.url}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.company}
                    </a>
                  </TableCell>
                  <TableCell>{item.product}</TableCell>
                  {/* 90+ is green, 80-89 is yellow, 0-79 is red */}
                  <TableCell className={
                    `
                      text-right font-semibold 
                      ${item.overall_score > 90 ? 'text-green-600 dark:text-green-400' : ''}
                      ${item.overall_score > 80 && item.overall_score < 90 ? 'text-yellow-600 dark:text-yellow-400' : ''}
                      ${item.overall_score < 80 ? 'text-red-600 dark:text-red-400' : ''}
                    `
                  }>
                    {item.overall_score}
                  </TableCell>
                  <TableCell className={`
                    text-right
                    ${item.suicide_self_harm > 90 ? 'text-green-600 dark:text-green-400' : ''}
                    ${item.suicide_self_harm > 80 && item.suicide_self_harm < 90 ? 'text-yellow-600 dark:text-yellow-400' : ''}
                    ${item.suicide_self_harm < 80 ? 'text-red-600 dark:text-red-400' : ''}
                  `}>{item.suicide_self_harm}</TableCell>
                  <TableCell className={`
                    text-right
                    ${item.child_pornography > 90 ? 'text-green-600 dark:text-green-400' : ''}
                    ${item.child_pornography > 80 && item.child_pornography < 90 ? 'text-yellow-600 dark:text-yellow-400' : ''}
                    ${item.child_pornography < 80 ? 'text-red-600 dark:text-red-400' : ''}
                  `}>{item.child_pornography}</TableCell>
                  <TableCell className={`
                    text-right
                    ${item.violence_hate > 90 ? 'text-green-600 dark:text-green-400' : ''}
                    ${item.violence_hate > 80 && item.violence_hate < 90 ? 'text-yellow-600 dark:text-yellow-400' : ''}
                    ${item.violence_hate < 80 ? 'text-red-600 dark:text-red-400' : ''}
                  `}>{item.violence_hate}</TableCell>
                  <TableCell className={`
                    text-right
                    ${item.illegal_weapons > 90 ? 'text-green-600 dark:text-green-400' : ''}
                    ${item.illegal_weapons > 80 && item.illegal_weapons < 90 ? 'text-yellow-600 dark:text-yellow-400' : ''}
                    ${item.illegal_weapons < 80 ? 'text-red-600 dark:text-red-400' : ''}
                  `}>{item.illegal_weapons}</TableCell>
                  <TableCell className={`
                    text-right
                    ${item.criminal_planning > 90 ? 'text-green-600 dark:text-green-400' : ''}
                    ${item.criminal_planning > 80 && item.criminal_planning < 90 ? 'text-yellow-600 dark:text-yellow-400' : ''}
                    ${item.criminal_planning < 80 ? 'text-red-600 dark:text-red-400' : ''}
                  `}>{item.criminal_planning}</TableCell>
                  <TableCell className={`
                    text-right
                    ${item.sexual_content > 90 ? 'text-green-600 dark:text-green-400' : ''}
                    ${item.sexual_content > 80 && item.sexual_content < 90 ? 'text-yellow-600 dark:text-yellow-400' : ''}
                    ${item.sexual_content < 80 ? 'text-red-600 dark:text-red-400' : ''}
                  `}>{item.sexual_content}</TableCell>
                  <TableCell className={`
                    text-right
                    ${item.lgbtq_discrimination > 90 ? 'text-green-600 dark:text-green-400' : ''}
                    ${item.lgbtq_discrimination > 80 && item.lgbtq_discrimination < 90 ? 'text-yellow-600 dark:text-yellow-400' : ''}
                    ${item.lgbtq_discrimination < 80 ? 'text-red-600 dark:text-red-400' : ''}
                  `}>{item.lgbtq_discrimination}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Leaderboard;
