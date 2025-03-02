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

const getLetterGrade = (violations) => {
  if (!violations && violations !== 0) return '';
  if (violations <= 10) return 'A';
  if (violations <= 20) return 'B';
  if (violations <= 30) return 'C';
  if (violations <= 60) return 'D';
  if (violations > 60) return 'F';
  return '';
};

const getGradeColor = (grade) => {
  switch (grade) {
    case 'A':
      return 'text-green-600 dark:text-green-400';
    case 'B':
    case 'C':
      return 'text-yellow-600 dark:text-yellow-400';
    default:
      return 'text-red-600 dark:text-red-400';
  }
};

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
            <TableRow>
              <TableHead></TableHead>
              <TableHead></TableHead>
              <TableHead></TableHead>
              <TableHead colSpan={8} className="text-center bg-blue-50 dark:bg-blue-950 font-bold">
                Safety Scores
              </TableHead>
              <TableHead></TableHead>
              <TableHead colSpan={3} className="text-center bg-red-50 dark:bg-red-950 font-bold">
                Regulations
              </TableHead>
              <TableHead></TableHead>
            </TableRow>
            <TableRow className="bg-gray-50 dark:bg-gray-900">
              <TableHead></TableHead>
              <TableHead className="font-bold">
                Company
              </TableHead>
              <TableHead className="font-bold">
                Model
              </TableHead>
              <TableHead className="text-center font-bold bg-blue-50 dark:bg-blue-950">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>Overall Score ⓘ</TooltipTrigger>
                    <TooltipContent>Aggregate safety score across all categories (0-100)</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableHead>
              <TableHead className="text-center bg-blue-50 dark:bg-blue-950">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>Self Harm ⓘ</TooltipTrigger>
                    <TooltipContent>Model&apos;s ability to prevent self-harm and suicide-related content</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableHead>
              <TableHead className="text-center bg-blue-50 dark:bg-blue-950">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>CSAM ⓘ</TooltipTrigger>
                    <TooltipContent>Prevention of child exploitation and abuse content</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableHead>
              <TableHead className="text-center bg-blue-50 dark:bg-blue-950">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>Violence ⓘ</TooltipTrigger>
                    <TooltipContent>Handling of violent content and hate speech</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableHead>
              <TableHead className="text-center bg-blue-50 dark:bg-blue-950">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>Weapons ⓘ</TooltipTrigger>
                    <TooltipContent>Prevention of illegal weapons-related content</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableHead>
              <TableHead className="text-center bg-blue-50 dark:bg-blue-950">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>Criminal ⓘ</TooltipTrigger>
                    <TooltipContent>Prevention of criminal planning and illegal activities</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableHead>
              <TableHead className="text-center bg-blue-50 dark:bg-blue-950">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>Sexual ⓘ</TooltipTrigger>
                    <TooltipContent>Handling of inappropriate sexual content</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableHead>
              <TableHead className="text-center bg-blue-50 dark:bg-blue-950">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>Discrimination ⓘ</TooltipTrigger>
                    <TooltipContent>Prevention of discriminatory content and bias</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableHead>
              <TableHead className="text-center font-bold">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>LMArena Score ⓘ</TooltipTrigger>
                    <TooltipContent>Performance score from LM Arena benchmarks</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableHead>
              <TableHead className="text-center bg-red-50 dark:bg-red-950">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>EU AI Act ⓘ</TooltipTrigger>
                    <TooltipContent>Compliance with European Union AI Act requirements</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableHead>
              <TableHead className="text-center bg-red-50 dark:bg-red-950">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>CO SB 24-205 ⓘ</TooltipTrigger>
                    <TooltipContent>Compliance with Colorado Senate Bill 24-205 on AI regulation</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableHead>
              <TableHead className="text-center bg-red-50 dark:bg-red-950">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>CA AI Act ⓘ</TooltipTrigger>
                    <TooltipContent>Compliance with California AI Transparency Act</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableHead>
              <TableHead className="text-center font-bold">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>License ⓘ</TooltipTrigger>
                    <TooltipContent>Model license type</TooltipContent>
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
                  <TableCell className="text-center w-12">
                    {item.rank_change > 0 && (
                      <span className="text-green-600 dark:text-green-400">▲{item.rank_change}</span>
                    )}
                    {item.rank_change < 0 && (
                      <span className="text-red-600 dark:text-red-400">▼{Math.abs(item.rank_change)}</span>
                    )}
                    {item.rank_change === 0 && (
                      <span className="text-gray-400">―</span>
                    )}
                  </TableCell>
                  <TableCell className="font-medium">
                    {item.company}
                  </TableCell>
                  <TableCell className="font-medium">
                    <a
                      href={item.url}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.product}
                    </a>
                  </TableCell>
                  {/* 90+ is green, 80-89 is yellow, 0-79 is red */}
                  <TableCell className={
                    `
                      text-center font-semibold bg-blue-50 dark:bg-blue-950
                      ${item.overall_score > 90 ? 'text-green-600 dark:text-green-400' : ''}
                      ${item.overall_score > 80 && item.overall_score < 90 ? 'text-yellow-600 dark:text-yellow-400' : ''}
                      ${item.overall_score < 80 ? 'text-red-600 dark:text-red-400' : ''}
                    `
                  }>
                    {item.overall_score}
                  </TableCell>
                  <TableCell className={`
                    text-center bg-blue-50 dark:bg-blue-950
                    ${item.suicide_self_harm > 90 ? 'text-green-600 dark:text-green-400' : ''}
                    ${item.suicide_self_harm > 80 && item.suicide_self_harm < 90 ? 'text-yellow-600 dark:text-yellow-400' : ''}
                    ${item.suicide_self_harm < 80 ? 'text-red-600 dark:text-red-400' : ''}
                  `}>{item.suicide_self_harm}</TableCell>
                  <TableCell className={`
                    text-center bg-blue-50 dark:bg-blue-950
                    ${item.child_pornography > 90 ? 'text-green-600 dark:text-green-400' : ''}
                    ${item.child_pornography > 80 && item.child_pornography < 90 ? 'text-yellow-600 dark:text-yellow-400' : ''}
                    ${item.child_pornography < 80 ? 'text-red-600 dark:text-red-400' : ''}
                  `}>{item.child_pornography}</TableCell>
                  <TableCell className={`
                    text-center bg-blue-50 dark:bg-blue-950
                    ${item.violence_hate > 90 ? 'text-green-600 dark:text-green-400' : ''}
                    ${item.violence_hate > 80 && item.violence_hate < 90 ? 'text-yellow-600 dark:text-yellow-400' : ''}
                    ${item.violence_hate < 80 ? 'text-red-600 dark:text-red-400' : ''}
                  `}>{item.violence_hate}</TableCell>
                  <TableCell className={`
                    text-center bg-blue-50 dark:bg-blue-950
                    ${item.illegal_weapons > 90 ? 'text-green-600 dark:text-green-400' : ''}
                    ${item.illegal_weapons > 80 && item.illegal_weapons < 90 ? 'text-yellow-600 dark:text-yellow-400' : ''}
                    ${item.illegal_weapons < 80 ? 'text-red-600 dark:text-red-400' : ''}
                  `}>{item.illegal_weapons}</TableCell>
                  <TableCell className={`
                    text-center bg-blue-50 dark:bg-blue-950
                    ${item.criminal_planning > 90 ? 'text-green-600 dark:text-green-400' : ''}
                    ${item.criminal_planning > 80 && item.criminal_planning < 90 ? 'text-yellow-600 dark:text-yellow-400' : ''}
                    ${item.criminal_planning < 80 ? 'text-red-600 dark:text-red-400' : ''}
                  `}>{item.criminal_planning}</TableCell>
                  <TableCell className={`
                    text-center bg-blue-50 dark:bg-blue-950
                    ${item.sexual_content > 90 ? 'text-green-600 dark:text-green-400' : ''}
                    ${item.sexual_content > 80 && item.sexual_content < 90 ? 'text-yellow-600 dark:text-yellow-400' : ''}
                    ${item.sexual_content < 80 ? 'text-red-600 dark:text-red-400' : ''}
                  `}>{item.sexual_content}</TableCell>
                  <TableCell className={`
                    text-center bg-blue-50 dark:bg-blue-950
                    ${item.lgbtq_discrimination > 90 ? 'text-green-600 dark:text-green-400' : ''}
                    ${item.lgbtq_discrimination > 80 && item.lgbtq_discrimination < 90 ? 'text-yellow-600 dark:text-yellow-400' : ''}
                    ${item.lgbtq_discrimination < 80 ? 'text-red-600 dark:text-red-400' : ''}
                  `}>{item.lgbtq_discrimination}</TableCell>
                  <TableCell className="text-center">
                    {item.lmarena_score}
                  </TableCell>
                  <TableCell className={`
                    text-center bg-red-50 dark:bg-red-950
                    ${getGradeColor(getLetterGrade(item.eu_ai_act))}
                  `}>
                    {getLetterGrade(item.eu_ai_act)}
                  </TableCell>
                  <TableCell className={`
                    text-center bg-red-50 dark:bg-red-950
                    ${getGradeColor(getLetterGrade(item.co_sb_24_205))}
                  `}>
                    {getLetterGrade(item.co_sb_24_205)}
                  </TableCell>
                  <TableCell className={`
                    text-center bg-red-50 dark:bg-red-950
                    ${getGradeColor(getLetterGrade(item.ca_ai_act))}
                  `}>
                    {getLetterGrade(item.ca_ai_act)}
                  </TableCell>
                  <TableCell className="text-center">
                    {item.license || "—"}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Leaderboard;
