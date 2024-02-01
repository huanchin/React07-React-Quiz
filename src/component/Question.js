import { useQuize } from "../context/QuizContext";
import Options from "./Options";

function Question() {
  const { index, questions, dispatch, answer } = useQuize();
  const question = questions.at(index);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
