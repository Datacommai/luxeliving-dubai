import { Separator } from '@/components/ui/separator';

export type SubHeaderProps = {
 title: string;
};

export const SubHeader = (props: SubHeaderProps) => {
 const { title } = props;

 return (
  <span className={`flex justify-center items-center xxs:gap-2 md:gap-6 `}>
   <Separator
    className={`xxs:h-0.5 md:h-1 rounded rotate-180 xxs:w-[40px] md:w-[100px] `}
    style={{
     background: `linear-gradient(90deg, #d1af49 0%, rgba(102, 102, 102, 0) 100%)`,
    }}
   />
   <h2 className="uppercase xxs:text-xs sm:text-lg md:text-xl lg:text-2xl text-[#D1AF49] tracking-widest">
    {title}
   </h2>
   <Separator
    className={`xxs:h-0.5 md:h-1 rounded xxs:w-[40px] md:w-[100px] `}
    style={{
     background: `linear-gradient(90deg, #d1af49 0%, rgba(102, 102, 102, 0) 100%)`,
    }}
   />
  </span>
 );
};
