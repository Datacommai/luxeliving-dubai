export const mockFetchPropertyListingPaymentData = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        title: "Explore Our Gallery of Exquisite Spaces",
        paymentPercentages: [
          {
            percantage: "20%",
            label: "On Booking",
          },
          {
            percantage: "50%",
            label: "On Construction",
          },
          {
            percantage: "30%",
            label: "On Handover",
          },
        ],
      });
    }, delay);
  });
};
