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

export const PropertySelection = () => {
 return (
  <section className="flex justify-center">
   <Card className="mt-10 rounded-md w-5/6 justify-self-center md:min-h-[139px] xxs:grid xxs:grid-cols-2 sm:grid-cols-3 md:grid md:grid-cols-4 xxs:gap-4 lg:gap-1 lg:flex items-center justify-between xxs:p-4 md:p-6 shadow-md border-none">
    {/* First  Select */}
    <span className="flex flex-col xxs:gap-2 sm:gap-4 text-[#333333]">
     <p className="font-medium">Property Type</p>
     <Select>
      <SelectTrigger className="drop-down-icon xxs:h-[48px] xxs:w-full lg:w-[150px] xl:w-[220px] border-[#434343] focus:ring-0 md:h-[56px] text-[#434343]">
       <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
       <SelectGroup>
        <SelectItem className="capitalize" value="Single-Family Home">
         Single-Family Home
        </SelectItem>
        <SelectItem className="capitalize" value="Multi-Family Home">
         Multi-Family Home
        </SelectItem>
        <SelectItem className="capitalize" value="Condominium">
         Condominium
        </SelectItem>
        <SelectItem className="capitalize" value="Apartment">
         Apartment
        </SelectItem>
       </SelectGroup>
      </SelectContent>
     </Select>
    </span>

    {/* Second Property Type Select */}
    <span className="flex flex-col xxs:gap-2 sm:gap-4 text-[#333333]">
     <p className="font-medium">Developers</p>
     <Select>
      <SelectTrigger className="drop-down-icon xxs:h-[48px] xxs:w-full lg:w-[150px] xl:w-[220px] border-[#434343] focus:ring-0 md:h-[56px] text-[#434343]">
       <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
       <SelectGroup>
        <SelectItem className="capitalize" value="Emaar Properties">
         Emaar Properties
        </SelectItem>
        <SelectItem className="capitalize" value="Nakheel Properties">
         Nakheel Properties
        </SelectItem>
        <SelectItem className="capitalize" value="Meraas">
         Meraas
        </SelectItem>
        <SelectItem className="capitalize" value="Select Group">
         Select Group
        </SelectItem>
        <SelectItem className="capitalize" value="Azizi Developments">
         Azizi Developments
        </SelectItem>
       </SelectGroup>
      </SelectContent>
     </Select>
    </span>

    {/* Third Property Type Select */}
    <span className="flex flex-col xxs:gap-2 sm:gap-4 text-[#333333]">
     <p className="font-medium">City</p>
     <Select>
      <SelectTrigger className="drop-down-icon xxs:h-[48px] xxs:w-full lg:w-[150px] xl:w-[220px] border-[#434343] focus:ring-0 md:h-[56px] text-[#434343]">
       <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
       <SelectGroup>
        <SelectItem className="capitalize" value="Dubai">
         Dubai
        </SelectItem>
       </SelectGroup>
      </SelectContent>
     </Select>
    </span>

    {/* Fourth Property Type Select */}
    <span className="flex flex-col xxs:gap-2 sm:gap-4 text-[#333333]">
     <p className="font-medium">Lifestyle</p>
     <Select>
      <SelectTrigger className="drop-down-icon xxs:h-[48px] xxs:w-full lg:w-[150px] xl:w-[220px] border-[#434343] focus:ring-0 md:h-[56px] text-[#434343]">
       <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
       <SelectGroup>
        <SelectItem className="capitalize" value="Minimalist">
         Minimalist
        </SelectItem>
        <SelectItem className="capitalize" value="Family-Oriented">
         Family-Oriented
        </SelectItem>
        <SelectItem className="capitalize" value="Luxury">
         Luxury
        </SelectItem>
        <SelectItem className="capitalize" value="Urban">
         Urban
        </SelectItem>
       </SelectGroup>
      </SelectContent>
     </Select>
    </span>

    <Button className="text-sm xxs:col-span-2 md:col-span-4 lg:w-[152px] font-bold p-4 pr-6 sm:mt-10 md:mt-0 lg:mt-10 bg-[#1E3747] xxs:w-full xxs:h-[48px] md:h-[56px]  hover:bg-[#2c526a]">
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
