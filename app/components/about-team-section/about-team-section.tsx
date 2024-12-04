import styles from "./about-team-section.module.css";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { BackForwardButton } from "../back-forward-buttons/back-forward-buttons";
import Link from "next/link";

export const AboutTeamSection = () => {
  return (
    <section className="w-full grid grid-cols-1 md:gap-14 justify-center text-center items-center xxs:py-8 xxs:px-4 xxs:gap-8  md:py-20 md:px-20 lg:px-32">
      <section className="flex flex-col xxs:gap-2 md:gap-6">
        <span className="flex justify-center md:justify-center items-center xxs:gap-2 md:gap-6">
          <Separator
            className={`xxs:h-0.5 md:h-1 rounded rotate-180 xxs:w-[40px] md:w-[100px] ${styles.separator}`}
          />
          <h2 className="uppercase xxs:text-xs sm:text-lg md:text-xl lg:text-2xl text-[#D1AF49] tracking-widest">
            Our team
          </h2>
          <Separator
            className={`xxs:h-0.5 md:h-1 rounded xxs:w-[40px] md:w-[100px] ${styles.separator}`}
          />
        </span>

        <h1 className="xxs:text-xl sm:text-3xl lg:text-5xl font-bold text-[#212121]">
          Visionaries Behind Our Success
        </h1>

        <p className="xxs:text-sm md:text-lg text-[#434343]">
          Explore from a variety of living experiences that Dubai offers!
        </p>
      </section>
      <section className="flex flex-col justify-center items-center">
        <ScrollArea className="w-full overflow-x-auto mb-8 xl:w-fit whitespace-nowrap rounded-md">
          <section className="flex space-x-4 p-4">
            <Card className="group xxs:w-[280px] md:w-[376px] bg-transparent border-none shadow-none relative xxs:rounded-none md:rounded-[6px] p-0">
              <ul className="hidden group-hover:flex justify-center bottom-1/4 right-6 absolute items-center gap-7">
                <Link href="/">
                  <li>
                    <Image
                      className="md:w-8 md:h-8 xxs:w-5 xxs:h-5"
                      width={32}
                      height={32}
                      src="/assets/icons/facebook-icon.svg"
                      alt="facebook"
                      blurDataURL="blur"
                      quality={100}
                    />
                  </li>
                </Link>
                <Link href="/">
                  <li>
                    <Image
                      className="md:w-8 md:h-8 xxs:w-5 xxs:h-5"
                      width={32}
                      height={32}
                      src="/assets/icons/linkedin-icon.svg"
                      alt="linkedin"
                      blurDataURL="blur"
                      quality={100}
                    />
                  </li>
                </Link>
                <Link href="/">
                  <li>
                    <Image
                      className="md:w-8 md:h-8 xxs:w-5 xxs:h-5"
                      width={32}
                      height={32}
                      src="/assets/icons/instagram-icon.svg"
                      alt="instagram"
                      blurDataURL="blur"
                      quality={100}
                    />
                  </li>
                </Link>
              </ul>
              <CardContent className="p-0">
                <Image
                  className="md:w-[376px] md:h-[395px] xxs:w-[280px] xxs:h-[294px] md:rounded-[6px]"
                  width={600}
                  height={412}
                  src="/assets/images/team.svg"
                  alt="about us image"
                  blurDataURL="blur"
                  quality={100}
                />
              </CardContent>
              <CardFooter className="flex flex-col items-start p-4 gap-1">
                <h3 className="text-[#222222] md:text-3xl font-medium">
                  Ludovico pagoda
                </h3>
                <p className="xxs:text-sm md:text-lg text-[#434343]">Partner</p>
              </CardFooter>
            </Card>

            <Card className="group xxs:w-[280px] md:w-[376px] bg-transparent border-none shadow-none relative xxs:rounded-none md:rounded-[6px] p-0">
              <ul className="hidden group-hover:flex justify-center bottom-1/4 right-6 absolute items-center gap-7">
                <Link href="/">
                  <li>
                    <Image
                      className="md:w-8 md:h-8 xxs:w-5 xxs:h-5"
                      width={32}
                      height={32}
                      src="/assets/icons/facebook-icon.svg"
                      alt="facebook"
                      blurDataURL="blur"
                      quality={100}
                    />
                  </li>
                </Link>
                <Link href="/">
                  <li>
                    <Image
                      className="md:w-8 md:h-8 xxs:w-5 xxs:h-5"
                      width={32}
                      height={32}
                      src="/assets/icons/linkedin-icon.svg"
                      alt="linkedin"
                      blurDataURL="blur"
                      quality={100}
                    />
                  </li>
                </Link>
                <Link href="/">
                  <li>
                    <Image
                      className="md:w-8 md:h-8 xxs:w-5 xxs:h-5"
                      width={32}
                      height={32}
                      src="/assets/icons/instagram-icon.svg"
                      alt="instagram"
                      blurDataURL="blur"
                      quality={100}
                    />
                  </li>
                </Link>
              </ul>
              <CardContent className="p-0">
                <Image
                  className="md:w-[376px] md:h-[395px] xxs:w-[280px] xxs:h-[294px] md:rounded-[6px]"
                  width={600}
                  height={412}
                  src="/assets/images/team.svg"
                  alt="about us image"
                  blurDataURL="blur"
                  quality={100}
                />
              </CardContent>
              <CardFooter className="flex flex-col items-start p-4 gap-1">
                <h3 className="text-[#222222] md:text-3xl font-medium">
                  Ludovico pagoda
                </h3>
                <p className="xxs:text-sm md:text-lg text-[#434343]">Partner</p>
              </CardFooter>
            </Card>

            <Card className="group xxs:w-[280px] md:w-[376px] bg-transparent border-none shadow-none relative xxs:rounded-none md:rounded-[6px] p-0">
              <ul className="hidden group-hover:flex justify-center bottom-1/4 right-6 absolute items-center gap-7">
                <Link href="/">
                  <li>
                    <Image
                      className="md:w-8 md:h-8 xxs:w-5 xxs:h-5"
                      width={32}
                      height={32}
                      src="/assets/icons/facebook-icon.svg"
                      alt="facebook"
                      blurDataURL="blur"
                      quality={100}
                    />
                  </li>
                </Link>
                <Link href="/">
                  <li>
                    <Image
                      className="md:w-8 md:h-8 xxs:w-5 xxs:h-5"
                      width={32}
                      height={32}
                      src="/assets/icons/linkedin-icon.svg"
                      alt="linkedin"
                      blurDataURL="blur"
                      quality={100}
                    />
                  </li>
                </Link>
                <Link href="/">
                  <li>
                    <Image
                      className="md:w-8 md:h-8 xxs:w-5 xxs:h-5"
                      width={32}
                      height={32}
                      src="/assets/icons/instagram-icon.svg"
                      alt="instagram"
                      blurDataURL="blur"
                      quality={100}
                    />
                  </li>
                </Link>
              </ul>
              <CardContent className="p-0">
                <Image
                  className="md:w-[376px] md:h-[395px] xxs:w-[280px] xxs:h-[294px] md:rounded-[6px]"
                  width={600}
                  height={412}
                  src="/assets/images/team.svg"
                  alt="about us image"
                  blurDataURL="blur"
                  quality={100}
                />
              </CardContent>
              <CardFooter className="flex flex-col items-start p-4 gap-1">
                <h3 className="text-[#222222] md:text-3xl font-medium">
                  Ludovico pagoda
                </h3>
                <p className="xxs:text-sm md:text-lg text-[#434343]">Partner</p>
              </CardFooter>
            </Card>
          </section>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <BackForwardButton />
      </section>
    </section>
  );
};
