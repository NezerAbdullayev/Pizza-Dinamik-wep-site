import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

function HomePizzaItem({
  pizza: { name, url },
  index,
  curIndex,
  decCurIndex,
  incCurIndex,
  isAnimating,
}) {
  return (
    <div
      className={`grid h-auto grid-cols-1 items-center justify-center gap-5  md:grid-cols-2 ${index === curIndex ? "grid" : "hidden"}`}
    >
      <img
        src={url}
        alt="pizza.name"
        className={`${isAnimating ? "animate-pizza-animation-right" : ""}`}
      />

      <div className="flex flex-col items-center ">
        <h2
          className={`mb-7 justify-self-center text-center text-3xl font-semibold text-white sm:text-4xl md:text-5xl lg:text-7xl
        ${isAnimating ? "animate-pizza-animation-left" : ""}`}
        >
          {name}
        </h2>

        <div className="mt-2 flex gap-3 justify-self-center">
          <button
            className="group cursor-pointer rounded-xl bg-stone-100 p-4 transition-all duration-300 hover:bg-pizzaRed"
            onClick={decCurIndex}
          >
            <FaLongArrowAltLeft className="text-black transition-all duration-300 group-hover:text-white" />
          </button>

          <button
            className="group cursor-pointer rounded-xl bg-stone-100 p-4 transition-all duration-300 hover:bg-pizzaRed"
            onClick={incCurIndex}
          >
            <FaLongArrowAltRight className="text-black transition-all duration-300 group-hover:text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePizzaItem;
