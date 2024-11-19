/**
 * Basic layout of the home page
 */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Rhyme Detector",
    description: "Highlight rhymes in rap lyrics"
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </head>
            <body className={inter.className}>
                {children}
                <script
                    src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js"
                    async
                />
            </body>
        </html>
    );
}
