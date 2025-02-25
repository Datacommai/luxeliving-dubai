'use client';
import { Suspense, useEffect, useState } from 'react';
import { SubHeader } from '../../sub-header/sub-header';
import {
 DiscoverProperty,
 DiscoverPropertyProps,
} from '../../discover-property/discover-property';
import { mockFetchDiscoverProperties } from '@/lib/mock-server/mockFetchDiscoverProperties';
import { Skeleton } from '@/components/ui/skeleton';
import {
 createRouteId,
 formatPrice,
 getRandomMockServerDelay,
} from '@/lib/utils';
import { getProperties } from '@/lib/firebase/firebase';
import { PropertyType } from '@/types';
import { useRouter } from 'next/navigation';
import { PLACEHOLDER_IMAGE } from '@/lib/constants/contstants';

export const PropertyListingDiscoverPropertiesServerComponent = ({
 useMockData,
 queryId,
}: {
 useMockData: boolean;
 queryId: string;
}) => {
 const [data, setData] = useState<PropertyListingDiscoverPropertiesProps>();
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  if (useMockData) {
   mockFetchDiscoverProperties(getRandomMockServerDelay()).then((res) => {
    setData(res as PropertyListingDiscoverPropertiesProps);
    setLoading(false);
   });
  } else {
   getProperties()
    .then((res) => {
     const properties = res as PropertyType[];
     const listings: DiscoverPropertyProps[] = properties.map((listing) => {
      return {
       title: listing.name,
       image: !listing.media.propertyImages[0]
        ? PLACEHOLDER_IMAGE
        : listing.media.propertyImages[0] + '.jpg',
       location: listing.location,
       developer: listing.filters.developer,
       handover: listing.completionDate,
       price: Object.values(listing.propertyPrice)[0] as unknown as string,
      };
     });

     const filteredListings = listings.filter(
      (listing) => listing.title !== queryId
     );

     setData({
      propertyListings: filteredListings,
     });
    })
    .finally(() => {
     setLoading(false);
    });
  }
 }, [useMockData, queryId]);

 return (
  <Suspense fallback={<PropertyListingDiscoverPropertiesSkeleton />}>
   {loading ? (
    <PropertyListingDiscoverPropertiesSkeleton />
   ) : (
    <PropertyListingDiscoverProperties
     {...(data as PropertyListingDiscoverPropertiesProps)}
    />
   )}
  </Suspense>
 );
};

export type PropertyListingDiscoverPropertiesProps = {
 propertyListings: DiscoverPropertyProps[];
};

function PropertyListingDiscoverPropertiesSkeleton() {
 const propertyListingslength: number = 6;
 return (
  <section className="w-full h-fit my-[120px] flex flex-col justify-center items-center">
   <section>
    <div className="my-4 h-10 w-48 bg-gray-200 rounded-lg">
     <Skeleton className="h-full w-full" />
    </div>
    <div className="my-4 h-16 w-full max-w-lg bg-gray-200 rounded-lg">
     <Skeleton className="h-full w-full" />
    </div>
    <div className="my-6 h-8 w-full max-w-md bg-gray-200 rounded-lg">
     <Skeleton className="h-full w-full" />
    </div>
   </section>

   <section className="w-full max-w-7xl grid xl:grid-cols-3 lg:grid-cols-2 gap-10 justify-items-center items-center">
    {Array(propertyListingslength)
     .fill(null)
     .map((_, index) => (
      <div
       key={index}
       className="w-full max-w-sm h-64 flex flex-col justify-between p-4 bg-gray-200 rounded-lg">
       <Skeleton className="h-32 w-full rounded-md" />
       <div className="mt-4 space-y-2">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-1/4" />
       </div>
      </div>
     ))}
   </section>
  </section>
 );
}

function PropertyListingDiscoverProperties(
 props: PropertyListingDiscoverPropertiesProps
) {
 const { propertyListings } = props;
 const router = useRouter();

 const handleClick = (id: string) => {
  router.push(`/properties/${createRouteId(id)}`);
 };

 return (
  <section className="w-full h-fit my-[120px] flex flex-col justify-center items-center">
   <section>
    <SubHeader title="properties" />
    <h2 className="my-4 text-lg lg:text-5xl font-bold text-[#212121] text-center">
     New Off-Plan Properties
    </h2>
    <p className="my-6 lg:text-2xl text-base font-normal text-center text-[#434343]">
     Explore from a variety of living experiences that Dubai offers!
    </p>
   </section>

   <section className="w-full max-w-7xl grid xl:grid-cols-3 lg:grid-cols-2 gap-10 justify-items-center items-center">
    {propertyListings.map((property, key) => (
     <DiscoverProperty
      key={key}
      title={property.title}
      price={formatPrice(property.price)}
      image={property.image}
      location={property.location}
      developer={property.developer}
      handover={property.handover}
      onClick={handleClick}
     />
    ))}
   </section>
  </section>
 );
}
