import { useEffect, useState } from "react";

const App = () => {
  const [timer, setTimer] = useState(0);

  const [side, setSide] = useState(50);

  const [color, setColor] = useState("white");

  useEffect(() => {
    console.log("useEffect", side);
    if (side % 100 === 0) {
      setColor("red");
    } else {
      setColor("white");
    }
  }, [side]);

  const increaseTimer = () => {
    setTimer(timer + 1);
    setSide(side + 10);
  };
  const decreaseTimer = () => {
    setTimer(timer - 1);
    setSide(side - 10);
  };

  return (
    <div>
      <h1>Timer</h1>
      <p>{timer}</p>
      <div>
        <button onClick={increaseTimer}>Increase</button>
        <button onClick={decreaseTimer}>Decrease</button>
      </div>
      <div
        style={{
          border: "1px solid black",
          width: `${side}px`,
          height: `${side}px`,
          backgroundColor: color,
        }}
      ></div>
    </div>
  );
};

export default App;
