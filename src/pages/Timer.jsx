import React, { useEffect, useState } from 'react';
import moment from 'moment';
import useDebounce from '../hooks/useDebounce';

const Timer = () => {
  const targetDate = moment(new Date("2024-10-12")).unix();
  const [time, setTime] = useState(targetDate - moment().unix());
  const debouncedTime = useDebounce(time, 1000); // Debounce with 1-second delay

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(targetDate - moment().unix());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div>
      Timer till DASHAIN {moment.unix(debouncedTime).format("dddd, MMMM Do YYYY, h:mm:ss a")}
    </div>
  );
};

export default Timer;
