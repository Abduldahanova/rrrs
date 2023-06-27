import React, { useState, useEffect } from 'react';
import C from "./Clock.module.css"

const Clock = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId); 
    };
  }, []);


  const formatNumber = (number) => {
    return number < 10 ? `0${number}` : number;
  };

  const day = currentDate.getDate();
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const hours = formatNumber(currentDate.getHours());
  const minutes = formatNumber(currentDate.getMinutes());

  return (
    <div className={C.time}>
      {day} {month} {hours}:{minutes}
    </div>
  );
};

export default Clock;
