'use client';
import {
 Card,
 CardContent,
 CardDescription,
 CardFooter,
 CardHeader,
 CardTitle,
} from '@/components/ui/card';
import { SecondaryButton } from '../../buttons/secondary-button';
import { SubHeader } from '../../sub-header/sub-header';
import Image from 'next/image';
import { PrimaryButton } from '../../buttons/primary-button';
import { Suspense, useEffect, useState } from 'react';
import { mockFetchPropertyFloorplansData } from '@/lib/mock-server/mockFetchPropertyFloorplans';
import { Skeleton } from '@/components/ui/skeleton';

export const PropertyListingFloorplanShowcaseWithDelay = () => {
 const [data, setData] = useState<PropertyListingFloorplanShowcaseProps>();
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  mockFetchPropertyFloorplansData(1000).then((res) => {
   setData(res as PropertyListingFloorplanShowcaseProps);
   setLoading(false);
  });
 }, [data]);

 return (
  <Suspense fallback={<PropertyListingFloorplanSkeleton />}>
   {loading ? (
    <PropertyListingFloorplanSkeleton />
   ) : (
    <PropertyListingFloorplanShowcase
     {...(data as PropertyListingFloorplanShowcaseProps)}
    />
   )}
  </Suspense>
 );
};

export type PropertyListingFloorplanShowcaseProps = {
 title?: string;
 description?: string;
 floorplans: Floorplan[];
};

function PropertyListingFloorplanSkeleton() {
 return (
  <section className="w-[80%] h-[800px] inline-block">
   {/* SubHeader Skeleton */}
   <Skeleton className="h-6 w-40 mx-auto mb-6" />

   {/* Title Skeleton */}
   <Skeleton className="h-10 w-[60%] mx-auto mb-4" />

   {/* Description Skeleton */}
   <Skeleton className="h-6 w-[75%] mx-auto mb-6" />
   <Skeleton className="h-6 w-[50%] mx-auto mb-8" />

   {/* Floorplan Grid Skeleton */}
   <div className="grid grid-cols-3 gap-6">
    <Skeleton className="h-60 rounded-md" />
    <Skeleton className="h-60 rounded-md" />
    <Skeleton className="h-60 rounded-md" />
    <Skeleton className="h-60 rounded-md" />
    <Skeleton className="h-60 rounded-md" />
    <Skeleton className="h-60 rounded-md" />
   </div>
  </section>
 );
}
function PropertyListingFloorplanShowcase(
 props: PropertyListingFloorplanShowcaseProps
) {
 const { title, description, floorplans } = props;
 const [isMobile, setIsMobile] = useState(false);

 useEffect(() => {
  const handleResize = () => {
   setIsMobile(window.innerWidth < 768);
  };

  handleResize();

  window.addEventListener('resize', handleResize);

  return () => window.removeEventListener('resize', handleResize);
 }, []);

 return (
  <section className="w-[80%] h-[800px] inline-block">
   <SubHeader title="Layouts" />
   <h2 className="my-4 text-lg lg:text-5xl font-bold text-[#212121] text-center">
    {title ?? ' Explore Our Gallery of Exquisite Spaces'}
   </h2>
   <p className="my-6 lg:text-2xl text-base font-normal text-center text-[#434343]">
    {description ??
     'Explore from a variety of living experiences that Dubai offers!'}
   </p>
   {isMobile ? (
    <MobileFloorplanShowcase floorplans={floorplans} />
   ) : (
    <DesktopFloorplanShowcase floorplans={floorplans} />
   )}
  </section>
 );
}

type Floorplan = {
 title: string;
 sqft: string;
 imageURL: string;
 brochurePDFUrl?: string;
 fullFloorplanPDFUrl?: string;
};
export type FloorPlanProps = {
 floorplans: Floorplan[];
};

function DesktopFloorplanShowcase(props: FloorPlanProps) {
 const { floorplans } = props;
 const [selectedFloorplan, setSelectedFloorplan] = useState<string>('');

 const secondaryButtonWidth: number = 270;
 const secondaryButtonHeight: number = 72;

 useEffect(() => {
  setSelectedFloorplan(floorplans[0].title);
 }, []);

 const handleFloorplanClick = (selectedFloorplan: string) => {
  setSelectedFloorplan(selectedFloorplan);
 };

 const handleDownloadBrochure = () => {
  const brochure = getSelectedFloorplan()?.brochurePDFUrl;

  if (!brochure) {
   alert('No brochure available');
  }
  // todo: download brochure
 };

 const handleOpenAllFloorplans = () => {
  const fullFloorplan = getSelectedFloorplan()?.fullFloorplanPDFUrl;

  if (!fullFloorplan) {
   alert('No full floorplan available');
  }
  // todo: open all floorplans
 };

 const getSelectedFloorplan = () => {
  return floorplans.find((f) => f.title === selectedFloorplan);
 };

 return (
  <section className="w-full h-fit flex justify-evenly items-start gap-6">
   <section className="flex flex-col gap-6 my-8 h-[400px] overflow-y-scroll">
    {floorplans.map((floorplan) => (
     <SecondaryButton
      key={floorplan.title}
      title={floorplan.title}
      width={secondaryButtonWidth}
      height={secondaryButtonHeight}
      variant={`${
       getSelectedFloorplan()?.title === floorplan.title.toString()
        ? 'filled'
        : 'outlined'
      }`}
      onClick={() => handleFloorplanClick(floorplan.title)}
     />
    ))}
   </section>
   <section>
    <Card className="border-none shadow-none">
     <CardHeader>
      <Suspense fallback={<PropertyListingFloorplanSkeleton />}>
       <Image
        src={`${getSelectedFloorplan()?.imageURL}`}
        alt={getSelectedFloorplan()?.title || 'Floorplan Image'}
        priority
        quality={100}
        width={704}
        height={302}
        unoptimized
       />
      </Suspense>
     </CardHeader>
     <CardContent>
      <CardTitle className="font-medium text-2xl">
       {getSelectedFloorplan()?.title}
      </CardTitle>
      <CardDescription className="text-[#434343] text-base font-light my-4">
       {getSelectedFloorplan()?.sqft} sqft
      </CardDescription>
     </CardContent>
     <CardFooter className="gap-4">
      <PrimaryButton
       rightIcon="/assets/icons/right-arrow.svg"
       iconSize={8}
       width={250}
       height={52}
       text="Open All Floor Plans"
       onClick={handleOpenAllFloorplans}
      />
      <PrimaryButton
       text="Download Brochure"
       width={250}
       height={52}
       variant="default"
       style="outlined"
       onClick={handleDownloadBrochure}
      />
     </CardFooter>
    </Card>
   </section>
  </section>
 );
}

function MobileFloorplanShowcase(props: FloorPlanProps) {
 const { floorplans } = props;
 const [selectedFloorplan, setSelectedFloorplan] = useState<string>('');

 const secondaryButtonWidth = 200;
 const secondaryButtonHeight = 48;

 useEffect(() => {
  setSelectedFloorplan(floorplans[0].title);
 }, []);

 const handleFloorplanClick = (selectedFloorplan: string) => {
  setSelectedFloorplan(selectedFloorplan);
 };

 const handleDownloadBrochure = () => {
  const brochure = getSelectedFloorplan()?.brochurePDFUrl;

  if (!brochure) {
   alert('No brochure available');
  }
  // todo: download brochure
 };

 const handleOpenAllFloorplans = () => {
  const fullFloorplan = getSelectedFloorplan()?.fullFloorplanPDFUrl;

  if (!fullFloorplan) {
   alert('No full floorplan available');
  }
  // todo: open all floorplans
 };

 const getSelectedFloorplan = () => {
  return floorplans.find((f) => f.title === selectedFloorplan);
 };

 return (
  <section className="w-full">
   <section className="grid grid-cols-2 gap-2 justify-center items-center h-[112px] overflow-y-scroll">
    {floorplans.map((floorplan) => (
     <div key={floorplan.title} className="flex justify-center w-full">
      <SecondaryButton
       key={floorplan.title}
       title={floorplan.title}
       width={secondaryButtonWidth}
       height={secondaryButtonHeight}
       variant={`${
        getSelectedFloorplan()?.title === floorplan.title.toString()
         ? 'filled'
         : 'outlined'
       }`}
       onClick={() => handleFloorplanClick(floorplan.title)}
      />
     </div>
    ))}
   </section>

   <section className="flex justify-center items-center gap-4 w-fit">
    <Card className="border-none shadow-none">
     <CardHeader>
      <Suspense fallback={<PropertyListingFloorplanSkeleton />}>
       <Image
        src={`${getSelectedFloorplan()?.imageURL}`}
        alt={getSelectedFloorplan()?.title || 'Floorplan Image'}
        priority
        quality={1000}
        width={1000}
        height={100}
        unoptimized
       />
      </Suspense>
     </CardHeader>
     <CardContent>
      <CardTitle className="font-medium text-2xl">
       {getSelectedFloorplan()?.title}
      </CardTitle>
      <CardDescription className="text-[#434343] text-base font-light my-4">
       {getSelectedFloorplan()?.sqft} sqft
      </CardDescription>
     </CardContent>
     <CardFooter className="gap-4 flex flex-col w-full justify-center items-center">
      <PrimaryButton
       rightIcon="/assets/icons/right-arrow.svg"
       iconSize={8}
       width={300}
       height={52}
       text="Open All Floor Plans"
       onClick={handleOpenAllFloorplans}
      />
      <PrimaryButton
       text="Download Brochure"
       width={300}
       height={52}
       variant="default"
       style="outlined"
       onClick={handleDownloadBrochure}
      />
     </CardFooter>
    </Card>
   </section>
  </section>
 );
}
