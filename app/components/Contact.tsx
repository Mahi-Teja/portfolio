"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";

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
      className="px-5 pb-16 sm:px-8 md:px-12 md:pb-24 lg:px-16"
    >
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-foreground px-6 py-10 text-background md:px-12 md:py-14">
        <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border-[36px] border-primary/25" />
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] opacity-65">
          The next good thing
        </p>
        <div className="relative mt-5 grid gap-10 lg:grid-cols-[1fr_360px] lg:items-end">
          <h2 className="max-w-4xl font-serif text-5xl leading-[0.95] italic md:text-8xl">
            Got an idea?
            <br />
            Let’s give it legs.
          </h2>
          <div className="grid gap-3">
            <button
              type="button"
              onClick={copyEmail}
              className="flex items-center justify-between rounded-[1.25rem] border border-background/15 bg-background/5 px-5 py-4 text-left transition hover:bg-background/10"
            >
              <span className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Mail size={17} />
                </span>
                <span>
                  <span className="block text-[10px] uppercase tracking-wider opacity-55">
                    Email me
                  </span>
                  <span className="text-sm font-semibold">{email}</span>
                </span>
              </span>
              {copied ? (
                <Check size={18} className="text-success" />
              ) : (
                <Copy size={18} />
              )}
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-[1.25rem] bg-primary px-5 py-4 text-sm font-semibold text-primary-foreground transition hover:translate-x-1"
            >
              View my résumé <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
