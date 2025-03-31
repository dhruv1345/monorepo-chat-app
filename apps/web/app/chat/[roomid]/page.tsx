"use client";

import { useState } from "react";
import { TextInput } from "@repo/ui/text-input";
import { useParams } from "next/navigation";
import { ChatBubble } from "@repo/ui/chat-bubble";

export default function ChatRoom() {
  const params = useParams();
  const [messages, setMessages] = useState<
    { text: string; sender: "user" | "other" }[]
  >([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput(""); // Clear input after sending
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f4f4",
        color: "#333",
        fontSize: "24px",
        fontWeight: "bold",
        padding: "10px",
      }}
    >
      <div>Chat Room - {params.roomId}</div>
      <div
        style={{
          flex: 1,
          width: "100%",
          overflowY: "auto",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {messages.map((msg, index) => (
          <ChatBubble key={index} message={msg.text} sender={msg.sender} />
        ))}
      </div>
      <div style={{ display: "flex", width: "100%", padding: "10px" }}>
        <TextInput size="big" placeholder="Chat here" value={input} onChange={(e) => setInput(e.target.value)} />

        <button
          onClick={sendMessage}
          style={{
            marginLeft: "10px",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
