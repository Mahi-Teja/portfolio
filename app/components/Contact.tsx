"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "mahitejaneeli@gmail.com";

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section
      id="contact"
      className="px-6 pb-24 pt-12 md:px-12 md:pb-32 lg:px-16"
    >
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-border bg-surface px-7 py-10 md:px-12 md:py-14">
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.22em] text-primary">
          Get in touch
        </p>
        <div className="grid gap-10 md:grid-cols-[1fr_0.55fr] md:items-end">
          <h2 className="text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.05em] md:text-7xl">
            Have a meaningful problem?
            <br />
            <span className="text-primary">Let’s solve it.</span>
          </h2>
          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={copyEmail}
              className="flex items-center justify-between rounded-full border border-border px-5 py-4 text-left transition hover:border-primary/50"
            >
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-muted">
                  Email
                </span>
                <span className="text-sm font-semibold">{email}</span>
              </span>
              {copied ? (
                <Check size={18} className="text-emerald-500" />
              ) : (
                <Copy size={18} className="text-muted" />
              )}
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-4 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              View résumé <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
