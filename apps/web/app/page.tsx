import { TextInput } from "@repo/ui/text-input";

export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      ></div>
      <h1>Welcome to the Chat App</h1>
      <TextInput placeholder={"Add chat"}></TextInput>
      <button>Join Room</button>
    </div>
  );
}
