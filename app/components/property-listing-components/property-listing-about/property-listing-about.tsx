"use client";
import styles from "./property-listing-about.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { mockFetchPropertyAboutData } from "@/lib/mock-server/mockFetchProperyAboutData";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

export default function PropertyListingAboutWithDelay() {
  const [data, setData] = useState<PropertyListingAboutProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    mockFetchPropertyAboutData(1000).then((res) => {
      setData(res as PropertyListingAboutProps);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <PropertyAboutSkeleton count={3} />
  ) : (
    <PropertyListingAbout {...(data as PropertyListingAboutProps)} />
  );
}

function PropertyAboutSkeleton({ count }: { count: number }) {
  return (
    <section className="w-full 2xl:px-28 xxs:px-4 xxs:py-8 md:py-14 lg:py-20 md:px-10 lg:px-6 xl:px-16 flex flex-col justify-center items-center">
      {/* Skeleton for Header Section */}
      <section className="flex flex-col justify-center text-center xxs:gap-3 md:gap-6 w-full">
        <div className="flex justify-center items-center xxs:gap-2 md:gap-6">
          <Skeleton className="xxs:h-0.5 md:h-1 rounded xxs:w-[40px] md:w-[100px]" />
          <Skeleton className="xxs:h-4 sm:h-6 md:h-8 lg:h-10 xxs:w-[80px] sm:w-[120px] md:w-[160px]" />
          <Skeleton className="xxs:h-0.5 md:h-1 rounded xxs:w-[40px] md:w-[100px]" />
        </div>
        <span className="flex justify-center flex-col items-center gap-4">
          <Skeleton className="xxs:h-6 sm:h-10 lg:h-12 xxs:w-[200px] sm:w-[300px] lg:w-[500px]" />
          <Skeleton className="xxs:h-4 md:h-6 xxs:w-[160px] md:w-[240px]" />
        </span>
      </section>

      <section className="lg:grid xxs:flex flex-col justify-center justify-items-center items-center lg:grid-cols-3 gap-4 mt-10 w-full">
        <Skeleton className="w-full h-auto rounded-lg lg:w-[900px] 2xl:w-[1300px] lg:h-[600px] col-span-3 shadow-lg" />
        <section className="flex-justify-center px-20 items-center justify-items-center">
          <div className="py-10 px-4 grid xxs:grid-2 lg:grid-cols-3 w-full gap-10 justify-center items-center justify-items-center">
            {Array.from({ length: count }).map((_, index) => (
              <Skeleton
                key={index}
                className="lg:h-[300px] md:h-[217px] xxs:h-[139px] lg:w-[300px] 2xl:w-[500px] rounded-lg"
              />
            ))}
          </div>
        </section>
      </section>
    </section>
  );
}

export type PropertyListingAboutProps = {
  title: string;
  description: string;
  imageUrls: string[];
};

function PropertyListingAbout({
  title,
  description,
  imageUrls,
}: PropertyListingAboutProps) {
  return (
    <section className="w-full xxs:gap-8 md:gap-10 2xl:px-28 xxs:px-4 xxs:py-8 md:py-14 lg:py-20 md:px-10 lg:px-6 xl:px-10 flex flex-col justify-center items-center">
      {/* Header Section */}

      <section className="flex flex-col justify-center text-center xxs:gap-3 md:gap-6">
        <div
          className={`flex justify-center items-center xxs:gap-2 md:gap-6 ${styles.separatorContainer}`}
        >
          <Separator
            className={`xxs:h-0.5 md:h-1 rounded rotate-180 xxs:w-[40px] md:w-[100px] ${styles.separator}`}
          />
          <h2 className="uppercase xxs:text-xs sm:text-lg md:text-xl lg:text-2xl text-[#D1AF49] tracking-widest">
            Location
          </h2>
          <Separator
            className={`xxs:h-0.5 md:h-1 rounded xxs:w-[40px] md:w-[100px] ${styles.separator}`}
          />
        </div>
        <h1 className="xs:text-xl sm:text-3xl lg:text-5xl capitalize font-bold text-[#212121]">
          About Location: {title}
        </h1>
        <p className="xxs:text-xs md:text-xl text-[#434343]">
          Explore from a variety of living experiences that Dubai offers!
        </p>
      </section>

      {/* Image Gallery */}

      <div className="grid lg:grid-cols-3  xxs:grid-cols-2 xxs:gap-3 md:gap-6 justify-items-center items-center">
        {imageUrls.map((url, index) => (
          <div
            className={`${index === 0 ? "lg:col-span-3 xxs:col-span-2" : ""} ${
              index === imageUrls.length - 1
                ? "xxs:col-span-2 lg:col-span-1"
                : ""
            } w-full h-full`}
            key={index}
          >
            <Image
              alt={`Image ${index + 1}`}
              src={url}
              width={100}
              height={100}
              className="h-auto w-full rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Description */}
      <section className="2xl:max-w-[1440px]">
        <p className="text-[#434343] xxs:text-sm md:text-xl leading-5">
          {description}
        </p>
      </section>
    </section>
  );
}
