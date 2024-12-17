"use client";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import { mockFetchPropertyHeroData } from "@/lib/mock-server/mockFetchProperyHeroData";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { PrimaryButton } from "@/app/ui/primary-button";

// mock fetch with delay
export default function PropertyListingHeroWithDelay() {
  const [data, setData] = useState<PropertyListingHeroProps>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    mockFetchPropertyHeroData(1000).then((res) => {
      setData(res as PropertyListingHeroProps);
      setLoading(false);
    });
  }, []);

  return (
    <Suspense fallback={<PropertyHeroSkeleton />}>
      {loading ? (
        <PropertyHeroSkeleton />
      ) : (
        <PropertyListingHero {...(data as PropertyListingHeroProps)} />
      )}
    </Suspense>
  );
}

function PropertyHeroSkeleton() {
  return (
    <div className="w-full py-10 px-4 flex flex-col justify-center items-center">
      {/* Parent Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl items-center">
        {/* Left Side - Image Skeleton */}
        <div className="w-full xl:w-[632px] xl:h-[356px]">
          <Skeleton className="h-[356px] w-full rounded-lg" />
        </div>

        {/* Right Side - Content Skeleton */}
        <div className="flex flex-col justify-center space-y-6">
          {/* Title Skeleton */}
          <Skeleton className="h-8 w-[60%] rounded-md" />

          {/* Description Skeleton */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-[80%] rounded-md" />
            <Skeleton className="h-4 w-[70%] rounded-md" />
            <Skeleton className="h-4 w-[90%] rounded-md" />
          </div>

          {/* Button Skeleton */}
          <Skeleton className="h-[48px] w-[214px] rounded-md" />

          {/* Details Grid Skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <Skeleton className="h-10 w-10 rounded-full" />
                <Skeleton className="h-4 w-[60%] rounded-md" />
                <Skeleton className="h-3 w-[40%] rounded-md" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sub Description Skeleton */}
      <div className="my-12 w-[calc(100%-25%)]">
        <Skeleton className="h-4 w-full rounded-md" />
      </div>

      {/* PDF Button Skeleton */}
      <Skeleton className="h-[48px] w-[214px] rounded-md" />
    </div>
  );
}

export type PropertyListingHeroProps = {
  title: string;
  description: string;
  mainImageUrl: string;
  startingPrice?: number;
  paymentPlan?: string;
  handoverDate?: string;
  subDescription?: string;
  pdfUrl?: string;
};

// Server Component
function PropertyListingHero(props: PropertyListingHeroProps) {
  const {
    title,
    description,
    mainImageUrl,
    startingPrice,
    paymentPlan,
    handoverDate,
    subDescription,
    pdfUrl,
  } = props;

  return (
    <section className="w-full 2xl:px-28 xxs:px-4 xxs:py-8 md:py-14 lg:py-20 md:px-4 lg:px-6 xl:px-16 flex flex-col justify-center items-center">
      {/* Parent Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full justify-items-center 2xl:justify-items-start items-center">
        {/* Left Side - Image */}
        <Suspense fallback={<PropertyHeroSkeleton />}>
          <div className="w-full md:w-full md:h-full xl:w-[632px] xl:h-[356px] 2xl:w-full 2xl:h-full">
            <Image
              alt={title}
              src={mainImageUrl}
              width={700}
              height={400}
              priority
              className="rounded-lg shadow-lg md:w-full lg:h-full xl:h-auto object-cover"
            />
          </div>
        </Suspense>

        {/* Right Side - Content */}
        <div className="flex flex-col justify-center items-start space-y-4">
          {/* Title */}
          <h1 className="xxs:text-lg md:text-3xl font-semibold text-gray-800">
            {title}
          </h1>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">{description}</p>

          {/* Booking Button */}
          <PrimaryButton
            text=" Book a Showing"
            classname="inline-flex justify-center items-center xxs:w-full  text-sm font-bold px-8 py-3 bg-[#1E3747]  text-white h-[48px] lg:w-[214px] hover:bg-[#2c526a] rounded-md"
          />
          {/* Details Section */}
          <div className="grid grid-cols-3 justify-between xxs:items-center xxs:w-full xl:w-fit justify-items-start md:items-start gap-4 pt-6">
            {/* Starting Price */}
            {startingPrice && (
              <DetailItem
                iconUrl="/assets/icons/price-icon.svg"
                label="Starting Price"
                value={`AED ${startingPrice}M`}
              />
            )}

            {/* Payment Plan */}
            {paymentPlan && (
              <DetailItem
                iconUrl="/assets/icons/payment-icon.svg"
                label="Payment Plan"
                value={paymentPlan}
              />
            )}

            {/* Handover Date */}
            {handoverDate && (
              <DetailItem
                iconUrl="/assets/icons/handover-icon.svg"
                label="Handover"
                value={handoverDate}
              />
            )}
          </div>
        </div>
      </div>

      {/* Sub Description */}
      {subDescription && (
        <section className="my-12 text-gray-600 w-full md:text-base xxs:text-sm text-left">
          {subDescription}
        </section>
      )}

      {/* PDF Download */}
      {pdfUrl && (
        <Button
          rel="noopener noreferrer"
          className="text-sm font-semibold px-8 py-3 bg-[#1E3747] text-white h-[48px] w-[214px] hover:bg-[#2c526a] rounded-md"
        >
          Download free PDF brochure
        </Button>
      )}
    </section>
  );
}

// Detail Item Component (Server-Compatible)
function DetailItem({
  iconUrl,
  label,
  value,
}: {
  iconUrl: string;
  label: string;
  value: string;
}) {
  return (
    <div className="flex xxs:gap-1 md:gap-3 w-full items-center justify-center text-center space-y-2">
      <Image
        className="xxs:w-6 xxs:h-6 md:w-10 md:h-10"
        width={40}
        height={40}
        src={iconUrl}
        alt={label}
      />
      <span className="flex flex-col items-start">
        <span className="xxs:text-sm md:text-lg font-medium text-gray-800">
          {value}
        </span>
        <span className="md:text-sm xxs:text-xxs uppercase text-gray-500">
          {label}
        </span>
      </span>
    </div>
  );
}
