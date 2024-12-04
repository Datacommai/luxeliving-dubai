import styles from './about-us-section.module.css';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

export const AboutUsSection = () => {
 return (
  <section
   className={`${styles.container} xxs:text-center md:text-left md:grid md:grid-cols-2 xxs:flex xxs:flex-col xxs:gap-6 md:gap-14 xxs:py-6 xxs:px-6 sm:px-10 sm:py-10 md:py-14 md:px-[50px] xl:py-20 xl:px-[132px] w-full`}>
   <section className={`${styles} flex flex-col xxs:gap-3 md:gap-6`}>
    <span
     className={`${styles.header} flex justify-center md:justify-start items-center xxs:gap-2 md:gap-6`}>
     <Separator
      className={`${styles.separator} xxs:h-0.5 md:h-1 rounded xxs:block md:hidden rotate-180 xxs:w-[40px] md:w-[100px]`}
     />
     <h2
      className={`${styles.title} uppercase xxs:text-xs sm:text-lg md:text-xl lg:text-2xl text-[#D1AF49] tracking-widest`}>
      About Us
     </h2>
     <Separator
      className={`${styles.separator} xxs:h-0.5 md:h-1 rounded xxs:w-[40px] md:w-[100px]`}
     />
    </span>

    <h1
     className={`${styles.heading} xxs:text-xl sm:text-3xl lg:text-5xl font-bold text-[#212121]`}>
     Welcome to <br className={`${styles} md:block xxs:hidden`} /> Real State
     Dubai
    </h1>

    {/* This figure is now only visible on `xxs` screens */}
    <figure
     className={`${styles} w-full h-full rounded-[6px] xxs:block md:hidden`}>
     <Image
      className={`${styles} object-cover h-full w-full`}
      width={600}
      height={412}
      src="/assets/images/about-us-section-bg.svg"
      alt="about us image"
      blurDataURL="blur"
      quality={100}
     />
    </figure>

    <p
     className={`${styles.paragraph} xxs:text-xs sm:text-base lg:text-xl xxs:text-center md:text-left text-[#434343]`}>
     At Luxeliving Dubai, we’re dedicated to turning your real estate dreams
     into reality. Whether you’re buying your first home, selling a cherished
     property, or investing in your future, we’re here to guide you every step
     of the way. With a commitment to integrity, innovation, and personalized
     service, we help you navigate the market with confidence and ease. Trust us
     to deliver expert solutions and exceptional experiences tailored to your
     unique needs.
    </p>
   </section>

   {/* This section is now only visible on `md` screens and above */}
   <figure
    className={`${styles} w-full h-full relative xxs:hidden md:block overflow-hidden rounded-[6px]`}>
    <Image
     className={`${styles} object-cover md:h-full md:w-full 2xl:w-auto 2xl:h-auto`}
     width={600}
     height={412}
     src="/assets/images/about-us-section-bg.svg"
     alt="about us image"
     blurDataURL="blur"
     quality={100}
    />
   </figure>
  </section>
 );
};
