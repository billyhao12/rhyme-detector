/**
 * Contains form elements for user to interact with and highlight rhymes.
 * Makes calls to the backend server.
 * 
 * Source for loading spinner: https://flowbite.com/docs/components/spinner/
 * Source for error toast: https://flowbite.com/docs/components/toast/#colors
 */

"use client";
import { Fragment, RefObject, useRef, useState } from "react";
import styles from "./page.module.sass";
import clsx from "clsx";
import monosyllableApi from "./lib/api/Monosyllable";
import multisyllableApi from "./lib/api/Multisyllable";
import RhymeTypesRadioGroup from "./lib/components/RhymeTypesRadioGroup";
import { RHYME_TYPE_OPTIONS } from "./lib/constants";
import HowToUse from "./lib/components/HowToUse";
import { isAxiosError } from "axios";

export default function Home() {
    const [lyricsInput, setLyricsInput] = useState("");
    const [lyricsOutput, setLyricsOutput] = useState<Array<JSX.Element>>([]);
    const [rhymeType, setRhymeType] = useState(RHYME_TYPE_OPTIONS.MONOSYLLABLE);
    const [isHighlightRhymesLoading, setIsHighlightRhymesLoading] =
        useState(false);
    const [isShowRhymePairsLoading, setIsShowRhymePairsLoading] =
        useState(false);
    const [displayErrorToast, setDisplayErrorToast] = useState(false);
    const [errorName, setErrorName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const lyricsInputRef = useRef<HTMLTextAreaElement>(null);
    const lyricsOutputRef = useRef<HTMLDivElement>(null);

    const handleScroll = (
        source: RefObject<HTMLTextAreaElement | HTMLDivElement>,
        target: RefObject<HTMLTextAreaElement | HTMLDivElement>
    ) => {
        if (source.current && target.current) {
            target.current.scrollTop = source.current.scrollTop;
            target.current.scrollLeft = source.current.scrollLeft;
        }
    };

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
        setIsHighlightRhymesLoading(true);

        try {
            axiosData = await monosyllableApi.highlightMonosyllableRhymes({
                lyrics: lyricsInput
            });
        } catch (err) {
            console.error(err);
            if (isAxiosError(err)) {
                setErrorName(err.name);
                setErrorMessage(err.message);
                setDisplayErrorToast(true);
            }
        } finally {
            setIsHighlightRhymesLoading(false);
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

        if (lyricsInputRef.current) {
            lyricsInputRef.current.scrollTop = 0;
            lyricsInputRef.current.scrollLeft = 0;
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
        setIsHighlightRhymesLoading(true);

        try {
            axiosData = await multisyllableApi.highlightMultisyllableRhymes({
                lyrics: lyricsInput
            });
        } catch (err) {
            console.error(err);
            if (isAxiosError(err)) {
                setErrorName(err.name);
                setErrorMessage(err.message);
                setDisplayErrorToast(true);
            }
        } finally {
            setIsHighlightRhymesLoading(false);
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

        if (lyricsInputRef.current) {
            lyricsInputRef.current.scrollTop = 0;
            lyricsInputRef.current.scrollLeft = 0;
        }
    };

    /**
     * Highlights rhymes depending on the rhyme type selected.
     *
     * @param e - Event object
     */
    const handleHighlightRhymesOnClick = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (rhymeType === RHYME_TYPE_OPTIONS.MONOSYLLABLE) {
            await highlightMonosyllableRhymes();
        } else if (rhymeType === RHYME_TYPE_OPTIONS.MULTISYLLABLE) {
            await highlightMultisyllableRhymes();
        }
    };

    return (
        <main className={styles.main}>
            {displayErrorToast && (
                <div
                    id="toast-danger"
                    className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 fixed"
                    role="alert"
                >
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
                        </svg>
                        <span className="sr-only">Error icon</span>
                    </div>
                    <div className="ms-3 text-sm font-normal">
                        {`${errorName}: ${errorMessage}`}
                    </div>
                    <button
                        type="button"
                        className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                        onClick={() => setDisplayErrorToast(false)}
                        aria-label="Close"
                    >
                        <span className="sr-only">Close</span>
                        <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                        </svg>
                    </button>
                </div>
            )}
            <h1 className={styles.title}>Rhyme Detector</h1>
            <div className={styles.mainContainer}>
                <HowToUse />
                <div className={styles.mainGrid}>
                    <form className={styles.form}>
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
                                ref={lyricsInputRef}
                                value={lyricsInput}
                                onChange={(e) => setLyricsInput(e.target.value)}
                                onScroll={() =>
                                    handleScroll(
                                        lyricsInputRef,
                                        lyricsOutputRef
                                    )
                                }
                                className={styles.lyricsInput}
                            />
                        </div>
                        <div className={styles.middleContainer}>
                            <RhymeTypesRadioGroup
                                rhymeType={rhymeType}
                                setRhymeType={setRhymeType}
                            />
                            <div className={styles.btnGroup}>
                                <button
                                    onClick={handleHighlightRhymesOnClick}
                                    className={clsx(styles.btn, styles.btnBlue)}
                                    disabled={
                                        !lyricsInput || isHighlightRhymesLoading
                                    }
                                >
                                    {isHighlightRhymesLoading ? (
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
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        console.log("Garfield");
                                    }}
                                    className={clsx(styles.btn, styles.btnBlue)}
                                    disabled={
                                        !lyricsInput || isShowRhymePairsLoading
                                    }
                                >
                                    {isShowRhymePairsLoading ? (
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
                                        "Show Rhyme Pairs"
                                    )}
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className={styles.lyricsOutputContainer}>
                        <div className="py-4 font-bold">Highlighted rhymes</div>
                        <div
                            className={styles.lyricsOutput}
                            ref={lyricsOutputRef}
                            onScroll={() =>
                                handleScroll(lyricsOutputRef, lyricsInputRef)
                            }
                        >
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
