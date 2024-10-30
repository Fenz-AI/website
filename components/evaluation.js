import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { saveAs } from 'file-saver';

const topics = [
  "Violence & Hate",
  "Sexual Content",
  "Criminal Planning",
  "Illegal Weapons",
  "Regulated Substances",
  "Suicide & Self-Harm",
  "Safe"
];

const mockReports = {
  good: topics.map((topic, index) => ({
    topic,
    score: index === 6 ? 85 : Math.floor(Math.random() * (100 - 90) + 90)
  })),
  warning: topics.map((topic, index) => {
    if (index < 2) return { topic, score: Math.floor(Math.random() * (100 - 90) + 90) };
    if (index === 6) return { topic, score: Math.floor(Math.random() * (70 - 60) + 60) };
    return { topic, score: Math.floor(Math.random() * (90 - 70) + 70) };
  }),
  critical: topics.map((topic, index) => {
    if (index < 2) return { topic, score: Math.floor(Math.random() * (100 - 90) + 90) };
    if (index >= 5) return { topic, score: Math.floor(Math.random() * (60 - 40) + 40) };
    return { topic, score: Math.floor(Math.random() * (90 - 70) + 70) };
  })
};

const getDescription = (score) => {
  if (score >= 90) return "Minimal risk detected. Content appears safe and compliant.";
  if (score >= 70) return "Low risk identified. Minor concerns present, but generally acceptable.";
  if (score >= 60) return "Moderate risk detected. Some concerning elements require attention.";
  return "High risk identified. Significant issues present, immediate action recommended.";
};

const EvaluationModal = ({ isOpen, onOpenChange, name, selectedHealth, getHealthBadge }) => {
  const [expandedTopics, setExpandedTopics] = useState({});

  const toggleTopic = (topic) => {
    setExpandedTopics(prev => ({ ...prev, [topic]: !prev[topic] }));
  };

  const onDownload = () => {
    fetch('/files/audit_report_sample.pdf')
      .then(response => response.blob())
      .then(blob => {
        saveAs(blob, `${name}_audit_report.pdf`);
      })
      .catch(error => {
        console.error('Error downloading the file:', error);
      });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[80%]">
        <DialogHeader>
          <DialogTitle>Evaluate {name}</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <div className="flex items-center mb-4">
            <span className="font-medium mr-2">Overall Health State:</span>
            {getHealthBadge(selectedHealth)}
            <span className="capitalize">{selectedHealth}</span>
          </div>
          {/* Show scores and descriptions */}
          <div className="space-y-4">
            {mockReports[selectedHealth].map(({ topic, score }) => (
              <div key={topic} className="border-b pb-2">
                <div className="flex justify-between items-center mb-2 cursor-pointer" onClick={() => toggleTopic(topic)}>
                  <span className="font-medium">{topic}</span>
                  <div className="flex items-center">
                    <span className={`font-semibold mr-2 ${
                      score >= 90 ? "text-green-600" :
                        score >= 70 ? "text-yellow-600" :
                          score >= 60 ? "text-orange-600" : "text-red-600"
                    }`}>
                      {score}
                    </span>
                    {expandedTopics[topic] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>
                {expandedTopics[topic] && (
                  <>
                    <Progress 
                      value={score} 
                      className={`h-2 ${
                        score >= 90 ? "bg-green-200" :
                          score >= 70 ? "bg-yellow-200" :
                            score >= 60 ? "bg-orange-200" : "bg-red-200"
                      }`}
                      indicatorClassName={`${
                        score >= 90 ? "bg-green-600" :
                          score >= 70 ? "bg-yellow-600" :
                            score >= 60 ? "bg-orange-600" : "bg-red-600"
                      }`}
                    />
                    <p className="text-sm text-gray-600 mt-2">{getDescription(score)}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end space-x-2">
          <Button variant="secondary" onClick={onDownload}>
            Download Analysis PDF
          </Button>
          <Button variant="default" onClick={() => onOpenChange(false)}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EvaluationModal;