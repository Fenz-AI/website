import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import data from "@/public/data/leaderboard.json";

const Leaderboard = () => {
  return (
    <div className="w-full px-4 py-12 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
        AI Safety Leaderboard
      </h1>
      <p className="text-lg text-center mb-12 text-gray-600 dark:text-gray-400">
        Tracking and comparing AI models&apos; ability to handle sensitive content and maintain ethical boundaries. 
        Our comprehensive scoring system evaluates performance across multiple safety metrics including content 
        moderation, harm prevention, and ethical compliance.
      </p>
      <div className="max-w-7xl mx-auto rounded-lg border shadow-sm bg-white dark:bg-gray-950">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50 dark:bg-gray-900">
              <TableHead className="w-[180px] font-bold">Company</TableHead>
              <TableHead className="font-bold">Product</TableHead>
              <TableHead className="text-right font-bold">Overall Score</TableHead>
              <TableHead className="text-right">Self Harm</TableHead>
              <TableHead className="text-right">CSAM</TableHead>
              <TableHead className="text-right">Violence</TableHead>
              <TableHead className="text-right">Weapons</TableHead>
              <TableHead className="text-right">Criminal</TableHead>
              <TableHead className="text-right">Sexual</TableHead>
              <TableHead className="text-right">Discrimination</TableHead>
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
                  <TableCell className={`text-right ${item.suicide_self_harm > 0 ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}>{item.suicide_self_harm}</TableCell>
                  <TableCell className={`text-right ${item.child_pornography > 0 ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}>{item.child_pornography}</TableCell>
                  <TableCell className={`text-right ${item.violence_hate > 0 ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}>{item.violence_hate}</TableCell>
                  <TableCell className={`text-right ${item.illegal_weapons > 0 ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}>{item.illegal_weapons}</TableCell>
                  <TableCell className={`text-right ${item.criminal_planning > 0 ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}>{item.criminal_planning}</TableCell>
                  <TableCell className={`text-right ${item.sexual_content > 0 ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}>{item.sexual_content}</TableCell>
                  <TableCell className={`text-right ${item.lgbtq_discrimination > 0 ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}>{item.lgbtq_discrimination}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Leaderboard;
