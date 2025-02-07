'use client';
import { Suspense, useEffect, useState } from 'react';
import { mockFetchPropertyContactData } from '@/lib/mock-server/mockFetchPropertyContact';
import { Skeleton } from '@/components/ui/skeleton';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { getProperty } from '@/lib/firebase/firebase';
import { PropertyType } from '@/types';
import { capitalizeFirstLetter, sendEmail } from '@/lib/utils';

export default function PropertyListingContactServerComponent({
 useMockData,
 queryId,
}: {
 useMockData: boolean;
 queryId: string;
}) {
 const [data, setData] = useState<PropertyListingContactProps>();
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  if (useMockData) {
   mockFetchPropertyContactData(1000).then((res) => {
    setData(res as PropertyListingContactProps);
    setLoading(false);
   });
  } else {
   getProperty(queryId)
    .then((res) => {
     const { contactInfo } = res as PropertyType;
     setData({
      profileurl: '/assets/featured-properties-temp/agent.jpg',
      fullname: capitalizeFirstLetter(contactInfo.fullname),
      jobTitle: 'Real Estate Agent',
      phone: contactInfo.telephone,
      address: 'N/A',
      email: contactInfo.email,
     });
    })
    .finally(() => {
     setLoading(false);
    });
  }
 }, [useMockData, queryId]);

 return (
  <Suspense fallback={<PropertyContactSkeleton />}>
   {loading ? (
    <PropertyContactSkeleton />
   ) : (
    <PropertyListingContact {...(data as PropertyListingContactProps)} />
   )}
  </Suspense>
 );
}

function PropertyContactSkeleton() {
 return (
  <div className="w-full py-10 px-4 flex flex-col gap-4 justify-center items-center">
   {/* Title Skeleton */}
   <Skeleton className="h-8 w-[50%] lg:w-[60%] rounded-md mb-6" />

   {/* Contact Details Skeleton */}
   <div className="flex w-full justify-between lg:px-32 md:px-16 xxs:px-4">
    <Skeleton className="rounded-full w-[216px] h-[216px]" />
    <div className="flex flex-col gap-6 w-[340px]">
     <Skeleton className="h-6 w-full rounded-md" />
     <Skeleton className="h-6 w-full rounded-md" />
     <Skeleton className="h-12 w-full rounded-md" />
    </div>
   </div>
  </div>
 );
}

export type PropertyListingContactProps = {
 profileurl: string;
 fullname: string;
 jobTitle: string;
 phone: string;
 address: string;
 email: string;
};

function PropertyListingContact(props: PropertyListingContactProps) {
 const { profileurl, fullname, jobTitle, phone, address, email } = props;
 const [name, setFullname] = useState('');
 const [tel, setTel] = useState('');

 const handleRequestCallClick = () => {
  sendEmail(
   email,
   'Request Call',
   `I would like to request a call my name is ${name} and my phone number is ${tel}`
  );
 };

 return (
  <section className="w-full flex flex-col justify-start  xxs:items-center lg:items-start bg-[#EAC863] md:py-20 md:px-12 lg:px-20 2xl:px-32 xxs:py-10 md:gap-14 xxs:px-4 xxs:gap-4">
   <h1 className="font-bold xxs:text-xl xxs:text-center md:text-3xl lg:text-5xl text-[#333333] mb-6">
    Our Expert Will Help You Buy The Best Property in Dubai
   </h1>
   <section className="flex md:flex-row xxs:flex-col w-full items-center justify-between xxs:gap-8 md:gap-5 lg:gap-10">
    <section className="flex lg:gap-8 items-center">
     {/* avatar for large screens */}
     <Avatar className=" xxs:hidden lg:block rounded-full xxs:w-11 xxs:h-11 lg:w-[216px] lg:h-[216px]">
      <AvatarImage src={profileurl} alt={fullname} />
      <AvatarFallback>{fullname}</AvatarFallback>
     </Avatar>

     <section className="grid grid-cols-1 h-fit xxs:w-[328px] xxs:gap-3 lg:gap-6">
      <span className="xxs:flex xxs:items-center lg:items-start gap-2 lg:flex lg:flex-col">
       {/* avatar for xxs screens */}
       <Avatar className="rounded-full lg:hidden xxs:w-11 xxs:h-11 lg:w-[216px] lg:h-[216px]">
        <AvatarImage src={profileurl} alt={fullname} />
        <AvatarFallback>{fullname.toUpperCase()}</AvatarFallback>
       </Avatar>
       <span className="flex flex-col xxs:gap-0 lg:gap-3">
        <h2 className="xxs:text-base font-bold text-[#222222] lg:text-4xl">
         {fullname}
        </h2>
        <p className="md:text-xl text-[#333333] xxs:text-sm">{jobTitle}</p>
       </span>
      </span>
      <span className="flex items-center h-fit gap-2">
       <Image
        width={16}
        height={16}
        src="/assets/icons/grey-call-icon.svg"
        alt="Phone Icon"
       />
       <p className="md:text-xl text-[#333333] xxs:text-sm">{phone}</p>
      </span>
      <span className="flex items-start h-fit gap-2">
       <Image
        width={16}
        height={16}
        src="/assets/icons/location-pin-icon.svg"
        className="md:mt-1.5"
        alt="Location Icon"
       />
       <p className="md:text-xl text-[#333333] xxs:text-sm">{address}</p>
      </span>
     </section>
    </section>

    <section className="bg-white flex flex-col items-center justify-center rounded-[6px] xxs:p-4 lg:p-10 gap-10 lg:w-[340px] lg:h-[274px] xxs:w-[328px] xxs:h-[226px]">
     <Input
      onChange={(e) => setFullname(e.target.value)}
      type="text"
      className="bg-transparent border-[0px] border-b-black border-b-[1px] rounded-none border-[#333333] shadow-none w-full text-lg placeholder:text-[#858585] focus-visible:ring-0 focus:ring-0 focus:outline-none"
      placeholder="Full Name *"
     />
     <Input
      onChange={(e) => setTel(e.target.value)}
      type="tel"
      className="bg-transparent border-[0px] border-b-black border-b-[1px] rounded-none border-[#333333] shadow-none w-full text-lg placeholder:text-[#858585] focus-visible:ring-0 focus:ring-0 focus:outline-none"
      placeholder="Telephone Number *"
     />
     <Button
      onClick={handleRequestCallClick}
      className="xxs:text-sm font-bold md:text-lg px-8 py-3 bg-[#1E3747] text-white lg:h-[52px] w-full xxs:h-[48px] hover:bg-[#2c526a] rounded-md">
      Request A Free Call
     </Button>
    </section>
   </section>
  </section>
 );
}
