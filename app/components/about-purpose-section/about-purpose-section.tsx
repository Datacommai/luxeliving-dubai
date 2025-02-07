import styles from './about-purpose-section.module.css';
import { Separator } from '@/components/ui/separator';
import {
 Card,
 CardContent,
 CardDescription,
 CardFooter,
 CardHeader,
 CardTitle,
} from '@/components/ui/card';

export const AboutPurposeSection = () => {
 return (
  <section className="xxs:text-center xxs:flex xxs:flex-col xxs:gap-6 md:gap-14 xxs:py-6 xxs:px-6 sm:px-10 sm:py-10 md:py-14 md:px-[50px]  xl:py-20 xl:px-[132px] w-full gap-14">
   <section className="flex flex-col justify-center text-center xxs:gap-3 md:gap-6">
    <span className="flex justify-center items-center xxs:gap-2 md:gap-6">
     <Separator
      className={`${styles.separator} xxs:h-0.5 md:h-1 rounded rotate-180 xxs:w-[40px] md:w-[100px]`}
     />
     <h2 className="uppercase xxs:text-xs sm:text-lg md:text-xl lg:text-2xl text-[#D1AF49] tracking-widest">
      Vision & Mission
     </h2>
     <Separator
      className={`${styles.separator} xxs:h-0.5 md:h-1 rounded xxs:w-[40px] md:w-[100px]`}
     />
    </span>

    <h1 className="xs:text-xl sm:text-3xl lg:text-5xl font-bold text-[#212121]">
     Our Purpose and Aspirations
    </h1>

    <p className="xxs:text-sm md:text-xl text-[#434343]">
     Explore from a variety of living experiences that Dubai offers!
    </p>
   </section>

   <section className="w-full h-fit flex justify-center items-center lg:flex-row xxs:flex-col xs:flex-col gap-10">
    <Card
     className={`${styles.card} rounded-[6px] lg:w-[300px] lg:h-[400px] w-[250px] h-[300px] flex flex-col justify-between border-none shadow-md`}>
     <div className="absolute flex justify-center items-center -left-[10px] top-1/4 z-20 lg:w-[46px] lg:h-[200px] xxs:w-[30px] xxs:h-[100px] bg-[#1E3747]">
      <p className="text-white transform -rotate-90 lg:text-2xl text-sm font-medium tracking-widest">
       Sightseeing
      </p>
     </div>
     <CardHeader className="lg:my-8">
      <CardTitle className="lg:text-4xl text-2xl font-normal">Vision</CardTitle>
     </CardHeader>
     <CardContent className="flex flex-col justify-center items-center lg:gap-4 gap-2 w-full h-fit">
      <CardDescription className="text-base text-[#616161] text-wrap text-clip">
       Our vision is to redefine real estate in Dubai by creating sustainable,
       innovative, and luxurious living spaces that reflect the city&apos;s
       dynamic growth and vibrant culture.
      </CardDescription>
      <CardFooter className="text-[#333333] text-balance tracking-widest text-center">
       {/* TODO: Add link */}
       {/* <Link className="flex items-center gap-2" href="/">
        Know more
       </Link> */}
      </CardFooter>
     </CardContent>
    </Card>

    <Card
     className={`${styles.card} rounded-[6px] lg:w-[300px] lg:h-[400px] w-[250px] h-[300px] flex flex-col justify-between border-none shadow-md`}>
     <div className="absolute flex justify-center items-center -left-[10px] top-1/4 z-20 lg:w-[46px] lg:h-[200px] xxs:w-[30px] xxs:h-[100px] bg-[#1E3747]">
      <p className="text-white transform -rotate-90 lg:text-2xl text-sm font-medium tracking-widest">
       Sightseeing
      </p>
     </div>
     <CardHeader className="lg:my-8">
      <CardTitle className="lg:text-4xl text-2xl font-normal">
       Mission
      </CardTitle>
     </CardHeader>
     <CardContent className="flex flex-col justify-center items-center lg:gap-4 gap-2 w-full h-fit">
      <CardDescription className="text-base text-[#616161] text-wrap text-clip">
       Our mission is to empower residents and investors with exceptional
       opportunities, fostering a seamless blend of luxury, innovation, and
       community living in Dubai&apos;s ever-evolving landscape.
      </CardDescription>
      <CardFooter className="text-[#333333] text-balance tracking-widest text-center">
       {/* TODO: Add link */}
       {/* <Link className="flex items-center gap-2" href="/">
        Know more
       </Link> */}
      </CardFooter>
     </CardContent>
    </Card>
   </section>
  </section>
 );
};
