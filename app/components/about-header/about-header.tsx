import styles from "./about-header.module.css";

export const AboutHeader = () => {
  return (
    <section
      id="about-us-header"
      className={`${styles.section} w-full xxs:min-h-[214px] md:min-h-[410px] text-center flex flex-col justify-center items-center`}
    >
      <h1
        className={`${styles} text-white xxs:text-3xl md:text-7xl font-bold text-center`}
      >
        About us
      </h1>
      <p className={`${styles} text-white xxs:text-sm md:text-xl`}>
        Connecting dreams to reality, we provide trusted{" "}
        <br className="xxs:block md:hidden" /> solutions for buying, selling,
        and <br className="md:block xxs:hidden" /> investing in properties{" "}
        <br className="xxs:block md:hidden" /> that truly feel like home
      </p>
    </section>
  );
};
