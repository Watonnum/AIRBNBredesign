"use client";

import Image from "next/image";
import Header from "./Components/header";
import RoomCard from "./Components/grid";

import AnchorStyle from "./Components/anchor";
import { useEffect, useState } from "react";

export default function Home() {
  const [isOntop, setOntop] = useState(true);
  const [filter, setFilter] = useState(
    typeof window !== "undefined" && localStorage.getItem("filterLCstorage")
  );

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.scrollY == 0) {
        setOntop(true);
      } else if (window.scrollY >= 200) {
        setOntop(false);
      }
    });
  });
  return (
    <div className="outest Div">
      <div className="sticky top-0 z-30 bg-white">
        <Header isOntop={isOntop} />
        {/* Anchor */}
        <AnchorStyle filter={filter} setFilter={setFilter} />
        {/* Anchor */}
      </div>

      <RoomCard filter={filter} />

      <footer className="mt-96 row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
