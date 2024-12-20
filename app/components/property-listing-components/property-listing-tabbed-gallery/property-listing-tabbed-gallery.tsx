'use client';
import { Separator } from '@radix-ui/react-separator';
import { SecondaryButton } from '../../buttons/secondary-button';
import {
 Dialog,
 DialogHeader,
 DialogTitle,
 DialogContent,
 DialogTrigger,
} from '@/components/ui/dialog';
import Image from 'next/image';
import { CSSProperties, Suspense, useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { mockFetchPropertyTabbedGalleryData } from '@/lib/mock-server/mockFetchPropertyTabbedGallery';

export const PropertyListingTabbedGalleryWithDelay = () => {
 const [data, setData] = useState<PropertyListingTabbedGalleryProps>();
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  mockFetchPropertyTabbedGalleryData(1000).then((res) => {
   setData(res as PropertyListingTabbedGalleryProps);
   setLoading(false);
  });
 }, [data]);

 return (
  <Suspense fallback={<PropertyListingTabbedGallerySkeleton />}>
   {loading ? (
    <PropertyListingTabbedGallerySkeleton />
   ) : (
    <PropertyListingTabbedGallery
     {...(data as PropertyListingTabbedGalleryProps)}
    />
   )}
  </Suspense>
 );
};

type PropertyListingTabbedGalleryProps = {
 title?: string;
 description?: string;
 imageTabs: ImageTabProps[];
};

function PropertyListingTabbedGallerySkeleton() {
 return <Skeleton></Skeleton>;
}

function PropertyListingTabbedGallery(
 props: PropertyListingTabbedGalleryProps
) {
 const { title, description, imageTabs } = props;

 return (
  <section className="w-full h-fit my-[120px] flex flex-col justify-center items-center">
   <section>
    <span className={`flex justify-center items-center xxs:gap-2 md:gap-6 `}>
     <Separator
      className={`xxs:h-0.5 md:h-1 rounded rotate-180 xxs:w-[40px] md:w-[100px] `}
      style={{
       background: `linear-gradient(90deg, #d1af49 0%, rgba(102, 102, 102, 0) 100%)`,
      }}
     />
     <h2 className="uppercase xxs:text-xs sm:text-lg md:text-xl lg:text-2xl text-[#D1AF49] tracking-widest">
      {title ?? 'Property Details'}
     </h2>
     <Separator
      className={`xxs:h-0.5 md:h-1 rounded xxs:w-[40px] md:w-[100px] `}
      style={{
       background: `linear-gradient(90deg, #d1af49 0%, rgba(102, 102, 102, 0) 100%)`,
      }}
     />
    </span>
    <h2 className="my-4 text-lg lg:text-5xl font-bold text-[#212121] text-center">
     {description ?? ' Explore Our Gallery of Exquisite Spaces'}
    </h2>
    <p className="my-6 lg:text-2xl text-base font-normal text-center text-[#434343]">
     Explore from a variety of living experiences that Dubai offers!
    </p>
   </section>
   <section className="my-14 w-fit flex justify-center items-center gap-4 lg:gap-10">
    <SecondaryButton
     title="Exteriors"
     width={200}
     height={54}
     variant="filled"
    />
    <SecondaryButton
     title="Interiors"
     width={200}
     height={54}
     variant="outlined"
    />
   </section>

   <DesktopImageGallery imageTabs={imageTabs} />
  </section>
 );
}

function DesktopImageGallery(props: PropertyListingTabbedGalleryProps) {
 const { imageTabs } = props;
 return (
  <div className="justify-center items-center w-[80%] h-[860px] grid grid-cols-3 grid-rows-3 gap-4">
   <div className="w-full h-full">
    <ImageTab {...imageTabs[0]} />
   </div>
   <div className="w-full h-full">
    <ImageTab {...imageTabs[1]} />
   </div>
   <div className="w-full h-full row-span-2">
    <ImageTab {...imageTabs[2]} styles={' row-span-2'} />
   </div>
   <div className="w-full h-full row-span-2">
    <ImageTab {...imageTabs[3]} styles="row-span-2" />
   </div>
   <div className=" w-full h-full">
    <ImageTab {...imageTabs[4]} />
   </div>
   <div className="w-full h-full col-start-2 row-start-3">
    <ImageTab {...imageTabs[5]} styles="col-start-2 row-start-3" />
   </div>
   <div className="w-full h-full col-start-3 row-start-3">
    <ImageTab {...imageTabs[6]} styles="col-start-3 row-start-3" />
   </div>
  </div>
 );
}

type ImageTabProps = {
 src: string;
 title: string;
 alt: string;
 styles?: string;
};

function ImageTab(props: ImageTabProps) {
 const { src, alt, title, styles } = props;

 return (
  <Dialog>
   <DialogTrigger asChild>
    <Image
     className={`w-full h-full my-2 rounded-sm shadow-lg flex justify-center items-center object-cover ${styles}`}
     src={src}
     alt={alt}
     width={100}
     height={100}
    />
   </DialogTrigger>
   <DialogContent className="w-screen h-[calc(100vh / 2]">
    <DialogHeader>
     <DialogTitle>{title}</DialogTitle>
    </DialogHeader>
    <div className="w-full h-full">
     <Image src={src} alt={alt} width={1000} height={1000} />
    </div>
   </DialogContent>
  </Dialog>
 );
}
