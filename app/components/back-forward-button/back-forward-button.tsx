"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const BackForwardButton = () => {
  const [activeButton, setActiveButton] = useState<"back" | "forward" | null>(
    null
  );

  const handleBackClick = () => {
    setActiveButton((prev) => (prev === "back" ? null : "back"));
  };

  const handleForwardClick = () => {
    setActiveButton((prev) => (prev === "forward" ? null : "forward"));
  };

  return (
    <section className="flex gap-6">
      {/* Back Button */}
      <Button
        className="rounded-full border-[#888888] hover:bg-transparent bg-transparent xxs:w-12 xxs:h-12 md:w-[60px] md:h-[60px] flex p-0 justify-center items-center"
        onClick={handleBackClick}
        style={{
          backgroundColor: activeButton === "back" ? "#EAC863" : "transparent",
          border: activeButton === "back" ? "none" : "1px solid #888888",
        }}
      >
        {activeButton === "back" ? (
          <Image
            className="rotate-180 xxs:w-[7.5px] xxs:h-[13px] md:w-[11px] md:h-[18.5px]"
            width={11}
            height={18.5}
            src="/assets/icons/forward-icon.svg"
            alt="forward-icon"
            blurDataURL="blur"
            quality={100}
          />
        ) : (
          <Image
            className="xxs:w-[7.5px] xxs:h-[13px] md:w-[11px] md:h-[18.5px]"
            width={11}
            height={18.5}
            src="/assets/icons/back-icon.svg"
            alt="back-icon"
            blurDataURL="blur"
            quality={100}
          />
        )}
      </Button>

      {/* Forward Button */}
      <Button
        className="rounded-full border-[#888888] hover:bg-transparent bg-transparent xxs:w-12 xxs:h-12 md:w-[60px] md:h-[60px] flex p-0 justify-center items-center"
        onClick={handleForwardClick}
        style={{
          backgroundColor:
            activeButton === "forward" ? "#EAC863" : "transparent",
          border: activeButton === "forward" ? "none" : "1px solid #888888",
        }}
      >
        {activeButton === "forward" ? (
          <Image
            className="xxs:w-[7.5px] xxs:h-[13px] md:w-[11px] md:h-[18.5px]"
            width={11}
            height={18.5}
            src="/assets/icons/forward-icon.svg"
            alt="forward-icon"
            blurDataURL="blur"
            quality={100}
          />
        ) : (
          <Image
            className="rotate-180 xxs:w-[7.5px] xxs:h-[13px] md:w-[11px] md:h-[18.5px]"
            width={11}
            height={18.5}
            src="/assets/icons/back-icon.svg"
            alt="back-icon"
            blurDataURL="blur"
            quality={100}
          />
        )}
      </Button>
    </section>
  );
};
