/**
 * Contains form elements for user to interact with and highlight rhymes.
 * Makes calls to the backend server.
 * 
 * Source for loading spinner: https://flowbite.com/docs/components/spinner/
 */

"use client";
import { Fragment, useState } from "react";
import styles from "./page.module.sass";
import clsx from "clsx";
import monosyllableApi from "./lib/api/Monosyllable";
import multisyllableApi from "./lib/api/Multisyllable";
import RhymeTypesRadioGroup from "./lib/components/RhymeTypesRadioGroup";
import { RHYME_TYPE_OPTIONS } from "./lib/constants";
import HowToUse from "./lib/components/HowToUse";

export default function Home() {
    const [lyricsInput, setLyricsInput] = useState("");
    const [lyricsOutput, setLyricsOutput] = useState<Array<JSX.Element>>([]);
    const [rhymeType, setRhymeType] = useState(RHYME_TYPE_OPTIONS.MONOSYLLABLE);
    const [isLoading, setIsLoading] = useState(false);

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
        let axiosData;
        setIsLoading(true);

        try {
            axiosData = await monosyllableApi.highlightMonosyllableRhymes({
                lyrics: lyricsInput
            });
        } finally {
            setIsLoading(false);
        }

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
        let axiosData;
        setIsLoading(true);

        try {
            axiosData = await multisyllableApi.highlightMultisyllableRhymes({
                lyrics: lyricsInput
            });
        } finally {
            setIsLoading(false);
        }

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
     * Highlights rhymes depending on the rhyme type selected.
     *
     * @param e - Event object
     */
    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (rhymeType === RHYME_TYPE_OPTIONS.MONOSYLLABLE) {
            await highlightMonosyllableRhymes();
        } else if (rhymeType === RHYME_TYPE_OPTIONS.MULTISYLLABLE) {
            await highlightMultisyllableRhymes();
        }
    };

    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Rhyme Detector</h1>
            <div className={styles.mainContainer}>
                <HowToUse />
                <div className={styles.mainGrid}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.lyricsInputContainer}>
                            <label
                                htmlFor="lyricsInput"
                                className="block py-4 font-bold"
                            >
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
                            <RhymeTypesRadioGroup
                                rhymeType={rhymeType}
                                setRhymeType={setRhymeType}
                            />
                            <button
                                type="submit"
                                className={clsx(styles.btn, styles.btnBlue)}
                                disabled={!lyricsInput || isLoading}
                            >
                                {isLoading ? (
                                    <Fragment>
                                        <svg
                                            aria-hidden="true"
                                            role="status"
                                            className="inline w-4 h-4 me-3 text-white animate-spin"
                                            viewBox="0 0 100 101"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                fill="#E5E7EB"
                                            />
                                            <path
                                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        Loading...
                                    </Fragment>
                                ) : (
                                    "Highlight Rhymes"
                                )}
                            </button>
                        </div>
                    </form>
                    <div className={styles.lyricsOutputContainer}>
                        <div className="py-4 font-bold">Highlighted rhymes</div>
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
