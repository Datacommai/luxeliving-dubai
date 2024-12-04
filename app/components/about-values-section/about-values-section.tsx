import styles from './about-values-section.module.css';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import {
 Card,
 CardDescription,
 CardHeader,
 CardTitle,
} from '@/components/ui/card';

export interface ValueCard {
 title: string;
 description: string;
 icon: string;
}

export const Cards: ValueCard[] = [
 {
  title: 'Excellence',
  description:
   'Driven by a commitment to exceptional quality, we strive for excellence in every project, ensuring unparalleled standards and lasting impact.',
  icon: 'badget-check-alt',
 },
 {
  title: 'Achievement',
  description:
   'Celebrating our journey of success, we take pride in our milestones and the continuous pursuit of excellence that defines our achievements.',
  icon: 'flag',
 },
 {
  title: 'Quality',
  description:
   'Dedicated to uncompromising quality, we ensure every detail meets the highest standards, delivering outstanding results in every project.',
  icon: 'features-alt',
 },
 {
  title: 'Innovation',
  description:
   'Driven by creativity and forward-thinking, we embrace innovation to redefine possibilities and deliver cutting-edge solutions.',
  icon: 'lightbulb-on',
 },
 {
  title: 'Teamwork',
  description:
   'United by a shared vision, our collaborative spirit empowers us to achieve greater results and create lasting success together.',
  icon: 'arrows-down-to-people',
 },
 {
  title: 'Transparency',
  description:
   'Built on trust and openness, we prioritize transparency in every interaction, ensuring clear communication and integrity at all stages.',
  icon: 'search',
 },
];

export const AboutValuesSection = () => {
 return (
  <section className="w-full grid grid-cols-1 md:gap-14 justify-center text-center  items-center xxs:py-8 xxs:px-4 xxs:gap-8 bg-white md:py-20 md:px-14 xl:px-32">
   <section className="flex flex-col xxs:gap-2 md:gap-6">
    <span className="flex justify-center md:justify-center items-center xxs:gap-2 md:gap-6">
     <Separator
      className={`xxs:h-0.5 md:h-1 rounded rotate-180 xxs:w-[40px] md:w-[100px] ${styles.separator}`}
     />
     <h2 className="uppercase xxs:text-xs sm:text-lg md:text-xl lg:text-2xl text-[#D1AF49] tracking-widest">
      Our Values
     </h2>
     <Separator
      className={`xxs:h-0.5 md:h-1 rounded xxs:w-[40px] md:w-[100px] ${styles.separator}`}
     />
    </span>

    <h1 className="xxs:text-xl sm:text-3xl lg:text-5xl font-bold text-[#212121]">
     What We Stand For
    </h1>

    <p className="xxs:text-sm md:text-lg text-[#434343]">
     Explore from a variety of living experiences that Dubai offers!
    </p>
   </section>

   <section className="grid lg:grid-cols-3 xxs:grid-cols-2 gap-6 w-full">
    {Cards.map((card, index) => (
     <Card
      key={index}
      className="xxs:gap-4 flex flex-col justify-between md:p-6 xxs:px-3 xxs:py-5 text-left xl:w-[376px] xl:h-[360px] rounded-[6px] shadow-md border-none">
      <Image
       className="md:w-20 md:h-20 xxs:w-8 xxs:h-8"
       width={80}
       height={80}
       src={`/assets/icons/${card.icon}.svg`}
       alt={`${card.title} icon`}
       blurDataURL="blur"
       quality={100}
      />
      <CardHeader className="p-0 items-start flex flex-col xxs:gap-2 md:gap-3">
       <CardTitle className="text-[#222222] font-bold md:text-2xl xxs:text-base">
        {card.title}
       </CardTitle>
       <CardDescription className="xxs:text-sm md:text-lg text-[#434343]">
        {card.description}
       </CardDescription>
      </CardHeader>
     </Card>
    ))}
   </section>
  </section>
 );
};
