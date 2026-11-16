"use client";

import { BotIcon, Send, X, BotMessageSquareIcon, Loader2 } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { callAI } from "../actions/chatBot";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const quickActions = ["Projects", "Experience", "Tech Stack", "Contact"];

export default function Bot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm Mahi's assistant. Ask me anything about his projects, skills, or experience.",
    },
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    const userMessage: Message = { role: "user", content: trimmed };
    const updatedHistory = [...messages, userMessage];

    setMessages(updatedHistory);
    setIsLoading(true);

    try {
      const reply = await callAI(updatedHistory);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: reply || "Sorry, I couldn't generate a response.",
        },
      ]);
    } catch (error) {
      console.error("ChatBot Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong. Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = () => {
    if (!input.trim() || isLoading) return;
    const currentInput = input;
    setInput("");
    sendMessage(currentInput);
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
            className="absolute bottom-20 right-0 w-[calc(100vw-3rem)] sm:w-100 max-h-110 bg-background border border-border rounded-3xl shadow-lg dark:border-primary flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-5 py-4 border-b border-border">
              <div className="flex items-center gap-2">
                <BotIcon size={18} className="text-primary" />
                <span className="text-sm font-semibold">Mahi's Assistant</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                className="hover:opacity-70 transition"
              >
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
                      className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "bg-primary text-white"
                          : "bg-bubble text-bubble-foreground"
                      }`}
                    >
                      {msg.role === "user" ? (
                        msg.content
                      ) : (
                        <ReactMarkdown
                          components={{
                            p: ({ children }) => (
                              <p className="mb-2 last:mb-0">{children}</p>
                            ),
                            ul: ({ children }) => (
                              <ul className="list-disc pl-4 mb-2 space-y-1.5 last:mb-0">
                                {children}
                              </ul>
                            ),
                            ol: ({ children }) => (
                              <ol className="list-decimal pl-4 mb-2 space-y-1.5 last:mb-0">
                                {children}
                              </ol>
                            ),
                            li: ({ children }) => (
                              <li className="leading-snug">{children}</li>
                            ),
                            strong: ({ children }) => (
                              <strong className="font-semibold text-foreground">
                                {children}
                              </strong>
                            ),
                            a: ({ href, children }) => (
                              <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary underline underline-offset-2 hover:opacity-80 font-medium"
                              >
                                {children}
                              </a>
                            ),
                          }}
                        >
                          {msg.content}
                        </ReactMarkdown>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {isLoading && (
                <div className="flex justify-start">
                  <div className="px-4 py-2.5 rounded-2xl bg-bubble text-bubble-foreground flex items-center gap-2">
                    <Loader2 size={14} className="animate-spin" />
                    <span className="text-xs opacity-75">Thinking...</span>
                  </div>
                </div>
              )}

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
              className="px-4 py-3 border-t border-border flex flex-wrap gap-2"
            >
              {quickActions.length > 0 &&
                quickActions.map((item) => (
                  <motion.button
                    key={item}
                    disabled={isLoading}
                    variants={{
                      hidden: { opacity: 0, y: 6 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => sendMessage(item)}
                    className="text-xs px-3 py-1.5 rounded-full bg-primary text-white hover:bg-accent cursor-pointer  transition disabled:opacity-50"
                  >
                    {item}
                  </motion.button>
                ))}
            </motion.div>

            {/* Input */}
            <div className="p-3 border-t border-border flex gap-2">
              <input
                value={input}
                disabled={isLoading}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask something..."
                className="flex-1 px-3 py-2 rounded-lg border border-border bg-transparent text-sm outline-none disabled:opacity-50"
              />
              <motion.button
                whileTap={{ scale: 0.9 }}
                disabled={isLoading || !input.trim()}
                onClick={handleSend}
                aria-label="Send message"
                className="p-2 bg-primary text-white rounded-lg disabled:opacity-50"
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
        aria-label="Toggle chat"
        className="p-4 rounded-full bg-primary text-white shadow-lg"
      >
        {isOpen ? <X size={24} /> : <BotMessageSquareIcon size={24} />}
      </motion.button>
    </section>
  );
}
