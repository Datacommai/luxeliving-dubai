'use client';
import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
 SelectGroup,
} from '@/components/ui/select';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';
import { useEffect, useRef, useState } from 'react';
import { getProperties } from '@/lib/firebase/firebase';
import { PropertyType } from '@/types';

export type FilterType = {
 propertyType: string;
 lifestyle: string;
 city: string;
 developer: string;
};

export const PropertySelection = ({
 onFilter,
}: {
 onFilter: (filter: FilterType) => void;
}) => {
 const [data, setData] = useState<FilterType[]>();
 const typeRef = useRef<HTMLElement>(null);
 const lifestyleRef = useRef<HTMLElement>(null);
 const cityRef = useRef<HTMLElement>(null);
 const developerRef = useRef<HTMLElement>(null);

 useEffect(() => {
  getProperties().then((res) => {
   const property = res as PropertyType[];

   const filters = property.map((item) => ({
    propertyType: item.filters.propertyType,
    lifestyle: item.filters.lifestyle,
    city: item.filters.city,
    developer: item.filters.developer,
   }));

   setData(filters);
  });
 }, [data]);

 const handleFilterSearch = () => {
  const propertyType = handleFilter(typeRef?.current as HTMLElement) as string;
  const lifestyle = handleFilter(
   lifestyleRef?.current as HTMLElement
  ) as string;
  const city = handleFilter(cityRef?.current as HTMLElement) as string;
  const developer = handleFilter(
   developerRef?.current as HTMLElement
  ) as string;

  const filters: Partial<FilterType> = {
   propertyType,
   lifestyle,
   city,
   developer,
  };

  onFilter(filters as FilterType);
 };

 const handleFilter = (filter: HTMLElement) => {
  return filter?.textContent === 'Select' ? '' : filter?.textContent;
 };

 const propertyTypes = [...new Set(data?.map((item) => item.propertyType))];
 const lifestyles = [...new Set(data?.map((item) => item.lifestyle))];
 const cities = [...new Set(data?.map((item) => item.city))];
 const developers = [...new Set(data?.map((item) => item.developer))];

 return (
  <section className="flex justify-center">
   <Card className="mt-10 rounded-md w-5/6 justify-self-center md:min-h-[139px] xxs:grid xxs:grid-cols-2 sm:grid-cols-3 md:grid md:grid-cols-4 xxs:gap-4 lg:gap-1 lg:flex items-center justify-between xxs:p-4 md:p-6 shadow-md border-none">
    {/* First  Select */}
    <span className="flex flex-col xxs:gap-2 sm:gap-4 text-[#333333]">
     <p className="font-medium">Property Type</p>
     <Select>
      <SelectTrigger className="drop-down-icon xxs:h-[48px] xxs:w-full lg:w-[150px] xl:w-[220px] border-[#434343] focus:ring-0 md:h-[56px] text-[#434343]">
       <SelectValue placeholder="Select" ref={typeRef} />
      </SelectTrigger>
      <SelectContent>
       <SelectGroup>
        {propertyTypes?.map((item) => (
         <SelectItem key={item} className="capitalize" value={item}>
          {item}
         </SelectItem>
        ))}
       </SelectGroup>
      </SelectContent>
     </Select>
    </span>

    {/* Second Property Type Select */}
    <span className="flex flex-col xxs:gap-2 sm:gap-4 text-[#333333]">
     <p className="font-medium">Developers</p>
     <Select>
      <SelectTrigger className="drop-down-icon xxs:h-[48px] xxs:w-full lg:w-[150px] xl:w-[220px] border-[#434343] focus:ring-0 md:h-[56px] text-[#434343]">
       <SelectValue placeholder="Select" ref={developerRef} />
      </SelectTrigger>
      <SelectContent>
       <SelectGroup>
        {developers?.map((item) => (
         <SelectItem key={item} className="capitalize" value={item}>
          {item}
         </SelectItem>
        ))}
       </SelectGroup>
      </SelectContent>
     </Select>
    </span>

    {/* Third Property Type Select */}
    <span className="flex flex-col xxs:gap-2 sm:gap-4 text-[#333333]">
     <p className="font-medium">City</p>
     <Select>
      <SelectTrigger className="drop-down-icon xxs:h-[48px] xxs:w-full lg:w-[150px] xl:w-[220px] border-[#434343] focus:ring-0 md:h-[56px] text-[#434343]">
       <SelectValue placeholder="Select" ref={cityRef} />
      </SelectTrigger>
      <SelectContent>
       <SelectGroup>
        {cities?.map((item) => (
         <SelectItem key={item} className="capitalize" value={item}>
          {item}
         </SelectItem>
        ))}
       </SelectGroup>
      </SelectContent>
     </Select>
    </span>

    {/* Fourth Property Type Select */}
    <span className="flex flex-col xxs:gap-2 sm:gap-4 text-[#333333]">
     <p className="font-medium">Lifestyle</p>
     <Select>
      <SelectTrigger className="drop-down-icon xxs:h-[48px] xxs:w-full lg:w-[150px] xl:w-[220px] border-[#434343] focus:ring-0 md:h-[56px] text-[#434343]">
       <SelectValue placeholder="Select" ref={lifestyleRef} />
      </SelectTrigger>
      <SelectContent>
       <SelectGroup>
        {lifestyles?.map((item) => (
         <SelectItem key={item} className="capitalize" value={item}>
          {item}
         </SelectItem>
        ))}
       </SelectGroup>
      </SelectContent>
     </Select>
    </span>

    <Button
     onClick={handleFilterSearch}
     className="text-sm xxs:col-span-2 md:col-span-4 lg:w-[152px] font-bold p-4 pr-6 sm:mt-10 md:mt-0 lg:mt-10 bg-[#1E3747] xxs:w-full xxs:h-[48px] md:h-[56px]  hover:bg-[#2c526a]">
     <Image
      width={17}
      height={17}
      src="/assets/icons/search-icon.svg"
      alt="search-icon"
      blurDataURL="blur"
      quality={100}
     />
     Search
    </Button>
   </Card>
  </section>
 );
};

export const FeaturedPropertiesSectionSkeleton = () => {
 return (
  <section className="w-full h-auto m-5 flex justify-center items-center gap-2">
   <section className="w-full max-w-7xl grid xl:grid-cols-3 lg:grid-cols-2 gap-4 justify-items-center items-start">
    {/* Skeleton Card */}
    {Array.from({ length: 3 }).map((_, index) => (
     <div
      key={index}
      className="w-[365px] h-[520px] flex flex-col justify-between bg-gray-200 rounded-lg p-4 shadow-md">
      {/* Image Skeleton */}
      <Skeleton className="h-[282px] w-full rounded-md" />

      {/* Title & Description Skeleton */}
      <div className="mt-4">
       <Skeleton className="h-6 w-3/4 mb-2" />
       <Skeleton className="h-4 w-2/3 mb-1" />
       <Skeleton className="h-4 w-1/2" />
      </div>

      {/* Property Details Skeleton */}
      <div className="mt-4 flex justify-between items-center">
       <Skeleton className="h-4 w-16" />
       <Skeleton className="h-4 w-16" />
       <Skeleton className="h-4 w-16" />
      </div>

      {/* Footer Skeleton */}
      <div className="mt-4 flex justify-between items-center">
       <Skeleton className="h-4 w-16" />
       <Skeleton className="h-6 w-1/4" />
      </div>
     </div>
    ))}
   </section>
  </section>
 );
};
