import React, { ReactElement, useState, useEffect } from "react";

interface Props {}

export default function EmptyTimerContainer({}: Props): ReactElement {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const [timer, setTimer] = useState(new Date().toLocaleTimeString());

  const [finalTime, setFinalTime] = useState(new Date().getTime());

  // const [currentTime, setCurrentTIme] = useState(new Date().getTime());
  const [builtTime, setBuiltTime] = useState(new Date().getTime());
  const [countDownTimer, setCountDownTimer] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [countdownDate, setCountdownDate] = useState(new Date(0).getTime());
  const [isToggled, setIsToggled] = React.useState(false);

  useEffect(() => {
    setInterval(() => {
      tick();
    }, 1000);
    updateTime();
  });

  useEffect(() => {
    const timerInterval = setInterval(() => startTimer(), 1000);
  }, [countdownDate, finalTime]);

  const tick = () => {
    setTimer(new Date().toLocaleTimeString());
  };

  const updateTime = () => {
    setBuiltTime(
      new Date(
        new Date(hour * 3600000 + minute * 60000 + second * 1000).getTime() +
          new Date().getTime()
      ).getTime()
    );
  };

  const toggle = React.useCallback(
    () => setIsToggled(!isToggled),
    [isToggled, setIsToggled]
  );

  const startTimer = () => {
    let currentTime = new Date().getTime();
    if (countdownDate) {
      console.log("active");

      const distanceToDate = countdownDate - currentTime;

      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      setCountDownTimer({ hours: hours, minutes, seconds });
    }
  };

  // if (active) {
  //   setInterval(() => {
  //     startTimer();
  //   }, 1000);
  // }
  return (
    <div className="EmptyTimerContainer">
      <div className="timerContainer">
        <div className="timerButtonHolder">
          <button
            className="timerAdjust"
            onClick={() => {
              hour === 0 ? setHour(12) : setHour((hour) => hour - 1);
            }}
          >
            -
          </button>
          <button
            className="timerAdjust"
            onClick={() => {
              hour === 12 ? setHour(0) : setHour((hour) => hour + 1);
            }}
          >
            +
          </button>
        </div>
        <div className="timerButtonHolder">
          <button
            className="timerAdjust"
            onClick={() => {
              minute === 0
                ? setMinute((minute) => (minute = 59))
                : setMinute((minute) => minute - 1);
            }}
          >
            -
          </button>
          <button
            className="timerAdjust"
            onClick={() => {
              minute === 59 ? setMinute(0) : setMinute((minute) => minute + 1);
            }}
          >
            +
          </button>
        </div>
        <div className="timerButtonHolder">
          <button
            className="timerAdjust"
            onClick={() => {
              second === 0 ? setSecond(59) : setSecond((second) => second - 1);
            }}
          >
            -
          </button>
          <button
            className="timerAdjust"
            onClick={() => {
              second === 59
                ? setSecond((second) => (second = 0))
                : setSecond((second) => second + 1);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="compressedTimer">
        {hour} : {minute} : {second}
      </div>

      <button
        className="startTimer"
        onClick={() => {
          setFinalTime(new Date(builtTime).getTime());
          setCountdownDate(new Date(builtTime).getTime());
          // setCurrentTIme(new Date().getTime());
          // toggle();
        }}
      >
        Start
      </button>

      <div>{timer}</div>
      <div>{new Date(finalTime).toLocaleTimeString()}</div>
      <div>{new Date(builtTime).toLocaleTimeString()}</div>
      <div>
        {countDownTimer.hours} : {countDownTimer.minutes} :{" "}
        {countDownTimer.seconds}
      </div>
    </div>
  );
}
