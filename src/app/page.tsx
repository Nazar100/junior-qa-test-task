"use client"
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState(0);
  const handleInputChange = (e: any) => {
    setInput(e.target.value)
  }
  return (
    <main className={styles.main}>
      <input value={input} onChange={handleInputChange} />

      <h1>{input}</h1>
    </main>
  );
}
