import { useState } from "react";
import Section from "../../components/Section";
import CreateFaq from "./CreateFaq";

const faqData = [
  {
    id: 1,
    question: "how does it work?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quas. Quidem minima veniam accusantium maxime, doloremque iusto deleniti veritatis quos.",
  },
  {
    id: 2,
    question: "how long does it take for delivery?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quas. Quidem minima veniam accusantium maxime, doloremque iusto deleniti veritatis quos.",
  },
  {
    id: 3,
    question: "can I order for huge parties?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quas. Quidem minima veniam accusantium maxime, doloremque iusto deleniti veritatis quos.",
  },
  {
    id: 4,
    question: "how much protein it contains?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quas. Quidem minima veniam accusantium maxime, doloremque iusto deleniti veritatis quos.",
  },
  {
    id: 5,
    question: "is it cooked with oil?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quas. Quidem minima veniam accusantium maxime, doloremque iusto deleniti veritatis quos.",
  },
];

function Faq() {
  const [ActiveFaq, setActiveFaq] = useState(1);

  const handleClick = (id) => {
    setActiveFaq(id===ActiveFaq ? null : id);
  };

  return (
    <Section id="faq">
      <h3 className="mb-5 text-center text-4xl font-bold uppercase text-stone-800">
        Faq
      </h3>

      <div className="mx-auto max-w-3xl">
        {faqData.map((faq) => (
          <CreateFaq
            faq={faq}
            key={faq.id}
            ActiveFaq={ActiveFaq}
            onClick={handleClick}
          />
        ))}
      </div>
    </Section>
  );
}

export default Faq;
