export async function mockFetchPropertyFaqData(delay: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        contactEmail: "example@gmail.com",
        faqs: [
          {
            question: " What is the location of Art Bay ?",
            answer:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s",
          },
          {
            question: " How much does a property in Art Bay cost??",
            answer:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s",
          },
          {
            question: " What are the property types offered in Art Bay?",
            answer:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s",
          },
          {
            question: " What schools are closest to Art Bay?",
            answer:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s",
          },
          {
            question: " is Art Bay a good investment?",
            answer:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s",
          },
          {
            question: "What are the available amenities in Art Bay??",
            answer:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s",
          },
        ],
      });
    }, delay);
  });
}
