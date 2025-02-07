'use client';

import Image from 'next/image';
import { Suspense, useEffect, useState } from 'react';
import { mockFetchPropertyNearbyDestinationsData } from '@/lib/mock-server/mockFetchPropertyNearbyDestinationsData';
import { Skeleton } from '@/components/ui/skeleton';
import { SubHeader } from '../../sub-header/sub-header';
import { getLocationIcon, getRandomMockServerDelay } from '@/lib/utils';
import { getProperty } from '@/lib/firebase/firebase';
import { PropertyType } from '@/types';

export default function PropertyListingNearbyDestinationsServerComponent({
 useMockData,
 queryId,
}: {
 useMockData: boolean;
 queryId: string;
}) {
 const [data, setData] = useState<PropertyListingNearbyDestinationsProps>();
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  if (useMockData) {
   mockFetchPropertyNearbyDestinationsData(getRandomMockServerDelay()).then(
    (res) => {
     setData(res as PropertyListingNearbyDestinationsProps);
     setLoading(false);
    }
   );
  } else {
   getProperty(queryId)
    .then((res) => {
     const data = res as PropertyType;
     const locations = Object.values(
      data.nearByDestinations.keyNearByDestinations
     ).map((destination) => {
      return {
       type: destination.name,
       title: destination.name,
       icon: getLocationIcon(destination.type),
       duration: destination.minutesFromDestination,
      };
     });
     setData({
      keyBenefits: Object.values(data.nearByDestinations.keyBenefits),
      locations: locations,
      description: data.nearByDestinations.description,
     });
    })
    .finally(() => {
     setLoading(false);
    });
  }
 }, [useMockData, queryId]);

 return (
  <Suspense fallback={<PropertyNearbyDestinationsSkeleton />}>
   {loading ? (
    <PropertyNearbyDestinationsSkeleton />
   ) : (
    <PropertyListingNearbyDestinations
     {...(data as PropertyListingNearbyDestinationsProps)}
    />
   )}
  </Suspense>
 );
}

function PropertyNearbyDestinationsSkeleton() {
 return (
  <section className="w-full 2xl:px-28 xxs:px-4 xxs:py-8 md:py-14 lg:py-20 md:px-10 lg:px-6 xl:px-16 flex flex-col justify-center items-center">
   <section className="flex flex-col justify-center text-center xxs:gap-3 md:gap-6 w-full">
    <div className="flex justify-center items-center xxs:gap-2 md:gap-6">
     <Skeleton className="xxs:h-0.5 md:h-1 rounded xxs:w-[40px] md:w-[100px]" />
     <Skeleton className="xxs:h-4 sm:h-6 md:h-8 lg:h-10 xxs:w-[80px] sm:w-[120px] md:w-[160px]" />
     <Skeleton className="xxs:h-0.5 md:h-1 rounded xxs:w-[40px] md:w-[100px]" />
    </div>
    <Skeleton className="xxs:h-6 sm:h-10 lg:h-12 xxs:w-[200px] sm:w-[300px] lg:w-[500px]" />
    <Skeleton className="xxs:h-4 md:h-6 xxs:w-[160px] md:w-[240px]" />
   </section>
   <section className="lg:grid xxs:flex flex-col lg:grid-cols-2 gap-4 mt-10 w-full">
    <Skeleton className="w-full md:w-full md:h-[300px] xl:w-[632px] xl:h-[356px] 2xl:w-full 2xl:h-full rounded-lg shadow-lg" />
    <div>
     <Skeleton className="xxs:h-4 md:h-6 w-full xxs:w-[200px] md:w-[320px]" />
     <Skeleton className="xxs:h-4 md:h-6 w-full xxs:w-[180px] md:w-[280px] mt-2" />
     <Skeleton className="xxs:h-4 md:h-6 w-full xxs:w-[250px] md:w-[380px] mt-2" />
    </div>
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
    <Skeleton className="w-full md:w-full md:h-[300px] xl:w-[632px] xl:h-[356px] lg:order-4 2xl:w-full 2xl:h-full rounded-lg shadow-lg" />
   </section>
  </section>
 );
}

export enum LocationType {
 DOWN_TOWN = 'DOWN_TOWN',
 MARINA = 'MARINA',
 AIRPORT = 'AIRPORT',
}

export type PropertyListingNearbyDestinationsProps = {
 keyBenefits: string[];
 description: string;
 locations: { type: string; title: string; icon: string; duration: string }[];
};

function PropertyListingNearbyDestinations(
 props: PropertyListingNearbyDestinationsProps
) {
 const { keyBenefits, locations, description } = props;

 return (
  <section className="w-full grid bg-[#EFEFEF] lg:grid-cols-2 xss:grid-cols-1 xxs:gap-4 md:gap-10 2xl:px-32 xl:px-24 lg:px-16 md:px-10 xxs:px-4 xxs:py-8 md:py-14 lg:py-20">
   <section className="grid-cols-2 lg:grid xxs:hidden justify-center items-center md:gap-6 xxs:gap-3">
    {locations.map((location, index) => (
     <CloseByCard
      key={index}
      cardTitle={location.title}
      cardDuration={location.duration}
      iconUrl={location.icon}
     />
    ))}
   </section>
   <section className="flex flex-col justify-center text-center lg:text-left xxs:gap-3 md:gap-6">
    <SubHeader title="Close By" />
    <h1 className="xs:text-xl sm:text-3xl lg:text-5xl font-bold text-[#212121]">
     Nearby Destinations
    </h1>
    <p className="xxs:text-xs md:text-xl text-[#434343] tracking-wide">
     {description}
    </p>
    <section className="grid-cols-2 lg:hidden xxs:grid justify-center justify-items-center items-center md:gap-6 xxs:gap-3">
     {locations.map((location, index) => (
      <CloseByCard
       key={index}
       cardTitle={location.title}
       cardDuration={location.duration}
       iconUrl={location.icon}
      />
     ))}
    </section>
    <h3 className="text-[#333333] xxs:pl-2 lg:pl-0 text-left font-medium md:text-2xl">
     Key Benefits
    </h3>
    <ul className="space-y-3 list-disc text-left pl-7">
     {keyBenefits?.map((benefit, index) => (
      <li key={index} className="text-[#434343] md:text-xl">
       {benefit}
      </li>
     ))}
    </ul>
   </section>
  </section>
 );
}

function CloseByCard({
 iconUrl,
 cardTitle,
}: {
 iconUrl: string;
 cardTitle: string;
 cardDuration: string;
}) {
 return (
  <div className="flex flex-col shadow-md items-start w-full lg:h-1/2 h-fit rounded-[6px] xxs:p-3 md:py-6 md:px-4 2xl:px-8 xxs:gap-3 bg-white">
   <Image
    className="xxs:w-7 xxs:h-7 md:w-12 md:h-12"
    width={48}
    height={48}
    src={iconUrl}
    alt={cardTitle}
   />
   <span className="flex flex-col items-start">
    {/* TODO: Fix */}
    {/* <span className="md:text-2xl font-medium xxs:text-sm capitalize text-[#222222]">
     {cardDuration}
    </span> */}
    <span className="md:text-lg xxs:text-xs capitalize text-[#858585]">
     {cardTitle}
    </span>
   </span>
  </div>
 );
}
