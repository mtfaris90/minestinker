import { useEffect, useState } from "react";

const Timer = ({ timerActive }) => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    let interval = null;
    if (timerActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerActive]);

  return (
    <div className="timer">
      Timer <br />
      {time}
    </div>
  );
};

export default Timer;
