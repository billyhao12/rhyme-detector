class Syllable {
    #stress: number = -1;
    #wordLength: number = 1;
    #wordPosition: number = 0;

    #startingConsonants: Array<string> = [];
    #vowel: string = '';
    #endingConsonants: Array<string> = [];

    constructor(startingConsonants: Array<string>, vowel: string, endingConsonants: Array<string>) {
        this.#startingConsonants = startingConsonants;
        this.#parseVowel(vowel);
        this.#endingConsonants = endingConsonants;
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

    addEndingConsonant(endingConsonant: string) {
        this.#endingConsonants.push(endingConsonant);
    }

    removeStartingConsonants() {
        this.#startingConsonants.length = 0;
    }

    set startingConsonants(value: Array<string>) {
        this.#startingConsonants = value;
    }

    equals(other: Syllable): boolean {
        if (this.#vowel !== other.#vowel) return false;
        if (this.#stress !== other.#stress) return false;
        if (this.#startingConsonants.length !== other.#startingConsonants.length) return false;
        if (this.#endingConsonants.length !== other.#endingConsonants.length) return false;
        for (let i = 0; i < this.#startingConsonants.length; i++) {
            if (this.#startingConsonants[i] !== other.#startingConsonants[i]) return false;
        }
        for (let i = 0; i < this.#endingConsonants.length; i++) {
            if (this.#endingConsonants[i] !== other.#endingConsonants[i]) return false;
        }

        return true;
    }

    get stress(): number {
        return this.#stress;
    }

    get vowel(): string {
        if (this.#stress < 0) {
            return this.#vowel;
        } else {
            return this.#vowel + this.#stress;
        }
    }
}
