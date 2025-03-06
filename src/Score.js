import { useState } from "react";

const Score = () => {
  const [count, setCount] = useState(0);
  const [answer, setAnswer] = useState("Enter Your answer first");
  const [input, setInput] = useState("");
  const [num1, setNum1] = useState(Math.floor(Math.random() * 10) + 1);
  const [num2, setNum2] = useState(Math.floor(Math.random() * 10) + 1);
  const handleSubmit = () => {
    const requiredNum = num1 * num2;
    if (input.trim() === "") {
      alert("Enter Something!");
      return;
    }

    if (requiredNum === parseInt(input.trim())) {
      setAnswer("Your answer is correct");
      setCount(count + 1);
    } else {
      setAnswer("Your answer wrong !");
      setCount(count - 1);
    }
    setNum1(Math.floor(Math.random() * 10) + 1);
    setNum2(Math.floor(Math.random() * 10) + 1);
    setInput("");
  };

  return (
    <div className="Score-app">
      <h4>Score {count}</h4>
      <div className="inner">
        <h5>
          {num1} X {num2}
        </h5>
        <input
          type="text"
          placeholder="Enter your answer"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSubmit}>submit</button>
        <span>{answer}</span>
      </div>
    </div>
  );
};
export default Score;
