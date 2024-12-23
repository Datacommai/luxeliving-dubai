"use client";
import styles from "./property-listing-faq.module.css";
import { useEffect, useState } from "react";
import { mockFetchPropertyFaqData } from "@/lib/mock-server/mockFetchProperyFaqData";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { getRandomMockServerDelay } from "@/lib/utils";
import { PrimaryButton } from "../../buttons/primary-button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PropertyListingFaqWithDelay() {
  const [data, setData] = useState<PropertyListingFaqProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    mockFetchPropertyFaqData(getRandomMockServerDelay()).then((res) => {
      setData(res as PropertyListingFaqProps);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <PropertyFaqSkeleton count={6} />
  ) : (
    <PropertyListingFaq {...(data as PropertyListingFaqProps)} />
  );
}

function PropertyFaqSkeleton({ count }: { count: number }) {
  return (
    <section className="w-full 2xl:px-28 xxs:px-4 xxs:py-8 md:py-14 lg:py-20 md:px-10 lg:px-6 xl:px-16 flex flex-col justify-center items-center">
      {/* Skeleton for Header Section */}
      <section className="flex flex-col justify-center text-center xxs:gap-3 md:gap-6 w-full">
        <div className="flex justify-center items-center xxs:gap-2 md:gap-6">
          <Skeleton className="xxs:h-0.5 md:h-1 rounded xxs:w-[40px] md:w-[100px]" />
          <Skeleton className="xxs:h-4 sm:h-6 md:h-8 lg:h-10 xxs:w-[80px] sm:w-[120px] md:w-[160px]" />
          <Skeleton className="xxs:h-0.5 md:h-1 rounded xxs:w-[40px] md:w-[100px]" />
        </div>
        <span className="flex justify-center flex-col items-center gap-4">
          <Skeleton className="xxs:h-6 sm:h-10 lg:h-12 xxs:w-[200px] sm:w-[300px] lg:w-[500px]" />
          <Skeleton className="xxs:h-4 md:h-6 xxs:w-[160px] md:w-[240px]" />
        </span>
      </section>

      <div className="grid lg:grid-cols-3 xxs:grid-cols-1 sm:grid-cols-2 gap-4 mt-10 w-full px-4">
        {Array.from({ length: count }).map((_, index) => (
          <Skeleton
            key={index}
            className="w-full h-[200px] rounded-lg shadow-md"
          />
        ))}
      </div>
    </section>
  );
}

type FAQ = {
  question: string;
  answer: string;
};

type PropertyListingFaqProps = {
  contactEmail: string;
  faqs: FAQ[];
};

function PropertyListingFaq({ contactEmail, faqs }: PropertyListingFaqProps) {
  const handleContactEmail = () => {
    window.location.href = `mailto:${contactEmail}`;
  };

  return (
    <section className="w-full xxs:gap-8 md:gap-10 2xl:px-28 xxs:px-4 xxs:py-8 md:py-14 lg:py-20 md:px-10 lg:px-6 xl:px-10 flex flex-col justify-center items-center">
      {/* Header Section */}
      <section className="flex flex-col justify-center text-center xxs:gap-3 md:gap-6">
        <div
          className={`flex justify-center items-center xxs:gap-2 md:gap-6 ${styles.separatorContainer}`}
        >
          <Separator
            className={`xxs:h-0.5 md:h-1 rounded rotate-180 xxs:w-[40px] md:w-[100px] ${styles.separator}`}
          />
          <h2 className="uppercase xxs:text-xs sm:text-lg md:text-xl lg:text-2xl text-[#D1AF49] tracking-widest">
            FAQ
          </h2>
          <Separator
            className={`xxs:h-0.5 md:h-1 rounded xxs:w-[40px] md:w-[100px] ${styles.separator}`}
          />
        </div>
        <h1 className="xs:text-xl sm:text-3xl lg:text-5xl capitalize font-bold text-[#212121]">
          Frequently Asked Questions & Answers
        </h1>
        <p className="xxs:text-xs md:text-xl text-[#434343]">
          Explore from a variety of living experiences that Dubai offers!
        </p>
      </section>

      {/* FAQ Grid */}
      {/* FAQ Grid */}
      <div className="w-full">
        {/* Create rows of 2 FAQs */}
        {Array.from({ length: Math.ceil(faqs.length / 2) }).map(
          (_, rowIndex) => (
            <div
              key={rowIndex}
              className="grid lg:grid-cols-2 xxs:grid-cols-1 sm:grid-cols-2 xxs:gap-4 lg:gap-14 mb-4"
            >
              {faqs.slice(rowIndex * 2, rowIndex * 2 + 2).map((faq, index) => (
                <Accordion key={rowIndex * 2 + index} type="single" collapsible>
                  <AccordionItem
                    className="shadow-md bg-white rounded-[6px] p-6"
                    value="item-1"
                  >
                    <AccordionTrigger
                      className={`text-[#333333] xss:text-base md:text-lg lg:text-2xl font-medium ${styles.accordionTrigger}`}
                    >
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#858585] xss:text-xs md:text-base lg:text-xl">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          )
        )}
      </div>

      {/* Contact Section */}
      <section className="flex xxs:flex-col lg:flex-row justify-between items-center w-full mt-8 gap-6">
        <span className="flex flex-col gap-4">
          <h2 className="lg:text-5xl xxs:text-2xl font-bold text-[#1E3747]">
            Still have Questions?
          </h2>
          <p className="text-[#434343] md:text-xl">
            Can't find the answer you're looking for? Please chat to our
            friendly team.
          </p>
        </span>
        <PrimaryButton
          rightIcon="/assets/icons/right-arrow.svg"
          iconSize={8}
          width={260}
          height={52}
          text="Contact Us"
          onClick={handleContactEmail}
        />
      </section>
    </section>
  );
}
