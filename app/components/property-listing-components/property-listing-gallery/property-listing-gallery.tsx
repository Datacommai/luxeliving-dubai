"use client";

import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import { mockFetchPropertyGalleryData } from "@/lib/mock-server/mockFetchPropertyGalleryData";
import { Skeleton } from "@/components/ui/skeleton";
import { getRandomMockServerDelay } from "@/lib/utils";

export default function PropertyListingGalleryServerComponent({
  useMockData,
}: {
  useMockData: boolean;
}) {
  const [data, setData] = useState<PropertyListingGalleryProps>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (useMockData) {
      mockFetchPropertyGalleryData(getRandomMockServerDelay()).then((res) => {
        setData(res as PropertyListingGalleryProps);
        setLoading(false);
      });
    }
  }, []);

  return (
    <Suspense fallback={<PropertyGallerySkeleton count={3} />}>
      {loading ? (
        <PropertyGallerySkeleton count={3} />
      ) : (
        <PropertyListingGallery {...(data as PropertyListingGalleryProps)} />
      )}
    </Suspense>
  );
}

function PropertyGallerySkeleton({ count }: { count: number }) {
  return (
    <div className="w-full py-10 px-4 xxs:grid xxs:grid-cols-2 grid-flow-col md:flex flex gap-2 justify-center items-center">
      {Array.from({ length: count }).map((_, index) => (
        <Skeleton
          key={index}
          className="lg:h-[356px] md:h-[217px] xxs:h-[139px] w-full rounded-lg"
        />
      ))}
    </div>
  );
}

// Props Type
export type PropertyListingGalleryProps = {
  imageUrls: string[];
};

// Main Gallery Component
function PropertyListingGallery({ imageUrls }: PropertyListingGalleryProps) {
  if (!imageUrls || imageUrls.length === 0) {
    return <></>;
  }

  return (
    <section className="w-full xxs:py-8 md:py-10 lg:py-14 flex flex-col justify-center items-center">
      <div className="grid grid-cols-2 md:grid-cols-3 xxs:gap-3 md:gap-6 justify-items-center items-center">
        <Suspense
          fallback={<PropertyGallerySkeleton count={imageUrls.length} />}
        >
          {imageUrls.map((url, index) => (
            <div
              className={`${
                index === imageUrls.length - 1 ? "xxs:col-span-2  w-full " : ""
              } md:col-span-1 w-full h-full`}
              key={index}
            >
              <Image
                alt={`Image ${index + 1}`}
                src={url}
                width={100}
                height={100}
                priority
                className="h-auto w-full rounded-lg"
              />
            </div>
          ))}
        </Suspense>
      </div>
    </section>
  );
}
