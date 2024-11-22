import { Separator } from "@/components/ui/separator";
import styles from "./featured.module.css";

export const FeaturedHeader = () => {
  return (
    <section
      className={`${styles} flex flex-col justify-center items-center xxs:gap-2 md:gap-4 xxs:px-4 py-8`}
    >
      <span
        className={`${styles} flex justify-center items-center xxs:gap-2 md:gap-6`}
      >
        <Separator
          className={`${styles.separator} xxs:h-0.5 md:h-1 rounded rotate-180 xxs:w-[40px] md:w-[100px]`}
        />
        <h2
          className={`${styles} uppercase xxs:text-xs sm:text-lg  md:text-xl lg:text-2xl text-[#D1AF49] tracking-widest`}
        >
          Latest Properties
        </h2>

        <Separator
          className={`${styles.separator} xxs:h-0.5 md:h-1 rounded  xxs:w-[40px] md:w-[100px]`}
        />
      </span>
      <span
        className={`${styles} flex flex-col justify-center items-center xxs:gap-4 md:gap-6`}
      >
        <h1
          className={`${styles} xxs:text-xl sm:text-3xl lg:text-5xl font-bold text-[#212121]`}
        >
          Our Featured Exclusives
        </h1>
        <p
          className={`${styles} xxs:text-xs sm:text-base lg:text-xl xxs:text-center text-[#434343]`}
        >
          Experience Luxury Living with Our Exclusive Property Selections.
          Discover Elegance, <br className={`${styles} xxs:hidden md:block`} />{" "}
          Sophisticated Design, and Unparalleled Amenities for the Discerning
          Buyer.
        </p>
      </span>
    </section>
  );
};
