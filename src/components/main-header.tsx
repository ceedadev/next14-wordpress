import React from "react";
import { SITE_TITLE, SITE_URL } from "@/lib/constant";
import Link from "next/link";

export default function MainHeader() {
  return (
    <header className="flex w-full flex-row px-4 md:px-10 py-4 md:py-6 border-b items-center justify-between mb-10">
      <Link
        href={"http://localhost:3000"}
        className="text-lg md:text-4xl font-serif italic"
      >
        {SITE_TITLE}
      </Link>
      <p className="text-xs md:text-base font-light text-neutral-600">
        Demo NextJS App with Headless Wordpress
      </p>
    </header>
  );
}
