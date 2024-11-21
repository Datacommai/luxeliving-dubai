import Image from "next/image";

export const TrustedSection = () => {
  return (
    <section className="bg-[#CBCBCB] flex flex-col justify-center items-center gap-2 xxs:pt-5 xxs:pb-4 xxs:h-[122px] sm:h-auto  2xl:h-auto md:py-14">
      <h2 className="text-[#4F4F4F] xxs:text-sm md:text-lg lg:text-2xl">
        Trusted by top developers
      </h2>

      <div className="overflow-hidden xxs:h-[100px] sm:h-auto w-full">
        <Image
          className="xxs:w-full xxs:h-full xxs:object-cover md:w-full md:h-auto"
          width={1000}
          height={23}
          src="/assets/images/Trusted.svg"
          alt="trusted developers"
          blurDataURL="blur"
          quality={100}
        />
      </div>
    </section>
  );
};
