'use client';

import styles from './property-listing-details.module.css';
import Image from 'next/image';
import { Suspense, useEffect, useState } from 'react';
import { mockFetchPropertyDetailsData } from '@/lib/mock-server/mockFetchProperyDetailsData';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function PropertyListingDetailsWithDelay() {
 const [data, setData] = useState<PropertyListingDetailsProps>();
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  mockFetchPropertyDetailsData(1000).then((res) => {
   setData(res as PropertyListingDetailsProps);
   setLoading(false);
  });
 }, [data]);

 return (
  <Suspense fallback={<PropertyDetailsSkeleton />}>
   {loading ? (
    <PropertyDetailsSkeleton />
   ) : (
    <PropertyListingDetails {...(data as PropertyListingDetailsProps)} />
   )}
  </Suspense>
 );
}

function PropertyDetailsSkeleton() {
 return (
  <section className="w-full 2xl:px-28 xxs:px-4 xxs:py-8 md:py-14 lg:py-20 md:px-10 lg:px-6 xl:px-16 flex flex-col justify-center items-center">
   {/* Skeleton for Header Section */}
   <section className="flex flex-col justify-center text-center xxs:gap-3 md:gap-6 w-full">
    <div className="flex justify-center items-center xxs:gap-2 md:gap-6">
     <Skeleton className="xxs:h-0.5 md:h-1 rounded xxs:w-[40px] md:w-[100px]" />
     <Skeleton className="xxs:h-4 sm:h-6 md:h-8 lg:h-10 xxs:w-[80px] sm:w-[120px] md:w-[160px]" />
     <Skeleton className="xxs:h-0.5 md:h-1 rounded xxs:w-[40px] md:w-[100px]" />
    </div>
    <Skeleton className="xxs:h-6 sm:h-10 lg:h-12 xxs:w-[200px] sm:w-[300px] lg:w-[500px]" />
    <Skeleton className="xxs:h-4 md:h-6 xxs:w-[160px] md:w-[240px]" />
   </section>

   {/* Skeleton for Content Section */}
   <section className="lg:grid xxs:flex flex-col lg:grid-cols-2 gap-4 mt-10 w-full">
    {/* Left Image Skeleton */}
    <Skeleton className="w-full md:w-full md:h-[300px] xl:w-[632px] xl:h-[356px] 2xl:w-full 2xl:h-full rounded-lg shadow-lg" />

    {/* Text Content Skeleton */}
    <div>
     <Skeleton className="xxs:h-4 md:h-6 w-full xxs:w-[200px] md:w-[320px]" />
     <Skeleton className="xxs:h-4 md:h-6 w-full xxs:w-[180px] md:w-[280px] mt-2" />
     <Skeleton className="xxs:h-4 md:h-6 w-full xxs:w-[250px] md:w-[380px] mt-2" />
    </div>

    {/* Buttons Skeleton */}
    <div className="flex flex-col md:justify-center gap-4 justify-center text-center xxs:order-4 items-center xxs:order-4 lg:justify-between w-full">
     <div>
      <Skeleton className="xxs:h-4 md:h-6 w-full xxs:w-[200px] md:w-[320px]" />
      <Skeleton className="xxs:h-4 md:h-6 w-full xxs:w-[180px] md:w-[280px] mt-2" />
      <Skeleton className="xxs:h-4 md:h-6 w-full xxs:w-[250px] md:w-[380px] mt-2" />
     </div>
     <span className="xxs:flex-col flex gap-3 w-full lg:flex-row ">
      <Skeleton className="xxs:h-12 lg:h-[52px] lg:w-[322px] xxs:w-full rounded-md" />
      <Skeleton className="xxs:h-12 lg:h-[52px] lg:w-[322px] xxs:w-full rounded-md" />
     </span>
    </div>

    {/* Right Image Skeleton */}
    <Skeleton className="w-full md:w-full md:h-[300px] xl:w-[632px] xl:h-[356px] lg:order-4 2xl:w-full 2xl:h-full rounded-lg shadow-lg" />
   </section>
  </section>
 );
}

export type PropertyListingDetailsProps = {
 header: string;
 title: string;
 descriptionTwo: string;
 descriptionOne: string;
 imgUrlOne: string;
 imgUrlTwo: string;
 requestPricing: string;
 bookShowingUrl: string;
};

function PropertyListingDetails(props: PropertyListingDetailsProps) {
 const {
  title,
  descriptionTwo,
  descriptionOne,
  imgUrlOne,
  imgUrlTwo,
  requestPricing,
  bookShowingUrl,
 } = props;

 return (
  <section className="w-full xxs:gap-8 md:gap-10 2xl:px-28 xxs:px-4 xxs:py-8 md:py-14 lg:py-20 md:px-10 lg:px-6 xl:px-10 flex flex-col justify-center items-center">
   <section className="flex flex-col justify-center text-center xxs:gap-3 md:gap-6">
    <span
     className={`flex justify-center items-center xxs:gap-2 md:gap-6 ${styles.separatorContainer}`}>
     <Separator
      className={`xxs:h-0.5 md:h-1 rounded rotate-180 xxs:w-[40px] md:w-[100px] ${styles.separator}`}
     />
     <h2 className="uppercase xxs:text-xs sm:text-lg md:text-xl lg:text-2xl text-[#D1AF49] tracking-widest">
      Property Details
     </h2>
     <Separator
      className={`xxs:h-0.5 md:h-1 rounded xxs:w-[40px] md:w-[100px] ${styles.separator}`}
     />
    </span>

    <h1 className="xs:text-xl sm:text-3xl lg:text-5xl font-bold text-[#212121]">
     {title}
    </h1>
    <p className="xxs:text-sm md:text-xl text-[#434343]">
     Explore from a variety of living experiences that Dubai offers!
    </p>
   </section>

   <section className="lg:grid xxs:flex flex-col lg:grid-cols-2 xxs:gap-8 lg:gap-10 mt-10">
    <div className="w-full md:w-full md:h-full xl:w-[632px] xl:h-[356px] 2xl:w-full 2xl:h-full">
     <Image
      alt={title}
      src={imgUrlOne}
      width={700}
      height={400}
      priority
      className="rounded-lg shadow-lg md:w-full lg:h-full xl:h-auto object-cover"
     />
    </div>

    <p className="text-[#434343] xxs:text-sm md:text-xl leading-5">
     {descriptionOne}
    </p>
    <div className="flex flex-col md:justify-center gap-8 xxs:order-4 lg:justify-between">
     <p className="text-[#434343] xxs:text-sm md:text-xl leading-5">
      {descriptionTwo}
     </p>
     <section className="flex justify-center xl:pl-14">
      <span className="xxs:flex-col flex gap-6 lg:items-center lg:justify-items-center w-full lg:flex-row">
       {requestPricing && (
        <Button
         rel="noopener noreferrer"
         className="text-sm font-semibold px-8 py-3 text-[#1E3747] border-[#1E3747] border-[1px] lg:h-[52px] lg:w-[322px] xxs:h-[48px] xxs:w-full bg-transparent hover:bg-[#aebfca] rounded-md">
         Request Available Units & Prices
        </Button>
       )}

       {bookShowingUrl && (
        <Button
         rel="noopener noreferrer"
         className="text-sm font-semibold px-8 py-3 bg-[#1E3747] text-white lg:h-[52px] lg:w-[200px] xxs:h-[48px] xxs:w-full hover:bg-[#2c526a] rounded-md">
         Book a Showing
        </Button>
       )}
      </span>
     </section>
    </div>
    <div className="w-full md:w-full md:h-full xl:w-[632px] lg:order-4 xl:h-[356px] 2xl:w-full 2xl:h-full">
     <Image
      alt={title}
      src={imgUrlTwo}
      width={700}
      height={400}
      priority
      className="rounded-lg shadow-lg md:w-full lg:h-full xl:h-auto object-cover"
     />
    </div>
   </section>
  </section>
 );
}
