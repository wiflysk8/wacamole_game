import { useEffect, useState } from "react";
import "./App.scss";
import Square from "./components/Square";

const squares = [0, 1, 2, 3, 4, 5, 6, 7, 8];

function App() {
  const [counter, setCounter] = useState(0);
  const [random, setRandom] = useState(0);
  const [timer, setTimer] = useState(30);
  const [startGame, setStartGame] = useState(false);
  const [highScore, setHighScore] = useState(0);

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
        console.log(random);
      }
    }, 350);
    return () => clearInterval(interval);
  });

  if (timer === 0) {
    if (counter > 0) {
      alert("Game Over, your score is: " + counter);
    }
    if (counter > highScore) {
      setHighScore(counter);
      alert("New High Score: " + counter);
    }
    setCounter(0);
    setTimer(30);
    setStartGame(false);
  }

  const handleClick = () => {
    setStartGame(true);
  };

  return (
    <div className="App">
      <p className="c-score">
        TIME: <span className={timer > 10 ? "c-green" : "c-red"}>{timer}</span>
      </p>
      <div className="table">
        {squares.map((index) => (
          <Square key={index} index={index} randomBox={random} counter={counter} setCounter={setCounter} timer={timer} />
        ))}
      </div>
      {startGame === false && (
        <button className="c-btn" onClick={handleClick}>
          START GAME
        </button>
      )}
      <p className="c-score">
        SCORE: <span className={counter >= 15 ? "c-green" : "c-red"}>{counter}</span>
      </p>
      <p>
        HIGH SCORE: <span className={highScore >= 15 ? "c-green" : "c-red"}>{highScore}</span>
      </p>
    </div>
  );
}

export default App;
