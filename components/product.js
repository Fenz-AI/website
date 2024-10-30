import { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import Evaluation from "./evaluation";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Product = ({ id, name, apiKey, health, onDelete }) => {
  const router = useRouter();
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isEvaluateOpen, setIsEvaluateOpen] = useState(false);
  const [isEvaluateLoading, setIsEvaluateLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [selectedHealth, setSelectedHealth] = useState(health);
  const [protectionDuration, setProtectionDuration] = useState("");

  const getHealthBadge = (health) => {
    const colors = {
      good: "bg-green-500",
      warning: "bg-yellow-500",
      critical: "bg-red-500",
    };
    return <span className={`inline-block w-3 h-3 rounded-full ${colors[health]} mr-2`}></span>;
  };

  // Mock evaluation records
  const evaluationRecords = [
    { id: 1, result: health, date: "2023-04-15" },
    { id: 2, result: "warning", date: "2023-04-10" },
    { id: 3, result: "good", date: "2023-04-05" },
    { id: 4, result: "critical", date: "2023-03-30" },
    { id: 5, result: "good", date: "2023-03-25" },
  ];

  const handleEvaluateClick = useCallback(() => {
    setSelectedHealth(health);
    setIsEvaluateLoading(true);
    setProgress(0);
  }, [health]);

  const handleViewReport = useCallback((reportHealth) => {
    setSelectedHealth(reportHealth);
    setIsHistoryOpen(false);
    setIsEvaluateOpen(true);
  }, []);

  useEffect(() => {
    if (isEvaluateLoading) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval);
            setIsEvaluateLoading(false);
            setIsEvaluateOpen(true);
            return 0;
          }
          return prevProgress + 1;
        });
      }, 10); // Update every 100ms for a total of 10 seconds

      return () => clearInterval(interval);
    }
  }, [isEvaluateLoading]);

  useEffect(() => {
    if (health === "good") {
      const durations = ["2 weeks", "1 month", "3 months", "6 months", "1 year"];
      setProtectionDuration(durations[Math.floor(Math.random() * durations.length)]);
    }
  }, [health]);

  const handleChatClick = useCallback(() => {
    router.push("/chat");
  }, [router]);

  return (
    <Card className="h-full">
      <CardContent className="p-4">
        <div className="flex items-center mb-2">
          {getHealthBadge(health)}
          <h3 className="text-lg font-semibold">{name} {health === "good" ? "(Protected)" : ""}</h3>
        </div>
        <p className="text-sm text-gray-600 mb-2">API Key: {apiKey}</p>
        <Badge variant="outline" className="mb-2">
          {health === "good" ? "Healthy" : health === "warning" ? "Needs Attention" : "Critical"}
        </Badge>
        {health === "good" && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <p className="text-sm text-green-600 mt-2 cursor-help">
                  We have been protecting your product for {protectionDuration}
                </p>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  Your product has been working without any issues for the past {protectionDuration}.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </CardContent>
      <CardFooter className="flex justify-between items-center p-4">
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" className="p-0 h-auto">Edit</Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="p-0 h-auto text-red-500"
            onClick={() => onDelete(id)}
          >
            Delete
          </Button>
        </div>
        <div className="flex gap-2">
          <Dialog open={isHistoryOpen} onOpenChange={setIsHistoryOpen}>
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
                        onClick={() => handleViewReport(record.result)}
                      >
                        View Report
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            </DialogContent>
          </Dialog>
          <Button variant="outline" size="sm" onClick={handleChatClick}>Chat</Button>
          <Button 
            variant="default" 
            size="sm" 
            onClick={handleEvaluateClick}
            disabled={isEvaluateLoading}
          >
            Evaluate
          </Button>
          <Evaluation
            isOpen={isEvaluateOpen}
            onOpenChange={setIsEvaluateOpen}
            name={name}
            selectedHealth={selectedHealth}
            getHealthBadge={getHealthBadge}
          />
        </div>
      </CardFooter>
      {isEvaluateLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-64">
            <h3 className="text-lg font-semibold mb-4">Evaluating...</h3>
            <Progress value={progress} className="w-full" />
          </div>
        </div>
      )}
    </Card>
  );
};

export default Product;
