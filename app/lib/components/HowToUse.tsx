/**
 * Gives an introduction to the application and describes each rhyme type.
 */

import React from "react";
import clsx from "clsx";

import styles from "../../page.module.sass";

const HowToUse = () => {
    return (
        <div className="flex flex-col justify-center">
            <p>
                Rhyme Detector is an application capable of highlighting
                monosyllable and multisyllable rhymes in rap lyrics. Simply type
                or copy and paste lyrics that you would like to highlight. Below
                is a short description of each rhyme type.
            </p>

            <br />

            <h2 className="font-bold">Perfect Monosyllable</h2>
            <p>
                This algorithm examines syllables for each pair of lines and
                highlights words that contain at least one perfect monosyllable
                rhyme. This means that vowel and ending consonant sounds for at
                least one syllable must match. Below is an example from the song
                "The Message" by Grandmaster Flash and The Furious Five:
            </p>

            <br />

            <div className="flex justify-center">
                <div className="w-1/3 border border-solid border-gray-500 text-black p-4 bg-slate-50">
                    <p>
                        <span className={styles.highlight}>A</span> child is
                        born with no state{" "}
                        <span className={styles.highlight}>of</span>{" "}
                        <span className={styles.highlight}>mind</span>
                    </p>
                    <p>
                        <span className={styles.highlight}>Blind</span> to{" "}
                        <span className={styles.highlight}>the</span> ways{" "}
                        <span className={styles.highlight}>of</span>{" "}
                        <span className={styles.highlight}>mankind</span>
                    </p>
                </div>
            </div>

            <br />

            <p>In this case, the following rhyme pairs are highlighted:</p>
            <br />
            <div className="flex flex-col items-center">
                <p>A ~ the</p>
                <p>of ~ of</p>
                <p>mind ~ Blind</p>
                <p>mind ~ mankind</p>
                <p>Blind ~ mankind</p>
            </div>

            <br />

            <h2 className="font-bold">Multisyllable</h2>
            <p>
                The multisyllable rhyme type is based on an algorithm developed
                by{" "}
                <a
                    className="underline hover:opacity-80"
                    href="https://www.ece.uvic.ca/~aalbu/computer%20vision%202010/automatic%20detection%20of%20rhymes%20in%20rap%20lyrics.pdf"
                >
                    Hirjee and Brown
                </a>{" "}
                which examines syllables for each pair of lines and highlights
                imperfect and multisyllable rhymes in addition to perfect
                monosyllable ones. Rhymes can span multiple words. The algorithm
                rotates through five text decorations when highlighting rhymes:
                bold, italic, red text, underline, and a yellow background
                color. Words or phrases that contain multiple text decorations
                indicate the presence of more than one rhyme pair. Below is an
                example from the song "Lose Yourself" by Eminem:
            </p>

            <br />

            <div className="flex justify-center">
                <div className="w-1/3 border border-solid border-gray-500 text-black p-4 bg-slate-50">
                    <p>
                        <span>His</span>{" "}
                        <span className={styles.bold}>palms</span>{" "}
                        <span className={styles.bold}>are</span>{" "}
                        <span className={clsx(styles.bold, styles.red)}>
                            sweaty,
                        </span>{" "}
                        knees weak,{" "}
                        <span
                            className={clsx(
                                styles.bold,
                                styles.italic,
                                styles.highlight
                            )}
                        >
                            arms
                        </span>{" "}
                        <span className={clsx(styles.bold, styles.highlight)}>
                            are
                        </span>{" "}
                        <span
                            className={clsx(
                                styles.bold,
                                styles.underline,
                                styles.highlight
                            )}
                        >
                            heavy
                        </span>
                    </p>
                    <p>
                        There's{" "}
                        <span className={clsx(styles.bold, styles.italic)}>
                            vomit
                        </span>{" "}
                        on his <span className={styles.red}>sweater</span>{" "}
                        <span className={clsx(styles.italic, styles.underline)}>
                            already,
                        </span>{" "}
                        <span className={clsx(styles.bold, styles.highlight)}>
                            mom's
                        </span>{" "}
                        <span className={clsx(styles.italic, styles.highlight)}>
                            spaghetti
                        </span>
                    </p>
                </div>
            </div>

            <br />

            <p>
                In this case, the following rhyme pairs with their corresponding
                text decoration are highlighted:
            </p>
            <br />
            <div className="flex justify-center gap-x-4">
                <div>
                    <p>Bold:</p>
                    <p>Italic:</p>
                    <p>Red text:</p>
                    <p>Underline:</p>
                    <p>Yellow background color:</p>
                    <p>Bold:</p>
                    <p>Italic:</p>
                </div>
                <div>
                    <p>palms are sweaty ~ arms are heavy</p>
                    <p>arms ~ vomit</p>
                    <p>sweaty ~ sweater</p>
                    <p>heavy ~ already</p>
                    <p>arms are heavy ~ mom's spaghetti</p>
                    <p>vomit ~ mom's</p>
                    <p>already ~ spaghetti</p>
                </div>
            </div>

            <br />
        </div>
    );
};

export default HowToUse;
