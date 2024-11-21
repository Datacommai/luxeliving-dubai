import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-[#1E3747]  xxs:gap-6 grid grid-col-1 xxs:py-10 xxs:px-6 lg:py-24 lg:px-32">
      <section className="flex flex-col gap-6">
        <ul className="md:flex xxs:grid-col xxs:grid-cols-1  text-center md:flex-row xxs:gap-4 md:gap-6">
          <Link href="/">
            <li className="text-lg text-white">Home</li>
          </Link>
          <Link href="/">
            <li className="text-lg text-white">Projects</li>
          </Link>
          <Link href="/">
            <li className="text-lg text-white">About us</li>
          </Link>
        </ul>
        <Separator className="w-full xxs:hidden md:block border-2 border-[#274659] border-solid" />
      </section>

      <section className="md:flex xxs:grid w-full xxs:grid-col-1 gap-6 xxs:justify-center md:flex-row md:justify-between items-center">
        <div className="grid grid-col-1 w-full md:justify-start xxs:justify-center items-center xxs:text-center md:text-left gap-1">
          <figure className="flex md:justify-start xxs:justify-center">
            <Image
              className="xxs:w-[120px] mb-3 sm:w-[180px] sm:h-auto md:w-[220px] lg:h-[57px]"
              width={220}
              height={57}
              src="/assets/images/logo.svg"
              alt="logo"
              priority
              blurDataURL="blur"
              quality={100}
            />
          </figure>
          <h2 className="text-white xxs:text-sm md:text-2xl font-bold">
            AZOO Co., Ltd.
          </h2>
          <p className="text-white xxs:text-xs md:text-2xl">
            Main Street, Apartment 4B, Cityville, <br />
            State 54321, United States
          </p>
        </div>
        <ul className="flex justify-center items-center gap-7">
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
                src="/assets/icons/youtube-icon.svg"
                alt="youtube"
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
          <Link href="/">
            <li>
              <Image
                className="md:w-8 md:h-8 xxs:w-5 xxs:h-5"
                width={32}
                height={32}
                src="/assets/icons/x-icon.svg"
                alt="x"
                blurDataURL="blur"
                quality={100}
              />
            </li>
          </Link>
        </ul>
      </section>

      <section className="flex xxs:flex-col absolute xxs:p-6 gap-2 md:py-4 md:px-[132px] left-0 w-full pl-0 bottom-0 bg-[#0F202A] xxs:justify-center items-center md:justify-between md:flex-row">
        <p className="xxs:text-xs md:text-base text-white md:font-bold">
          AZ00.Inc. All rights reserved.
        </p>
        <span className="flex gap-8">
          <Link className=" xxs:text-xs md-text-base text-white" href="/">
            Terms of use
          </Link>
          <Link className=" xxs:text-xs md-text-base text-white" href="/">
            Privacy Policy
          </Link>
        </span>
      </section>
    </footer>
  );
};
