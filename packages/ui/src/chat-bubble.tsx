"use client";

import React from "react";
import { CSSProperties } from "react";

interface ChatBubbleProps {
  message: string;
  sender: "user" | "other";
}

export function ChatBubble({ message, sender }: ChatBubbleProps) {
  const styles: { [key: string]: CSSProperties } = {
    bubbleContainer: {
      display: "flex",
      justifyContent: sender === "user" ? "flex-end" : "flex-start",
      padding: "10px",
    },
    bubble: {
      maxWidth: "60%",
      padding: "10px 15px",
      borderRadius: "15px",
      backgroundColor: sender === "user" ? "#007bff" : "#e5e5e5",
      color: sender === "user" ? "#fff" : "#000",
      fontSize: "16px",
    },
  };

  return (
    <div style={styles.bubbleContainer}>
      <div style={styles.bubble}>{message}</div>
    </div>
  );
}