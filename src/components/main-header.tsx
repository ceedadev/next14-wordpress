import React from "react";
import { SITE_TITLE } from "@/lib/constant";

export default function MainHeader() {
  return (
    <header className="flex w-full flex-row px-4 py-4 md:py-10 border-b items-center justify-between">
      <p className="text-lg md:text-4xl font-serif italic">{SITE_TITLE}</p>
      <p className="text-xs md:text-base font-light text-neutral-600">
        Demo NextJS App with Headless Wordpress
      </p>
    </header>
  );
}
