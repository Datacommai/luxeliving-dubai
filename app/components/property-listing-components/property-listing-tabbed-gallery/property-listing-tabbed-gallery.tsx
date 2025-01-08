"use client";
import { SecondaryButton } from "../../buttons/secondary-button";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { mockFetchPropertyTabbedGalleryData } from "@/lib/mock-server/mockFetchPropertyTabbedGallery";
import { SubHeader } from "../../sub-header/sub-header";
import { getRandomMockServerDelay } from "@/lib/utils";

export const PropertyListingTabbedGalleryServerComponent = ({
  useMockData,
}: {
  useMockData: boolean;
}) => {
  const [data, setData] = useState<PropertyListingTabbedGalleryProps>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (useMockData) {
      mockFetchPropertyTabbedGalleryData(getRandomMockServerDelay()).then(
        (res) => {
          setData(res as PropertyListingTabbedGalleryProps);
          setLoading(false);
        }
      );
    }
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
  return (
    <section className="w-full h-fit my-[120px] flex flex-col items-center">
      {/* Skeleton for title */}
      <Skeleton className="my-4 h-8 lg:h-16 w-[60%] lg:w-[40%] rounded-md" />

      {/* Skeleton for description */}
      <Skeleton className="my-4 h-4 lg:h-6 w-[80%] lg:w-[60%] rounded-md" />

      {/* Skeleton for buttons */}
      <div className="my-6 w-full flex justify-center gap-4 lg:gap-10">
        <Skeleton className="h-12 w-40 rounded-md" />
        <Skeleton className="h-12 w-40 rounded-md" />
      </div>

      {/* Skeleton for desktop gallery */}
      <div className="w-[80%] h-[860px] grid grid-cols-3 grid-rows-3 gap-4">
        {/* Grid skeleton items */}
        <Skeleton className="w-full h-full rounded-md" />
        <Skeleton className="w-full h-full rounded-md" />
        <Skeleton className="w-full h-full rounded-md row-span-2" />
        <Skeleton className="w-full h-full rounded-md row-span-2" />
        <Skeleton className="w-full h-full rounded-md" />
        <Skeleton className="w-full h-full rounded-md col-start-2 row-start-3" />
        <Skeleton className="w-full h-full rounded-md col-start-3 row-start-3" />
      </div>
    </section>
  );
}

function PropertyListingTabbedGallery(
  props: PropertyListingTabbedGalleryProps
) {
  const { title, description, imageTabs } = props;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full h-fit my-[120px] 2xl:px-28 xxs:px-4 xxs:py-8 md:py-14 lg:py-20 md:px-4 lg:px-6 xl:px-16 flex flex-col justify-center items-center">
      <section>
        <SubHeader title="GALLERY" />
        <h2 className="my-4 text-lg lg:text-5xl font-bold text-[#212121] text-center">
          {title ?? " Explore Our Gallery of Exquisite Spaces"}
        </h2>
        <p className="my-6 lg:text-2xl text-base font-normal text-center text-[#434343]">
          {description ??
            "Explore from a variety of living experiences that Dubai offers!"}
        </p>
      </section>
      <section className="xxs:my-4 sm:my-14 xxs:w-full xs:w-fit flex justify-center items-center gap-4 lg:gap-10">
        <SecondaryButton
          title="Exteriors"
          variant="filled"
          className="xxs:w-[130px] xs:w-[156px] xxs:h-[48px] sm:w-[200px] sm:h-[54px]"
        />
        <SecondaryButton
          title="Interiors"
          variant="outlined"
          className="xxs:w-[130px] xs:w-[156px] xxs:h-[48px] sm:w-[200px] sm:h-[54px]"
        />
      </section>

      {isMobile ? (
        <MobileImageGallery imageTabs={imageTabs} />
      ) : (
        <DesktopImageGallery imageTabs={imageTabs} />
      )}
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
        <ImageTab {...imageTabs[2]} styles={" row-span-2"} />
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

function MobileImageGallery(props: PropertyListingTabbedGalleryProps) {
  const { imageTabs } = props;
  return (
    <div className="justify-center items-center w-[80%] h-[1069px] grid grid-cols-2 grid-rows-5 gap-2">
      <div className="w-full h-full col-span-2">
        <ImageTab {...imageTabs[0]} styles="col-span-2" />
      </div>
      <div className="w-full h-full row-start-2">
        <ImageTab {...imageTabs[1]} styles="row-start-2" />
      </div>
      <div className="w-full h-full row-start-2">
        <ImageTab {...imageTabs[2]} styles="row-start-2" />
      </div>
      <div className="w-full h-full col-span-2">
        <ImageTab {...imageTabs[3]} styles="col-span-2" />
      </div>
      <div className="w-full h-full row-start-4">
        <ImageTab {...imageTabs[4]} styles="row-start-4" />
      </div>
      <div className="w-full h-full row-start-4">
        <ImageTab {...imageTabs[5]} styles="row-start-4" />
      </div>
      <div className="w-full h-full col-span-2">
        <ImageTab {...imageTabs[6]} styles="col-span-2" />
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

  const maxImageHeight: number = 100;
  const maxDialogImageHeight: number = 1000;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Image
          className={`w-full h-full my-2 rounded-sm shadow-lg flex justify-center items-center object-cover ${styles}`}
          src={src}
          alt={alt}
          width={maxImageHeight}
          height={maxImageHeight}
        />
      </DialogTrigger>
      <DialogContent className="w-screen h-[calc(100vh / 2]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="w-full h-full">
          <Image
            src={src}
            alt={alt}
            width={maxDialogImageHeight}
            height={maxDialogImageHeight}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
