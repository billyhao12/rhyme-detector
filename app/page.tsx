"use client";
import styles from "./page.module.sass";
import clsx from "clsx";
import { FormEvent, MutableRefObject, useEffect, useRef } from "react";

export default function Home() {
  // const lyricsInputRef: MutableRefObject<null | HTMLDivElement> = useRef(null);

  // useEffect(() => {
  //   if (lyricsInputRef.current) {
  //     lyricsInputRef.current.focus();
  //   }
  // }, []);

  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault();

  //   const userInputLyrics = lyricsInputRef.current?.innerText;
  //   console.log({ userInputLyrics });

  //   if (userInputLyrics) {
  //     const lines = userInputLyrics.split("\n");
  //     for (let i = 0; i < lines.length; i++) {
  //       console.log(`line ${i}: ${lines[i]}`);
  //     }
  //   }
  // };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Rhyme Detector
      </h1>
      <form className={styles.form}>
        <div className={styles.mainGrid}>
          <div className={styles.lyricsContainers}>
            <div className="py-4">Enter lyrics to highlight below</div>
            <textarea className={styles.lyricsInput} />
          </div>
          <div className={styles.middleContainer}>
            <button type="submit" className={clsx(styles.btn, styles.btnBlue)}>
              Highlight Rhymes
            </button>
          </div>
          <div className={styles.lyricsContainers}>
            <div className="py-4">Highlighted rhymes</div>
            <div className={styles.lyricsOutput}>
              <span>test</span>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}
