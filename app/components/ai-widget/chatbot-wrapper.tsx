'use client';
import { useState } from 'react';
import { AIButton } from './ai-button';
import ChatbotWidget from './chatbot-widget';

export const ChatbotWrapper = () => {
 const [isOpen, setIsOpen] = useState(false);
 const toggleChatbot = () => {
  setIsOpen(!isOpen);
 };
 return (
  <div>
   {!isOpen && <AIButton onClick={toggleChatbot} />}
   {isOpen && <ChatbotWidget onClose={() => setIsOpen(false)} />}
  </div>
 );
};
