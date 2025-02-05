import { useState } from "react";
const MentalQuiz = () => {
  const [selectedAnswer, setSelectedAnswer] = useState([]);

  const handleChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  return <div className="styles.quizContainer"></div>;
};
export default MentalQuiz;
