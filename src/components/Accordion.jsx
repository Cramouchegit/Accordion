import AccordionItem from "./AccordionItem";

function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((faq, index) => (
        <AccordionItem
          number={index + 1}
          question={faq.question}
          answer={faq.answer}
          key={index}
        />
      ))}
    </div>
  );
}

export default Accordion;
