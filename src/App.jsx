import { useEffect, useState } from "react";
import "./App.scss";
import Square from "./components/Square";

const squares = [0, 1, 2, 3, 4, 5, 6, 7, 8];

function App() {
  const [counter, setCounter] = useState(0);
  const [random, setRandom] = useState(0);
  const [timer, setTimer] = useState(60);
  const [startGame, setStartGame] = useState(false);

  useEffect(() => {
    if (startGame === true) {
      const inter = timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
      return () => clearInterval(inter);
    }
  }, [startGame, timer]);

  useEffect(() => {
    const interval = setInterval(() => {
      let newRandom = Math.floor(Math.random() * squares.length);
      if (newRandom !== random) {
        setRandom(newRandom);
      }
    }, 400);
    return () => clearInterval(interval);
  });
  console.log(random);

  if (timer === 0) {
    alert("Game Over, your score is: " + counter);
    window.location.reload();
  }

  const handleClick = () => {
    setStartGame(true);
  };

  return (
    <div className="App">
      <p className="c-score">
        TIME: <span className={timer > 20 ? "c-green" : "c-red"}>{timer}</span>
      </p>
      <div className="table">
        {squares.map((index) => (
          <Square key={index} index={index} randomBox={random} counter={counter} setCounter={setCounter} timer={timer} />
        ))}
      </div>

      <button onClick={handleClick}>START GAME</button>
      <p className="c-score">
        SCORE: <span className={counter > 20 ? "c-green" : "c-red"}>{counter}</span>
      </p>
    </div>
  );
}

export default App;
