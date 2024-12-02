import { Separator } from "@/components/ui/separator";
import styles from "./about-experts-section.module.css";

export const AboutExpertsSection = () => {
  return (
    <section
      className={`w-full grid grid-cols-1  md:gap-14 justify-center text-center items-center xxs:py-8 xxs:px-4 xxs:gap-8 bg-[#EFEFEF] md:py-20 md:px-32 ${styles.section}`}
    >
      <section
        className={`flex flex-col xxs:gap-2 md:gap-6 ${styles.titleContainer}`}
      >
        <span
          className={`flex justify-center md:justify-center items-center xxs:gap-2 md:gap-6 ${styles.separatorContainer}`}
        >
          <Separator
            className={`xxs:h-0.5 md:h-1 rounded rotate-180 xxs:w-[40px] md:w-[100px] ${styles.separator}`}
          />
          <h2 className="uppercase xxs:text-xs sm:text-lg md:text-xl lg:text-2xl text-[#D1AF49] tracking-widest">
            Real Estate Experts
          </h2>
          <Separator
            className={`xxs:h-0.5 md:h-1 rounded xxs:w-[40px] md:w-[100px] ${styles.separator}`}
          />
        </span>

        <h1 className="xxs:text-xl sm:text-3xl lg:text-5xl font-bold text-[#212121]">
          We Believe In Quality
        </h1>
      </section>

      <section className="flex justify-between xxs:gap-6 md:gap-14">
        <span className="flex flex-col gap-1">
          <p className="text-[#2F5D74] font-bold xxs:text-4xl md:text-7xl">
            84
          </p>
          <p className="text-[#333333] xxs:text-xs md:text-3xl">Projects</p>
        </span>
        <span className="flex flex-col gap-1">
          <p className="text-[#2F5D74] font-bold xxs:text-4xl md:text-7xl">
            84
          </p>
          <p className="text-[#333333] xxs:text-xs md:text-3xl">Design</p>
        </span>
        <span className="flex flex-col gap-1">
          <p className="text-[#2F5D74] font-bold xxs:text-4xl md:text-7xl">
            50+
          </p>
          <p className="text-[#333333] xxs:text-xs md:text-3xl">Partners</p>
        </span>
        <span className="flex flex-col gap-1">
          <p className="text-[#2F5D74] font-bold xxs:text-4xl md:text-7xl">
            12 <span className="font-normal xxs:text-2xl md:text-6xl">yr</span>
          </p>
          <p className="text-[#333333] xxs:text-xs md:text-3xl">Experince</p>
        </span>
      </section>
    </section>
  );
};
