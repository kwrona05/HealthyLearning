import { useState } from "react";
const MentalQuiz = () => {
  const [answers, setAnswers] = useState({
    stress: "",
    sleep: "",
  });

  const [recomendations, setRecomendations] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let result = "";

    if (answers.stress === "often") {
      result +=
        "You have a lot of stress. You should try for example breathing methods.";
    }

    if (answers.sleep === "less than 6 hours") {
      result += "That's not a lot... You should change your week.";
    }
  };
};
export default MentalQuiz;
