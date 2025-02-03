/**
 * Gives an introduction to the application and describes each rhyme type.
 */

import React from "react";

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
                least one syllable must match. For example, &quot;mind&quot; and
                &quot;blind&quot; form a perfect monosyllable pair. Keep in mind
                that words with multiple syllables may also contain perfect
                monosyllable rhymes. &quot;Mind&quot; forms a pair with
                &quot;mankind&quot; even though not all the syllables rhyme.
            </p>

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
