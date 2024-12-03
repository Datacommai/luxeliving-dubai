import styles from "./about-purpose-section.module.css";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export const AboutPurposeSection = () => {
  return (
    <section
      className={`${styles["about-purpose-section"]} xxs:text-center xxs:flex xxs:flex-col xxs:gap-6 md:gap-14 xxs:py-6 xxs:px-6 sm:px-10 sm:py-10 md:py-14 md:px-[50px]  xl:py-20 xl:px-[132px] w-full gap-14`}
    >
      <section
        className={`${styles["purpose-header"]} flex flex-col justify-center text-center xxs:gap-3 md:gap-6`}
      >
        <span
          className={`${styles["separator-container"]} flex justify-center items-center xxs:gap-2 md:gap-6`}
        >
          <Separator
            className={`${styles.separator} xxs:h-0.5 md:h-1 rounded rotate-180 xxs:w-[40px] md:w-[100px]`}
          />
          <h2
            className={`${styles["section-title"]} uppercase xxs:text-xs sm:text-lg md:text-xl lg:text-2xl text-[#D1AF49] tracking-widest`}
          >
            Vision & Mission
          </h2>

          <Separator
            className={`${styles.separator} xxs:h-0.5 md:h-1 rounded xxs:w-[40px] md:w-[100px]`}
          />
        </span>

        <h1
          className={`${styles["main-heading"]} xxs:text-xl sm:text-3xl lg:text-5xl font-bold text-[#212121]`}
        >
          Our Purpose and Aspirations
        </h1>

        <p
          className={`${styles["description"]} xxs:text-sm md:text-xl text-[#434343]`}
        >
          Explore from a variety of living experiences that Dubai offers!
        </p>
      </section>

      <section className="flex xxs:flex-col xxs:justify-start sm:items-center lg:items-start lg:justify-start sm:justify-center md:justify-center lg:flex-row xxs:gap-6 sm:gap-10 lg:gap-16 xl:gap-24 w-full h-full">
        <figure className="xxs:w-fit xxs:h-fit xl:w-full flex justify-center items-center lg:h-full relative">
          <Image
            className={`${styles} xl:w-full xl:h-full lg:w-full md:w-[450px] md:h-[550px] sm:w-[350px] sm:h-[450px] xxs:w-[218px] xxs:h-[290px]`}
            width={350}
            height={500}
            src="/assets/images/purpose-image-1.svg"
            alt="purpose section image"
            blurDataURL="blur"
            quality={100}
          />

          <Card
            className={`${styles.card} absolute grid grid-col-1 text-left border-none shadow-md rounded-[6px] xxs:gap-3 md:gap-4 xxs:top-6 xxs:-right-16 xs:top-6 xs:-right-28 sm:top-16 sm:-right-24 md:top-10 md:-right-28 lg:top-20 lg:-right-12 xxs:w-[173px] xxs:h-[231px] md:w-[300px] md:h-[400px] xxs:py-3 xxs:pr-4 xxs:pl-6 md:py-6 md:pr-6 md:pl-10`}
          >
            <CardHeader className={`${styles} p-0 pt-2 h-fit`}>
              <CardTitle
                className={`${styles["card-title"]} xxs:text-2xl md:text-5xl text-[#212121]`}
              >
                Vision
              </CardTitle>
            </CardHeader>
            <CardContent className={`${styles} relative p-0 `}>
              <CardDescription
                className={`${styles["card-description"]} xxs:text-[10px] md:text-base text-[#616161]`}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </CardDescription>

              <div
                className={`${styles} absolute xxs:-left-24 xxs:top-10 md:-left-40 top-12 xxs:py-2 xxs:px-3 md:px-3 md:py-6 rotate-90 xxs:w-[130px] xxs:h-[29px]  md:w-[237px] md:h-[46px] flex justify-center items-center bg-[#1E3747]`}
              >
                <p
                  className={`${styles} rotate-180 font-medium text-white tracking-widest xxs:text-xs md:text-lg`}
                >
                  Sightseeing
                </p>
              </div>
            </CardContent>
            <CardFooter className={`${styles} px-0`}>
              <Link
                href="#"
                className={`${styles} text-[#333333] uppercase tracking-wider flex items-center gap-2 xxs:font-medium md:text-base xxs:text-[10px]`}
              >
                Learn More
                <Image
                  className={`${styles} xxs:w-[12px] xxs:h-[12px] md:w-[20px] md:h-[20px]`}
                  width={20}
                  height={20}
                  src="/assets/icons/right-arrow-icon.svg"
                  alt="purpose section image"
                  blurDataURL="blur"
                  quality={100}
                />
              </Link>
            </CardFooter>
          </Card>
        </figure>

        <figure className="xxs:w-fit xxs:h-fit xl:w-full flex justify-center items-center lg:h-full relative">
          <Image
            className={`${styles} xl:w-full xl:h-full lg:w-full md:w-[450px] md:h-[550px] sm:w-[350px] sm:h-[450px] xxs:w-[218px] xxs:h-[290px]`}
            width={1}
            height={1}
            src="/assets/images/purpose-image-2.svg"
            alt="purpose section image"
            blurDataURL="blur"
            quality={100}
          />

          <Card
            className={`${styles.card} absolute grid grid-col-1 text-left border-none shadow-md rounded-[6px] xxs:gap-3 md:gap-4 xxs:top-6 xxs:-right-16 xs:top-6 xs:-right-28 sm:top-16 sm:-right-24 md:top-10 md:-right-28 lg:top-20 lg:-right-12 xxs:w-[173px] xxs:h-[231px] md:w-[300px] md:h-[400px] xxs:py-3 xxs:pr-4 xxs:pl-6 md:py-6 md:pr-6 md:pl-10`}
          >
            <CardHeader className={`${styles} p-0 pt-2 h-fit`}>
              <CardTitle
                className={`${styles["card-title"]} xxs:text-2xl md:text-5xl text-[#212121]`}
              >
                Vision
              </CardTitle>
            </CardHeader>
            <CardContent className={`${styles} relative p-0 `}>
              <CardDescription
                className={`${styles["card-description"]} xxs:text-[10px] md:text-base text-[#616161]`}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </CardDescription>

              <div
                className={`${styles} absolute xxs:-left-24 xxs:top-10 md:-left-40 top-12 xxs:py-2 xxs:px-3 md:px-3 md:py-6 rotate-90 xxs:w-[130px] xxs:h-[29px]  md:w-[237px] md:h-[46px] flex justify-center items-center bg-[#1E3747]`}
              >
                <p
                  className={`${styles} rotate-180 font-medium text-white tracking-widest xxs:text-xs md:text-lg`}
                >
                  Sightseeing
                </p>
              </div>
            </CardContent>
            <CardFooter className={`${styles} px-0`}>
              <Link
                href="#"
                className={`${styles} text-[#333333] uppercase tracking-wider flex items-center gap-2 xxs:font-medium md:text-base xxs:text-[10px]`}
              >
                Learn More
                <Image
                  width={20}
                  height={20}
                  src="/assets/icons/right-arrow-icon.svg"
                  alt="purpose section image"
                  blurDataURL="blur"
                  quality={100}
                />
              </Link>
            </CardFooter>
          </Card>
        </figure>
      </section>
    </section>
  );
};
