export async function mockFetchPropertyDetailsData(delay: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        header: "",
        title: "Art Bay by Dutco Group and Ellington Properties",
        descriptionTwo:
          "In terms of parking, studios and 1-2 bedroom apartments are provided with 1 spot, whilst 3-bedroom units come with 2 spots. Occupants of Art Bay will be treated to a myriad of world-class amenities which aim to ensure memorable recreational experiences. Among them are a retail area, a Dubai Culture Village promenade, a Hot Yoga Studio, a Youth Hub, The Theatre, a lobby library, a club lounge, a fitness studio, a pool deck and The Courtyard, not forgetting the wellness corners, leisure and lounge pool, cabanas, BBQ area and game corner.The focal point of Art Bay is the Art Club with a workshop corner and an arts & performances stage, which will help you explore your creative side and provide an endless amount of exciting events. Other pluses of the club include a rooftop bar, an outdoor lounge & viewing deck and sunken seating.",

        descriptionOne:
          "Art Bay is a premium 12-storey residential development by Dutco Group and Ellington Properties, nestled along the banks of Dubai Creek in Al Jaddaf. This is the first project by the Dutco Ellington brand in Al Jaddaf and the second in Dubai. Art Bay seamlessly combines creative mastery, wellness and culture, providing an unrivalled living environment.The complex consists of 2 towers: Art Bay East and Art Bay West. You have the opportunity to choose from a range of studios and 1-3 bedroom apartments with stunning views of Dubai Creek, Jameel Arts Center and Palazzo Versace. There are also full floors available.The property sizes range from 430 sq. ft to 2,459 sq. ft, including the balconies. All units, except for the studios, come with a laundry room and a powder room. Select residences have a storage room and/or a pantry room for your convenience. An exceptional perk of the 2-3 bedroom corner units is that they feature a ‘glass box’ or a glass encased nook that provides phenomenal panoramic views of the surroundings.",
        imgUrlOne: "/assets/featured-properties-temp/mock-property-listing.svg",
        imgUrlTwo: "/assets/featured-properties-temp/mock-property-listing.svg",
        requestPricing: "sadsadasdasd",
        bookShowingUrl: "/assets/brochure.pdf",
      });
    }, delay);
  });
}
