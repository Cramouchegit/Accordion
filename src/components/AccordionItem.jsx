import { useState } from "react";

export default function AccordionItem({ number, question, answer }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="item">
      <p className="number">{number}</p>
      <p className="title">{question}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{answer}</div>}
    </div>
  );
}
