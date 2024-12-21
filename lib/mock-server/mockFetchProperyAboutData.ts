export async function mockFetchPropertyAboutData(delay: number) {
  return new Promise<{
    title: string;
    description: string;
    imageUrls: string[];
  }>((resolve) => {
    setTimeout(() => {
      resolve({
        title: "Art Bay by Dutco Group and Ellington Properties",
        description: `
          Art Bay boasts close proximity to Al Khail Road, which is one of the main Dubai transportation arteries. 
          As a result, Dubai International Airport and Dubai Marina are accessible within a 15-minute driving range.

          Those who prefer public transport are welcome to use the Al Jadaf Metro Station a few steps away. 
          There are also many bus stops close by, including Al Jaddaf/Culture Village 1, Al Jaddaf/Culture Village 2, 
          Al Jaddaf/Palazzo 1, and Al Jaddaf/Palazzo 2, to name a few.

          Art Bay is surrounded by an array of essential facilities just a 10-20 minute walk away. 
          For instance, there is a W MART Supermarket, 24/7 Supermarket, LIFE Pharmacy Al Jaddaf, 
          Sheikha Athija Bint Saqer Al Nahyan Mosque, LIFE GP Clinic - Al Jaddaf, Zen Life Polyclinic, and the Liberty veterinary clinic Aljaddaf all nearby.

          In a 15-minute drive or less, you can reach the bilingual Swiss International Scientific School Dubai, 
          which is the emirate’s second academic institution by the leading international school organisation, Nord Anglia Education. 
          The Swiss International Scientific School Dubai is the largest Swiss School outside of Switzerland and it provides the IB programme to students aged 3 to 18.

          On top of that, the complex is adjacent to several popular leisure venues — Jameel Arts Center, D-Marine Jaddaf Waterfront Marina, 
          Jaddaf Waterfront Sculpture Park, and more.

          As of Q1 2024, the average gross ROI in 1-bedroom apartments in Al Jaddaf is 6.2%, with a starting rental price of 52K (USD 14K) per annum. 
          Such strong indicators demonstrate the ability to earn a steady passive income should you decide to rent your Art Bay property out.

          All Art Bay property owners have the opportunity to obtain a 2-year visa. 
          If the total investment is AED 2M (USD 545K) or more, you will become eligible for a 10-year Golden visa. 
          Both of these visas apply to your spouse and children, while the Golden visa additionally covers the sponsorship of domestic workers.
        `,
        imageUrls: [
          "/assets/featured-properties-temp/mock-property-listing.svg",
          "/assets/featured-properties-temp/mock-image-gallery.svg",
          "/assets/featured-properties-temp/mock-image-gallery.svg",
          "/assets/featured-properties-temp/mock-image-gallery.svg",
        ],
      });
    }, delay);
  });
}
