import { useState } from "react";
import "./index.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((item, i) => (
        <AccordingItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          num={i}
          title={item.title}
          key={item.title}
        >
          {item.text}
        </AccordingItem>
      ))}

      <AccordingItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        num={22}
        title="Test 1"
        key="Test 1"
      >
        <p>Allows React developers to:</p>
        <ul>
          <li>A</li>
          <li>B</li>
          <li>C</li>
        </ul>
      </AccordingItem>
    </div>
  );
}

function AccordingItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;
  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => onOpen(isOpen ? null : num)}
    >
      <p className="number">{num < 9 ? `0${num + 1} ` : num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
