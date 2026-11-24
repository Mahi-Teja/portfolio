"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { BotMessageSquare, Check, Copy, LoaderCircle, RefreshCw, Send, Sparkles, X } from "lucide-react";
import { callAI } from "../actions/chatBot";

type Message = { role: "user" | "assistant"; content: string };

const starters = [
  "What is Mahi building?",
  "Show me his best work",
  "What is his tech stack?",
  "How can I reach him?",
];

export default function Bot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hey — I’m Mahi’s pocket guide. I can talk through his work, stack, experience, or the quickest way to start a conversation." },
  ]);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [messages, isLoading, isOpen]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    const userMessage: Message = { role: "user", content: trimmed };
    const updatedHistory = [...messages, userMessage];
    setMessages(updatedHistory);
    setInput("");
    setIsLoading(true);

    try {
      const reply = await callAI(updatedHistory);
      setMessages((current) => [...current, { role: "assistant", content: reply || "I didn’t quite get a response. Try asking in a slightly different way." }]);
    } catch (error) {
      console.error("ChatBot Error:", error);
      setMessages((current) => [...current, { role: "assistant", content: "I hit a small snag while reaching Mahi’s resume brain. Please retry in a moment." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const copyMessage = async (content: string, index: number) => {
    await navigator.clipboard.writeText(content);
    setCopiedIndex(index);
    window.setTimeout(() => setCopiedIndex(null), 1600);
  };

  const regenerate = async () => {
    const lastUserIndex = messages.map((message) => message.role).lastIndexOf("user");
    if (lastUserIndex < 0 || isLoading) return;
    const historyWithoutOldReply = messages.slice(0, lastUserIndex + 1);
    setMessages(historyWithoutOldReply);
    setIsLoading(true);

    try {
      const reply = await callAI(historyWithoutOldReply);
      setMessages((current) => [...current, { role: "assistant", content: reply || "I couldn’t generate another response." }]);
    } catch {
      setMessages((current) => [...current, { role: "assistant", content: "I hit a small snag. Please retry in a moment." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const retryLast = () => {
    const lastUserIndex = messages.map((message) => message.role).lastIndexOf("user");
    if (lastUserIndex < 0) return;
    setMessages((current) => {
      const lastErrorIndex = current.length - 1;
      return lastErrorIndex >= 0 && current[lastErrorIndex].role === "assistant" ? current.slice(0, lastErrorIndex) : current;
    });
    sendMessage(messages[lastUserIndex].content);
  };

  return (
    <aside className="fixed bottom-4 right-4 z-[100] sm:bottom-6 sm:right-6" aria-label="Mahi's assistant">
      <AnimatePresence>
        {isOpen && (
          <motion.section
            role="dialog"
            aria-label="Chat with Mahi's assistant"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-[calc(100%+12px)] right-0 flex h-[min(620px,calc(100svh-110px))] w-[calc(100vw-32px)] flex-col overflow-hidden rounded-[1.75rem] border border-border bg-surface editorial-shadow sm:w-[390px]"
          >
            <header className="flex items-center justify-between border-b border-border px-4 py-3.5">
              <div className="flex items-center gap-3">
                <span className="relative grid h-10 w-10 place-items-center rounded-[1rem] bg-primary text-primary-foreground">
                  <Sparkles size={18} />
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-surface bg-success" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Mahi’s pocket guide</p>
                  <p className="text-[10px] text-muted">Usually quick · resume-powered</p>
                </div>
              </div>
              <button type="button" onClick={() => setIsOpen(false)} aria-label="Close assistant" className="grid h-9 w-9 place-items-center rounded-full text-muted transition hover:bg-surface-hover hover:text-foreground">
                <X size={18} />
              </button>
            </header>

            <div className="mini-scrollbar flex-1 overflow-y-auto px-3.5 py-4">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <motion.div key={`${message.role}-${index}`} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.22 }} className={`group flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    {message.role === "assistant" && (
                      <div className="mr-2 mt-1 hidden h-7 w-7 shrink-0 place-items-center rounded-lg bg-accent/25 text-primary sm:grid">
                        <Sparkles size={13} />
                      </div>
                    )}
                    <div className={`max-w-[82%] ${message.role === "user" ? "rounded-[1.25rem] rounded-br-md bg-foreground px-4 py-3 text-background" : "rounded-[1.25rem] rounded-bl-md border border-border bg-surface-strong px-4 py-3 text-foreground"}`}>
                      {message.role === "assistant" ? (
                        <div className="chat-markdown text-[13px] leading-6">
                          <ReactMarkdown>{message.content}</ReactMarkdown>
                        </div>
                      ) : <p className="text-[13px] leading-6">{message.content}</p>}
                      {message.role === "assistant" && index > 0 && (
                        <div className="mt-2 flex gap-1 border-t border-border/70 pt-2 opacity-100 sm:opacity-0 sm:transition sm:group-hover:opacity-100">
                          <button type="button" onClick={() => copyMessage(message.content, index)} aria-label="Copy response" className="grid h-7 w-7 place-items-center rounded-full text-muted hover:bg-surface hover:text-foreground">
                            {copiedIndex === index ? <Check size={13} /> : <Copy size={13} />}
                          </button>
                          {index === messages.length - 1 && !isLoading && (
                            <button type="button" onClick={regenerate} aria-label="Regenerate response" className="grid h-7 w-7 place-items-center rounded-full text-muted hover:bg-surface hover:text-foreground"><RefreshCw size={13} /></button>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}

                {isLoading && (
                  <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-muted">
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent/25 text-primary"><Sparkles size={13} /></span>
                    <span className="flex gap-1 rounded-full border border-border bg-surface-strong px-3 py-2">
                      {[0, 1, 2].map((dot) => <motion.span key={dot} animate={{ y: [0, -3, 0] }} transition={{ duration: 0.7, repeat: Infinity, delay: dot * 0.12 }} className="h-1.5 w-1.5 rounded-full bg-secondary" />)}
                    </span>
                  </motion.div>
                )}

                {messages.length === 1 && !isLoading && (
                  <div className="pt-1">
                    <p className="mb-2 px-1 font-mono text-[9px] uppercase tracking-[0.16em] text-muted">Try a starter</p>
                    <div className="grid gap-2">
                      {starters.map((starter) => (
                        <button key={starter} type="button" onClick={() => sendMessage(starter)} className="rounded-xl border border-border px-3 py-2.5 text-left text-xs text-secondary transition hover:-translate-y-0.5 hover:border-primary/45 hover:text-foreground">{starter}</button>
                      ))}
                    </div>
                  </div>
                )}

                {messages.length > 1 && !isLoading && (
                  <button type="button" onClick={retryLast} className="ml-auto flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] text-muted transition hover:bg-surface-hover hover:text-foreground"><RefreshCw size={11} /> Retry last question</button>
                )}

                <div ref={bottomRef} />
              </div>
            </div>

            <form onSubmit={(event) => { event.preventDefault(); sendMessage(input); }} className="border-t border-border p-3">
              <div className="flex items-end gap-2 rounded-[1.25rem] border border-border bg-background p-2 transition focus-within:border-primary/60">
                <label htmlFor="assistant-input" className="sr-only">Message Mahi’s assistant</label>
                <textarea id="assistant-input" rows={1} value={input} disabled={isLoading} onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); sendMessage(input); } }} placeholder="Ask me anything…" className="mini-scrollbar max-h-24 min-h-10 flex-1 resize-none bg-transparent px-2 py-2.5 text-sm outline-none placeholder:text-muted" />
                <button type="submit" disabled={isLoading || !input.trim()} aria-label="Send message" className="grid h-10 w-10 shrink-0 place-items-center rounded-[0.85rem] bg-primary text-primary-foreground transition hover:rotate-3 disabled:cursor-not-allowed disabled:opacity-40">
                  {isLoading ? <LoaderCircle size={17} className="animate-spin" /> : <Send size={17} />}
                </button>
              </div>
            </form>
          </motion.section>
        )}
      </AnimatePresence>

      <motion.button type="button" whileHover={{ rotate: -4, scale: 1.04 }} whileTap={{ scale: 0.94 }} onClick={() => setIsOpen((value) => !value)} aria-label={isOpen ? "Close Mahi’s assistant" : "Open Mahi’s assistant"} aria-expanded={isOpen} className="ml-auto flex h-14 items-center gap-2 rounded-full border border-border bg-foreground px-4 text-background editorial-shadow">
        {isOpen ? <X size={20} /> : <><span className="hidden text-sm font-semibold sm:inline">Ask Mahi</span><span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground"><BotMessageSquare size={18} /></span></>}
      </motion.button>
    </aside>
  );
}
