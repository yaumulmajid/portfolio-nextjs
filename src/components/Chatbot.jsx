import React, { useState, useEffect, useRef } from 'react';
import { Send, Minimize2, Maximize2, User, MessageSquare, X, Mail, Github, Linkedin, Globe, Phone } from 'lucide-react';

export function ChatBot() {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: `Hello! 👋 I'm Majid Assistant.

I can tell you about :

• Skills & Tech Stack 🚀
• Education 🎓
• Work Experience 👨‍💻
• Contact Info 📱

What would you like to know ?`
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const getBotResponse = (message) => {
    const lowerMsg = message.toLowerCase();
    
    if (lowerMsg.includes('skill') || lowerMsg.includes('tech')) {
      return `🚀 Technical Skills:

Frontend Development
• React/Next.js Expert
• TailwindCSS Specialist
• TypeScript/JavaScript
• Flutter

Backend Development
• Java/Springboot
• PHP/Laravel
• RESTful APIs 

DevOps & Tools
• Docker/Kubernetes
• AWS
• CI/CD (Jenkins, GitHub Actions)

Would you like to know more about any specific skill ?`;
    }
    
    if (lowerMsg.includes('education') || lowerMsg.includes('study')) {
      return `🎓 Education:

• Mercubuana University
  - Bachelor of Information Technology
  - 2019 - 2023
  - Final GPA: 3.89/4.0

• Relevant Course Work
  - Software Engineering
  - Web Development
  - Database Management
  - Computer Networks

• Certifications
  - AWS Certified Developer`;
    }
    
    if (lowerMsg.includes('experience') || lowerMsg.includes('work')) {
      return `👨‍💻 Work Experience:

1. Software Engineer | PT. Indivara Group
   2023 - Present
   • Development of enterprise applications
   • Optimized system performance
   • Mentored junior developers

2. Freelance Developer
   2020 - Present
   • Developed custom solutions
   • Managed client relationships
   • Delivered multiple successful projects`;
    }
    
    if (lowerMsg.includes('contact') || lowerMsg.includes('connect')) {
      return `📱 Let's Connect!

• Email: yaumulmajid@gmail.com
• LinkedIn: yaumulmajid
• GitHub: github.com/yaumulmajid
• Whatsapps: +62 81282132875 

I'm always open to discussing:
• Project Collaborations
• Job Opportunities
• Technical Discussions

Feel free to reach out!`;
    }
    
    // Default response if no specific category is matched
    return `I can tell you about :

• Skills & Tech Stack 🚀
• Education 🎓
• Work Experience 👨‍💻
• Contact Info 📱

What would you like to know more about ?`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = { type: 'user', content: inputMessage };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    
    // Show typing indicator
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsTyping(false);

    // Add bot response
    const response = getBotResponse(inputMessage);
    const botMessage = { type: 'bot', content: response };
    setMessages(prev => [...prev, botMessage]);
  };
  const MessageContent = ({ content, type }) => {
    const createClickableLinks = (text) => {
      if (!text.includes("Let's Connect")) return text;
  
      return (
        <div className="space-y-4">
          <p>📱 Let's Connect!</p>
          
          <div className="space-y-2">
            <a 
              href="mailto:yaumulmajid@gmail.com"
              className="flex items-center gap-2 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={16} />
              yaumulmajid@gmail.com
            </a>
  
            <a 
              href="https://linkedin.com/in/yaumulmajidd"
              className="flex items-center gap-2 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={16} />
              linkedin.com/in/yaumulmajidd
            </a>
  
            <a 
              href="https://github.com/yaumulmajid"
              className="flex items-center gap-2 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={16} />
              github.com/yaumulmajid
            </a>
  
            <a 
              href="https://wa.me/6281282132875"
              className="flex items-center gap-2 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone size={16} />
              +62 81282132875
            </a>
          </div>
  
          <div className="mt-4">
            <p>I'm always open to discussing :</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Project Collaborations</li>
              <li>Job Opportunities</li>
              <li>Technical Discussions</li>
            </ul>
            <p className="mt-2">Feel free to reach out!</p>
          </div>
        </div>
      );
    };
  
    return (
      <div className={`max-w-[85%] p-3 rounded-2xl whitespace-pre-wrap text-sm ${
        type === 'user'
          ? 'bg-blue-500/90 text-white rounded-tr-none'
          : 'bg-gray-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-tl-none'
      }`}>
        {createClickableLinks(content)}
      </div>
    );
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-12 z-50">
      {/* Chat Window */}
      <div className={`
        ${isOpen ? 'block' : 'hidden'}
        w-[360px] sm:w-[420px] bg-white dark:bg-zinc-900 rounded-lg shadow-xl mb-4
      `}>
        {/* Header tetap sama */}
        <div className="bg-blue-500/90 p-3 flex items-center justify-between rounded-t-lg">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
              <MessageSquare className="text-white" size={18} />
            </div>
            <div>
              <h3 className="text-white font-medium text-sm">Majid Assistant</h3>
              <p className="text-blue-50 text-xs">Online</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-1.5 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="text-white" size={16} />
          </button>
        </div>

        {/* Messages - Ganti dengan MessageContent */}
        <div className="h-[400px] overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex items-start gap-2 ${
              message.type === 'user' ? 'flex-row-reverse' : 'flex-row'
            }`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                message.type === 'user' ? 'bg-zinc-200 dark:bg-zinc-700' : 'bg-blue-500/90'
              }`}>
                {message.type === 'user' ? 
                  <User size={16} className="text-zinc-800 dark:text-zinc-200" /> : 
                  <MessageSquare size={16} className="text-white" />
                }
              </div>
              <MessageContent content={message.content} type={message.type} />
            </div>
          ))}
          {isTyping && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500/90 rounded-full flex items-center justify-center">
                <MessageSquare size={16} className="text-white" />
              </div>
              <div className="bg-gray-100 dark:bg-zinc-800 p-3 rounded-2xl rounded-tl-none">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
                  <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100" />
                  <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200" />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input tetap sama */}
        <form onSubmit={handleSubmit} className="p-3 border-t dark:border-zinc-800">
          <div className="relative">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type a message..."
              className="w-full p-2 pr-10 rounded-full border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            />
            <button
              type="submit"
              className="absolute right-1 top-1/2 -translate-y-1/2 p-2 bg-blue-400 hover:bg-blue-500 text-white rounded-full transition-colors"
            >
              <Send size={16} />
            </button>
          </div>
        </form>
      </div>

      {/* Toggle Button tetap sama */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? 'hidden' : 'flex'
        } items-center justify-center p-4 bg-blue-400 hover:bg-blue-500 rounded-full shadow-lg hover:shadow-xl transition-all`}
      >
        <div className="relative">
          <MessageSquare size={24} className="text-white" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
        </div>
      </button>
    </div>
  );
}

export default ChatBot;