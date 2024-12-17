export async function mockFetchPropertyHeroData(delay: number) {
 return new Promise((resolve) => {
  setTimeout(() => {
   resolve({
    title: '1-3BR Apartments & Studio in Al Jaddaf',
    description:
     'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    mainImageUrl: '/assets/featured-properties-temp/mock-property-listing.svg',
    startingPrice: 1.95,
    paymentPlan: 'Easy 70/30',
    handoverDate: 'Q3 2026',
    subDescription:
     'Combining creativity and architecture, Art Bay is the first project by the Dutco Ellington brand in Al Jaddaf. Two prestigious companies, Ellington Properties and Dutco Group, have created a collection of stunning waterfront studios and 1-3 bedroom apartments, which are the epitome of harmony and serenity.',
    pdfUrl: '/assets/brochure.pdf',
   });
  }, delay);
 });
}
