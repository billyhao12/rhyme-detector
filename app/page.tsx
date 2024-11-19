/**
 * Contains form elements for user to interact with and highlight rhymes.
 * Makes calls to the backend server.
 */

"use client";
import { Fragment, useState } from "react";
import styles from "./page.module.sass";
import clsx from "clsx";
import monosyllableApi from "./lib/api/Monosyllable";
import multisyllableApi from "./lib/api/Multisyllable";
import RadioListGroup from "./lib/components/radioListGroup";
import { RHYME_STYLE_OPTIONS } from "./lib/constants";

export default function Home() {
    const [lyricsInput, setLyricsInput] = useState("");
    const [lyricsOutput, setLyricsOutput] = useState<Array<JSX.Element>>([]);
    const [rhymeStyle, setRhymeStyle] = useState(
        RHYME_STYLE_OPTIONS.SELECT_A_RHYME_STYLE
    );

    /**
     * @param style - an array of styles (e.g. ["bold", "italic"])
     * @returns clsxResult - an array of strings consisting of class names
     */
    const createClsxForWord = (style: Array<string>): Array<string> => {
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

    /**
     * @param word - word will be wrapped in a span element
     * @param style - array of class names returned from `createClsxForWord`
     * @returns a span element containing a word and a className with the appropriate styles
     */
    const createSpanEl = (word: string, style: Array<string>): JSX.Element => {
        const clsxResult = createClsxForWord(style);
        return <span className={clsx(...clsxResult)}>{word}</span>;
    };

    /**
     * Calls the monosyllable API endpoint and creates a span element
     * with the appropriate styles for each word.
     *
     * Sets the lyricsOutput state to an array of Fragment elements with a <br />
     * element separating the lines. Fragment elements contain span elements
     * separated by spaces.
     */
    const highlightMonosyllableRhymes = async () => {
        const axiosData = await monosyllableApi.highlightMonosyllableRhymes({
            lyrics: lyricsInput
        });

        const outputLyricsData = axiosData?.data?.lyrics;
        const lyricsOutputInProgress = [];
        if (outputLyricsData) {
            for (let i = 0; i < outputLyricsData.length; i++) {
                const line = outputLyricsData[i];
                for (let j = 0; j < line.length; j++) {
                    const spanEl = (
                        <Fragment>
                            {createSpanEl(line[j].word, line[j].style)}
                            {/* add a space after the span element if it's not the last word in the line */}
                            {j < line.length - 1 ? " " : ""}
                        </Fragment>
                    );

                    lyricsOutputInProgress.push(spanEl);
                }
                lyricsOutputInProgress.push(<br />);
            }

            setLyricsOutput(lyricsOutputInProgress);
        }
    };

    /**
     * Calls the multisyllable API endpoint and creates a span element
     * with the appropriate styles for each word.
     *
     * Sets the lyricsOutput state to an array of Fragment elements with a <br />
     * element separating the lines. Fragment elements contain span elements
     * separated by spaces.
     */
    const highlightMultisyllableRhymes = async () => {
        const axiosData = await multisyllableApi.highlightMultisyllableRhymes({
            lyrics: lyricsInput
        });

        const outputLyricsData = axiosData?.data?.lyrics;
        const lyricsOutputInProgress = [];
        if (outputLyricsData) {
            for (let i = 0; i < outputLyricsData.length; i++) {
                const line = outputLyricsData[i];
                for (let j = 0; j < line.length; j++) {
                    const spanEl = (
                        <Fragment>
                            {createSpanEl(line[j].word, line[j].style)}
                            {/* add a space after the span element if it's not the last word in the line */}
                            {j < line.length - 1 ? " " : ""}
                        </Fragment>
                    );

                    lyricsOutputInProgress.push(spanEl);
                }
                lyricsOutputInProgress.push(<br />);
            }

            setLyricsOutput(lyricsOutputInProgress);
        }
    };

    /**
     * Highlights rhymes depending on the rhyme style selected.
     *
     * @param e - Event object
     */
    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (rhymeStyle === RHYME_STYLE_OPTIONS.MONOSYLLABLE) {
            await highlightMonosyllableRhymes();
        } else if (rhymeStyle === RHYME_STYLE_OPTIONS.MULTISYLLABLE) {
            await highlightMultisyllableRhymes();
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
                            <RadioListGroup />
                            <button
                                type="submit"
                                className={clsx(styles.btn, styles.btnBlue)}
                                disabled={
                                    !lyricsInput ||
                                    rhymeStyle ===
                                        RHYME_STYLE_OPTIONS.SELECT_A_RHYME_STYLE
                                }
                            >
                                Highlight Rhymes
                            </button>
                        </div>
                    </form>
                    <div className={styles.lyricsOutputContainer}>
                        <div className="py-4">Highlighted rhymes</div>
                        <div className={styles.lyricsOutput}>
                            {lyricsOutput.map((element, index) => (
                                <Fragment key={index}>{element}</Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
