import CreateAboutItem from "./CreateAboutItem";
import Section from "../../components/Section";

const aboutData = [
  {
    url: "./src/assets/about-1.svg",
    title: "made with love",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum quae amet beatae magni numquam facere sit. Tempora vel laboriosam repudiandae!",
  },
  {
    url: "./src/assets/about-2.svg",
    title: "30 minutes delivery",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum quae amet beatae magni numquam facere sit. Tempora vel laboriosam repudiandae!",
  },
  {
    url: "./src/assets/about-3.svg",
    title: "share with freinds",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum quae amet beatae magni numquam facere sit. Tempora vel laboriosam repudiandae!",
  },
];

function About() {
  return (
      <Section id="about">
        <h3 className="mb-5 text-center text-4xl font-bold text-stone-800">
          ABOUT US
        </h3>

        <div className="grid grid-cols-auto-fit-22rem sm:grid-cols-auto-fit-19rem xl:grid-cols-auto-fit-22rem justify-center gap-4">
          {aboutData.map((about) => (
            <CreateAboutItem about={about} key={about.url} />
          ))}
        </div>

      </Section>
  );
}

export default About;
