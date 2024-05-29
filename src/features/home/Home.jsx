import { useEffect, useState } from "react";
import HomePizzaItem from "./HomePizzaItem";
import Section from "../../components/Section";

const homePizza = [
  {
    name: "Homemade Pepperoni Pizza",
    url: "./src/assets/home-img-1.png",
  },
  {
    name: "Mascarpone And Mushroom",
    url: "./src/assets/home-img-2.png",
  },
  {
    name: "Pizza With Mushrooms",
    url: "./src/assets/home-img-3.png",
  },
];

function Home() {
  const [curIndex, SetCurIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const countPizza = homePizza.length;

  const decCurIndex = () => {
    SetCurIndex((curIndex) => {
      setIsAnimating(true);
      if (curIndex == 0) return countPizza - 1;
      return curIndex - 1;
    });
  };
  const incCurIndex = () => {
    setIsAnimating(true);
    SetCurIndex((curIndex) => (curIndex + 1) % countPizza);
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
      <Section bg={false} id="home" bgImg="bg-header-img bg-cover bg-center bg-no-repeat " >
        <div >
          {homePizza.map((pizza, index) => (
            <HomePizzaItem
              pizza={pizza}
              isAnimating={isAnimating}
              key={pizza.url}
              index={index}
              curIndex={curIndex}
              decCurIndex={decCurIndex}
              incCurIndex={incCurIndex}
            />
          ))}
        </div>
      </Section>
  );
}

export default Home;
