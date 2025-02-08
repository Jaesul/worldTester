"use client";

import { SignIn } from "@/app/_components/SignIn";
import { SearchField } from "@worldcoin/mini-apps-ui-kit-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Nav() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      router.push(`/results?query=${search}`);
    }
  }

  return (
    <nav className="flex gap-4 justify-between items-center p-4 ">
      <a className="text-2xl font-bold" href="/">WGS</a>
      <div>
        <SearchField onKeyDown={handleKeyDown} value={search} onChange={(e) => setSearch(e.target.value)} placeholder="" />
      </div>
      <div className="flex items-center gap-4">
        <SignIn />
      </div>
    </nav>
  );
}
