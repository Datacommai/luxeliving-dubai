export const mockFetchDiscoverProperties = async (delay: number) => {
 return new Promise((resolve) => {
  setTimeout(() => {
   resolve({
    propertyListings: [
     {
      title: 'BERKSHIRE Park',
      image: '/assets/featured-properties-temp/discover-property-test.svg',
      location: 'MBR City',
      developer: 'Ellington Properties',
      handover: 'Q4 2027',
      price: 900400,
      onClick: undefined,
     },
     {
      title: 'SAMANA Barari Lagoons',
      image: '/assets/featured-properties-temp/discover-property-test.svg',
      location: 'MBR City',
      developer: 'Ellington Properties',
      handover: 'Q4 2027',
      price: 900400,
      onClick: undefined,
     },
     {
      title: 'BERKSHIRE Park',
      image: '/assets/featured-properties-temp/discover-property-test.svg',
      location: 'MBR City',
      developer: 'Ellington Properties',
      handover: 'Q4 2027',
      price: 900400,
     },
     {
      title: 'BERKSHIRE Park',
      image: '/assets/featured-properties-temp/discover-property-test.svg',
      location: 'MBR City',
      developer: 'Ellington Properties',
      handover: 'Q4 2027',
      price: 900400,
     },
     {
      title: 'BERKSHIRE Park',
      image: '/assets/featured-properties-temp/discover-property-test.svg',
      location: 'MBR City',
      developer: 'Ellington Properties',
      handover: 'Q4 2027',
      price: 900400,
     },
     {
      title: 'Binghatti Skyrise',
      image: '/assets/featured-properties-temp/discover-property-test.svg',
      location: 'MBR City',
      developer: 'Ellington Properties',
      handover: 'Q4 2027',
      price: 900400,
     },
    ],
   });
  }, delay);
 });
};
