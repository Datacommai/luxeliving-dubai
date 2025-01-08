'use client';
import { getProperties } from '@/lib/firebase/firebase';
import { FeaturedProperty } from '../featured-property/featured-property';
import { featuredPropertiesMockData } from '@/lib/mocks/featured-properties-mock-data';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { PropertyType } from '@/types';
import { FeaturedPropertiesSectionSkeleton } from '../property-selection/property-selection';

export const FeaturedPropertiesSection = () => {
 return (
  <section className="w-full h-auto m-5 flex justify-center items-center gap-2">
   <FeaturedPorpetiesSection />
  </section>
 );
};

function FeaturedPorpetiesSection() {
 const [properties, setProperties] = useState<PropertyType[]>([]);
 const [loading, setLoading] = useState(true);
 const router = useRouter();

 const handlePropertyClick = (id: string) => {
  console.log(id);
  router.push('/properties/' + id);
 };

 useEffect(() => {
  getProperties().then((result) => {
   const properties = result as PropertyType[];
   setProperties(properties);
   setLoading(false);
  });
 }, []);

 return loading ? (
  <FeaturedPropertiesSectionSkeleton />
 ) : (
  <section className="w-full max-w-7xl grid xl:grid-cols-3 lg:grid-cols-2 gap-2 justify-items-center items-center">
   {properties.map((property, key) => (
    <FeaturedProperty
     key={key}
     title={property.name}
     description={property.projectGeneralFacts}
     price={Number(property.propertyPrice[0])}
     image={featuredPropertiesMockData[key].image}
     beds={Number(property.generalInfo.numberOfBedrooms[0] ?? 0)}
     baths={Number(property.generalInfo.numberOfBathrooms[0] ?? 0)}
     sqft={Number(property.propertySqFt[0])}
     onClick={handlePropertyClick}
    />
   ))}
  </section>
 );
}
