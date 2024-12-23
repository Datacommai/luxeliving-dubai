export async function mockFetchPropertyAmenitiesData(delay: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          icon: "/assets/featured-properties-temp/dumbbell.svg",
          title: "Fitness Studio",
          description: "Aenean faucibus nibh and just the course of it",
        },
        {
          icon: "/assets/featured-properties-temp/barbecue.svg",
          title: "BBQ Area",
          description: "Aenean faucibus nibh and just the course of it",
        },
        {
          icon: "/assets/featured-properties-temp/deck-chair.svg",
          title: "Swimming Pool",
          description: "Aenean faucibus nibh and just the course of it",
        },
        {
          icon: "/assets/featured-properties-temp/club.svg",
          title: "Club Lounge",
          description: "Aenean faucibus nibh and just the course of it",
        },
        {
          icon: "/assets/featured-properties-temp/drive_eta.svg",
          title: "Parking Space",
          description: "Aenean faucibus nibh and just the course of it",
        },
      ]);
    }, delay);
  });
}
