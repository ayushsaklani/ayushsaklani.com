import React, { useState, useEffect } from 'react';

const RealTimeClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Set up an interval to update the time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // Formatting the time as HH:MM:SS
  const formattedTime = currentTime.toLocaleTimeString('en-US',{timeZone:'America/Los_Angeles'});
  const currTime = formattedTime.split(' ');

  return (
<div className='flex flex-row items-center'>
  <p className='w-[75px] text-center'>{currTime[0]}</p>
  <p className=''>{currTime[1]}</p> 
</div>

    );
};

export default RealTimeClock;
