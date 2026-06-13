"use client";

import { useEffect, useRef, useState } from "react";

const CALENDLY = "https://calendly.com/juan-odisea-tours/30min";

interface Msg {
  role: "user" | "assistant";
  content: string;
}

const GREETING: Msg = {
  role: "assistant",
  content:
    "Hola, I'm the Odisea concierge. Planning a group trip to Spain, soccer, school, Camino, or something cultural? Tell me about your group and I'll point you the right way.",
};

/** Minimal, safe inline renderer: linkifies URLs and markdown links, keeps line breaks. */
function renderContent(text: string) {
  const nodes: React.ReactNode[] = [];
  // Split on markdown links [label](url) and bare urls.
  const pattern =
    /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|(https?:\/\/[^\s)]+)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = pattern.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    const label = m[1] || m[3] || m[2];
    const url = m[2] || m[3];
    nodes.push(
      <a
        key={key++}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "var(--gold-deep)", textDecoration: "underline" }}
      >
        {label}
      </a>
    );
    last = pattern.lastIndex;
  }
  if (last < text.length) nodes.push(text.slice(last));
  // Preserve newlines.
  return nodes.map((n, i) =>
    typeof n === "string"
      ? n.split("\n").map((line, j, arr) => (
          <span key={`${i}-${j}`}>
            {line}
            {j < arr.length - 1 && <br />}
          </span>
        ))
      : n
  );
}

export default function Concierge() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (open && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open, loading]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    setError(null);
    const next = [...messages, { role: "user" as const, content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/concierge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Drop the canned greeting; the server rebuilds context from history.
        body: JSON.stringify({ messages: next.filter((_, i) => i !== 0) }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong.");
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              data.error ||
              "Sorry, something went wrong. You can email bookings@odisea-tours.com or book a call below.",
          },
        ]);
      } else {
        setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
      }
    } catch {
      setError("Network error.");
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I could not reach the team just now. Please email bookings@odisea-tours.com or book a call below.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function onKey(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <>
      {/* Launcher */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open the Odisea concierge"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 60,
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "12px 18px",
            background: "var(--ink)",
            color: "var(--paper)",
            border: "1px solid var(--ink)",
            borderRadius: "999px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.22)",
            cursor: "pointer",
            fontFamily: "var(--font-archivo), system-ui, sans-serif",
            fontSize: "14px",
            fontWeight: 600,
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "999px",
              background: "var(--gold)",
              boxShadow: "0 0 0 3px rgba(255,180,0,0.25)",
            }}
          />
          Plan your trip
        </button>
      )}

      {/* Panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Odisea concierge"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 60,
            width: "min(380px, calc(100vw - 32px))",
            height: "min(560px, calc(100vh - 40px))",
            display: "flex",
            flexDirection: "column",
            background: "var(--paper)",
            border: "1px solid var(--ink)",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.28)",
            fontFamily: "var(--font-archivo), system-ui, sans-serif",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "14px 16px",
              background: "var(--ink)",
              color: "var(--paper)",
            }}
          >
            <div>
              <p
                style={{
                  margin: 0,
                  fontSize: "10px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  fontFamily: "var(--font-mono-editorial), monospace",
                }}
              >
                Odisea Tours
              </p>
              <p style={{ margin: "2px 0 0", fontSize: "15px", fontWeight: 700 }}>
                Trip concierge
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close concierge"
              style={{
                background: "transparent",
                border: "none",
                color: "var(--paper)",
                fontSize: "22px",
                lineHeight: 1,
                cursor: "pointer",
                padding: "4px",
              }}
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              background: "var(--paper-warm)",
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  alignSelf: m.role === "user" ? "flex-end" : "flex-start",
                  maxWidth: "85%",
                  padding: "10px 13px",
                  borderRadius: "14px",
                  fontSize: "14px",
                  lineHeight: 1.55,
                  background: m.role === "user" ? "var(--ink)" : "#ffffff",
                  color: m.role === "user" ? "var(--paper)" : "var(--ink)",
                  border:
                    m.role === "user" ? "none" : "1px solid rgba(0,0,0,0.08)",
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                }}
              >
                {renderContent(m.content)}
              </div>
            ))}
            {loading && (
              <div
                style={{
                  alignSelf: "flex-start",
                  padding: "10px 13px",
                  fontSize: "13px",
                  color: "var(--ink-muted)",
                  fontStyle: "italic",
                }}
              >
                typing…
              </div>
            )}
          </div>

          {/* Calendly CTA, always visible */}
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              textAlign: "center",
              padding: "9px 12px",
              background: "var(--gold)",
              color: "var(--ink)",
              fontSize: "12.5px",
              fontWeight: 700,
              textDecoration: "none",
              letterSpacing: "0.3px",
            }}
          >
            Book a free 30-minute planning call →
          </a>

          {/* Composer */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: "8px",
              padding: "10px",
              borderTop: "1px solid rgba(0,0,0,0.1)",
              background: "var(--paper)",
            }}
          >
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKey}
              rows={1}
              placeholder="Tell me about your group…"
              style={{
                flex: 1,
                resize: "none",
                maxHeight: "96px",
                padding: "9px 11px",
                border: "1px solid rgba(0,0,0,0.18)",
                borderRadius: "10px",
                fontSize: "14px",
                fontFamily: "inherit",
                background: "#fff",
                color: "var(--ink)",
                outline: "none",
              }}
            />
            <button
              onClick={send}
              disabled={loading || !input.trim()}
              aria-label="Send message"
              style={{
                flexShrink: 0,
                padding: "9px 14px",
                background: loading || !input.trim() ? "rgba(0,0,0,0.25)" : "var(--ink)",
                color: "var(--paper)",
                border: "none",
                borderRadius: "10px",
                fontSize: "14px",
                fontWeight: 600,
                cursor: loading || !input.trim() ? "default" : "pointer",
              }}
            >
              Send
            </button>
          </div>
          {error && (
            <p
              style={{
                margin: 0,
                padding: "0 12px 8px",
                fontSize: "11px",
                color: "#a8391e",
                background: "var(--paper)",
              }}
            >
              {error}
            </p>
          )}
        </div>
      )}
    </>
  );
}
