import React, { useState, useEffect } from 'react';

const Clock = ({timezone}) => {
  const timezoneOffsetInSeconds = timezone; // смещение целевого часового пояса в секундах (+5 часов)
  const timezoneOffsetInMilliseconds = timezoneOffsetInSeconds * 1000;

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const localTime = now.getTime();
      // смещение для текущего часового пояса от UTC в миллисекундах
      const localOffsetInMilliseconds = now.getTimezoneOffset() * 60 * 1000;
      // расчет времени в целевом часовом поясе
      const adjustedTime = new Date(localTime + localOffsetInMilliseconds + timezoneOffsetInMilliseconds);
      setCurrentTime(adjustedTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timezoneOffsetInMilliseconds]);

  const formatTime = (time) => {
    return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      day: 'numeric',
      month: 'short',
      year: '2-digit',
    });
  };

  return (
    <div className="Clock Color-White">
      {formatTime(currentTime)} - {formatDate(currentTime)}
    </div>
  );
};

export default Clock;
