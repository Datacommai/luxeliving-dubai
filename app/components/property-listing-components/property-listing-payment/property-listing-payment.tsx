"use client";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import { mockFetchPropertyListingPaymentData } from "@/lib/mock-server/mockFetchProperyListingPaymentData";
import { Skeleton } from "@/components/ui/skeleton";

export default function PropertyListingPaymentWithDelay() {
  const [data, setData] = useState<PropertyListingPaymentProps>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    mockFetchPropertyListingPaymentData(1000).then((res) => {
      setData(res as PropertyListingPaymentProps);
      setLoading(false);
    });
  }, []);

  return (
    <Suspense fallback={<PropertyPaymentSkeleton />}>
      {loading ? (
        <PropertyPaymentSkeleton />
      ) : (
        <PropertyListingPayment {...(data as PropertyListingPaymentProps)} />
      )}
    </Suspense>
  );
}

function PropertyPaymentSkeleton() {
  return (
    <div className="w-full py-10 px-4 flex flex-col justify-center items-center">
      {/* Parent Grid */}
      <div className="grid grid-cols-1 w-full lg:grid-cols-2 gap-8 max-w-7xl items-center">
        {/* Left Side - Image Skeleton */}
        <div className="w-full lg:w-[472px] lg:h-[326px] xl:w-[632px] xl:h-[356px]">
          <Skeleton className="lg:h-[356px] xxs:h-[180px] md:h-[415px] w-full rounded-lg" />
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
          <Skeleton className="h-[48px] w-full lg:w-[214px] rounded-md" />

          {/* Details Grid Skeleton */}
          <div className="grid grid-cols-3 pt-6 md: justify-center xxs:justify-center lg:justify-items-start xxs:justify-items-center items-center">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="grid grid-cols-2 space-x-0 items-center w-fit gap-2 space-y-2"
              >
                <Skeleton className="h-10 w-10 rounded-full" />
                <span className="flex w-full flex-col gap-2">
                  <Skeleton className="h-4 w-10 rounded-md" />
                  <Skeleton className="h-3 rounded-md" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sub Description Skeleton */}
      <div className="my-12 w-full grid grid-cols-1 items-start gap-3">
        <Skeleton className="h-4 w-full rounded-md" />
        <Skeleton className="h-4 w-full rounded-md" />
        <Skeleton className="h-4 w-full rounded-md" />
      </div>

      {/* PDF Button Skeleton */}
      <Skeleton className="h-[48px] w-[214px] rounded-md" />
    </div>
  );
}

export type PropertyListingPaymentProps = {
  title: string;
  paymentPercentages: [
    {
      percantage: string;
      label: string;
    }
  ];
};

function PropertyListingPayment(props: PropertyListingPaymentProps) {
  const { title, paymentPercentages } = props;

  return (
    <section className="w-full flex flex-col justify-center items-center bg-[#EAC863] md:py-20 lg:px-32 xxs:py-5 md:gap-14 xxs:px-8 xxs:gap-4">
      <h1 className="font-bold xxs:text-sm md:text-5xl text-[#212121]">
        {title}
      </h1>
      <section className="flex w-full justify-between">
        {paymentPercentages.map((paymentPercentage, index) => (
          <div key={index}>
            <h2 className="lg:text-8xl md:text-6xl xxs:text-2xl font-bold text-[#1E3747]">
              {paymentPercentage.percantage}
            </h2>
            <p className="tex-[#333333] lg:text-3xl md:text-2xl xxs:text-xs">
              {paymentPercentage.label}
            </p>
          </div>
        ))}
      </section>
    </section>
  );
}
