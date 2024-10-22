"use client";
import { useState } from "react";
import styles from "./page.module.sass";
import clsx from "clsx";

export default function Home() {
  const [lyricsInput, setLyricsInput] = useState("");

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Rhyme Detector</h1>
      <div className={styles.mainContainer}>
        <div className={styles.mainGrid}>
          <form className={styles.form}>
            <div className={styles.lyricsInputContainer}>
              <label htmlFor="lyricsInput" className="block py-4">
                Enter lyrics to highlight below
              </label>
              <textarea
                id="lyricsInput"
                name="lyricsInput"
                value={lyricsInput}
                onChange={(e) => setLyricsInput(e.target.value)}
                className={styles.lyricsInput}
              />
            </div>
            <div className={styles.middleContainer}>
              <button
                type="submit"
                className={clsx(styles.btn, styles.btnBlue)}
              >
                Highlight Rhymes
              </button>
            </div>
          </form>
          <div className={styles.lyricsOutputContainer}>
            <div className="py-4">Highlighted rhymes</div>
            <div className={styles.lyricsOutput}>
              <span>test</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
