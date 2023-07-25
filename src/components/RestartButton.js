function RestartButton({ dispatch }) {
  return (
    <button
      className="btn btn-restart"
      onClick={() => dispatch({ type: "restart" })}
    >
      Try again
    </button>
  );
}

export default RestartButton;
