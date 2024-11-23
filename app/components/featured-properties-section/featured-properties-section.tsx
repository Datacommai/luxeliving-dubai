import { FeaturedProperty } from '../featured-property/featured-property';
import { featuredPropertiesMockData } from '@/lib/mocks/featured-properties-mock-data';

export const FeaturedPropertiesSection = () => {
 return (
  <section className="flex justify-center items-center w-full max-h-[1000px] m-5">
   <section className="w-[calc(100%-15%)] h-autogrid lg:gird-cols-3 lg:grid-rows-2 xs:grid-cols-1 xs:grid-rows-1 xxs:grid-cols-1 xxs:grid-rows-1">
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
     />
    ))}
   </section>
  </section>
 );
};
