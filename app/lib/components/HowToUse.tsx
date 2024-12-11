/**
 * Gives an introduction to the application and describes each rhyme type.
 */

import React from "react";

const HowToUse = () => {
    return (
        <div className="flex flex-col justify-center">
            <p>
                Rhyme Detector is an application capable of highlighting
                monosyllable and multisyllable internal and line-final rhymes in
                rap lyrics. Below is a short description of each rhyme type that
                the app detects.
            </p>

            <br />

            <strong>Perfect Monosyllable</strong>
            <p>
                The algorithm for the perfect monosyllable rhyme type examines
                the syllables for each pair of lines and highlights words that
                contain at least one perfect monosyllable rhyme. This means that
                the vowel and ending consonants sounds for at least one syllable
                must match. An example of this is the word &quot;mind&quot;
                rhyming with &quot;blind&quot;.
            </p>

            <br />

            <strong>Multisyllable</strong>
            <p>
                The multisyllable rhyme type is based on the algorithm developed
                by{" "}
                <a
                    className="underline hover:text-slate-200"
                    href="https://www.ece.uvic.ca/~aalbu/computer%20vision%202010/automatic%20detection%20of%20rhymes%20in%20rap%20lyrics.pdf"
                >
                    Hirjee and Brown
                </a>{" "}
                which highlights imperfect and multisyllable rhymes in addition
                to perfect monosyllable ones. This algorithm also examines two
                lines at a time. Rhymes can span multiple words. For example,
                &quot;palms are sweaty&quot; rhymes with &quot;arms are
                heavy&quot;. In addition, multiple text decorations indicate
                that a word or phrase contains more than one rhyme pair. The
                text decorations used are: bold, italics, red text, underline,
                and strikethrough.
            </p>
        </div>
    );
};

export default HowToUse;
