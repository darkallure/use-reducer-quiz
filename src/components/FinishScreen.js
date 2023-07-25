import RestartButton from "./RestartButton";
function FinishScreen({ points, maxPoints, highscore, dispatch }) {
  const percentage = Math.round((points / maxPoints) * 100);
  let emoji;
  if (percentage > 80) emoji = "😀";
  if (percentage < 50) emoji = "😟";
  if (percentage < 20) emoji = "👎";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        <strong>You scored {points} points!</strong> out of {maxPoints} points [
        {percentage}%]
      </p>
      <p className="highscore">{highscore}</p>
      <RestartButton dispatch={dispatch} />
    </>
  );
}

export default FinishScreen;
