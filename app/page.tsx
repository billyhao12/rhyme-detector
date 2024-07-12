import styles from "./page.module.sass";
import clsx from "clsx";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Rhyme Detector</h1>
      <form className={styles.form}>
        <label htmlFor="lyricsInput">Enter Rap Lyrics!</label>
        <textarea
          id="lyricsInput"
          name="lyricsInput"
          className={styles.lyricsInput}
        />
        <button type="submit" className={clsx(styles.btn, styles.btnBlue)}>
          Highlight Rhymes
        </button>
      </form>
    </main>
  );
}
