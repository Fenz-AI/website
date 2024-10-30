import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const History = ({ isOpen, onOpenChange, name, getHealthBadge, onViewReport }) => {
  // Mock evaluation records (moved from Product component)
  const evaluationRecords = [
    { id: 1, result: "good", date: "2023-04-15" },
    { id: 2, result: "warning", date: "2023-04-10" },
    { id: 3, result: "good", date: "2023-04-05" },
    { id: 4, result: "critical", date: "2023-03-30" },
    { id: 5, result: "good", date: "2023-03-25" },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">History</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Evaluation History for {name}</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <ul className="space-y-4">
            {evaluationRecords.map((record) => (
              <li key={record.id} className="flex items-center justify-between">
                <div className="flex items-center">
                  {getHealthBadge(record.result)}
                  <span className="font-medium">{record.date}</span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => onViewReport(record.result)}
                >
                  View Report
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default History;