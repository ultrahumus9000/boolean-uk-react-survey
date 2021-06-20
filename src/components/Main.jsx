import { useState } from "react";

import AnswersList from "./AnswersList";
import Survey from "./form";

export default function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answerLists, setAnswerLists] = useState([]);

  function addNewAnswerList(newAnswer) {
    setAnswerLists([...answerLists, newAnswer]);
  }

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList
          answersList={answerLists}
          setAnswerLists={setAnswerLists}
        />
      </section>
      <section className="main__form">
        <Survey addNewAnswerList={addNewAnswerList} />
      </section>
    </main>
  );
}
