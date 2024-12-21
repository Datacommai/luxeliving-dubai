export const mockFetchPropertyFloorplansData = (delay: number) => {
 return new Promise((resolve) => {
  setTimeout(() => {
   resolve({
    title: 'Floor Plans of Art Bay',
    descriptions:
     'Explore from a variety of living experiences that Dubai offers!',
    floorplans: [
     {
      imageURL: '/assets/featured-properties-temp/floorplan-test.svg',
      title: 'Studio',
      sqft: '430',
     },
     {
      imageURL: '/assets/featured-properties-temp/floorplan-test.svg',
      title: '1. Bedrooms',
      sqft: '700',
     },
     {
      imageURL: '/assets/featured-properties-temp/floorplan-test.svg',
      title: '2-Bedrooms',
      sqft: '750',
     },
     {
      imageURL: '/assets/featured-properties-temp/floorplan-test.svg',
      title: '3-Bedrooms',
      sqft: '1000',
     },
    ],
   });
  }, delay);
 });
};
