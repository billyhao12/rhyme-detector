"use client";
import { useState } from "react";
import styles from "./page.module.sass";
import clsx from "clsx";
import multisyllableApi from "./lib/api/Multisyllable";

export default function Home() {
    const [lyricsInput, setLyricsInput] = useState("");
    const [lyricsOutput, setLyricsOutput] = useState("");

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        const axiosData = await multisyllableApi.highlightMultisyllableRhymes({
            lyrics: lyricsInput
        });

        const outputLyricsData = axiosData?.data?.lyrics;
        let lyricsOutputInProgress = "";
        if (outputLyricsData) {
            for (let i = 0; i < outputLyricsData.length; i++) {
                const line = outputLyricsData[i];
                for (let j = 0; j < line.length; j++) {
                    lyricsOutputInProgress += `<span>${line[j].word}</span> `;
                }
                lyricsOutputInProgress += "<br>";
            }

            setLyricsOutput(lyricsOutputInProgress);
        }
    };

    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Rhyme Detector</h1>
            <div className={styles.mainContainer}>
                <div className={styles.mainGrid}>
                    <form className={styles.form} onSubmit={handleSubmit}>
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
                        <div
                            className={styles.lyricsOutput}
                            dangerouslySetInnerHTML={{ __html: lyricsOutput }}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
