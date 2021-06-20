import AnswersItem from "./AnswersItem";

export default function AnswersList({ answersList, setAnswerLists }) {
  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem
          answerItem={answerItem}
          key={i}
          answersList={answersList}
          setAnswerLists={setAnswerLists}
        />
      ))}
    </ul>
  );
}
