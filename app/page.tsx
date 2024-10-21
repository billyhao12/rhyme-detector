"use client";
import styles from "./page.module.sass";
import clsx from "clsx";
import { FormEvent, MutableRefObject, useEffect, useRef } from "react";

export default function Home() {
  // const lyricsInputRef: MutableRefObject<null | HTMLDivElement> = useRef(null);

  // useEffect(() => {
  //   if (lyricsInputRef.current) {
  //     lyricsInputRef.current.focus();
  //   }
  // }, []);

  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault();

  //   const userInputLyrics = lyricsInputRef.current?.innerText;
  //   console.log({ userInputLyrics });

  //   if (userInputLyrics) {
  //     const lines = userInputLyrics.split("\n");
  //     for (let i = 0; i < lines.length; i++) {
  //       console.log(`line ${i}: ${lines[i]}`);
  //     }
  //   }
  // };

  return (
    <main className="w-full flex flex-col p-8">
      <h1 className="w-full flex justify-center p-4 text-3xl">
        Rhyme Detector
      </h1>
      <form className="container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          <div className="col-span-1 lg:col-span-2 p-4">
            <div>Enter lyrics to highlight below</div>
            <textarea className="w-full h-screen p-4" />
          </div>
          <div className="col-span-1 p-4 flex justify-center items-center">
            <button type="submit" className={clsx(styles.btn, styles.btnBlue)}>
              Highlight Rhymes
            </button>
          </div>
          <div className="col-span-1 lg:col-span-2 p-4">
            <div className="w-full bg-white h-screen text-black p-4">
              <span>test</span>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}
