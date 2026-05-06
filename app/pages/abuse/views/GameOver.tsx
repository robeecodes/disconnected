export const GameOver = ({ progress }: { progress: () => void }) => {
  return (
    <div>
      <h2>Game Over</h2>
      <button onClick={progress}>Continue</button>
    </div>
  );
};

export default GameOver;
