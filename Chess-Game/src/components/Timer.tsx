import React, { FC, useEffect, useRef, useState } from "react"
import { Colors } from "../models/Colors";
import { Player } from "../models/Player";

interface TimerProps {
  currentPlayer: Player | null;
  restart: () => void;
}

const Timer: FC<TimerProps> = ({currentPlayer, restart}) => {
  // можно сделать чтобы пользователь сам задавал время
  const [blackTime, setBlackTime] = useState(300);
  const [whiteTime, setWhiteTime] = useState(300);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null)

  useEffect(() => {
    startTimer()
  }, [currentPlayer]) // при изменении current player стартует таймер

  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current) // если что-то есть, то очищаем интервал для пользователя, который уже походил
    }
    const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer
    timer.current = setInterval(callback, 1000)
  }
  function decrementBlackTimer() {
    setBlackTime(prev => prev - 1)
  }
  function decrementWhiteTimer() {
    setWhiteTime(prev => prev - 1)
  }

  const handleRestart = () => {
    setWhiteTime(300)
    setBlackTime(300)
    restart()
  }

  return (
    <div>
      <div>
        <button onClick={handleRestart}>Restart game</button>
      </div>
      <h2>Black - {blackTime}</h2>
      <h2>White - {whiteTime}</h2>
    </div>
  )
};

export default Timer;
