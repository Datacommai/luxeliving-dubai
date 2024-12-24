export async function mockFetchPropertyNearbyDestinationsData(delay: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        keyBenefits: [
          "Instant Time Estimates",
          "Stay on Schedule",
          "Explore with Confidence",
        ],
        locations: [
          {
            type: "DOWN_TOWN",
            title: "to Downtown Dubai",
            duration: "12 minutes",
          },
          {
            type: "MARINA",
            title: "to Dubai Marina",
            duration: "24 minutes",
          },
          {
            type: "AIRPORT",
            title: "to DXB Airport",
            duration: "8 minutes",
          },
          {
            type: "AIRPORT",
            title: "to DWC Airport",
            duration: "40 minutes",
          },
        ],
      });
    }, delay);
  });
}
