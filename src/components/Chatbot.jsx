import React, { useState, useEffect, useRef } from 'react';
import { Send, User, MessageSquare, X, Mail, Github, Linkedin, Phone } from 'lucide-react';

export function ChatBot() {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: `Hello! 👋 I'm Chat Assistant.

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

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Existing getBotResponse function remains the same
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
    
    // ... rest of the response logic remains the same ...
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    setMessages(prev => [...prev, { type: 'user', content: inputMessage }]);
    setInputMessage('');
    
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsTyping(false);

    const response = getBotResponse(inputMessage);
    setMessages(prev => [...prev, { type: 'bot', content: response }]);
  };

  const MessageContent = ({ content, type }) => {
    const createClickableLinks = (text) => {
      if (!text.includes("Let's Connect")) return text;
  
      return (
        <div className="space-y-4">
          <p>📱 Let&apos;s Connect!</p>
          
          <div className="space-y-2">
            <a 
              href="mailto:yaumulmajid@gmail.com"
              className="flex items-center gap-2 text-zinc-600 hover:text-zinc-800 dark:text-zinc-300 dark:hover:text-zinc-100 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={16} />
              yaumulmajid@gmail.com
            </a>
  
            <a 
              href="https://linkedin.com/in/yaumulmajidd"
              className="flex items-center gap-2 text-zinc-600 hover:text-zinc-800 dark:text-zinc-300 dark:hover:text-zinc-100 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={16} />
              linkedin.com/in/yaumulmajidd
            </a>
  
            <a 
              href="https://github.com/yaumulmajid"
              className="flex items-center gap-2 text-zinc-600 hover:text-zinc-800 dark:text-zinc-300 dark:hover:text-zinc-100 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={16} />
              github.com/yaumulmajid
            </a>
  
            <a 
              href="https://wa.me/6281282132875"
              className="flex items-center gap-2 text-zinc-600 hover:text-zinc-800 dark:text-zinc-300 dark:hover:text-zinc-100 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone size={16} />
              +62 81282132875
            </a>
          </div>
  
          <div className="mt-4">
            <p>I&apos;m always open to discussing :</p>
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
      <div className={`max-w-[85%] p-3 rounded-2xl whitespace-pre-wrap text-sm backdrop-blur-sm ${
        type === 'user'
          ? 'bg-white/90 dark:bg-zinc-800/90 text-zinc-800 dark:text-zinc-200 rounded-tr-none shadow-lg'
          : 'bg-zinc-50/90 dark:bg-zinc-800/90 text-zinc-800 dark:text-zinc-200 rounded-tl-none shadow-lg'
      }`}>
        {createClickableLinks(content)}
      </div>
    );
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-12 z-50">
      <div className={`
        ${isOpen ? 'block' : 'hidden'}
        w-[360px] sm:w-[420px] bg-gradient-to-br from-white via-zinc-50 to-zinc-100 
        dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800 
        rounded-lg shadow-2xl mb-4 backdrop-blur-lg border border-zinc-200/50 dark:border-zinc-700/50
      `}>
        {/* Enhanced header styling */}
        <div className="bg-black from-zinc-50 to-white dark:from-zinc-800 dark:to-zinc-900 p-3 flex items-center justify-between rounded-t-lg border-b border-zinc-200/50 dark:border-zinc-700/50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-zinc-100 to-white dark:from-zinc-700 dark:to-zinc-800 rounded-full flex items-center justify-center shadow-inner">
              <MessageSquare className="text-zinc-600 dark:text-zinc-300" size={18} />
            </div>
            <div>
              <h3 className="text-zinc-100 dark:text-zinc-100 font-medium text-sm">Chat Assistant</h3>
              <p className="text-zinc-100 dark:text-zinc-100 text-xs">Online</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-1.5 hover:bg-zinc-200/50 dark:hover:bg-zinc-700/50 rounded-full transition-colors"
          >
            <X className="text-zinc-600 dark:text-zinc-300" size={16} />
          </button>
        </div>

        {/* Enhanced messages container */}
        <div className="h-[400px] overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-transparent via-white/50 to-zinc-50/50 dark:from-transparent dark:via-zinc-900/50 dark:to-zinc-800/50">
          {messages.map((message, index) => (
            <div key={index} className={`flex items-start gap-2 ${
              message.type === 'user' ? 'flex-row-reverse' : 'flex-row'
            }`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 
                bg-gradient-to-br from-zinc-100 to-white dark:from-zinc-700 dark:to-zinc-800 
                shadow-lg`}>
                {message.type === 'user' ? 
                  <User size={16} className="text-zinc-600 dark:text-zinc-300" /> : 
                  <MessageSquare size={16} className="text-zinc-600 dark:text-zinc-300" />
                }
              </div>
              <MessageContent content={message.content} type={message.type} />
            </div>
          ))}
          {isTyping && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-zinc-100 to-white dark:from-zinc-700 dark:to-zinc-800 rounded-full flex items-center justify-center shadow-lg">
                <MessageSquare size={16} className="text-zinc-600 dark:text-zinc-300" />
              </div>
              <div className="bg-zinc-50/90 dark:bg-zinc-800/90 p-3 rounded-2xl rounded-tl-none shadow-lg backdrop-blur-sm">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-zinc-400 dark:bg-zinc-500 rounded-full animate-bounce" />
                  <span className="w-2 h-2 bg-zinc-400 dark:bg-zinc-500 rounded-full animate-bounce delay-100" />
                  <span className="w-2 h-2 bg-zinc-400 dark:bg-zinc-500 rounded-full animate-bounce delay-200" />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Enhanced input area */}
        <form onSubmit={handleSubmit} className="p-3 border-t border-zinc-200/50 dark:border-zinc-700/50 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-800 dark:to-zinc-900 rounded-b-lg">
          <div className="relative">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type a message..."
              className="w-full p-2 pr-10 rounded-full border border-zinc-200 dark:border-zinc-700 
                bg-white/80 dark:bg-zinc-800/80 text-zinc-900 dark:text-zinc-100 
                focus:outline-none focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-600 
                text-sm backdrop-blur-sm shadow-inner"
            />
            <button
              type="submit"
              className="absolute right-1 top-1/2 -translate-y-1/2 p-2 
                bg-gradient-to-br from-zinc-100 to-white dark:from-zinc-700 dark:to-zinc-800 
                hover:from-zinc-200 hover:to-zinc-100 dark:hover:from-zinc-600 dark:hover:to-zinc-700 
                text-zinc-600 dark:text-zinc-300 rounded-full transition-all shadow-lg"
            >
              <Send size={16} />
            </button>
          </div>
        </form>
      </div>

      {/* Enhanced toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? 'hidden' : 'flex'
        } items-center justify-center p-4 
        bg-gradient-to-br from-zinc-100 to-white dark:from-zinc-700 dark:to-zinc-800 
        hover:from-zinc-200 hover:to-zinc-100 dark:hover:from-zinc-600 dark:hover:to-zinc-700 
        rounded-full shadow-2xl hover:shadow-xl transition-all border border-zinc-200/50 dark:border-zinc-700/50`}
      >
        <div className="relative">
          <MessageSquare size={24} className="text-zinc-600 dark:text-zinc-300" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white dark:border-zinc-900 shadow-lg" />
        </div>
      </button>
    </div>
  );
}

export default ChatBot;