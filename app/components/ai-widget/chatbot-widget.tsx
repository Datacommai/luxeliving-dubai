'use client';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Send, X } from 'lucide-react';
import { generateText } from '@/lib/gemini/gemini';

export default function ChatbotWidget({ onClose }: { onClose: () => void }) {
 const [messages, setMessages] = useState([
  { text: 'Hello! How can I assist you today?', sender: 'bot' },
 ]);
 const [input, setInput] = useState('');
 const [isOpen, setIsOpen] = useState(true);

 const sendMessage = async () => {
  if (!input.trim()) return;

  const userMessage = { text: input, sender: 'user' };
  setMessages((prev) => [...prev, userMessage]);
  setInput('');

  const response = await generateText(input);
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const botMessage = {
   text: response,
   sender: 'bot',
  };
  setMessages((prev) => [...prev, botMessage]);
 };

 if (!isOpen) return null;

 return (
  <Card className="w-80 fixed bottom-5 right-5 shadow-lg rounded-xl">
   <div className="p-2 flex justify-between items-center border-b">
    <span className="text-sm font-semibold">LuxeLiving AI</span>
    <Button
     onClick={() => {
      setIsOpen(false);
      onClose();
     }}
     size="icon"
     variant="ghost">
     <X className="h-5 w-5" />
    </Button>
   </div>
   <CardContent className="p-4 flex flex-col gap-2 h-80 overflow-y-auto">
    {messages.map((msg, index) => (
     <div
      key={index}
      className={`p-2 rounded-lg text-sm max-w-xs ${
       msg.sender === 'user'
        ? 'bg-blue-500 text-white self-end'
        : 'bg-gray-200 text-gray-800 self-start'
      }`}>
      {msg.text}
     </div>
    ))}
   </CardContent>
   <div className="p-3 flex items-center gap-2 border-t">
    <Input
     value={input}
     onChange={(e) => setInput(e.target.value)}
     placeholder="Type a message..."
     className="flex-1"
    />
    <Button onClick={sendMessage} size="icon" variant="outline">
     <Send className="h-5 w-5" />
    </Button>
   </div>
  </Card>
 );
}
