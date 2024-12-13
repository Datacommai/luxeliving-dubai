"use client";
import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import "./navigation.css";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type NavigationProps = {
  hideLinks?: boolean;
};

export const Navigation = (props: NavigationProps) => {
  const { hideLinks } = props;
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [, setIsMobile] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <NavigationMenu className="relative h-[104px] xxs:px-3 md:px-5 lg:px-10 xl:px-[132px] xxs:py-4 lg:py-6 w-full border-b-[0.5px] border-white">
      <NavigationMenuItem className="w-full flex justify-between items-center">
        <div className="hidden md:flex w-full justify-between items-center">
          {!hideLinks && (
            <section className="flex gap-5">
              <Link href="/" className={`text-lg text-white`}>
                Home
              </Link>
              <Link href="/about" className={`text-lg text-white`}>
                About
              </Link>
              {/* <Link href="/" className={`text-lg text-white `}>
                Projects
              </Link> */}
            </section>
          )}

          <Link href="/">
            <Image
              className="xxs:w-[120px] sm:w-[180px] sm:h-auto md:w-[220px] lg:h-[57px]"
              width={220}
              height={57}
              src="/assets/logo/luxeliving-logo.svg"
              alt="logo"
              priority
              blurDataURL="blur"
              quality={100}
            />
          </Link>

          <Button className="text-lg capitalize font-bold px-10 py-4 bg-[#1E3747] h-[52px] w-[256px] hover:bg-[#2c526a]">
            Contact for booking
            <Image
              width={24}
              height={24}
              src="/assets/icons/call-icon.svg"
              alt="contact icon"
              blurDataURL="blur"
              quality={100}
            />
          </Button>
        </div>

        {/* Mobile Navigation (Hamburger Icon) */}
        <div className="md:hidden flex items-center justify-between w-full">
          <Link href="/">
            <Image
              className="w-[120px] sm:w-[180px] h-auto"
              width={120}
              height={40}
              src="/assets/logo/luxeliving-logo.svg"
              alt="logo"
              priority
              blurDataURL="blur"
              quality={100}
            />
          </Link>
          {!hideLinks && (
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
          )}
        </div>
      </NavigationMenuItem>

      {hideLinks && (
        <Button className="text-sm md:hidden xxs:px-6 font-bold px-10 py-3 bg-[#1E3747] h-[48px] w-[214px] hover:bg-[#2c526a]">
          Contact for booking
          <Image
            width={16}
            height={16}
            src="/assets/icons/call-icon.svg"
            alt="contact icon"
            blurDataURL="blur"
            quality={100}
          />
        </Button>
      )}

      {/* Mobile Drawer (Menu) */}
      {!hideLinks && isMenuOpen && (
        <div className="absolute hamburger-menu-bg top-[63px] left-0 w-full h-[257px] bg-opacity-70 backdrop-blur-lg flex flex-col items-start p-5 space-y-5">
          <section className="flex flex-col gap-3 w-full">
            <Link
              onClick={toggleMenu}
              href="/"
              className={`text-lg text-white`}
            >
              Home
            </Link>
            <Link
              onClick={toggleMenu}
              href="/about"
              className={`text-lg text-white`}
            >
              About
            </Link>
            {/*   <Link
              onClick={toggleMenu}
              href="/"
              className={`text-lg text-white `}
            >
              Projects
            </Link> */}
          </section>

          <Button className="text-sm font-bold px-10 py-3 bg-[#1E3747] h-[48px] w-[214px] hover:bg-[#2c526a]">
            Contact for booking
            <Image
              width={16}
              height={16}
              src="/assets/icons/call-icon.svg"
              alt="contact icon"
              blurDataURL="blur"
              quality={100}
            />
          </Button>
        </div>
      )}
    </NavigationMenu>
  );
};
