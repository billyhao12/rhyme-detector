"use client";
import styles from "./page.module.sass";
import clsx from "clsx";
import { FormEvent, MutableRefObject, useEffect, useRef } from "react";

export default function Home() {
  const lyricsInputRef: MutableRefObject<null | HTMLDivElement> = useRef(null);

  useEffect(() => {
    if (lyricsInputRef.current) {
      lyricsInputRef.current.focus();
    }
  }, []);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const userInputLyrics = lyricsInputRef.current?.innerText;
    console.log({ userInputLyrics });

    if (userInputLyrics) {
      const lines = userInputLyrics.split("\n");
      for (let i = 0; i < lines.length; i++) {
        console.log(`line ${i}: ${lines[i]}`);
      }
    }
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Rhyme Detector</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>Enter rap lyrics to highlight below</div>
        <div
          id="lyricsInput"
          ref={lyricsInputRef}
          className={styles.lyricsInput}
          contentEditable
        ></div>
        <button type="submit" className={clsx(styles.btn, styles.btnBlue)}>
          Highlight Rhymes
        </button>
      </form>
    </main>
  );
}
