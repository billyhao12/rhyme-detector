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

            <h2 className="text-xl underline mb-2">Perfect Monosyllable</h2>
            <p>
                This algorithm examines syllables for each pair of lines and
                highlights words that contain at least one perfect monosyllable
                rhyme. This means that vowel and ending consonant sounds for at
                least one syllable must match. Below is an example from the song
                "The Message" by Grandmaster Flash and The Furious Five:
            </p>

            <br />

            <div className="flex justify-center">
                <div className="flex flex-col">
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

            <p>In this case, the following rhyme pairs are detected:</p>
            <br />
            <div className="flex flex-col items-center gap-y-2">
                <p>A ~ the</p>
                <p>of ~ of</p>
                <p>mind ~ Blind</p>
                <p>mind ~ mankind</p>
                <p>Blind ~ mankind</p>
            </div>

            <br />

            <h2 className="text-xl underline mb-2">Multisyllable</h2>
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
                rotates through five text decorations when highlighting rhymes:{" "}
                <span className={styles.bold}>bold</span>,{" "}
                <span className={styles.italic}>italic</span>,{" "}
                <span className={styles.red}>red text</span>,{" "}
                <span className={styles.underline}>underline</span>, and{" "}
                <span className={styles.highlight}>
                    a yellow background color
                </span>
                . Words or phrases that contain multiple text decorations
                indicate the presence of more than one rhyme pair. Below is an
                example from the song "Lose Yourself" by Eminem:
            </p>

            <br />

            <div className="flex justify-center">
                <div className="flex flex-col">
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
                In this case, the following rhyme pairs are detected with their
                corresponding text decorations:
            </p>
            <br />
            <div className="flex flex-col items-center gap-y-2">
                <p>
                    <span className={styles.bold}>palms are sweaty</span> ~{" "}
                    <span className={styles.bold}>arms are heavy</span>
                </p>

                <p>
                    <span className={styles.italic}>arms</span> ~{" "}
                    <span className={styles.italic}>vomit</span>
                </p>

                <p>
                    <span className={styles.red}>sweaty</span> ~{" "}
                    <span className={styles.red}>sweater</span>
                </p>

                <p>
                    <span className={styles.underline}>heavy</span> ~{" "}
                    <span className={styles.underline}>already</span>
                </p>

                <p>
                    <span className={styles.highlight}>arms are heavy</span> ~{" "}
                    <span className={styles.highlight}>mom's spaghetti</span>
                </p>

                <p>
                    <span className={styles.bold}>vomit</span> ~{" "}
                    <span className={styles.bold}>mom's</span>
                </p>

                <p>
                    <span className={styles.italic}>already</span> ~{" "}
                    <span className={styles.italic}>spaghetti</span>
                </p>
            </div>

            <br />
        </div>
    );
};

export default HowToUse;
