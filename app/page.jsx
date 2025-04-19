"use client";

import Header from "./Components/header";
import RoomCard from "./Components/grid";

import AnchorStyle from "./Components/anchor";
import { useEffect, useState } from "react";
import Footer from "./Components/footer";

export default function Home() {
  const [isOntop, setOntop] = useState(true);
  const [filter, setFilter] = useState(
    typeof window !== "undefined" && localStorage.getItem("filterLCstorage")
  );

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.scrollY == 0) {
        setOntop(true);
      } else if (window.scrollY >= 300) {
        setOntop(false);
      }
    });
  });
  return (
    <div className="outest Div">
      <div className="sticky top-0 z-30 bg-white shadow-xl">
        <Header isOntop={isOntop} />
        {/* Anchor */}
        <AnchorStyle filter={filter} setFilter={setFilter} />
        {/* Anchor */}
      </div>

      <RoomCard filter={filter} />
      <Footer />
    </div>
  );
}
