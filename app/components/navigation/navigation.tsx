"use client";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import "./navigation.css";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [activeLink, setActiveLink] = useState<string>("/");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavigationMenu className="relative h-[104px] xxs:px-3 md:px-5 lg:px-10 xl:px-[132px] lg:py-6 w-full border-b-[0.5px] border-white">
      <NavigationMenuItem className="w-full flex justify-between items-center">
        {/* Desktop Menu */}
        <div className="hidden md:flex w-full justify-between items-center">
          <ul className="flex gap-3">
            <Link href="/">
              <li
                onClick={() => handleLinkClick("/")}
                className={`text-lg text-white ${
                  activeLink === "/" ? "font-bold border-b-2 border-white" : ""
                }`}
              >
                Home
              </li>
            </Link>
            <Link href="/">
              <li
                onClick={() => handleLinkClick("/about")}
                className={`text-lg text-white ${
                  activeLink === "/about"
                    ? "font-bold border-b-2 border-white"
                    : ""
                }`}
              >
                About
              </li>
            </Link>
            <Link href="/">
              <li
                onClick={() => handleLinkClick("/projects")}
                className={`text-lg text-white ${
                  activeLink === "/projects"
                    ? "font-bold border-b-2 border-white"
                    : ""
                }`}
              >
                Projects
              </li>
            </Link>
          </ul>

          <Link href="/">
            <Image
              className="xxs:w-[120px] sm:w-[180px] sm:h-auto md:w-[220px] lg:h-[57px]"
              width={220}
              height={57}
              src="/assets/images/logo.svg"
              alt="logo"
              priority
              blurDataURL="blur"
              quality={100}
            />
          </Link>

          <Button className="text-lg font-bold px-10 py-4 bg-[#1E3747] h-[52px] w-[256px] hover:bg-[#2c526a]">
            Contact for booking
            <Image
              width={24}
              height={24}
              src="/assets/icons/call-icon.svg"
              alt="logo"
              priority
              blurDataURL="blur"
              quality={100}
            />
          </Button>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden flex items-center justify-between w-full">
          <Link href="/">
            <Image
              className="w-[120px] sm:w-[180px] h-auto"
              width={120}
              height={40}
              src="/assets/images/logo.svg"
              alt="logo"
              priority
              blurDataURL="blur"
              quality={100}
            />
          </Link>

          {/* Hamburger Icon */}
          <button onClick={toggleMenu} className="text-white">
            {!isMenuOpen ? (
              <Image
                src="/assets/icons/ham-menu-icon.svg"
                alt="hamburger menu"
                width={24}
                height={24}
              />
            ) : (
              <Image
                src="/assets/icons/close-icon.svg"
                alt="close menu"
                width={22}
                height={17}
              />
            )}
          </button>
        </div>
      </NavigationMenuItem>

      {/* Mobile Drawer (if menu is open) */}
      {isMenuOpen && (
        <div className="absolute hamburger-menu-bg top-[104px] left-0 w-full h-[257px] bg-opacity-70 backdrop-blur-lg flex flex-col items-start p-5 space-y-5">
          <ul className="flex flex-col gap-3 w-full">
            <Link href="/">
              <li
                onClick={() => {
                  handleLinkClick("/");
                  setIsMenuOpen(false);
                }}
                className={`text-lg text-white ${
                  activeLink === "/"
                    ? "font-bold border-b-2 border-white w-fit"
                    : ""
                }`}
              >
                Home
              </li>
            </Link>
            <Link href="/">
              <li
                onClick={() => {
                  handleLinkClick("/about");
                  setIsMenuOpen(false);
                }}
                className={`text-lg text-white ${
                  activeLink === "/about"
                    ? "font-bold border-b-2 border-white w-fit"
                    : ""
                }`}
              >
                About
              </li>
            </Link>
            <Link href="/">
              <li
                onClick={() => {
                  handleLinkClick("/projects");
                  setIsMenuOpen(false);
                }}
                className={`text-lg text-white ${
                  activeLink === "/projects"
                    ? "font-bold border-b-2 border-white w-fit"
                    : ""
                }`}
              >
                Projects
              </li>
            </Link>
          </ul>

          <Button className="text-sm font-bold px-10 py-3 bg-[#1E3747] h-[48px] w-[214px] hover:bg-[#2c526a]">
            Contact for booking
            <Image
              width={16}
              height={16}
              src="/assets/icons/call-icon.svg"
              alt="logo"
              priority
              blurDataURL="blur"
              quality={100}
            />
          </Button>
        </div>
      )}
    </NavigationMenu>
  );
};
