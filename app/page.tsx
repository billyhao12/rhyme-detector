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
    console.log(lyricsInputRef.current?.innerText);
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
