"use client";

import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import { mockFetchPropertyAmenitiesData } from "@/lib/mock-server/mockFetchProperyAmenitiesData";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

export default function PropertyAmenitiesWithDelay() {
  const [data, setData] = useState<PropertyAmenitiesProps[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    mockFetchPropertyAmenitiesData(1000).then((res) => {
      setData(res as PropertyAmenitiesProps[]);
      setLoading(false);
    });
  }, []);

  if (!data && !loading) return null;

  return (
    <Suspense fallback={<PropertyAmenitiesSkeleton />}>
      {loading ? (
        <PropertyAmenitiesSkeleton />
      ) : (
        <PropertyAmenities amenities={data || []} />
      )}
    </Suspense>
  );
}

function PropertyAmenitiesSkeleton() {
  return (
    <div className="w-full py-10 px-4 flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 xxs:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="flex flex-col items-center space-y-4">
            <Skeleton className="h-16 w-16 rounded-full" />
            <Skeleton className="h-4 w-[60%] rounded-md" />
            <Skeleton className="h-3 w-[50%] rounded-md" />
          </div>
        ))}

        {/* Placeholder for second row (2 items on lg and above) */}
        {[...Array(2)].map((_, index) => (
          <div key={index} className="flex flex-col items-center space-y-4">
            <Skeleton className="h-16 w-16 rounded-full" />
            <Skeleton className="h-4 w-[60%] rounded-md" />
            <Skeleton className="h-3 w-[50%] rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
}

export type PropertyAmenitiesProps = {
  icon?: string;
  title?: string;
  description?: string;
};

// Server Component
function PropertyAmenities({
  amenities,
}: {
  amenities: PropertyAmenitiesProps[];
}) {
  if (!amenities || amenities.length === 0) return null;

  return (
    <section className="w-full xxs:p-10 lg:py-20 px-4 lg:px-18 xl:px-32 flex flex-col justify-center bg-[#EFEFEF] items-center">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-10 w-full">
        {/* Large screens (lg and above): First row renders 0-3, second row renders 3-5 */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-10 lg:w-full">
          {amenities.slice(0, 3).map((amenity, index) => (
            <div key={index}>
              <AmenityItem
                amenityIconUrl={amenity.icon}
                amenityTitle={amenity.title}
                amenityDescription={amenity.description}
              />
            </div>
          ))}
          <div className="lg:col-span-3 grid md:grid-cols-2 gap-10">
            {amenities.slice(3, 5).map((amenity, index) => (
              <div key={index}>
                <AmenityItem
                  amenityIconUrl={amenity.icon}
                  amenityTitle={amenity.title}
                  amenityDescription={amenity.description}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Extra small screens (xxs and below lg): Render all items 0-5 in a single column */}
        <div className="lg:hidden grid grid-cols-2 gap-10">
          {amenities.slice(0, 5).map((amenity, index) => (
            <div
              key={index}
              className={`
            ${index >= amenities.length - 1 ? "col-span-2" : ""}
          `}
            >
              <AmenityItem
                amenityIconUrl={amenity.icon}
                amenityTitle={amenity.title}
                amenityDescription={amenity.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AmenityItem({
  amenityIconUrl,
  amenityTitle,
  amenityDescription,
}: {
  amenityIconUrl?: string;
  amenityTitle?: string;
  amenityDescription?: string;
}) {
  // Ensure all fields are present; otherwise, do not render
  if (!amenityIconUrl || !amenityTitle || !amenityDescription) return null;

  return (
    <div className="flex flex-col items-center text-center space-y-2">
      <div className=" border-[1px] p-6 rounded-full  border-[#333333] border-solid">
        <Image
          className="xxs:w-6 xxs:h-6 lg:w-10 lg:h-10"
          width={40}
          height={40}
          src={amenityIconUrl}
          alt={amenityTitle || "Amenity"}
        />
      </div>
      <span className="xxs:text-base lg:text-2xl font-medium text-gray-800">
        {amenityTitle}
      </span>
      <span className="xxs:text-xs lg:text-lg text-gray-500">
        {amenityDescription}
      </span>
    </div>
  );
}
