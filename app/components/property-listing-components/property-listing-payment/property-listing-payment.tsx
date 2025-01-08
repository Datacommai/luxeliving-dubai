"use client";
import { Suspense, useEffect, useState } from "react";
import { mockFetchPropertyListingPaymentData } from "@/lib/mock-server/mockFetchProperyListingPaymentData";
import { Skeleton } from "@/components/ui/skeleton";

export default function PropertyListingPaymentServerComponent({
  useMockData,
}: {
  useMockData: boolean;
}) {
  const [data, setData] = useState<PropertyListingPaymentProps>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (useMockData) {
      mockFetchPropertyListingPaymentData(1000).then((res) => {
        setData(res as PropertyListingPaymentProps);
        setLoading(false);
      });
    }
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
    <div className="w-full py-10 px-4 flex flex-col gap-4 justify-center items-center">
      {/* Title Skeleton */}
      <Skeleton className="h-8 w-[50%] lg:w-[60%] rounded-md mb-6" />

      {/* Payment Percentages Skeleton */}
      <div className="flex w-full justify-between lg:px-32 md:px-16 xxs:px-4">
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="flex flex-col items-center md:gap-2 xxs:gap-1 w-[30%]"
          >
            <Skeleton className="lg:h-16 lg:w-28 md:h-10 md:w-20 xxs:h-4 xxs:w-14 rounded-md mt-2" />
            <Skeleton className="lg:h-4 lg:w-16 md:h-3 md:w-12 xxs:h-2 xxs:w-10 rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
}

export type PropertyListingPaymentProps = {
  title: string;
  paymentPercentages: {
    percantage: string;
    label: string;
  }[];
};

function PropertyListingPayment(props: PropertyListingPaymentProps) {
  const { title, paymentPercentages } = props;

  return (
    <section className="w-full flex flex-col justify-center items-center bg-[#EAC863] md:py-20 lg:px-32 xxs:py-5 md:gap-14 xxs:px-8 xxs:gap-4">
      <h1 className="font-bold xxs:text-sm md:text-5xl text-[#212121] mb-6">
        {title}
      </h1>
      <section className="flex w-full justify-between">
        {paymentPercentages.map((paymentPercentage, index) => (
          <div
            key={index}
            className="grid items-center md:gap-2 xl:gap-3 xxs:gap-1"
          >
            <h2 className="lg:text-8xl md:text-6xl xxs:text-2xl font-bold text-[#1E3747]">
              {paymentPercentage.percantage}
            </h2>
            <p className="text-[#333333] lg:text-[28px] md:text-2xl xxs:text-xs">
              {paymentPercentage.label}
            </p>
          </div>
        ))}
      </section>
    </section>
  );
}
