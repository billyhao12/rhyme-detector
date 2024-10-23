"use client";
import { useState } from "react";
import styles from "./page.module.sass";
import clsx from "clsx";
import multisyllableApi from "./lib/api/Multisyllable";

export default function Home() {
    const [lyricsInput, setLyricsInput] = useState("");
    const [lyricsOutput, setLyricsOutput] = useState<Array<JSX.Element>>([]);

    const createClsxForWord = (word: string, style: Array<string>) => {
        let clsxResult = [];

        let containsTwoTextDecorations = false;
        if (style.includes("underline") && style.includes("strikethrough")) {
            containsTwoTextDecorations = true;
            clsxResult.push(styles.underlineAndStrikethrough);
        }

        for (let i = 0; i < style.length; i++) {
            if (containsTwoTextDecorations) {
                if (style[i] === "underline" || style[i] === "strikethrough") {
                    continue;
                }
            }

            clsxResult.push(styles[style[i]]);
        }

        return clsxResult;
    };

    const createSpanTag = (word: string, style: Array<string>) => {
        const clsxResult = createClsxForWord(word, style);
        return <span className={clsx(...clsxResult)}>{word}</span>;
    };

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        const axiosData = await multisyllableApi.highlightMultisyllableRhymes({
            lyrics: lyricsInput
        });

        const outputLyricsData = axiosData?.data?.lyrics;
        const lyricsOutputInProgress = [];
        if (outputLyricsData) {
            for (let i = 0; i < outputLyricsData.length; i++) {
                const line = outputLyricsData[i];
                for (let j = 0; j < line.length; j++) {
                    lyricsOutputInProgress.push(
                        createSpanTag(line[j].word, line[j].style)
                    );
                }
                lyricsOutputInProgress.push(<br />);
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
                        <div className={styles.lyricsOutput}>
                            {lyricsOutput.map((spanEl) => spanEl)}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
