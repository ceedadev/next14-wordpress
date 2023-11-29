import React from "react";
import { SITE_TITLE, SITE_URL } from "@/lib/constant";
import Link from "next/link";

export default function MainHeader() {
  return (
    <header className=" max-w-4xl mx-auto w-full border-b mb-4 md:mb-10">
      <div className=" flex flex-row mx-auto px-4 md:px-0 py-2">
        <p className=" w-full uppercase font-bold tracking-tight">
          {SITE_TITLE}
        </p>

        <nav className="hidden md:flex flex-row items-center justify-between space-x-4 text-xs uppercase tracking-tight">
          <p>Blog</p>
          <p>Podcast</p>
          <p>Authors</p>
        </nav>
      </div>
    </header>
  );
}
