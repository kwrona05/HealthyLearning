import { useState } from "react";
const MentalQuiz = () => {
  const [selectedAnswer, setSelectedAnswer] = useState([]);

  const handleChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  return (
    <div className="styles.quizContainer">
      <label className="styles.questionLabel">
        <p>I have a lot of stress</p>
        <input type="radio" name="stress">
          Yes
        </input>
        <input type="radio" name="stress">
          Maybe
        </input>
        <input type="radio" name="stress">
          No
        </input>
      </label>
      <label className="styles.questionLabel">
        <p>How much sleep do you have</p>
        <input type="radio" name="sleep">
          +8 hours
        </input>
        <input type="radio" name="stress">
          6-8 hours
        </input>
        <input type="radio" name="stress">
          less than 6 hours
        </input>
      </label>
      <label className="styles.questionLabel">
        <p>Have you got problems in school?</p>
        <input type="radio" name="school">
          Yes, I can't focus
        </input>
        <input type="radio" name="school">
          Yes, I have problem with science subjects
        </input>
        <input type="radio" name="school">
          Yes, I have problem with humanities subjects
        </input>
        <input type="radio" name="school">
          Yes, I have problems with my memory
        </input>
      </label>
    </div>
  );
};
export default MentalQuiz;
