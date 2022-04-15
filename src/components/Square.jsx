/* eslint-disable react-hooks/exhaustive-deps */
import "./Square.scss";
import defaultImg from "../assets/default1.png";
import wacamoleImg from "../assets/react.png";
import { useEffect, useState } from "react";

const Square = ({ index, randomBox, counter, setCounter, timer }) => {
  const [mole, setMole] = useState(defaultImg);
  const [clicked, setClicked] = useState(false);

  const updateScore = () => {
    if (index === randomBox && clicked === false && timer > 0) {
      setCounter(counter + 1);
      setClicked(true);
      setTimeout(() => {
        setClicked(false);
      }, 400);
    }
  };

  useEffect(() => {
    if (index === randomBox && timer < 60) {
      setMole(wacamoleImg);
    } else {
      setMole(defaultImg);
    }
  }, [randomBox]);

  return (
    <div>
      <img onClick={updateScore} className="c-square" src={mole} alt="mole" />
    </div>
  );
};

export default Square;
