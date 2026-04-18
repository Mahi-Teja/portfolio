"use client";

import {
  BotIcon,
  Send,
  X,
  MessageSquare,
  BotMessageSquareIcon,
} from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Twitter } from "./Icons";

const quickActions = [
  "Projects",
  "Experience",
  "Tech Stack",
  "Currently Learning",
  "Contact",
];

const getBotResponse = (input: string) => {
  const text = input.toLowerCase();

  if (text.includes("project"))
    return "Mahi has built systems like Dx Tracker and a real-time Scoreboard app.";

  if (text.includes("experience"))
    return "He builds scalable full-stack systems with performance focus.";

  if (text.includes("stack"))
    return "React, Next.js, Node.js, Go, PostgreSQL, MongoDB.";

  if (text.includes("learning"))
    return "Currently exploring Go and high-concurrency systems.";

  if (text.includes("contact"))
    return (
      <div className="">
        <p>You can reach out to Mahi via:</p>
        <p>email : mahineeli123@gmail.com</p>
        <p>
          <a target="_blank" href="https://x.com/empty_codes">
            <Twitter />
          </a>
        </p>
        <p>
          <a target="_blank" href="https://linkedin.com/mahiteja">
            <Linkedin />
          </a>
        </p>
      </div>
    );

  return "Ask about projects, experience, or tech stack.";
};

export default function Bot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Explore Mahi’s work. Choose from above or ask anything.",
    },
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (text: string) => {
    const userMessage = { role: "user", text };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: getBotResponse(text) },
      ]);
    }, 400);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    sendMessage(input);
    setInput("");
  };

  return (
    <section className="fixed bottom-6 right-6 z-[100]">
      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute bottom-20 right-0 w-[360px] max-h-[520px] bg-background border border-border rounded-3xl shadow-lg dark:border-primary flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-5 py-4 border-b border-border">
              <div className="flex items-center gap-2">
                <BotIcon size={18} />
                <span className="text-sm font-semibold">Mahi Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)}>
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 text-sm">
              <AnimatePresence initial={false}>
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex ${
                      msg.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-2 rounded-xl ${
                        msg.role === "user"
                          ? "bg-primary text-white"
                          : "bg-bubble text-bubble-foreground"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              <div ref={bottomRef} />
            </div>

            {/* Quick Actions */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.05 },
                },
              }}
              className="px-4 py-3 border-b border-border flex flex-wrap gap-2"
            >
              {quickActions.map((item) => (
                <motion.button
                  key={item}
                  variants={{
                    hidden: { opacity: 0, y: 6 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => sendMessage(item)}
                  className="text-xs px-3 py-1.5 rounded-full bg-muted hover:bg-primary hover:text-white transition"
                >
                  {item}
                </motion.button>
              ))}
            </motion.div>
            {/* Input */}
            <div className="p-3 border-t border-border flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask something..."
                className="flex-1 px-3 py-2 rounded-lg border border-border bg-transparent text-sm outline-none"
              />
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handleSend}
                className="p-2 bg-primary text-white rounded-lg"
              >
                <Send size={16} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen((p) => !p)}
        className="p-4 rounded-full bg-primary text-white shadow-lg"
      >
        {isOpen ? <X size={24} /> : <BotMessageSquareIcon size={24} />}
      </motion.button>
    </section>
  );
}
