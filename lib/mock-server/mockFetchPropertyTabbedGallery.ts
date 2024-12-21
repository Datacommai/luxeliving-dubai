export const mockFetchPropertyTabbedGalleryData = (delay: number) => {
 return new Promise((resolve) => {
  setTimeout(() => {
   resolve({
    title: 'Explore Our Gallery of Exquisite Spaces',
    description:
     ' Explore from a variety of living experiences that Dubai offers!',
    imageTabs: [
     {
      src: '/assets/featured-properties-temp/mock-image-gallery.svg',
      title: 'Art Bay',
      alt: 'Art Bay',
     },
     {
      src: '/assets/featured-properties-temp/mock-property-listing.svg',
      title: 'Art Bay',
      alt: 'Art Bay',
     },
     {
      src: '/assets/featured-properties-temp/prop-1.svg',
      title: 'Art Bay',
      alt: 'Art Bay',
     },
     {
      src: '/assets/featured-properties-temp/prop-2.svg',
      title: 'Art Bay',
      alt: 'Art Bay',
     },
     {
      src: '/assets/featured-properties-temp/prop-4.svg',
      title: 'Art Bay',
      alt: 'Art Bay',
     },
     {
      src: '/assets/featured-properties-temp/prop-5.svg',
      title: 'Art Bay',
      alt: 'Art Bay',
     },
     {
      src: '/assets/featured-properties-temp/prop-6.svg',
      title: 'Art Bay',
      alt: 'Art Bay',
     },
     {
      src: '/assets/featured-properties-temp/prop-3.svg',
      title: 'Art Bay',
      alt: 'Art Bay',
     },
    ],
   });
  }, delay);
 });
};
