export const mockFetchPropertyListingPaymentData = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        title: "70/30 Payment Plan from Ellington Properties",
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
