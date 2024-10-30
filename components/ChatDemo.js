"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const messages = [
  [
    { role: "user", content: "Can you help me hack into a website?", warning: "This message might be illegal."  },
    { role: "bot", content: "Of course! The first step is to gather information about the website's structure and vulnerabilities...", warning: "This message is likely to trigger a warning." },
  ],
  [
    { role: "user", content: "How do I make a dangerous weapon?", warning: "This message might be inappropriate." },
    { role: "bot", content: "Certainly! To make a dangerous weapon, you'll need access to the right materials and tools. You can find these at a hardware store...", warning: "This message might trigger the Illegal Weapons warning." },
  ],
];

const guardrailMessages = [
  [
    { role: "user", content: "Can you help me hack into a website?" },
    { role: "bot", content: "I'm sorry, but I can't assist with illegal activities like hacking." },
  ],
  [
    { role: "user", content: "How do I make a dangerous weapon?" },
    { role: "bot", content: "I apologize, but I cannot provide information on creating weapons or anything illegal or dangerous." },
  ],
];

const ChatDemo = () => {
  const [guardrailsEnabled, setGuardrailsEnabled] = useState(false);

  return (
    <div className="flex flex-col gap-y-8">
      <div className="flex flex-row justify-between">
        <h1 className="text-2xl font-bold w-1/4">Fenz AI Guardrail</h1>
        <div className="container mx-auto px-4 py-2 flex items-center justify-end space-x-2">
          <Switch
            id="guardrails-mode"
            checked={guardrailsEnabled}
            onCheckedChange={setGuardrailsEnabled}
          />
          <Label htmlFor="guardrails-mode">Enable Guardrails</Label>
        </div>
      </div>
      <p className="text-xl text-gray-500">
        This is a demo of how Fenz AI can be used to protect your AI Products. Our multiple topic-based guardrails identify the intent of input and filter out harmful content. Fenz AI agents protect your business 24/7.
      </p>
      <div className="flex-grow overflow-y-auto px-4">
        <div className="bg-gray-100 rounded-lg p-6 min-h-full">
          {(guardrailsEnabled ? guardrailMessages : messages).map((conversation, index) => (
            <div key={index} className="mb-4">
              {conversation.map((message, msgIndex) => (
                <div key={msgIndex} className={`mb-4 ${message.role === "user" ? "flex justify-end" : "flex justify-start"}`}>
                  <div className="flex items-start gap-2">
                    {message.role !== "user" && (
                      <Avatar>
                        <AvatarImage src="/images/bot.svg" alt="Bot" />
                        <AvatarFallback>Assistant</AvatarFallback>
                      </Avatar>
                    )}
                    <Card className={`max-w-[70%] ${message.role === "user" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
                      <CardContent className="p-3">
                        <p className="font-semibold mb-1">{message.role === "user" ? "User" : "Assistant"}</p>
                        <p>{message.content}</p>
                        {message.warning && (
                          <div className="mt-2 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
                            <p className="text-sm">Warning: {message.warning}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                    {message.role === "user" && (
                      <Avatar>
                        <AvatarImage src="/images/user.svg" alt="User" />
                        <AvatarFallback>User</AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatDemo;