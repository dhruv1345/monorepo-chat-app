"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CSSProperties } from "react";

export default function Home() {
  const router = useRouter();
  const [roomId, setRoomId] = useState("");

  const styles: { [key: string]: CSSProperties } = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f4f4f4",
    },
    input: {
      padding: "10px",
      fontSize: "16px",
      marginBottom: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      width: "250px",
    },
    button: {
      padding: "10px 20px",
      fontSize: "16px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background 0.3s",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
    heading: {
      marginBottom: "20px",
      fontSize: "24px",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to the Chat App</h1>
      <input 
        type="text"
        placeholder="Enter Room ID"
        style={styles.input}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <button
        style={styles.button}
        onMouseOver={(e) => (e.currentTarget.style.background = styles.buttonHover?.backgroundColor || "#0056b3")}
        onMouseOut={(e) => (e.currentTarget.style.background = styles.button?.backgroundColor || "#007bff")}
        onClick={() => {
          if (!roomId.trim()) return alert("Enter a Room ID!");
          router.push(`/chat/${roomId}`);
        }}
      >
        Join Room
      </button>
    </div>
  );
}