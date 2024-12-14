import { FeaturedProperty } from '../featured-property/featured-property';
import { featuredPropertiesMockData } from '@/lib/mocks/featured-properties-mock-data';

export const FeaturedPropertiesSection = () => {
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
     />
    ))}
   </section>
  </section>
 );
};
