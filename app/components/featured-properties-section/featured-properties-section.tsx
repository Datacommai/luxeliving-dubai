'use client';
import { getProperties } from '@/lib/firebase/firebase';
import { FeaturedProperty } from '../featured-property/featured-property';
import { featuredPropertiesMockData } from '@/lib/mocks/featured-properties-mock-data';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
 FeaturedPropertiesSectionSkeleton,
 FilterType,
} from '../property-selection/property-selection';
import { PropertyType } from '@/types';

export const FeaturedPropertiesSection = ({
 filters,
}: {
 filters: Partial<FilterType>;
}) => {
 return (
  <section className="w-full h-auto m-5 flex justify-center items-center gap-2">
   <FeaturedPorpetiesSection filters={filters} />
  </section>
 );
};

function FeaturedPorpetiesSection({
 filters,
}: {
 filters: Partial<FilterType>;
}) {
 const [properties, setProperties] = useState<PropertyType[]>([]);
 const [loading, setLoading] = useState(true);
 const router = useRouter();

 const handlePropertyClick = (id: string) => {
  router.push('/properties/' + id);
 };

 useEffect(() => {
  getProperties().then((result) => {
   const properties = Object.values(
    result as unknown as PropertyType
   ) as PropertyType[];
   setProperties(properties);
   setLoading(false);
  });
 }, []);

 useEffect(() => {
  if (!filters) return;

  const mappedFilters = Object.entries(filters)
   .map(([, value]) => {
    if (value !== '') {
     return value;
    }
   })
   .filter((item) => item);

  if (mappedFilters.length === 0) return;

  getProperties().then((res) => {
   const properties = res as PropertyType[];
   const filteredProperties = properties.filter((prop) => {
    return Object.values(prop.filters).some((value) => {
     return mappedFilters.includes(value);
    });
   });
   setProperties(filteredProperties);
  });
 }, [filters]);

 return loading ? (
  <FeaturedPropertiesSectionSkeleton />
 ) : (
  <section className="w-full max-w-7xl grid xl:grid-cols-3 lg:grid-cols-2 gap-2 justify-items-center items-center">
   ;
   {properties.map((property, key) => (
    <FeaturedProperty
     key={key}
     title={property.name}
     description={property.projectGeneralFacts}
     price={Object.values(property?.propertyPrice)[0] as unknown as number}
     image={featuredPropertiesMockData[key].image}
     beds={Number(property.generalInfo.numberOfBedrooms[0] ?? 0)}
     baths={Number(property.generalInfo.numberOfBathrooms[0] ?? 0)}
     sqft={Object.values(property?.propertySqFt)[0] as unknown as number}
     onClick={handlePropertyClick}
    />
   ))}
  </section>
 );
}
