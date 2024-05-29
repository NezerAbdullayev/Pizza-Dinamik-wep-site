import { IoIosArrowUp } from "react-icons/io";

function CreateFaq({ faq, ActiveFaq, onClick }) {
  const { id, question, answer } = faq;

  const CheckActive = ActiveFaq === id;

  return (


    <div className="my-4 shadow" onClick={() => onClick(id)}>

 
      <div
        className={`flex cursor-pointer items-center justify-between p-4 transition-all  duration-300 ${CheckActive ? "bg-pizzaRed" : "bg-pizzaBlack"} `}
      >
        <h4 className="text-xl text-stone-50 ">{question}</h4>
        <div className="flex justify-center items-center">
          <IoIosArrowUp color="white" fontSize={20} className={`transition-all duration-300 ${CheckActive ? "": "transform rotate-180" }`} />
        </div>
      </div>

      <div
        className={`transition-all duration-200  ${CheckActive ? "h-auto clip-path-custom-active " : "h-0 clip-path-custom-passiv"}`}
      >
        <p className={` bg-white p-5 leading-loose text-stone-500 `}>
          {answer}
        </p>
      </div>


    </div>
  );
}

export default CreateFaq;
