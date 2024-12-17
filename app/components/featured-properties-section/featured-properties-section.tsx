'use client';
import { FeaturedProperty } from '../featured-property/featured-property';
import { featuredPropertiesMockData } from '@/lib/mocks/featured-properties-mock-data';
import { useRouter } from 'next/navigation';

export const FeaturedPropertiesSection = () => {
 const router = useRouter();
 const handlePropertyClick = (id: string) => {
  router.push(id);
 };

 return (
  <section className="w-full h-auto m-5 flex justify-center items-center gap-2">
   <section className="w-full max-w-7xl grid xl:grid-cols-3 lg:grid-cols-2 gap-2 justify-items-center items-center">
    {featuredPropertiesMockData.map((property, key) => (
     <FeaturedProperty
      key={key}
      title={property.title}
      description={property.description}
      price={property.price}
      image={property.image}
      beds={property.beds}
      baths={property.baths}
      sqft={property.sqft}
      onClick={handlePropertyClick}
     />
    ))}
   </section>
  </section>
 );
};
