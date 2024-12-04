import Image from 'next/image';

interface FeaturedDevelopmentTypes {
 title: string;
 image: string;
}

const featuredDevelopmentData: FeaturedDevelopmentTypes[] = [
 {
  title: 'Residential',
  image: '/assets/images/featured-residential.svg',
 },
 {
  title: 'Apartment',
  image: '/assets/images/featured-aparment.svg',
 },
 {
  title: 'Commercial',
  image: '/assets/images/featured-commercial.svg',
 },
];

export const AboutFeaturedDevelopmentSection = () => {
 return (
  <section className="w-full h-fit my-20">
   <Image
    src={'/assets/icons/about-projects-title-icon.svg'}
    alt="title icon"
    width={1000}
    height={1000}
    className="w-full lg:h-7 h-3 object-cover"
   />
   <h2 className="lg:text-4xl text-2xl font-medium text-center my-4">
    Featured Developments
   </h2>
   <p className="my-6 text-lg text-center font-normal text-[#434343]">
    Explore from a variety of living experiences that Dubai offers!
   </p>
   <section className="w-full my-14 flex lg:flex-row flex-col justify-center items-center gap-6">
    {featuredDevelopmentData.map((item, index) => (
     <figure className="lg:w-[376px] w-[328px] h-[500px]  relative" key={index}>
      <Image
       src={item.image}
       alt={item.title}
       width={1000}
       height={1000}
       className="w-full h-full object-cover"
       quality={100}
      />
      <div className="w-full h-24 absolute inset-x-0 bottom-0 bg-white/30 backdrop-blur-sm ">
       <p className="flex justify-center items-center h-full text-center text-white text-2xl font-semibold">
        {item.title}
       </p>
      </div>
     </figure>
    ))}
   </section>
  </section>
 );
};
