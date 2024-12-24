export async function mockFetchPropertyContactData(delay: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        profileurl: "/assets/featured-properties-temp/contact-mock-photo.svg",
        fullname: "Benjamin Oakes",
        jobTitle: "Senior Sales Advisor",
        phone: "+97154335285652",
        address: `36-38 Floor, Al Salam Tecom Tower,
          Dubai, UAE`,
      });
    }, delay);
  });
}
