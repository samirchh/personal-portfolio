"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "mt-2 w-full border-b-2 border-canvas/30 bg-transparent py-2 text-lg text-canvas transition-colors placeholder:text-canvas/40 focus-visible:border-redline focus-visible:outline-none";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="border border-canvas/25 p-8">
        <p className="font-display text-2xl font-semibold">Message sent.</p>
        <p className="mt-2 text-canvas/70">
          Thanks for writing. I&apos;ll get back to you soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-[15px] underline decoration-redline decoration-2 underline-offset-4 hover:text-redline"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-7">
      <div>
        <label htmlFor="cf-name" className="text-[15px] text-canvas/80">
          Name
        </label>
        <input
          id="cf-name"
          name="name"
          type="text"
          required
          maxLength={100}
          autoComplete="name"
          className={field}
        />
      </div>

      <div>
        <label htmlFor="cf-phone" className="text-[15px] text-canvas/80">
          Contact number
        </label>
        <input
          id="cf-phone"
          name="phone"
          type="tel"
          required
          minLength={7}
          maxLength={20}
          pattern="[0-9+()\-\s]{7,20}"
          title="Digits, spaces, + ( ) and - only"
          autoComplete="tel"
          className={field}
        />
      </div>

      <div>
        <label htmlFor="cf-address" className="text-[15px] text-canvas/80">
          Address
        </label>
        <input
          id="cf-address"
          name="address"
          type="text"
          required
          maxLength={200}
          autoComplete="street-address"
          className={field}
        />
      </div>

      <div>
        <label htmlFor="cf-message" className="text-[15px] text-canvas/80">
          Message
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          maxLength={3000}
          className={`${field} resize-y`}
        />
      </div>

      {/* Honeypot. Hidden from people, tempting to bots. */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="cf-website">Website</label>
        <input id="cf-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-wrap items-center gap-5">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-canvas px-7 py-3 text-[15px] font-medium text-ink transition-colors hover:bg-redline hover:text-canvas disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Send message"}
        </button>
        <p role="alert" className="text-[15px] text-redline">
          {status === "error" ? error : ""}
        </p>
      </div>
    </form>
  );
}
