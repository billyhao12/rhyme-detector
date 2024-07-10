class Syllable {
    startingConsonants: Array<string> = [];
    #vowel: string = '';
    endingConsonants: Array<string> = [];

    #stress: number = -1;

    constructor(startingConsonants: Array<string>, vowel: string, endingConsonants: Array<string>) {
        this.startingConsonants = startingConsonants;
        this.#parseVowel(vowel);
        this.endingConsonants = endingConsonants;
    }

    #parseVowel(vowel: string) {
        if (vowel.length > 2) {
            this.#stress = parseInt(vowel.substring(2));
            this.#vowel = vowel.substring(0, 2);
        } else {
            this.#stress = -1;
            this.#vowel = vowel;
        }
    }
};
