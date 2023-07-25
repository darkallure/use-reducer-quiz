import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(timer);
  }, [dispatch]);
  return (
    <div className="timer" style={{ width: "100%" }}>
      {mins < 10 ? "0" + mins : mins}:{secs < 10 ? "0" + secs : secs}
    </div>
  );
}

export default Timer;
//1  - create a difficulty level
//2 - make answers an array of objects so a user could go back in time and see what they answered
//3 - make a highscore page that is uploade to a server
