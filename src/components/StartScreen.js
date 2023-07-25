function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Start Screen!</h2>
      <h3>Questions to answer: {numQuestions}</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default StartScreen;
