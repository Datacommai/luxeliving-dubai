export async function mockFetchPropertyGalleryData(delay: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        imageUrls: [
          "/assets/featured-properties-temp/mock-image-gallery.svg",
          "/assets/featured-properties-temp/mock-image-gallery.svg",
          "/assets/featured-properties-temp/mock-image-gallery.svg",
        ],
      });
    }, delay);
  });
}
