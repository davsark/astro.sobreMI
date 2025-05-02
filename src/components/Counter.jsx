import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      border: "1px solid #e0e0e0",
      borderRadius: "10px",
      padding: "1rem",
      maxWidth: "200px",
      textAlign: "center",
      background: "#fff",
      boxShadow: "0 0 10px rgba(0,0,0,0.07)"
    }}>
      <h1>Likes</h1>
      <p style={{ fontSize: "2rem", margin: "0.5rem 0" }}>{count}</p>
      <button 
        onClick={() => setCount(count + 1)}
        style={{
          marginRight: "0.5rem",
          padding: "0.5rem 1rem",
          borderRadius: "4px",
          border: "none",
          background: "#27ae60",
          color: "#fff",
          cursor: "pointer"
        }}
      >
        +1
      </button>
      <button 
        onClick={() => setCount(0)}
        style={{
          padding: "0.5rem 1rem",
          borderRadius: "4px",
          border: "none",
          background: "#e74c3c",
          color: "#fff",
          cursor: "pointer"
        }}
      >
        Reset
      </button>
    </div>
  );
}
