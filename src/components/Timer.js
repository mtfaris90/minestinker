import { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  useEffect(() => {
     let interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  }, []);

  return <div className="minesCounter">Timer <br/>{time}</div>;
};

export default Timer;
